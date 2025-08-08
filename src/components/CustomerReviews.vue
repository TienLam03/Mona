<template>
  <div class="bg-white rounded-lg p-6 border border-gray-200 shadow-md">
    <div class="text-center mb-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-2">Khách hàng đánh giá</h2>
      <div class="w-8 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto"></div>
    </div>
    
    <!-- Reviews Carousel -->
    <div class="relative">
      <div class="overflow-hidden">
        <div 
          class="flex transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <div 
            v-for="(review, index) in reviews" 
            :key="index"
            class="w-full flex-shrink-0 px-4"
          >
            <div class="bg-gray-50 rounded-lg p-6 text-center">
              <!-- Star Rating -->
              <div class="flex justify-center mb-4">
                <div class="flex space-x-1">
                  <i 
                    v-for="star in 5" 
                    :key="star"
                    class="fas fa-star text-yellow-400 text-xl"
                  ></i>
                </div>
              </div>
              
              <!-- Review Text -->
              <p class="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "{{ review.comment }}"
              </p>
              
              <!-- Customer Info -->
              <div class="flex items-center justify-center space-x-4">
                <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full flex items-center justify-center">
                  <span class="text-white font-bold text-lg">{{ review.name.charAt(0) }}</span>
                </div>
                <div class="text-left">
                  <h4 class="font-semibold text-gray-900">{{ review.name }}</h4>
                  <p class="text-sm text-gray-600">{{ review.position }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Navigation Dots -->
      <div class="flex justify-center space-x-2 mt-6">
        <button
          v-for="(review, index) in reviews"
          :key="index"
          @click="setCurrentIndex(index)"
          :class="[
            'w-3 h-3 rounded-full transition-colors duration-300',
            currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
          ]"
        ></button>
      </div>
      
      <!-- Navigation Arrows -->
      <button
        @click="previousSlide"
        class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-200 rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <i class="fas fa-chevron-left text-gray-600"></i>
      </button>
      <button
        @click="nextSlide"
        class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-200 rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <i class="fas fa-chevron-right text-gray-600"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentIndex = ref(0)
const autoPlayInterval = ref(null)

const reviews = ref([
  {
    name: 'Văn Long',
    position: 'Khách hàng',
    image: '/src/assets/service/images/testi-1.jpg',
    comment: 'Dịch vụ tại Yteto khiến tôi ấn tượng từ lần đầu tiên. Các bác sĩ tư vấn rất kỹ lưỡng và giải thích cặn kẽ về các quy trình.',
    stars: 'five-star'
  },
  {
    name: 'Nguyễn Thị Hoa',
    position: 'Khách hàng',
    image: '/src/assets/service/images/testi-2.jpg',
    comment: 'Sau khi trám răng tại đây, nụ cười của tôi đã tự tin hơn rất nhiều. Bác sĩ rất tận tâm và chuyên nghiệp.',
    stars: 'five-star'
  },
  {
    name: 'Trần Văn Minh',
    position: 'Khách hàng',
    image: '/src/assets/service/images/testi-3.jpg',
    comment: 'Phòng khám có trang thiết bị hiện đại và đội ngũ nhân viên rất thân thiện. Tôi rất hài lòng với dịch vụ.',
    stars: 'five-star'
  },
  {
    name: 'Lê Thị Lan',
    position: 'Khách hàng',
    image: '/src/assets/service/images/testi-4.jpg',
    comment: 'Quy trình khám và điều trị rất chuyên nghiệp. Bác sĩ giải thích rõ ràng và tôi cảm thấy an tâm khi điều trị.',
    stars: 'five-star'
  }
])

const setCurrentIndex = (index) => {
  currentIndex.value = index
}

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % reviews.value.length
}

const previousSlide = () => {
  currentIndex.value = currentIndex.value === 0 
    ? reviews.value.length - 1 
    : currentIndex.value - 1
}

const startAutoPlay = () => {
  autoPlayInterval.value = setInterval(() => {
    nextSlide()
  }, 5000)
}

const stopAutoPlay = () => {
  if (autoPlayInterval.value) {
    clearInterval(autoPlayInterval.value)
  }
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>
