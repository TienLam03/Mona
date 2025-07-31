<template>
  <div id="pxl-main" class="py-[100px] mx-auto ">
    <div class="container mx-auto max-w-[1330px] px-4">
      <div class="flex flex-wrap -mx-4 pxl-content-wrap pxl-has-sidebar pxl-sidebar-right">
        <!-- Main Content -->
        <div id="pxl-content-area" class="w-full px-4 mb-8 lg:w-9/12 lg:mb-0">
          <main id="pxl-content-main">
            <!-- Loading State -->
            <div v-if="loading" class="flex justify-center items-center py-12">
              <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2AD2C1]"></div>
            </div>

            <!-- Error State -->
            <div v-else-if="error" class="py-12 text-center">
              <div class="text-red-500 text-lg mb-4">
                <i class="block mb-4 text-4xl icofont icofont-warning"></i>
                Có lỗi xảy ra: {{ error }}
              </div>
              <button
                @click="fetchPosts"
                class="bg-gradient-to-r from-[#24B7D3] to-[#30EFAD] text-white px-6 py-2 rounded-full hover:from-[#30EFAD] hover:to-[#24B7D3] transition-all"
              >
                Thử lại
              </button>
            </div>

            <!-- Blog Articles -->
            <template v-else>
              <BlogArticle 
                v-for="article in paginatedArticles" 
                :key="article._id" 
                :article="transformArticleForDisplay(article)"
              />

              <!-- Pagination -->
              <nav v-if="totalPages > 1" class="pxl-pagination-wrap">
                <div class="flex items-center space-x-2 pxl-pagination-links">
                  <!-- Previous Button -->
                  <button
                    v-if="currentPage > 1"
                    @click="goToPage(currentPage - 1)"
                    class="prev page-numbers text-[#6F7F90] font-medium rounded-full w-10 h-10 flex items-center justify-center hover:text-white hover:bg-gradient-to-r hover:from-[#24B7D3] hover:to-[#30EFAD] transition-all"
                  >
                    <i class="caseicon caseicon-double-chevron-left"></i>
                  </button>

                  <!-- Page Numbers -->
                  <template v-for="page in paginationPages" :key="page">
                    <button
                      v-if="page === currentPage"
                      :aria-current="page"
                      class="page-numbers current bg-gradient-to-r from-[#24B7D3] to-[#30EFAD] text-white font-medium rounded-full w-10 h-10 flex items-center justify-center shadow-md"
                    >
                      <span class="number-wrapp">{{ page }}</span>
                    </button>
                    <button
                      v-else
                      @click="goToPage(page)"
                      class="page-numbers text-[#6F7F90] font-medium rounded-full w-10 h-10 flex items-center justify-center hover:text-white hover:bg-gradient-to-r hover:from-[#24B7D3] hover:to-[#30EFAD] transition-all"
                    >
                      <span class="number-wrapp">{{ page }}</span>
                    </button>
                    
                    <!-- Show dots if there's a gap -->
                    <span
                      v-if="page < totalPages && !paginationPages.includes(page + 1)"
                      class="flex items-center justify-center w-10 h-10 text-[#6F7F90] font-medium page-numbers dots"
                    >…</span>
                  </template>

                  <!-- Next Button -->
                  <button
                    v-if="currentPage < totalPages"
                    @click="goToPage(currentPage + 1)"
                    class="next page-numbers text-[#6F7F90] font-medium rounded-full w-10 h-10 flex items-center justify-center hover:text-white hover:bg-gradient-to-r hover:from-[#24B7D3] hover:to-[#30EFAD] transition-all"
                  >
                    <i class="caseicon caseicon-double-chevron-right"></i>
                  </button>
                </div>
                
                <!-- Results Info -->
                <div class="mt-4 text-center text-sm text-[#6F7F90]">
                  <span v-if="filteredArticles.length > 0">
                    Hiển thị {{ ((currentPage - 1) * itemsPerPage) + 1 }} - {{ Math.min(currentPage * itemsPerPage, filteredArticles.length) }} 
                    trong tổng số {{ filteredArticles.length }} bài viết
                    <span v-if="searchQuery || selectedCategory !== 'all'">
                      (đã lọc từ {{ allArticles.length }} bài viết)
                    </span>
                  </span>
                  <span v-else>
                    Không có bài viết nào để hiển thị
                  </span>
                </div>
              </nav>

              <!-- No Results Message -->
              <div v-else-if="filteredArticles.length === 0" class="py-12 text-center">
                <div class="text-[#6F7F90] text-lg mb-4">
                  <i class="block mb-4 text-4xl icofont icofont-search-2"></i>
                  Không tìm thấy bài viết nào
                </div>
                <p class="text-[#6F7F90] mb-6">
                  <span v-if="searchQuery">Từ khóa "{{ searchQuery }}" không có kết quả.</span>
                  <span v-else-if="selectedCategory !== 'all'">Danh mục này chưa có bài viết nào.</span>
                  <span v-else>Chưa có bài viết nào được đăng.</span>
                </p>
                <button
                  v-if="searchQuery || selectedCategory !== 'all'"
                  @click="clearFilters"
                  class="bg-gradient-to-r from-[#24B7D3] to-[#30EFAD] text-white px-6 py-2 rounded-full hover:from-[#30EFAD] hover:to-[#24B7D3] transition-all"
                >
                  Xem tất cả bài viết
                </button>
              </div>
            </template>
          </main>
        </div>
        <!-- Sidebar -->
        <KnowledgeSidebar
          v-model:searchQuery="searchQuery"
          :categories="categories"
          :selectedCategory="selectedCategory"
          :onFilterCategory="filterByCategory"
          :allArticles="allArticles"
          :recentPosts="recentPosts"
          :tags="tags"
          :getTagLink="getTagLink"
        />
        <!-- End Sidebar -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { usePosts } from '@/composables/usePosts'
import { useCategories } from '@/composables/useCategories'
import BlogArticle from '@/components/BlogArticle.vue'
import KnowledgeSidebar from './KnowledgeSidebar.vue'

// Use composables
const { 
  posts, 
  loading, 
  error, 
  fetchPosts, 
  fetchLatestPosts, 
  searchPosts 
} = usePosts()

const { 
  categories: apiCategories, 
  fetchCategories 
} = useCategories()

// Reactive data
const searchQuery = ref('')
const currentPage = ref(1)
const itemsPerPage = ref(3)
const selectedCategory = ref('all')

// Categories data - will be populated from API
const categories = ref([
  { name: 'Genetics', slug: 'genetics', count: 0 },
  { name: 'Neuroscience', slug: 'neuroscience', count: 0 },
  { name: 'Nutrition', slug: 'nutrition', count: 0 },
  { name: 'Research', slug: 'research', count: 0 }
])

// Recent posts data - will be populated from API
const recentPosts = ref([])

// Tags data
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

// All articles data - will be populated from API
const allArticles = ref([])

// Computed properties
const filteredArticles = computed(() => {
  let filtered = allArticles.value

  // Filter by search query
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(article => 
      article.tittle?.toLowerCase().includes(query) ||
      article.content?.toLowerCase().includes(query) ||
      article.author?.toLowerCase().includes(query)
    )
  }

  // Filter by category
  if (selectedCategory.value !== 'all') {
    filtered = filtered.filter(article => {
      const categoryIds = Array.isArray(article.category_id) ? article.category_id : [article.category_id];
      return categoryIds.includes(parseInt(selectedCategory.value));
    })
  }

  return filtered
})

const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return filteredArticles.value.slice(start, end)
})

const totalPages = computed(() => {
  return Math.ceil(filteredArticles.value.length / itemsPerPage.value)
})

// Watch filteredArticles to reset currentPage if needed
watch(filteredArticles, () => {
  if (currentPage.value > totalPages.value && totalPages.value > 0) {
    currentPage.value = 1
  }
})

// Watch searchQuery để reset page khi search
watch(searchQuery, () => {
  currentPage.value = 1
})

// Tối ưu hóa logic phân trang
const paginationPages = computed(() => {
  const pages = []
  const current = currentPage.value
  const total = totalPages.value

  if (total <= 5) {
    for (let i = 1; i <= total; i++) pages.push(i)
  } else {
    pages.push(1)
    if (current > 3) pages.push(current - 1)
    if (current !== 1 && current !== total) pages.push(current)
    if (current < total - 2) pages.push(current + 1)
    if (!pages.includes(total)) pages.push(total)
    // Loại bỏ trùng lặp và sắp xếp
    return [...new Set(pages)].sort((a, b) => a - b)
  }
  return pages
})

// Methods
const filterByCategory = (categorySlug) => {
  // Tìm category ID từ slug
  if (categorySlug === 'all') {
    selectedCategory.value = 'all'
  } else {
    const category = categories.value.find(cat => cat.slug === categorySlug)
    if (category) {
      selectedCategory.value = category.id.toString()
    } else {
      selectedCategory.value = 'all'
    }
  }
  currentPage.value = 1 // Reset to first page when filtering
}

const clearFilters = () => {
  searchQuery.value = ''
  selectedCategory.value = 'all'
  currentPage.value = 1
}

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    // Scroll to top of articles
    document.getElementById('pxl-content-main')?.scrollIntoView({ behavior: 'smooth' })
  }
}

const getTagLink = (tag) => {
  return `/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`
}

// Transform API data to match component expectations
const transformArticleForDisplay = (article) => {
  // Tìm category object đúng - lấy category đầu tiên trong array
  const firstCategoryId = Array.isArray(article.category_id) ? article.category_id[0] : article.category_id;
  const categoryObj = categories.value.find(cat => cat.id === firstCategoryId);
  
  const transformed = {
    id: article._id,
    title: article.tittle || '(Không có tiêu đề)',
    link: `/blog/${article._id}`,
    image: article.image || '/vatchat.png',
    date: article.created_at ? new Date(article.created_at).toLocaleDateString('vi-VN') : '',
    author: article.author || 'Không rõ',
    authorLink: '/author/' + (article.author ? encodeURIComponent(article.author) : 'unknown'),
    categories: categoryObj ? [{
      name: categoryObj.name,
      slug: categoryObj.slug,
      link: `/category/${categoryObj.slug}`
    }] : [],
    commentsCount: typeof article.commentsCount === 'number' ? article.commentsCount : 0,
    excerpt: article.content ? (article.content.length > 200 ? article.content.substring(0, 200) + '...' : article.content) : 'Không có mô tả'
  };
  return transformed;
}

const getCategoryName = (categoryId) => {
  const category = categories.value.find(cat => cat.id === categoryId)
  const name = category?.name || 'Uncategorized'
  console.log('📂 KnowledgePage: Getting category name for ID', categoryId, '->', name);
  return name
}

const getCategorySlug = (categoryId) => {
  const category = categories.value.find(cat => cat.id === categoryId)
  const slug = category?.slug || 'uncategorized'
  console.log('📂 KnowledgePage: Getting category slug for ID', categoryId, '->', slug);
  return slug
}

// Initialize data
const initializeData = async () => {
  console.log('🚀 KnowledgePage: Starting data initialization...');
  try {
    // Fetch posts and categories in parallel
    console.log('📡 KnowledgePage: Fetching posts and categories...');
    await Promise.all([
      fetchPosts(),
      fetchCategories()
    ])

    // Update allArticles with fetched posts
    console.log('💾 KnowledgePage: Updating allArticles with fetched posts');
    allArticles.value = posts.value
    console.log('📊 KnowledgePage: Total articles loaded:', allArticles.value.length);

    // Update categories with API data and count
    if (apiCategories.value.length > 0) {
      // Đếm số lượng bài viết cho từng category
      const categoryCounts = {};
      posts.value.forEach(post => {
        const categoryIds = Array.isArray(post.category_id) ? post.category_id : [post.category_id];
        categoryIds.forEach(catId => {
          if (catId) {
            categoryCounts[catId] = (categoryCounts[catId] || 0) + 1;
          }
        });
      });
      
      categories.value = apiCategories.value.map(cat => ({
        id: cat._id,
        name: cat.name,
        slug: cat.name.toLowerCase().replace(/\s+/g, '-'),
        count: categoryCounts[cat._id] || 0
      }));
      console.log('📁 KnowledgePage: Categories updated:', categories.value);
    } else {
      console.log('⚠️ KnowledgePage: No categories found in API response');
    }

    // Fetch recent posts
    console.log('🆕 KnowledgePage: Fetching recent posts for sidebar...');
    const latestPosts = await fetchLatestPosts(3)
    recentPosts.value = latestPosts.map(post => ({
      id: post._id,
      title: post.tittle || post.name,
      link: `/blog/${post._id}`,
      image: '/vatchat.png',
      date: post.created_at ? new Date(post.created_at).toLocaleDateString('vi-VN') : 
            (post.createdAt ? new Date(post.createdAt).toLocaleDateString('vi-VN') : '')
    }))
    console.log('🆕 KnowledgePage: Recent posts loaded:', recentPosts.value);

  } catch (err) {
    console.error('❌ KnowledgePage: Error initializing data:', err);
  }
}

// Lifecycle
onMounted(() => {
  console.log('🎯 KnowledgePage: Component mounted');
  initializeData()
})

// Export for template access
const articles = paginatedArticles
</script>
