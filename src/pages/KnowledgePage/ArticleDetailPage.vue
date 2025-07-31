<template>
  <div id="pxl-content-area" class="w-full lg:w-9/12 px-4 py-[100px] mx-auto flex flex-row">
    <main id="pxl-content-main" class="flex-1">
      <div v-if="isLoading" class="text-center py-20 text-[#6F7F90]">
        Đang tải dữ liệu...
      </div>
      <article v-else-if="article">
        <!-- Top Section: Tags, Meta -->
        <div>
          <div class="flex flex-col md:flex-row md:items-center gap-2 mb-4">
            <div class="flex flex-wrap gap-2 mb-2 md:mb-0">
              <a
                v-for="cat in article.categories"
                :key="cat.slug"
                href="#"
                class="bg-blue-100 text-blue-500 px-4 py-1 rounded-full text-xs font-semibold transition hover:bg-gradient-to-r hover:from-cyan-400 hover:to-green-300"
              >
                {{ cat.name }}
              </a>
            </div>
            <ul class="flex flex-wrap items-center text-gray-600 text-base font-semibold gap-x-6">
              <li class="flex items-center gap-1">
                <i class="fa fa-user-alt text-base"></i>
                <a :href="article.authorLink" class="hover:text-cyan-500">{{ article.author }}</a>
              </li>
              <li class="flex items-center gap-1">
                <i class="fa fa-calendar-alt text-base"></i>
                <span>{{ article.date }}</span>
              </li>
              <li class="flex items-center gap-1">
                <i class="fa fa-folder text-base"></i>
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

          <!-- Content (dùng excerpt làm demo, có thể mở rộng nếu có content thật) -->
          <div class="space-y-6">
            <p>{{ article.excerpt }}</p>
            <!-- Demo gallery row -->
            <div class="flex flex-col md:flex-row gap-4 mb-8">
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
            <ul class="space-y-2 mb-6">
              <li class="flex items-center text-lg font-semibold text-gray-800">
                <i class="fa fa-check-circle text-cyan-500 mr-3"></i>
                Sed ut perspiciatis unde omnis iste natus error sit volupeaque ipsa quae ab illo inventore
              </li>
              <li class="flex items-center text-lg font-semibold text-gray-800">
                <i class="fa fa-check-circle text-cyan-500 mr-3"></i>
                Eam soluta dicunt cu. Est ad oporteat appellantur, per dic ta pertinax cueaque ipsa quae ab illo
              </li>
              <li class="flex items-center text-lg font-semibold text-gray-800">
                <i class="fa fa-check-circle text-cyan-500 mr-3"></i>
                Cu movet debitis cum. Vix paulo evertquasi arch itecto beatae vitae dictaitur conceptam
              </li>
            </ul>
            <!-- Callout Section -->
            <section
              class="relative py-12 px-6 rounded-2xl overflow-hidden bg-cover bg-center mb-8"
              style="background-image: url('https://ytetot.monamedia.net/wp-content/uploads/2023/08/bg.jpg');"
            >
              <div
                class="absolute inset-0 opacity-100"
                style="background-image: url('https://ytetot.monamedia.net/wp-content/uploads/2023/08/coats-2.png'); background-repeat:no-repeat; background-position:bottom right;">
              </div>
              <div class="relative z-10 max-w-2xl">
                <h3 class="text-2xl md:text-3xl font-bold text-blue-900 mb-3">
                  Dedicated Professionals &amp; Doctors Recommend Us
                </h3>
                <p class="text-lg mb-4">
                  Dedicated professionals committed to providing you with accurate and reliable diagnostic services. Get patholab services today from the best lab experts &amp; make a visit to our laboratory.
                </p>
                <div class="flex flex-wrap gap-3">
                  <a
                    href="https://ytetot.monamedia.net/contact/"
                    class="bg-gradient-to-r from-cyan-400 to-green-300 text-white px-8 py-3 rounded-full font-bold transition hover:from-cyan-500 hover:to-green-400 shadow"
                  >
                    Get Patholab Services
                  </a>
                  <a
                    href="https://ytetot.monamedia.net/contact/"
                    class="bg-white text-gray-900 px-8 py-3 rounded-full font-bold border-2 border-cyan-400 transition hover:bg-gray-100"
                  >
                    Book A Home Visit
                  </a>
                </div>
              </div>
            </section>
            <!-- Video Section -->
            <div class="relative rounded-2xl overflow-hidden mb-8">
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
                <div class="bg-cyan-400 w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
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
        <div class="border-t pt-5 flex flex-col md:flex-row md:justify-end gap-3 items-center bg-white px-6 pb-2">
          <div class="flex items-center gap-3">
            <label class="text-lg font-semibold text-blue-900">Share:</label>
            <a
              :href="`http://www.facebook.com/sharer/sharer.php?u=${currentUrl}`"
              title="Facebook"
              target="_blank"
              class="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center text-white hover:shadow-lg transition"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
            <a
              :href="`https://twitter.com/intent/tweet?url=${currentUrl}`"
              title="Twitter"
              target="_blank"
              class="w-8 h-8 rounded-full bg-cyan-400 flex items-center justify-center text-white hover:shadow-lg transition"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              :href="`http://pinterest.com/pin/create/button/?url=${currentUrl}&media=${article.image}`"
              title="Pinterest"
              target="_blank"
              class="w-8 h-8 rounded-full bg-red-700 flex items-center justify-center text-white hover:shadow-lg transition"
            >
              <i class="fab fa-pinterest-p"></i>
            </a>
            <a
              :href="`http://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}`"
              title="LinkedIn"
              target="_blank"
              class="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center text-white hover:shadow-lg transition"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <!-- Author info -->
        <div
          class="border mx-4 my-6 rounded-2xl bg-gray-100 flex flex-col sm:flex-row items-center gap-6 px-6 py-8"
        >
          <div class="w-28 h-28 rounded-full overflow-hidden flex-shrink-0">
            <img
              src="https://secure.gravatar.com/avatar/9aa427444ce51d8e095ab8fef39bcc8b?s=160&d=mm&r=g"
              class="w-full h-full object-cover"
              alt="Author"
            />
          </div>
          <div>
            <h3 class="text-2xl font-bold text-blue-900 mb-1">
              <a :href="article.authorLink" class="hover:text-cyan-500">{{ article.author }}</a>
            </h3>
            <div class="text-lg text-gray-600"></div>
            <ul class="flex mt-2 gap-2"></ul>
          </div>
        </div>
        <!-- Comment Section (demo tĩnh) -->
        <div id="comments" class="px-6 py-8">
          <div class="mb-10">
            <h2 class="comments-title text-3xl font-bold text-blue-900 mb-4">Bình luận ({{ article.commentsCount }})</h2>
            <ul class="space-y-6">
              <li class="flex gap-4 items-start">
                <img
                  src="https://secure.gravatar.com/avatar/fcc9a2c990202a32071fefd42cdfe724?s=90&d=mm&r=g"
                  class="rounded-full w-20 h-20 object-cover"
                  alt=""
                />
                <div class="flex-1">
                  <h4 class="text-xl font-bold text-blue-900 mb-2">Demo User</h4>
                  <div class="text-base text-gray-700 mb-2">Đây là bình luận mẫu.</div>
                  <a
                    href="#"
                    class="uppercase text-base font-semibold text-cyan-500 hover:underline"
                  >Bình luận</a>
                </div>
              </li>
            </ul>
          </div>
          <!-- Comment form (demo, chưa xử lý submit) -->
          <div id="respond" class="mt-10">
            <h4 class="comment-reply-title text-3xl font-bold text-blue-900 mb-2">
              Leave A Comment
            </h4>
            <form class="w-full" autocomplete="off">
              <span class="block text-sm font-semibold mb-4 text-gray-700">Your email address will not be published *</span>
              <div class="flex flex-wrap gap-6 mb-4">
                <div class="flex-1 min-w-[180px]">
                  <label class="block mb-1 font-semibold text-gray-700">Your Name*</label>
                  <input type="text" class="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="Name" />
                </div>
                <div class="flex-1 min-w-[180px]">
                  <label class="block mb-1 font-semibold text-gray-700">Your Email*</label>
                  <input type="text" class="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="Email" />
                </div>
                <div class="flex-1 min-w-[180px]">
                  <label class="block mb-1 font-semibold text-gray-700">Your Phone*</label>
                  <input type="text" class="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="Phone" />
                </div>
              </div>
              <div class="flex items-center mb-6">
                <input type="checkbox" id="wp-comment-cookies-consent" class="w-5 h-5 mr-2" />
                <label for="wp-comment-cookies-consent" class="text-gray-600 text-sm">Save my details in this browser for the next time I comment.</label>
              </div>
              <div class="mb-6">
                <label class="block mb-1 font-semibold text-gray-700">Message</label>
                <textarea rows="6" class="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="Comment"></textarea>
              </div>
              <button
                type="submit"
                class="bg-gradient-to-r from-cyan-400 to-green-300 text-white font-bold px-10 py-3 rounded-full transition hover:from-cyan-500 hover:to-green-400"
              >Post Comment</button>
            </form>
          </div>
        </div>
      </article>
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
      :recentPosts="[]"
      :tags="[]"
      :getTagLink="() => ''"
      :searchQuery="''"
      :onSearch="() => {}"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import KnowledgeSidebar from './KnowledgeSidebar.vue'

const allArticles = ref([])
const isLoading = ref(true)
const route = useRoute()
const articleId = computed(() => Number(route.params.id))
const currentUrl = window.location.href

const article = computed(() => allArticles.value.find(a => a.id === articleId.value))

onMounted(async () => {
  try {
    const res = await fetch('/articles.json')
    if (res.ok) {
      allArticles.value = await res.json()
    } else {
      allArticles.value = []
    }
  } catch (e) {
    allArticles.value = []
  } finally {
    isLoading.value = false
    console.log('[onMounted] allArticles:', allArticles.value)
    console.log('[onMounted] articleId:', articleId.value)
    console.log('[onMounted] article:', article.value)
  }
})

watch(article, (val) => {
  console.log('[watch] article changed:', val)
})
watch(allArticles, (val) => {
  console.log('[watch] allArticles changed:', val)
})
watch(articleId, (val) => {
  console.log('[watch] articleId changed:', val)
})
</script>

<style>
/* Bạn có thể thêm custom style nhỏ nếu muốn */
</style>