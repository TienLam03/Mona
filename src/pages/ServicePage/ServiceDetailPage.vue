<template>
  <!-- Banner Section -->
  <section class="relative w-full h-[300px] md:h-[420px] text-white text-center">
    <!-- Background Image -->
    <img 
      src="/src/assets/img/bannergt.png" 
      alt="Service Banner" 
      class="absolute inset-0 w-full h-full object-cover z-0" 
    />

    <!-- Content -->
    <div class="relative z-20 flex flex-col justify-center items-center h-full px-4">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ service.title }}</h1>
      <div class="text-base md:text-lg flex items-center gap-2">
        <span>TRANG CHỦ</span>
        <span class="text-white/70">›</span>
        <span>PACKAGE</span>
        <span class="text-white/70">›</span>
        <span class="text-teal-400 font-semibold">{{ service.title }}</span>
      </div>
    </div>
  </section>

  <div class="font-sans bg-white pt-20 text-[#6F7F90] text-base leading-normal">
    <div class="max-w-[1140px] mx-auto px-4">
      <div class="flex flex-wrap -mx-4">
        <!-- Main Content Column (72%) -->
        <div class="w-full lg:w-8/12 px-4">
          <!-- Image + Title Section -->
          <div class="flex flex-wrap mb-[50px]">
            <!-- Image Column (45%) -->
            <div class="w-full md:w-[45%] pr-[15px]">
              <div class="rounded-xl shadow-[0px_3px_10px_0px_rgba(0,0,0,0.5)] overflow-hidden">
                <img :src="service.mainImage" :alt="service.title" class="w-full h-auto">
              </div>
            </div>
            
            <!-- Content Column (55%) -->
            <div class="w-full md:w-[55%] pl-[20px]">
              <h3 class="text-[#1D2864] text-3xl font-semibold mb-5 font-['Chakra_Petch']">{{ service.title }}</h3>
              <div class="text-xl mb-2.5">{{ service.description }}</div>
              
              <!-- Package Info -->
              <div class="mt-5">
                <div class="flex flex-wrap -mx-2">
                  <!-- Item 1 -->
                  <div class="w-1/2 px-2 mb-4 flex items-center">
                    <div class="w-[60px] h-[60px] min-w-[60px] rounded-full bg-[rgba(56,201,247,0.1)] flex items-center justify-center mr-3 transition-all duration-300 hover:shadow-[0px_2px_1px_#abc]">
                      <i class="fas fa-th text-[#2AD2C1] text-3xl"></i>
                    </div>
                    <div>
                      <label class="block text-[#1D2864] text-lg font-semibold mb-1 font-['Chakra_Petch']">Checkup Category</label>
                      <a href="#" class="text-[#4286f5] hover:text-[#2AD2C1] hover:underline">{{ service.category }}</a>
                    </div>
                  </div>
                  
                  <!-- Item 2 -->
                  <div class="w-1/2 px-2 mb-4 flex items-center">
                    <div class="w-[60px] h-[60px] min-w-[60px] rounded-full bg-[rgba(56,201,247,0.1)] flex items-center justify-center mr-3 transition-all duration-300 hover:shadow-[0px_2px_1px_#abc]">
                      <i class="fas fa-flask text-[#2AD2C1] text-3xl"></i>
                    </div>
                    <div>
                      <label class="block text-[#1D2864] text-lg font-semibold mb-1 font-['Chakra_Petch']">Number of Tests</label>
                      <span class="text-[#4286f5]">Kiểm tra chỉ số về sức khỏe</span>
                    </div>
                  </div>
                </div>
                
                <router-link 
                  to="/contact"
                  class="inline-flex items-center justify-center bg-[#2AD2C1] text-white text-lg font-medium px-8 py-3 rounded-full mt-10 shadow-[0_5px_20px_rgba(42,210,193,0.5)] hover:bg-[#1D2864] transition-all duration-300"
                >
                  Đặt lịch khám
                </router-link>
              </div>
            </div>
          </div>
          
          <!-- Description -->
          <div class="text-lg mb-10">
            {{ service.longDescription }}
          </div>
          
          <!-- Advantages Section -->
          <div class="mb-5">
            <h3 class="text-[#1D2864] text-3xl font-semibold mb-0 font-['Chakra_Petch']">Ưu Điểm của {{ service.title }}</h3>
            <svg width="33" height="7" viewBox="0 0 33 7" fill="none" class="mt-2">
              <path d="M33 1.71875C29.7 1.71875 29.7 5.71875 26.402 5.71875C23.1 5.71875 23.1 1.71875 19.8 1.71875C16.5 1.71875 16.5 5.71875 13.201 5.71875C9.901 5.71875 9.901 1.71875 6.601 1.71875C3.301 1.71875 3.303 5.71875 0 5.71875" stroke="url(#paint0_linear_911_44929)" stroke-width="2"></path>
              <defs>
                <linearGradient id="paint0_linear_911_44929" x1="0" y1="3.71875" x2="33" y2="3.71875" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#24B7D3"></stop>
                  <stop offset="1" stop-color="#30EFAD"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          <!-- Advantages List -->
          <div class="text-lg mb-2.5">
            <ul class="list-inside">
              <li v-for="(advantage, index) in service.advantages" :key="index" class="mb-2 flex items-start">
                <i class="fas fa-check text-[#2AD2C1] mr-2 mt-1"></i>
                {{ advantage }}
              </li>
            </ul>
          </div>
          
          <!-- Gallery Section -->
          <div class="flex flex-wrap -mx-4 my-10">
            <div v-for="(image, index) in service.galleryImages" :key="index" class="w-1/3 px-4">
              <div class="rounded-xl overflow-hidden" :class="index === 0 ? 'mr-5' : index === 1 ? 'mx-2.5' : 'ml-5'">
                <img :src="image" :alt="`${service.title} - Hình ${index + 1}`" class="w-full h-auto">
              </div>
            </div>
          </div>
          
          <!-- Process Steps -->
          <div class="lg:px-[50px] mb-[50px]">
            <div class="flex flex-wrap -mx-4">
              <div v-for="step in service.processSteps" :key="step.number" class="w-full md:w-1/2 px-4 mb-8">
                <div class="relative pl-[65px] my-4">
                  <span class="absolute left-0 top-2 w-10 h-10 flex items-center justify-center bg-[#e1f6f9] rounded-full text-[#2AD2C1] font-semibold">{{ step.number }}</span>
                  <label class="block text-[#1c2539] text-xl font-semibold mb-2 font-['Chakra_Petch']">{{ step.title }}</label>
                  <div class="leading-relaxed">{{ step.description }}</div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Customer Reviews -->
          <div class="mb-[30px]">
            <h3 class="text-[#1D2864] text-3xl font-semibold mb-0 font-['Chakra_Petch']">
              <span class="inline-block overflow-hidden">
                <span class="inline-block overflow-hidden"><span class="letter animated">Khách</span></span>
                <span class="inline-block overflow-hidden"><span class="letter animated" style="transition-delay: 80ms">hàng</span></span>
                <span class="inline-block overflow-hidden"><span class="letter animated" style="transition-delay: 160ms">đánh</span></span>
                <span class="inline-block overflow-hidden"><span class="letter animated" style="transition-delay: 240ms">giá</span></span>
              </span>
            </h3>
            <svg width="33" height="7" viewBox="0 0 33 7" fill="none" class="mt-2">
              <path d="M33 1.71875C29.7 1.71875 29.7 5.71875 26.402 5.71875C23.1 5.71875 23.1 1.71875 19.8 1.71875C16.5 1.71875 16.5 5.71875 13.201 5.71875C9.901 5.71875 9.901 1.71875 6.601 1.71875C3.301 1.71875 3.303 5.71875 0 5.71875" stroke="url(#paint0_linear_911_44929)" stroke-width="2"></path>
              <defs>
                <linearGradient id="paint0_linear_911_44929" x1="0" y1="3.71875" x2="33" y2="3.71875" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#24B7D3"></stop>
                  <stop offset="1" stop-color="#30EFAD"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          <!-- Testimonials Carousel -->
          <div class="bg-[#f4fcfd] rounded-2xl p-[50px_40px_50px_60px] mb-[50px]">
            <div class="flex flex-col lg:flex-row items-center relative">
              <!-- Thumbnails -->
              <div class="lg:w-[205px] lg:min-w-[205px] lg:min-h-[285px] overflow-hidden relative mb-8 lg:mb-0">
                <div class="relative w-full h-full">
                  <!-- Active Slide -->
                  <div class="absolute top-0 left-0 right-0 w-full h-full opacity-100">
                    <div class="pxl-item--inner">
                      <div class="rounded-full overflow-hidden mb-5 transition-all duration-300">
                        <img :src="reviews[currentReview].image" :alt="reviews[currentReview].name" class="w-full min-h-[205px] max-h-[205px] object-cover">
                      </div>
                      <div class="text-center transition-all duration-300 transform translate-y-0 scale-100 opacity-100">
                        <h4 class="text-[#1D2864] text-xl font-semibold mb-1 font-['Chakra_Petch']">{{ reviews[currentReview].name }}</h4>
                        <div class="text-[#4286f5] font-medium">{{ reviews[currentReview].position }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Reviews Content -->
              <div class="lg:ml-[70px] lg:pl-[60px] lg:border-l border-dotted border-[#d9d9d9] w-full">
                <!-- Active Review -->
                <div class="opacity-100">
                  <div class="mb-6">
                    <span class="five-star inline-block mb-6">
                      <i v-for="star in 5" :key="star" class="inline-block text-[17px]">★</i>
                    </span>
                    <div class="text-[#046270] text-2xl leading-relaxed font-['Chakra_Petch']">
                      "{{ reviews[currentReview].comment }}"
                    </div>
                  </div>
                </div>
                
                <!-- Pagination -->
                <div class="flex justify-start mt-2.5 lg:pl-4">
                  <span 
                    v-for="(review, index) in reviews" 
                    :key="index"
                    @click="setCurrentReview(index)"
                    class="w-[39px] h-5 relative mx-0.5 cursor-pointer"
                  >
                    <span class="absolute top-1/2 left-0 w-full h-[3px] rounded-[3px] transform -translate-y-1/2" :class="currentReview === index ? 'bg-[#2AD2C1]' : 'bg-[#d2dbe8]'"></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- FAQ Section -->
          <div class="mb-[30px]">
            <h3 class="text-[#1D2864] text-3xl font-semibold mb-0 font-['Chakra_Petch']">
              <span class="inline-block overflow-hidden">
                <span class="inline-block overflow-hidden"><span class="letter animated">FAQ</span></span>
              </span>
            </h3>
            <svg width="33" height="7" viewBox="0 0 33 7" fill="none" class="mt-2">
              <path d="M33 1.71875C29.7 1.71875 29.7 5.71875 26.402 5.71875C23.1 5.71875 23.1 1.71875 19.8 1.71875C16.5 1.71875 16.5 5.71875 13.201 5.71875C9.901 5.71875 9.901 1.71875 6.601 1.71875C3.301 1.71875 3.303 5.71875 0 5.71875" stroke="url(#paint0_linear_911_44929)" stroke-width="2"></path>
              <defs>
                <linearGradient id="paint0_linear_911_44929" x1="0" y1="3.71875" x2="33" y2="3.71875" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#24B7D3"></stop>
                  <stop offset="1" stop-color="#30EFAD"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          <!-- FAQ Accordion -->
          <div class="flex flex-wrap -mx-4 mb-[70px]">
            <!-- Left Column -->
            <div class="w-full md:w-1/2 px-4 pr-[15px]">
              <div class="mb-7">
                <div v-for="(item, index) in service.faqItems.slice(0, Math.ceil(service.faqItems.length / 2))" :key="index" class="border border-[#d2dbe8] rounded-md relative mb-7">
                  <h3 @click="toggleAccordion(index)" class="text-[#1D2864] text-sm py-7 px-5 pr-[80px] rounded-md cursor-pointer relative">
                    <span>{{ item.question }}</span>
                    <i class="absolute right-5 top-1/2 w-8 h-8 rounded-md bg-[#2AD2C1] text-white text-base font-bold flex items-center justify-center transform -translate-y-1/2" :class="activeAccordion === index ? 'rotate-45' : ''">+</i>
                  </h3>
                  <div class="text-[#6F7F90] leading-relaxed text-sm px-5 pt-5" :class="activeAccordion === index ? 'block' : 'hidden'">
                    {{ item.answer }}
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Right Column -->
            <div class="w-full md:w-1/2 px-4 pl-[15px]">
              <div class="mb-7">
                <div v-for="(item, index) in service.faqItems.slice(Math.ceil(service.faqItems.length / 2))" :key="index + Math.ceil(service.faqItems.length / 2)" class="border border-[#d2dbe8] rounded-md relative mb-7">
                  <h3 @click="toggleAccordion(index + Math.ceil(service.faqItems.length / 2))" class="text-[#1D2864] text-sm py-7 px-5 pr-[80px] rounded-md cursor-pointer relative">
                    <span>{{ item.question }}</span>
                    <i class="absolute right-5 top-1/2 w-8 h-8 rounded-md bg-[#2AD2C1] text-white text-base font-bold flex items-center justify-center transform -translate-y-1/2" :class="activeAccordion === (index + Math.ceil(service.faqItems.length / 2)) ? 'rotate-45' : ''">+</i>
                  </h3>
                  <div class="text-[#6F7F90] leading-relaxed text-sm px-5 pt-5" :class="activeAccordion === (index + Math.ceil(service.faqItems.length / 2)) ? 'block' : 'hidden'">
                    {{ item.answer }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Sidebar Column (28%) -->
        <div class="w-full lg:w-4/12 px-4 sticky top-0">
          <!-- Contact Info -->
          <div class="rounded-xl shadow-[0px_5px_83px_0px_rgba(13,14,67,0.08)] overflow-hidden bg-[#E1F6F9] mb-[30px]">
            <div class="p-[30px_30px_45px]">
              <!-- Address -->
              <div class="border-b border-[rgba(4,98,112,0.1)] pb-[35px] mb-[35px]">
                <div class="text-[#1D2864] text-xl font-semibold mb-2.5 font-['Chakra_Petch']">Địa chỉ</div>
                <div class="text-[16px] pl-[25px] relative">
                  <i class="fas fa-map-marker-alt gradient-text absolute left-0 text-xl"></i>
                  1073/23 CMT8, P.7, Q.Tân Bình, TP.HCM
                </div>
              </div>
              
              <!-- Contact -->
              <div class="border-b border-[rgba(4,98,112,0.1)] pb-[35px] mb-[35px]">
                <div class="text-[#1D2864] text-xl font-semibold mb-2.5 font-['Chakra_Petch']">Thông tin liên hệ</div>
                <ul class="list-none mb-0">
                  <li class="mb-2.5">
                    <a href="mailto:info@themona.global" class="text-[#6F7F90] hover:gradient-text">
                      <i class="fas fa-envelope mr-1"></i>
                      <span>info@themona.global</span>
                    </a>
                  </li>
                  <li>
                    <a href="tel:0313728397" class="text-[#6F7F90] hover:gradient-text">
                      <i class="fas fa-phone mr-1 shake-animation"></i>
                      <span>(+84) 0313-728-397</span>
                    </a>
                  </li>
                </ul>
              </div>
              
              <!-- Opening Hours -->
              <div>
                <div class="flex flex-wrap">
                  <div class="w-[80px] min-w-[80px] max-h-[80px] rounded-md bg-[#2AD2C1] flex items-center justify-center mr-5 mt-1 mb-2.5">
                    <i class="fas fa-clock text-white text-4xl pxl-spin"></i>
                  </div>
                  <div class="text-base">
                    <div class="text-[#1D2864] text-xl font-semibold mb-2.5">Giờ mở cửa</div>
                    <div>Thứ 2 - Chủ nhật <cite class="block not-italic text-[#2AD2C1]">8:00 - 18:00</cite></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Contact Box -->
          <div class="rounded-2xl overflow-hidden relative text-center pt-[420px] px-5 pb-[30px] mb-[40px]">
            <div class="absolute inset-0 w-full h-full bg-[url('https://ytetot.monamedia.net/wp-content/uploads/2023/09/bg-banner-box.png')] bg-bottom bg-cover bg-no-repeat z-[-2]"></div>
            <div class="text-white text-lg font-medium max-w-[199px] mx-auto my-[10px]">Nhận Kiểm tra răng tốt nhất</div>
            <div class="inline-flex items-center justify-center max-w-[320px] mx-auto ml-5 bg-white px-[25px] pl-[35px] py-[15px] rounded-2xl relative shadow-[5px_0_#4286f5]">
              <div class="absolute -left-5 top-1/2 w-10 h-10 rounded-full shadow-[0px_0px_0px_5px_rgba(42,210,193,0.5)] transform -translate-y-1/2 flex items-center justify-center gradient-bg shake-animation">
                <i class="fas fa-phone text-white text-lg"></i>
              </div>
              <div class="text-left">
                <label class="text-[#2AD2C1] text-sm font-medium uppercase">Hỗ trợ 24/7</label>
                <div class="text-[#1D2864] text-xl font-semibold uppercase font-['Chakra_Petch']">
                  <a href="tel:0313728397">(+84) 0313-728-397</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getServiceBySlug } from '@/data/services'

const route = useRoute()

const service = computed(() => {
  const slug = route.params.slug || 'tram-rang-tham-my'
  return getServiceBySlug(slug) || getServiceBySlug('tram-rang-tham-my')
})

// Customer Reviews
const currentReview = ref(0)
const reviews = ref([
  {
    name: 'Văn Long',
    position: 'Khách hàng',
    image: '/src/assets/service/images/testi-1.jpg',
    comment: 'Dịch vụ tại Yteto khiến tôi ấn tượng từ lần đầu tiên. Các bác sĩ tư vấn rất kỹ lưỡng và giải thích cặn kẽ về các quy trình.'
  },
  {
    name: 'Nguyễn Thị Hoa',
    position: 'Khách hàng',
    image: '/src/assets/service/images/testi-2.jpg',
    comment: 'Sau khi trám răng tại đây, nụ cười của tôi đã tự tin hơn rất nhiều. Bác sĩ rất tận tâm và chuyên nghiệp.'
  },
  {
    name: 'Trần Văn Minh',
    position: 'Khách hàng',
    image: '/src/assets/service/images/testi-3.jpg',
    comment: 'Phòng khám có trang thiết bị hiện đại và đội ngũ nhân viên rất thân thiện. Tôi rất hài lòng với dịch vụ.'
  }
])

const setCurrentReview = (index) => {
  currentReview.value = index
}

// FAQ Accordion
const activeAccordion = ref(0)

const toggleAccordion = (index) => {
  if (activeAccordion.value === index) {
    activeAccordion.value = -1 // Close if already open
  } else {
    activeAccordion.value = index // Open clicked item
  }
}
</script>

<style scoped>
/* Custom fonts */
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700;800;900&display=swap');

/* Custom animations */
@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes pxl_spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes shakeThatBooty {
  33% { transform: rotateZ(20deg); }
  67% { transform: rotateZ(-20deg); }
  100% { transform: rotateZ(20deg); }
}

.fadeInUp { animation-name: fadeInUp; }
.animated { animation-duration: 1.25s; animation-fill-mode: both; }
.letter { transform: translateY(100%); transition: 0.4s cubic-bezier(0.24, 0.74, 0.58, 1); }
.letter.animated { transform: translateY(0); }
.five-star i { color: #ffb422; }
.four-star i:nth-child(1),
.four-star i:nth-child(2),
.four-star i:nth-child(3),
.four-star i:nth-child(4) { color: #ffb422; }
.pxl-spin { animation: pxl_spin 6s infinite linear; }
.shake-animation { animation: shakeThatBooty 2s ease infinite; }
.gradient-text {
  background: linear-gradient(to right, #24B7D3, #30EFAD);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.gradient-bg {
  background: linear-gradient(to right, #24B7D3, #30EFAD);
}
</style>