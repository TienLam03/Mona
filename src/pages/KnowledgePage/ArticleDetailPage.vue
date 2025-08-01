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
          @click="fetchArticle"
          class="bg-gradient-to-r from-[#24B7D3] to-[#30EFAD] text-white px-6 py-2 rounded-full hover:from-[#30EFAD] hover:to-[#24B7D3] transition-all"
        >
          Thử lại
        </button>
      </div>

      <!-- Article Content -->
      <article v-else-if="article">
        <!-- Top Section: Tags, Meta -->
        <div>
          <div class="flex flex-col gap-2 mb-4 md:flex-row md:items-center">
            <div class="flex flex-wrap gap-2 mb-2 md:mb-0">
              <a
                v-for="cat in article.categories"
                :key="cat.slug"
                href="#"
                class="px-4 py-1 text-xs font-semibold text-blue-500 transition bg-blue-100 rounded-full hover:bg-gradient-to-r hover:from-cyan-400 hover:to-green-300"
              >
                {{ cat.name }}
              </a>
            </div>
            <ul class="flex flex-wrap items-center text-base font-semibold text-gray-600 gap-x-6">
              <li class="flex items-center gap-1">
                <i class="text-base fa fa-user-alt"></i>
                <a :href="article.authorLink" class="hover:text-cyan-500">{{ article.author }}</a>
              </li>
              <li class="flex items-center gap-1">
                <i class="text-base fa fa-calendar-alt"></i>
                <span>{{ article.date }}</span>
              </li>
              <li class="flex items-center gap-1">
                <i class="text-base fa fa-folder"></i>
                <template v-for="(cat, idx) in article.categories" :key="cat.slug">
                  <a href="#" class="hover:text-cyan-500">{{ cat.name }}</a>
                  <span v-if="idx < article.categories.length - 1">,</span>
                </template>
              </li>
              <li class="flex items-center gap-1">
                <a href="#" class="flex items-center hover:text-cyan-500">
                  <i class="fa fa-comment"></i>
                  <span>{{ article.commentsCount }} Comments</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="relative overflow-hidden rounded-[25px] mb-8">
            <div class="relative w-full aspect-[885/593] overflow-hidden rounded-[25px] bg-gray-100">
              <img
                width="885"
                height="593"
                :src="article.image"
                :alt="article.title"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-100 scale-[1.01]"
              />
            </div>
          </div>

          <!-- Content -->
          <div class="space-y-6">
            <p>{{ article.excerpt }}</p>
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
              :href="`http://pinterest.com/pin/create/button/?url=${currentUrl}&media=${article.image}`"
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
              <a :href="article.authorLink" class="hover:text-cyan-500">{{ article.author }}</a>
            </h3>
            <div class="text-lg text-gray-600"></div>
            <ul class="flex gap-2 mt-2"></ul>
          </div>
        </div>
        <!-- Comment Section (demo tĩnh) -->
        <div id="comments" class="px-6 py-8">
          <div class="mb-10">
            <h2 class="mb-4 text-3xl font-bold text-blue-900 comments-title">Bình luận ({{ article.commentsCount }})</h2>
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
      <div v-else class="text-center py-20 text-[#6F7F90]">
        <p>Bài viết không tồn tại hoặc đã bị xóa.</p>
        <router-link to="/blog" class="inline-block mt-4 bg-gradient-to-r from-[#24B7D3] to-[#30EFAD] text-white px-6 py-2 rounded-full hover:from-[#30EFAD] hover:to-[#24B7D3] transition-all">Quay lại danh sách</router-link>
      </div>
    </main>
    <KnowledgeSidebar
      :categories="categories"
      :selectedCategory="selectedCategory"
      :onFilterCategory="() => {}"
      :allArticles="[]"
      :recentPosts="recentPosts"
      :tags="tags"
      :getTagLink="getTagLink"
      :searchQuery="''"
      :onSearch="() => {}"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { usePosts } from '@/composables/usePosts'
import { useCategories } from '@/composables/useCategories'
import KnowledgeSidebar from './KnowledgeSidebar.vue'

const route = useRoute()
const articleId = computed(() => route.params.id)
const currentUrl = window.location.href

// Use composables
const { 
  currentPost, 
  loading, 
  error, 
  fetchPost 
} = usePosts()

const { 
  categories: apiCategories, 
  fetchCategories 
} = useCategories()

// Local state
const categories = ref([])
const recentPosts = ref([])
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

const selectedCategory = ref('all')

// Computed properties
const article = computed(() => {
  if (!currentPost.value) return null
  
  // Tìm category object đúng - lấy category đầu tiên trong array
  const firstCategoryId = Array.isArray(currentPost.value.category_id) ? currentPost.value.category_id[0] : currentPost.value.category_id;
  const categoryObj = categories.value.find(cat => cat.id === firstCategoryId);
  
  return {
    id: currentPost.value._id,
    title: currentPost.value.tittle || currentPost.value.name || '(Không có tiêu đề)', // Fix: ưu tiên tittle
    link: `/blog/${currentPost.value._id}`,
    image: '/vatchat.png', // Default image
    date: currentPost.value.created_at ? new Date(currentPost.value.created_at).toLocaleDateString('vi-VN') : 
          (currentPost.value.createdAt ? new Date(currentPost.value.createdAt).toLocaleDateString('vi-VN') : ''), // Fix: ưu tiên created_at
    author: currentPost.value.author || 'Không rõ',
    authorLink: '/author/' + (currentPost.value.author ? encodeURIComponent(currentPost.value.author) : 'unknown'),
    categories: categoryObj ? [{
      name: categoryObj.name,
      slug: categoryObj.slug,
      link: `/category/${categoryObj.slug}`
    }] : [],
    commentsCount: 0,
    excerpt: currentPost.value.content || 'Không có nội dung'
  }
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
  return `/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`
}

const fetchArticle = async () => {
  if (articleId.value) {
    try {
      await fetchPost(articleId.value)
    } catch (err) {
      console.error('Error fetching article:', err)
    }
  }
}

const initializeData = async () => {
  try {
    // Fetch categories
    await fetchCategories()
    categories.value = apiCategories.value.map(cat => ({
      id: cat._id,
      name: cat.name,
      slug: cat.name.toLowerCase().replace(/\s+/g, '-')
    }))

    // Fetch article
    await fetchArticle()

    // Fetch recent posts for sidebar
    const { fetchLatestPosts } = usePosts()
    const latestPosts = await fetchLatestPosts(3)
    recentPosts.value = latestPosts.map(post => ({
      id: post._id,
      title: post.tittle || post.name, // Fix: ưu tiên tittle
      link: `/blog/${post._id}`,
      image: '/vatchat.png',
      date: post.created_at ? new Date(post.created_at).toLocaleDateString('vi-VN') : 
            (post.createdAt ? new Date(post.createdAt).toLocaleDateString('vi-VN') : '') // Fix: ưu tiên created_at
    }))

  } catch (err) {
    console.error('Error initializing data:', err)
  }
}

// Lifecycle
onMounted(() => {
  initializeData()
})

// Watch for route changes
watch(articleId, () => {
  if (articleId.value) {
    fetchArticle()
  }
})
</script>

<style>
/* Bạn có thể thêm custom style nhỏ nếu muốn */
</style>