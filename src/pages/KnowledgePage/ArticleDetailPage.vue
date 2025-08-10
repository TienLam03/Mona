<template>
  <div id="pxl-content-area" class="w-full lg:w-9/12  py-[100px] mx-auto flex flex-row">
    <main id="pxl-content-main" class="flex-1 px-[15px]">
      <!-- Loading State -->
      <div v-if="loading" class="flex items-center justify-center py-20">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2AD2C1]"></div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="py-20 text-center text-red-500">
        <div class="mb-4 text-lg">
          <i class="block mb-4 text-4xl icofont icofont-warning"></i>
          Có lỗi xảy ra: {{ error }}
        </div>
        <button
          @click="fetchCurrentPost"
          class="bg-gradient-to-r from-[#24B7D3] to-[#30EFAD] text-white px-6 py-2 rounded-full hover:from-[#30EFAD] hover:to-[#24B7D3] transition-all"
        >
          Thử lại
        </button>
      </div>

      <!-- Article Content -->
      <article v-else-if="post && currentPost">
        <!-- Title -->
        <h1 class="text-4xl md:text-5xl font-bold text-[#1D2864] mb-6 leading-tight">
          {{ post.title || currentPost?.title || currentPost?.name || '(Không có tiêu đề)' }}
        </h1>
        
        <!-- Top Section: Tags, Meta -->
        <div>
          <div class="flex flex-col gap-2 mb-4 md:flex-row md:items-center">
            <div class="flex flex-wrap gap-2 mb-2 md:mb-0">
              <a
                v-for="cat in (post.categories || [])"
                :key="cat.slug"
                href="#"
                class="px-4 py-1 text-xs font-semibold text-blue-500 transition bg-blue-100 rounded-full hover:bg-gradient-to-r hover:from-cyan-400 hover:to-green-300"
              >
                {{ cat.name }}
              </a>
              <span v-if="!post.categories || post.categories.length === 0" class="px-4 py-1 text-xs font-semibold text-gray-500 bg-gray-100 rounded-full">
                Không phân loại
              </span>
            </div>
            <ul class="flex flex-wrap items-center text-base font-semibold text-gray-600 gap-x-6">
              <li class="flex items-center gap-1">
                <i class="text-base fa fa-user-alt"></i>
                <a v-if="(post.author && post.author !== 'Không rõ') || (currentPost?.author && currentPost.author !== 'Không rõ')" :href="post.authorLink" class="hover:text-cyan-500">{{ post.author || currentPost?.author }}</a>
                <span v-else class="text-gray-500">Không rõ tác giả</span>
              </li>
              <li class="flex items-center gap-1">
                <i class="text-base fa fa-calendar-alt"></i>
                <span v-if="post.date || currentPost?.created_at || currentPost?.createdAt">{{ post.date || (currentPost?.created_at ? new Date(currentPost.created_at).toLocaleDateString('vi-VN') : (currentPost?.createdAt ? new Date(currentPost.createdAt).toLocaleDateString('vi-VN') : '')) }}</span>
                <span v-else class="text-gray-500">Không có ngày</span>
              </li>
              <li class="flex items-center gap-1">
                <i class="text-base fa fa-folder"></i>
                <template v-if="post.categories && post.categories.length > 0">
                  <a 
                    v-for="(cat, idx) in post.categories" 
                    :key="cat.slug"
                    href="#" 
                    class="hover:text-cyan-500"
                  >
                    {{ cat.name }}
                  </a>
                  <span v-if="post.categories.length > 1">,</span>
                </template>
                <span v-else class="text-gray-500">Không phân loại</span>
              </li>
              <li class="flex items-center gap-1">
                <a href="#" class="flex items-center hover:text-cyan-500">
                  <i class="fa fa-comment"></i>
                  <span>{{ post.commentsCount || currentPost?.commentsCount || 0 }} Comments</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="relative overflow-hidden rounded-[25px] mb-8">
            <div class="relative w-full aspect-[885/593] overflow-hidden rounded-[25px] bg-gray-100">
              <img
                width="885"
                height="593"
                :src="post.image || currentPost?.image || '/vatchat.png'"
                :alt="post.title || currentPost?.title || 'Post image'"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-100 scale-[1.01]"
                @error="handleImageError"
              />
            </div>
          </div>

          <!-- Content -->
          <div class="space-y-6">
            <!-- Full Content from API -->
            <div v-if="currentPost && currentPost.content" class="prose prose-lg max-w-none">
              <div class="text-lg leading-relaxed text-gray-700 whitespace-pre-wrap">
                {{ currentPost.content }}
              </div>
            </div>
            
            <!-- Excerpt as fallback -->
            <div v-else-if="(post.excerpt && post.excerpt !== 'Không có nội dung') || (currentPost?.content && currentPost.content !== 'Không có nội dung')" class="text-lg leading-relaxed text-gray-700">
              {{ post.excerpt || currentPost?.content }}
            </div>
            
            <!-- No content message -->
            <div v-else class="text-gray-500 italic">
              <p>Không có nội dung cho bài viết này.</p>
            </div>
            
            <!-- Demo gallery row -->
            <div class="flex flex-col gap-4 mb-8 md:flex-row">
              <div class="md:w-1/3">
                <img src="https://ytetot.monamedia.net/wp-content/uploads/2023/08/image-single2.jpg" alt="" class="rounded-2xl" />
              </div>
              <div class="md:w-1/3">
                <img src="https://ytetot.monamedia.net/wp-content/uploads/2023/08/image-single3.jpg" alt="" class="rounded-2xl" />
              </div>
              <div class="md:w-1/3">
                <img src="https://ytetot.monamedia.net/wp-content/uploads/2023/08/image-single4.jpg" alt="" class="rounded-2xl" />
              </div>
            </div>
            <!-- List -->
            <ul class="mb-6 space-y-2">
              <li class="flex items-center text-lg font-semibold text-gray-800">
                <i class="mr-3 fa fa-check-circle text-cyan-500"></i>
                Sed ut perspiciatis unde omnis iste natus error sit volupeaque ipsa quae ab illo inventore
              </li>
              <li class="flex items-center text-lg font-semibold text-gray-800">
                <i class="mr-3 fa fa-check-circle text-cyan-500"></i>
                Eam soluta dicunt cu. Est ad oporteat appellantur, per dic ta pertinax cueaque ipsa quae ab illo
              </li>
              <li class="flex items-center text-lg font-semibold text-gray-800">
                <i class="mr-3 fa fa-check-circle text-cyan-500"></i>
                Cu movet debitis cum. Vix paulo evertquasi arch itecto beatae vitae dictaitur conceptam
              </li>
            </ul>
            <!-- Callout Section -->
            <section
              class="relative px-6 py-12 mb-8 overflow-hidden bg-center bg-cover rounded-2xl"
              style="background-image: url('https://ytetot.monamedia.net/wp-content/uploads/2023/08/bg.jpg');"
            >
              <div
                class="absolute inset-0 opacity-100"
                style="background-image: url('https://ytetot.monamedia.net/wp-content/uploads/2023/08/coats-2.png'); background-repeat:no-repeat; background-position:bottom right;">
              </div>
              <div class="relative z-10 max-w-2xl">
                <h3 class="mb-3 text-2xl font-bold text-blue-900 md:text-3xl">
                  Dedicated Professionals &amp; Doctors Recommend Us
                </h3>
                <p class="mb-4 text-lg">
                  Dedicated professionals committed to providing you with accurate and reliable diagnostic services. Get patholab services today from the best lab experts &amp; make a visit to our laboratory.
                </p>
                <div class="flex flex-wrap gap-3">
                  <a
                    href="https://ytetot.monamedia.net/contact/"
                    class="px-8 py-3 font-bold text-white transition rounded-full shadow bg-gradient-to-r from-cyan-400 to-green-300 hover:from-cyan-500 hover:to-green-400"
                  >
                    Get Patholab Services
                  </a>
                  <a
                    href="https://ytetot.monamedia.net/contact/"
                    class="px-8 py-3 font-bold text-gray-900 transition bg-white border-2 rounded-full border-cyan-400 hover:bg-gray-100"
                  >
                    Book A Home Visit
                  </a>
                </div>
              </div>
            </section>
            <!-- Video Section -->
            <div class="relative mb-8 overflow-hidden rounded-2xl">
              <img
                src="https://ytetot.monamedia.net/wp-content/uploads/2023/08/blog-bg-video.jpg"
                alt=""
                class="w-full h-auto"
              />
              <a
                href="https://www.youtube.com/watch?v=FNTxRR1eGlY"
                class="absolute inset-0 flex items-center justify-center"
                target="_blank"
                rel="noopener"
              >
                <div class="flex items-center justify-center w-24 h-24 rounded-full shadow-lg bg-cyan-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="43" height="44" viewBox="0 0 43 44" fill="none">
                    <path
                      d="M15.7837 5.77874C13.0677 4.13014 9.65572 6.1632 9.65572 9.42964V34.7876C9.65572 38.0525 13.0677 40.0855 15.7837 38.4385L37.5487 25.2282C39.847 23.8333 39.847 20.3839 37.5487 18.989L15.7837 5.77874Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
        <!-- Footer: Social -->
        <div class="flex flex-col items-center gap-3 px-6 pt-5 pb-2 bg-white border-t md:flex-row md:justify-end">
          <div class="flex items-center gap-3">
            <label class="text-lg font-semibold text-blue-900">Share:</label>
            <a
              :href="`http://www.facebook.com/sharer/sharer.php?u=${currentUrl}`"
              title="Facebook"
              target="_blank"
              class="flex items-center justify-center w-8 h-8 text-white transition bg-blue-700 rounded-full hover:shadow-lg"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
            <a
              :href="`https://twitter.com/intent/tweet?url=${currentUrl}`"
              title="Twitter"
              target="_blank"
              class="flex items-center justify-center w-8 h-8 text-white transition rounded-full bg-cyan-400 hover:shadow-lg"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              :href="`http://pinterest.com/pin/create/button/?url=${currentUrl}&media=${post.image || currentPost?.image || '/vatchat.png'}`"
              title="Pinterest"
              target="_blank"
              class="flex items-center justify-center w-8 h-8 text-white transition bg-red-700 rounded-full hover:shadow-lg"
            >
              <i class="fab fa-pinterest-p"></i>
            </a>
            <a
              :href="`http://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}`"
              title="LinkedIn"
              target="_blank"
              class="flex items-center justify-center w-8 h-8 text-white transition bg-blue-800 rounded-full hover:shadow-lg"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <!-- Author info -->
        <div
          class="flex flex-col items-center gap-6 px-6 py-8 mx-4 my-6 bg-gray-100 border rounded-2xl sm:flex-row"
        >
          <div class="flex-shrink-0 overflow-hidden rounded-full w-28 h-28">
            <img
              src="https://secure.gravatar.com/avatar/9aa427444ce51d8e095ab8fef39bcc8b?s=160&d=mm&r=g"
              class="object-cover w-full h-full"
              alt="Author"
            />
          </div>
          <div>
            <h3 class="mb-1 text-2xl font-bold text-blue-900">
              <a v-if="(post.author && post.author !== 'Không rõ') || (currentPost?.author && currentPost.author !== 'Không rõ')" :href="post.authorLink" class="hover:text-cyan-500">{{ post.author || currentPost?.author }}</a>
              <span v-else class="text-gray-500">Không rõ tác giả</span>
            </h3>
            <div class="text-lg text-gray-600">Tác giả bài viết</div>
            <ul class="flex gap-2 mt-2"></ul>
          </div>
        </div>
        <!-- Comment Section (demo tĩnh) -->
        <div id="comments" class="px-6 py-8">
          <div class="mb-10">
            <h2 class="mb-4 text-3xl font-bold text-blue-900 comments-title">
              Bình luận ({{ post.commentsCount || currentPost?.commentsCount || 0 }})
            </h2>
            <ul class="space-y-6">
              <li class="flex items-start gap-4">
                <img
                  src="https://secure.gravatar.com/avatar/fcc9a2c990202a32071fefd42cdfe724?s=90&d=mm&r=g"
                  class="object-cover w-20 h-20 rounded-full"
                  alt=""
                />
                <div class="flex-1">
                  <h4 class="mb-2 text-xl font-bold text-blue-900">Demo User</h4>
                  <div class="mb-2 text-base text-gray-700">Đây là bình luận mẫu.</div>
                  <a
                    href="#"
                    class="text-base font-semibold uppercase text-cyan-500 hover:underline"
                  >Bình luận</a>
                </div>
              </li>
            </ul>
          </div>
          <!-- Comment form (demo, chưa xử lý submit) -->
          <div id="respond" class="mt-10">
            <h4 class="mb-2 text-3xl font-bold text-blue-900 comment-reply-title">
              Leave A Comment
            </h4>
            <form class="w-full" autocomplete="off">
              <span class="block mb-4 text-sm font-semibold text-gray-700">Your email address will not be published *</span>
              <div class="flex flex-wrap gap-6 mb-4">
                <div class="flex-1 min-w-[180px]">
                  <label class="block mb-1 font-semibold text-gray-700">Your Name*</label>
                  <input type="text" class="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder="Name" />
                </div>
                <div class="flex-1 min-w-[180px]">
                  <label class="block mb-1 font-semibold text-gray-700">Your Email*</label>
                  <input type="text" class="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder="Email" />
                </div>
                <div class="flex-1 min-w-[180px]">
                  <label class="block mb-1 font-semibold text-gray-700">Your Phone*</label>
                  <input type="text" class="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder="Phone" />
                </div>
              </div>
              <div class="flex items-center mb-6">
                <input type="checkbox" id="wp-comment-cookies-consent" class="w-5 h-5 mr-2" />
                <label for="wp-comment-cookies-consent" class="text-sm text-gray-600">Save my details in this browser for the next time I comment.</label>
              </div>
              <div class="mb-6">
                <label class="block mb-1 font-semibold text-gray-700">Message</label>
                <textarea rows="6" class="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder="Comment"></textarea>
              </div>
              <button
                type="submit"
                class="px-10 py-3 font-bold text-white transition rounded-full bg-gradient-to-r from-cyan-400 to-green-300 hover:from-cyan-500 hover:to-green-400"
              >Post Comment</button>
            </form>
          </div>
        </div>
      </article>

      <!-- Not Found State -->
      <div v-else-if="!loading && !currentPost" class="text-center py-20 text-[#6F7F90]">
        <p>Bài viết không tồn tại hoặc đã bị xóa.</p>
        <router-link to="/blog" class="inline-block mt-4 bg-gradient-to-r from-[#24B7D3] to-[#30EFAD] text-white px-6 py-2 rounded-full hover:from-[#30EFAD] hover:to-[#24B7D3] transition-all">Quay lại danh sách</router-link>
      </div>

      <!-- No Data State -->
      <div v-else-if="!loading && !post" class="text-center py-20 text-[#6F7F90]">
        <p>Không thể tải dữ liệu bài viết.</p>
        <button
          @click="fetchCurrentPost"
          class="inline-block mt-4 bg-gradient-to-r from-[#24B7D3] to-[#30EFAD] text-white px-6 py-2 rounded-full hover:from-[#30EFAD] hover:to-[#24B7D3] transition-all"
        >
          Thử lại
        </button>
      </div>
    </main>
    <KnowledgeSidebar
      :categories="categories"
      :selectedCategory="selectedCategory"
      :onFilterCategory="handleCategoryFilter"
      :allArticles="filteredArticles"
      :recentPosts="recentPosts"
      :tags="tags"
      :getTagLink="getTagLink"
      v-model:searchQuery="searchQuery"
      :onSearch="handleSearch"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { usePosts } from '@/composables/usePosts'
import { useCategories } from '@/composables/useCategories'
import KnowledgeSidebar from './KnowledgeSidebar.vue'

const route = useRoute()
const router = useRouter()
const articleId = computed(() => {
  const id = route.params.id;
  console.log('🔄 ArticleDetailPage: Route params changed, articleId:', id);
  return id;
})
const currentUrl = window.location.href

// Use composables
const { 
  currentPost, 
  loading, 
  error, 
  fetchPost,
  fetchPostCategories,
  fetchPosts,
  fetchPostsCountByCategory
} = usePosts()

const { 
  categories: apiCategories, 
  fetchCategories 
} = useCategories()

// Local state
const categories = ref([])
const postCategories = ref([])
const recentPosts = ref([])
const allArticles = ref([])
const searchQuery = ref('')
const selectedCategory = ref('all')
const categoryCounts = ref({})

const tags = ref([
  'AI SCIENCE',
  'RESEARCH',
  'NUTRITION',
  'GENETICS',
  'NEUROSCIENCE',
  'HEALTHCARE',
  'MEDICINE',
  'TECHNOLOGY'
])

// Methods for sidebar
const handleCategoryFilter = (categorySlug) => {
  console.log('🔍 ArticleDetailPage: Category filter called with:', categorySlug);
  selectedCategory.value = categorySlug;
  
  // Navigate to knowledge page with category filter
  if (categorySlug === 'all') {
    router.push('/blog');
  } else {
    router.push({
      path: '/blog',
      query: { category: categorySlug }
    });
  }
};

// Debounced search
let searchTimeout = null;
const handleSearch = (query) => {
  console.log('🔍 ArticleDetailPage: Search called with:', query);
  searchQuery.value = query;
  
  // Clear previous timeout
  if (searchTimeout) {
    clearTimeout(searchTimeout);
  }
  
  // Set new timeout for navigation
  searchTimeout = setTimeout(() => {
    // If search query is not empty, navigate to knowledge page with search
    if (query.trim()) {
      router.push({
        path: '/blog',
        query: { search: query }
      });
    }
  }, 500); // 500ms delay
};

// Handle search submit
const handleSearchSubmit = (query) => {
  console.log('🔍 ArticleDetailPage: Search submitted:', query);
  if (query.trim()) {
    router.push({
      path: '/blog',
      query: { search: query }
    });
  }
};

// Handle recent post click
const handleRecentPostClick = (postId) => {
  console.log('🆕 ArticleDetailPage: Recent post clicked:', postId);
  router.push(`/blog/${postId}`);
};

// Handle category click
const handleCategoryClick = (categorySlug) => {
  console.log('📂 ArticleDetailPage: Category clicked:', categorySlug);
  handleCategoryFilter(categorySlug);
};

// Load category counts
const loadCategoryCounts = async () => {
  try {
    console.log('📊 ArticleDetailPage: Loading category counts...');
    const counts = {};
    
    // Load counts in parallel for better performance
    const countPromises = categories.value.map(async (category) => {
      try {
        console.log(`📊 Fetching count for category: ${category.name} (ID: ${category.id})`);
        const count = await fetchPostsCountByCategory(category.id);
        console.log(`📊 Category ${category.name}: ${count} posts`);
        return { id: category.id, count };
      } catch (err) {
        console.error(`❌ Failed to get count for category ${category.name}:`, err);
        return { id: category.id, count: 0 };
      }
    });
    
    const results = await Promise.all(countPromises);
    results.forEach(({ id, count }) => {
      counts[id] = count;
    });
    
    categoryCounts.value = counts;
    console.log('📊 ArticleDetailPage: Category counts loaded:', counts);
  } catch (err) {
    console.error('❌ ArticleDetailPage: Error loading category counts:', err);
    // Set default counts to 0
    const counts = {};
    categories.value.forEach(cat => {
      counts[cat.id] = 0;
    });
    categoryCounts.value = counts;
  }
};

// Computed properties
const filteredArticles = computed(() => {
  let filtered = allArticles.value;
  
  // Filter by search query
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter(
      (article) =>
        article.title?.toLowerCase().includes(query) ||
        article.content?.toLowerCase().includes(query) ||
        article.author?.toLowerCase().includes(query),
    );
  }

  // Filter by category
  if (selectedCategory.value !== 'all') {
    filtered = filtered.filter((article) => {
      const categoryIds = Array.isArray(article.category_id) 
        ? article.category_id 
        : [article.category_id];
      
      return categoryIds.some(catId => 
        catId && catId.toString() === selectedCategory.value.toString()
      );
    });
  }

  return filtered;
});

const post = computed(() => {
  console.log('🔄 ArticleDetailPage: Computing post, currentPost.value:', currentPost.value);
  
  if (!currentPost.value) {
    console.log('❌ ArticleDetailPage: No currentPost data');
    return null;
  }
  
  console.log('📄 ArticleDetailPage: Processing post data:', currentPost.value);
  console.log('📄 ArticleDetailPage: Post title:', currentPost.value.title);
  console.log('📄 ArticleDetailPage: Post content:', currentPost.value.content);
  console.log('📄 ArticleDetailPage: Post author:', currentPost.value.author);
  console.log('📄 ArticleDetailPage: Post date:', currentPost.value.created_at);
  console.log('📄 ArticleDetailPage: Post category_id:', currentPost.value.category_id);
  console.log('📄 ArticleDetailPage: Post categories from API:', postCategories.value);
  
  // Sử dụng categories từ API endpoint mới nếu có
  const categoriesToUse = postCategories.value.length > 0 ? postCategories.value : categories.value;
  
  // Tìm category object đúng - lấy category đầu tiên trong array
  let firstCategoryId = null;
  if (currentPost.value.category_id) {
    if (Array.isArray(currentPost.value.category_id)) {
      firstCategoryId = currentPost.value.category_id[0];
    } else {
      firstCategoryId = currentPost.value.category_id;
    }
  }
  
  console.log('📂 ArticleDetailPage: First category ID:', firstCategoryId);
  console.log('📂 ArticleDetailPage: Available categories:', categoriesToUse);
  
  const categoryObj = categoriesToUse.find(cat => 
    cat.id === firstCategoryId || 
    cat._id === firstCategoryId ||
    cat.id?.toString() === firstCategoryId?.toString() ||
    cat._id?.toString() === firstCategoryId?.toString()
  );
  console.log('📂 ArticleDetailPage: Found category object:', categoryObj);
  
  // Xử lý created_at - có thể là null
  const createdAt = currentPost.value.created_at ? new Date(currentPost.value.created_at) : new Date();
  
  const result = {
    id: currentPost.value.id || currentPost.value._id, // API trả về 'id' thay vì '_id'
    title: currentPost.value.title || currentPost.value.name || '(Không có tiêu đề)',
    link: `/blog/${currentPost.value.id || currentPost.value._id}`,
    image: currentPost.value.image || '/vatchat.png',
    date: currentPost.value.created_at ? new Date(currentPost.value.created_at).toLocaleDateString('vi-VN') : 
          (currentPost.value.createdAt ? new Date(currentPost.value.createdAt).toLocaleDateString('vi-VN') : ''),
    author: currentPost.value.author || 'Không rõ',
    authorLink: '/author/' + (currentPost.value.author ? encodeURIComponent(currentPost.value.author) : 'unknown'),
    categories: categoryObj ? [{
      name: categoryObj.name,
      slug: categoryObj.name?.toLowerCase().replace(/\s+/g, '-') || 'uncategorized',
      link: `/category/${categoryObj.name?.toLowerCase().replace(/\s+/g, '-') || 'uncategorized'}`
    }] : [],
    commentsCount: currentPost.value.commentsCount || 0,
    excerpt: currentPost.value.content || currentPost.value.excerpt || 'Không có nội dung'
  };
  
  console.log('✅ ArticleDetailPage: Computed post result:', result);
  return result;
})

// Methods
const getCategoryName = (categoryId) => {
  const category = categories.value.find(cat => cat.id === categoryId)
  return category?.name || 'Uncategorized'
}

const getCategorySlug = (categoryId) => {
  const category = categories.value.find(cat => cat.id === categoryId)
  return category?.slug || 'uncategorized'
}

const getTagLink = (tag) => {
  const tagSlug = tag.toLowerCase().replace(/\s+/g, '-');
  console.log('🏷️ ArticleDetailPage: Tag link generated for:', tag, '->', tagSlug);
  return `/tag/${tagSlug}`;
};

const handleImageError = (event) => {
  console.log('🖼️ Image failed to load, using fallback');
  event.target.src = '/vatchat.png';
};

const fetchCurrentPost = async () => {
  if (articleId.value) {
    try {
      console.log('📄 ArticleDetailPage: Fetching post with ID:', articleId.value);
      const postData = await fetchPost(articleId.value)
      console.log('📄 ArticleDetailPage: Post data received:', postData);
      
      // Fetch categories for this specific post
      try {
        const postCats = await fetchPostCategories(articleId.value)
        postCategories.value = postCats
        console.log('📂 ArticleDetailPage: Post categories loaded:', postCats)
      } catch (err) {
        console.error('❌ ArticleDetailPage: Error fetching post categories:', err)
        postCategories.value = []
      }
    } catch (err) {
      console.error('❌ ArticleDetailPage: Error fetching post:', err)
      error.value = `Không thể tải bài viết: ${err.message}`;
    }
  }
}

const initializeData = async () => {
  try {
    console.log('🚀 ArticleDetailPage: Starting data initialization...');
    
    // Fetch categories
    console.log('📁 ArticleDetailPage: Fetching categories...');
    await fetchCategories()
    categories.value = apiCategories.value.map(cat => ({
      id: cat._id.toString(), // Đảm bảo ID là string
      name: cat.name,
      slug: cat.name.toLowerCase().replace(/\s+/g, '-'),
      count: 0 // Will be updated by loadCategoryCounts
    }))
    console.log('✅ ArticleDetailPage: Categories loaded:', categories.value.length);
    console.log('📂 ArticleDetailPage: Categories data:', categories.value);

    // Fetch post if we have an articleId
    if (articleId.value) {
      console.log('�� ArticleDetailPage: Fetching post...');
      await fetchCurrentPost()
    }

    // Fetch recent posts for sidebar
    console.log('🆕 ArticleDetailPage: Fetching recent posts...');
    const { fetchLatestPosts } = usePosts()
    const latestPosts = await fetchLatestPosts(3)
    recentPosts.value = latestPosts.map(post => {
      console.log('🆕 Processing recent post:', post);
      return {
        id: post.id || post._id, // API trả về 'id' thay vì '_id'
        title: post.title || post.name || 'Không có tiêu đề',
        link: `/blog/${post.id || post._id}`,
        image: post.image || '/vatchat.png',
        date: post.created_at ? new Date(post.created_at).toLocaleDateString('vi-VN') : 
              (post.createdAt ? new Date(post.createdAt).toLocaleDateString('vi-VN') : '')
      };
    })
    console.log('✅ ArticleDetailPage: Recent posts loaded:', recentPosts.value.length);

    // Fetch all articles for the sidebar
    console.log('📚 ArticleDetailPage: Fetching all articles...');
    try {
      const articlesData = await fetchPosts();
      allArticles.value = articlesData;
      console.log('✅ ArticleDetailPage: All articles loaded:', allArticles.value.length);
    } catch (err) {
      console.error('❌ ArticleDetailPage: Error fetching all articles:', err);
      allArticles.value = [];
    }

    // Load category counts
    await loadCategoryCounts();
    
    // Update categories with counts
    categories.value = categories.value.map(cat => ({
      ...cat,
      count: categoryCounts.value[cat.id] || 0
    }));
    console.log('📁 ArticleDetailPage: Categories updated with counts:', categories.value);

  } catch (err) {
    console.error('❌ ArticleDetailPage: Error initializing data:', err)
    error.value = `Không thể tải dữ liệu: ${err.message}`;
  }
}

// Lifecycle
onMounted(() => {
  console.log('🎯 ArticleDetailPage: Component mounted');
  console.log('🎯 ArticleDetailPage: Initial articleId:', articleId.value);
  console.log('🎯 ArticleDetailPage: Initial currentPost:', currentPost.value);
  console.log('🎯 ArticleDetailPage: Initial loading:', loading.value);
  console.log('🎯 ArticleDetailPage: Initial error:', error.value);
  
  // Add a small delay to avoid overwhelming the API
  setTimeout(() => {
    console.log('🚀 ArticleDetailPage: Starting initialization after delay');
    initializeData()
  }, 200);
})

// Cleanup on unmount
onUnmounted(() => {
  if (searchTimeout) {
    clearTimeout(searchTimeout);
  }
})

// Watch for route changes
watch(articleId, (newId, oldId) => {
  console.log('🔄 ArticleDetailPage: Route changed from', oldId, 'to', newId);
  if (newId && newId !== oldId) {
    console.log('�� ArticleDetailPage: Fetching new post data...');
    fetchCurrentPost()
  }
}, { immediate: true })
</script>

<style>
/* Bạn có thể thêm custom style nhỏ nếu muốn */
</style>