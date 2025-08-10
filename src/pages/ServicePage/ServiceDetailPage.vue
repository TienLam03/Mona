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

  <div class="min-h-screen bg-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <!-- Left Column - Main Content (72%) -->
        <div class="lg:col-span-8">
          <!-- Service Image and Description Section -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <!-- Service Image -->
            <div class="space-y-4">
              <div class="relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  :src="service.mainImage" 
                  :alt="service.title" 
                  class="w-full h-96 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
            
            <!-- Service Info -->
            <div class="space-y-6">
              <div>
                <h1 class="text-4xl font-bold text-gray-900 mb-6 font-['Chakra_Petch'] leading-tight">{{ service.title }}</h1>
                <p class="text-gray-600 leading-relaxed text-lg">{{ service.description }}</p>
              </div>
              
              <!-- Package Info Box -->
              <div class="bg-gray-50 rounded-xl p-8 space-y-6 shadow-sm">
                <div class="flex items-center space-x-4">
                  <div class="w-14 h-14 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full flex items-center justify-center shadow-md">
                    <i class="fas fa-th text-white text-xl"></i>
                  </div>
                  <div>
                    <p class="text-sm text-gray-500 font-semibold mb-1">Checkup Category</p>
                    <p class="font-semibold text-blue-600 text-lg">{{ service.category }}</p>
                  </div>
                </div>
                <div class="flex items-center space-x-4">
                  <div class="w-14 h-14 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full flex items-center justify-center shadow-md">
                    <i class="fas fa-flask text-white text-xl"></i>
                  </div>
                  <div>
                    <p class="text-sm text-gray-500 font-semibold mb-1">Number of Tests</p>
                    <p class="font-semibold text-blue-600 text-lg">Kiểm tra chỉ số về sức khỏe</p>
                  </div>
                </div>
                <router-link 
                  to="/contact"
                  class="inline-block w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold py-4 px-8 rounded-full text-center hover:from-blue-600 hover:to-teal-500 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
                >
                  Đặt lịch khám
                </router-link>
              </div>
            </div>
          </div>

          <!-- Service Description -->
          <div class="mb-16">
            <p class="text-gray-700 leading-relaxed text-lg">{{ service.longDescription }}</p>
          </div>

          <!-- Advantages Section -->
          <div class="mb-16">
            <div class="text-center mb-12">
              <h2 class="text-4xl font-bold text-gray-900 mb-4 font-['Chakra_Petch']">Ưu Điểm của {{ service.title }}</h2>
              <div class="w-12 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto rounded-full"></div>
            </div>
            <div class="space-y-6">
              <div 
                v-for="(advantage, index) in service.advantages" 
                :key="index"
                class="flex items-start space-x-6 p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
                  <i class="fas fa-check text-white text-sm"></i>
                </div>
                <p class="text-gray-700 text-lg leading-relaxed">{{ advantage }}</p>
              </div>
            </div>
          </div>

          <!-- Service Images Gallery -->
          <div class="mb-16">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div 
                v-for="(image, index) in service.galleryImages" 
                :key="index"
                class="relative overflow-hidden rounded-xl shadow-md"
              >
                <img 
                  :src="image" 
                  :alt="`${service.title} - Hình ${index + 1}`"
                  class="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
          </div>

          <!-- Process Steps -->
          <div class="mb-16">
            <div class="text-center mb-12">
              <h2 class="text-4xl font-bold text-gray-900 mb-4 font-['Chakra_Petch']">Quy Trình Thực Hiện</h2>
              <div class="w-12 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto rounded-full"></div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div 
                v-for="step in service.processSteps" 
                :key="step.number"
                class="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div class="text-center space-y-6">
                  <div class="w-20 h-20 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <span class="text-white font-bold text-2xl">{{ step.number }}</span>
                  </div>
                  <h3 class="font-bold text-gray-900 text-xl font-['Chakra_Petch']">{{ step.title }}</h3>
                  <p class="text-gray-600 text-base leading-relaxed">{{ step.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Customer Reviews -->
          <div class="mb-16">
            <div class="text-center mb-12">
              <h2 class="text-4xl font-bold text-gray-900 mb-4 font-['Chakra_Petch']">Khách hàng đánh giá</h2>
              <div class="w-12 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto rounded-full"></div>
            </div>
            <div class="bg-gray-50 rounded-3xl p-16">
              <div class="flex flex-col lg:flex-row items-center">
                <!-- Thumbnails -->
                <div class="lg:w-1/3 mb-8 lg:mb-0">
                  <div class="flex lg:flex-col space-x-6 lg:space-x-0 lg:space-y-6">
                    <div 
                      v-for="(review, index) in reviews" 
                      :key="index"
                      @click="setCurrentReview(index)"
                      :class="[
                        'w-20 h-20 rounded-full overflow-hidden cursor-pointer transition-all duration-300 shadow-md',
                        currentReview === index ? 'ring-4 ring-blue-500 scale-110' : 'opacity-60 hover:opacity-100'
                      ]"
                    >
                      <img 
                        :src="review.image" 
                        :alt="review.name"
                        class="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                <!-- Review Content -->
                <div class="lg:w-2/3 lg:pl-16">
                  <div class="text-center lg:text-left">
                    <!-- Star Rating -->
                    <div class="flex justify-center lg:justify-start mb-8">
                      <div class="flex space-x-2">
                        <i 
                          v-for="star in 5" 
                          :key="star"
                          class="fas fa-star text-yellow-400 text-2xl"
                        ></i>
                      </div>
                    </div>
                    
                    <!-- Review Text -->
                    <p class="text-gray-700 text-2xl leading-relaxed mb-8 italic font-['Chakra_Petch']">
                      "{{ reviews[currentReview].comment }}"
                    </p>
                    
                    <!-- Customer Info -->
                    <div class="flex items-center justify-center lg:justify-start space-x-6">
                      <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full flex items-center justify-center shadow-lg">
                        <span class="text-white font-bold text-xl">{{ reviews[currentReview].name.charAt(0) }}</span>
                      </div>
                      <div class="text-left">
                        <h4 class="font-bold text-gray-900 text-xl font-['Chakra_Petch']">{{ reviews[currentReview].name }}</h4>
                        <p class="text-blue-600 font-semibold text-lg">{{ reviews[currentReview].position }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- FAQ Section -->
          <div class="mb-16">
            <div class="text-center mb-12">
              <h2 class="text-4xl font-bold text-gray-900 mb-4 font-['Chakra_Petch']">FAQ</h2>
              <div class="w-12 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto rounded-full"></div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="space-y-6">
                <div 
                  v-for="(item, index) in service.faqItems.slice(0, Math.ceil(service.faqItems.length / 2))" 
                  :key="index"
                  class="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
                >
                  <button
                    @click="toggleAccordion(index)"
                    class="w-full px-8 py-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-300 flex items-center justify-between"
                  >
                    <span class="font-bold text-gray-900 text-lg">{{ item.question }}</span>
                    <i 
                      :class="[
                        'fas transition-transform duration-300 text-blue-500',
                        activeAccordion === index ? 'fa-minus' : 'fa-plus'
                      ]"
                    ></i>
                  </button>
                  <div 
                    v-show="activeAccordion === index"
                    class="px-8 py-6 bg-white border-t border-gray-200"
                  >
                    <p class="text-gray-700 leading-relaxed text-lg">{{ item.answer }}</p>
                  </div>
                </div>
              </div>
              <div class="space-y-6">
                <div 
                  v-for="(item, index) in service.faqItems.slice(Math.ceil(service.faqItems.length / 2))" 
                  :key="index + Math.ceil(service.faqItems.length / 2)"
                  class="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
                >
                  <button
                    @click="toggleAccordion(index + Math.ceil(service.faqItems.length / 2))"
                    class="w-full px-8 py-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-300 flex items-center justify-between"
                  >
                    <span class="font-bold text-gray-900 text-lg">{{ item.question }}</span>
                    <i 
                      :class="[
                        'fas transition-transform duration-300 text-blue-500',
                        activeAccordion === (index + Math.ceil(service.faqItems.length / 2)) ? 'fa-minus' : 'fa-plus'
                      ]"
                    ></i>
                  </button>
                  <div 
                    v-show="activeAccordion === (index + Math.ceil(service.faqItems.length / 2))"
                    class="px-8 py-6 bg-white border-t border-gray-200"
                  >
                    <p class="text-gray-700 leading-relaxed text-lg">{{ item.answer }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column - Contact Info (28%) -->
        <div class="lg:col-span-4 space-y-8">
          <!-- Contact Information -->
          <div class="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-10 shadow-lg">
            <div class="space-y-10">
              <!-- Address -->
              <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-6 font-['Chakra_Petch']">Địa chỉ</h3>
                <div class="flex items-start space-x-4">
                  <i class="fas fa-map-marker-alt text-blue-500 mt-1 text-2xl"></i>
                  <p class="text-gray-700 text-lg">1073/23 CMT8, P.7, Q.Tân Bình, TP.HCM</p>
                </div>
              </div>
              
              <!-- Contact Info -->
              <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-6 font-['Chakra_Petch']">Thông tin liên hệ</h3>
                <div class="space-y-4">
                  <a 
                    href="mailto:info@themona.global"
                    class="flex items-center space-x-4 text-gray-700 hover:text-blue-500 transition-colors duration-300"
                  >
                    <i class="fas fa-envelope text-blue-500 text-xl"></i>
                    <span class="text-lg">info@themona.global</span>
                  </a>
                  <a 
                    href="tel:0313728397"
                    class="flex items-center space-x-4 text-gray-700 hover:text-blue-500 transition-colors duration-300"
                  >
                    <i class="fas fa-phone text-blue-500 text-xl"></i>
                    <span class="text-lg">(+84) 0313-728-397</span>
                  </a>
                </div>
              </div>
              
              <!-- Opening Hours -->
              <div class="flex items-start space-x-6">
                <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-400 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <i class="fas fa-clock text-white text-2xl"></i>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-900 mb-3 font-['Chakra_Petch']">Giờ mở cửa</h3>
                  <p class="text-gray-700 text-lg">Thứ 2 - Chủ nhật <span class="font-bold text-blue-500">8:00 - 18:00</span></p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Box -->
          <div class="bg-gradient-to-r from-blue-500 to-teal-400 rounded-2xl p-10 text-white text-center shadow-xl relative overflow-hidden">
            <div class="relative z-10">
              <p class="text-2xl mb-10 font-semibold">Nhận Kiểm tra răng tốt nhất</p>
              <div class="flex items-center justify-center space-x-6">
                <div class="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center shadow-lg">
                  <i class="fas fa-phone text-white text-2xl"></i>
                </div>
                <div class="text-left">
                  <p class="text-sm opacity-90 mb-2">Hỗ trợ 24/7</p>
                  <a 
                    href="tel:0313728397"
                    class="text-3xl font-bold hover:opacity-80 transition-opacity duration-300"
                  >
                    (+84) 0313-728-397
                  </a>
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
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.6s ease-out;
}
</style>
