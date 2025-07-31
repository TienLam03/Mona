<template>
  <div id="pxl-main" class="py-[100px] mx-auto ">
    <div class="container mx-auto max-w-[1330px] px-4">
      <div class="flex flex-wrap -mx-4 pxl-content-wrap pxl-has-sidebar pxl-sidebar-right">
        <!-- Main Content -->
        <div id="pxl-content-area" class="w-full px-4 mb-8 lg:w-9/12 lg:mb-0">
          <main id="pxl-content-main">
            <!-- Blog Articles -->
            <BlogArticle 
              v-for="article in articles" 
              :key="article.id" 
              :article="article"
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
                Hiển thị {{ ((currentPage - 1) * itemsPerPage) + 1 }} - {{ Math.min(currentPage * itemsPerPage, filteredArticles.length) }} 
                trong tổng số {{ filteredArticles.length }} bài viết
                <span v-if="searchQuery || selectedCategory !== 'all'">
                  (đã lọc từ {{ allArticles.length }} bài viết)
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
                @click="searchQuery = ''; selectedCategory = 'all'; currentPage = 1"
                class="bg-gradient-to-r from-[#24B7D3] to-[#30EFAD] text-white px-6 py-2 rounded-full hover:from-[#30EFAD] hover:to-[#24B7D3] transition-all"
              >
                Xem tất cả bài viết
              </button>
            </div>
          </main>
        </div>
        <!-- Sidebar -->
        <KnowledgeSidebar
          :searchQuery="searchQuery"
          :onSearch="handleSearch"
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
import BlogArticle from '@/components/BlogArticle.vue'
import KnowledgeSidebar from './KnowledgeSidebar.vue'

// Reactive data
const searchQuery = ref('')
const currentPage = ref(1)
const itemsPerPage = ref(3)
const selectedCategory = ref('all')
const isLoading = ref(false)

// Categories data
const categories = ref([
  { name: 'Genetics', slug: 'genetics', count: 4 },
  { name: 'Neuroscience', slug: 'neuroscience', count: 7 },
  { name: 'Nutrition', slug: 'nutrition', count: 5 },
  { name: 'Research', slug: 'research', count: 5 }
])

// Recent posts data
const recentPosts = ref([
  {
    id: 855,
    title: 'Patient-Centered Hospital Labs Start Here',
    link: '/patient-centered-hospital-labs-start-here',
    image: '/vatchat.png',
    date: '31/08/2023'
  },
  {
    id: 738,
    title: 'Blood Protein Signatures Change Across Lifespan',
    link: '/blood-protein-signatures-change-across-lifespan',
    image: '/may.png',
    date: '29/08/2023'
  },
  {
    id: 857,
    title: 'Microbiologics Introduces SARS-CoV-2 Synthetic',
    link: '/microbiologics-introduces-sars-cov-2-synthetic',
    image: '/bacsi.png',
    date: '29/08/2023'
  }
])

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

// All articles data
const allArticles = ref([
  {
    id: 855,
    title: 'Patient-Centered Hospital Labs Start Here',
    link: '/patient-centered-hospital-labs-start-here',
    image: '/vatchat.png',
    date: '31/08/2023',
    author: 'monamedia',
    authorLink: '/author/monamedia',
    categories: [
      { name: 'Nutrition', slug: 'nutrition', link: '/category/nutrition' },
      { name: 'Research', slug: 'research', link: '/category/research' }
    ],
    commentsCount: 0,
    excerpt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit quia consequuntur magni dolores eos qui…'
  },
  {
    id: 738,
    title: 'Blood Protein Signatures Change Across Lifespan',
    link: '/blood-protein-signatures-change-across-lifespan',
    image: '/may.png',
    date: '29/08/2023',
    author: 'monamedia',
    authorLink: '/author/monamedia',
    categories: [
      { name: 'Neuroscience', slug: 'neuroscience', link: '/category/neuroscience' },
      { name: 'Nutrition', slug: 'nutrition', link: '/category/nutrition' }
    ],
    commentsCount: 3,
    excerpt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperia m, eaque ipsa quae ab illo inventore veritatis et quasi arch itecto beatae vitae dic sunt explicabo. Nemo enim ipsam vo luptatem quia voluptas sit aspernatur aut odit quia consequuntur magni dolores eos qui…'
  },
  {
    id: 857,
    title: 'Microbiologics Introduces SARS-CoV-2 Synthetic',
    link: '/microbiologics-introduces-sars-cov-2-synthetic',
    image: '/bacsi.png',
    date: '29/08/2023',
    author: 'monamedia',
    authorLink: '/author/monamedia',
    categories: [
      { name: 'Nutrition', slug: 'nutrition', link: '/category/nutrition' },
      { name: 'Research', slug: 'research', link: '/category/research' }
    ],
    commentsCount: 1,
    excerpt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit quia consequuntur magni dolores eos qui…'
  },
  {
    id: 856,
    title: 'Advanced Genetic Research Methods',
    link: '/advanced-genetic-research-methods',
    image: '/ghe.png',
    date: '28/08/2023',
    author: 'monamedia',
    authorLink: '/author/monamedia',
    categories: [
      { name: 'Genetics', slug: 'genetics', link: '/category/genetics' },
      { name: 'Research', slug: 'research', link: '/category/research' }
    ],
    commentsCount: 2,
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat…'
  },
  {
    id: 854,
    title: 'Neuroscience Breakthrough in Brain Mapping',
    link: '/neuroscience-breakthrough-brain-mapping',
    image: '/ban.png',
    date: '27/08/2023',
    author: 'monamedia',
    authorLink: '/author/monamedia',
    categories: [
      { name: 'Neuroscience', slug: 'neuroscience', link: '/category/neuroscience' }
    ],
    commentsCount: 5,
    excerpt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum…'
  }
])

// Computed properties
const filteredArticles = computed(() => {
  let filtered = allArticles.value

  // Filter by search query
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(article => 
      article.title.toLowerCase().includes(query) ||
      article.excerpt.toLowerCase().includes(query) ||
      article.categories.some(cat => cat.name.toLowerCase().includes(query))
    )
  }

  // Filter by category
  if (selectedCategory.value !== 'all') {
    filtered = filtered.filter(article =>
      article.categories.some(cat => cat.slug === selectedCategory.value)
    )
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
  if (currentPage.value > totalPages.value) {
    currentPage.value = 1
  }
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
const handleSearch = (event) => {
  event.preventDefault()
  currentPage.value = 1 // Reset to first page when searching
}

const filterByCategory = (categorySlug) => {
  selectedCategory.value = categorySlug
  currentPage.value = 1 // Reset to first page when filtering
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

// Lifecycle
onMounted(() => {
  // Any initialization logic can go here
  console.log('KnowledgePage mounted with', allArticles.value.length, 'articles')
})

// Export for template access
const articles = paginatedArticles
</script>
