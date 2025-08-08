<template>
  <div class="faq-section bg-white rounded-lg p-6 border border-gray-200 shadow-md">
    <div class="text-center mb-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-2">FAQ</h2>
      <div class="w-8 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto"></div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="space-y-4">
        <div 
          v-for="(item, index) in faqItems.slice(0, Math.ceil(faqItems.length / 2))" 
          :key="index"
          class="border border-gray-200 rounded-lg overflow-hidden"
        >
          <button
            @click="toggleAccordion(index)"
            class="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-300 flex items-center justify-between"
          >
            <span class="font-semibold text-gray-900">{{ item.question }}</span>
            <i 
              :class="[
                'fas transition-transform duration-300',
                activeIndex === index ? 'fa-chevron-up' : 'fa-chevron-down'
              ]"
            ></i>
          </button>
          <div 
            v-show="activeIndex === index"
            class="px-6 py-4 bg-white border-t border-gray-200"
          >
            <p class="text-gray-700 leading-relaxed">{{ item.answer }}</p>
          </div>
        </div>
      </div>
      <div class="space-y-4">
        <div 
          v-for="(item, index) in faqItems.slice(Math.ceil(faqItems.length / 2))" 
          :key="index + Math.ceil(faqItems.length / 2)"
          class="border border-gray-200 rounded-lg overflow-hidden"
        >
          <button
            @click="toggleAccordion(index + Math.ceil(faqItems.length / 2))"
            class="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-300 flex items-center justify-between"
          >
            <span class="font-semibold text-gray-900">{{ item.question }}</span>
            <i 
              :class="[
                'fas transition-transform duration-300',
                activeIndex === (index + Math.ceil(faqItems.length / 2)) ? 'fa-chevron-up' : 'fa-chevron-down'
              ]"
            ></i>
          </button>
          <div 
            v-show="activeIndex === (index + Math.ceil(faqItems.length / 2))"
            class="px-6 py-4 bg-white border-t border-gray-200"
          >
            <p class="text-gray-700 leading-relaxed">{{ item.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  faqItems: {
    type: Array,
    default: () => []
  }
})

const activeIndex = ref(0)

const toggleAccordion = (index) => {
  if (activeIndex.value === index) {
    activeIndex.value = -1 // Close if already open
  } else {
    activeIndex.value = index // Open clicked item
  }
}
</script>

<style scoped>
.faq-section {
  margin-bottom: 40px;
}

.heading {
  text-align: center;
  margin-bottom: 30px;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #23336A;
  margin-bottom: 20px;
}

.text-slide {
  display: inline-block;
  margin: 0 5px;
}

.letter {
  display: inline-block;
  animation: fadeInUp 0.6s ease-out;
}

.animated {
  animation-delay: 0.1s;
}

.faq-container {
  margin-top: 30px;
}

.elementor-container {
  display: flex;
  gap: 30px;
}

.elementor-column {
  flex: 1;
}

.accordion-item {
  border: 1px solid #eee;
  margin-bottom: 10px;
  border-radius: 6px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.accordion-item:hover {
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.accordion-title {
  background: #f8f9fa;
  padding: 20px;
  margin: 0;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 600;
  color: #23336A;
  transition: all 0.3s ease;
}

.accordion-title:hover {
  background: #e9ecef;
}

.accordion-item.active .accordion-title {
  background: linear-gradient(135deg, #24B7D3, #30EFAD);
  color: #fff;
}

.accordion-content {
  padding: 0 20px;
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease;
  color: #666;
  line-height: 1.6;
}

.accordion-item.active .accordion-content {
  padding: 20px;
  max-height: 200px;
}

.icofont-plus {
  transition: transform 0.3s ease;
}

.accordion-item.active .icofont-plus {
  transform: rotate(45deg);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .elementor-container {
    flex-direction: column;
  }
  
  .elementor-column {
    flex: none;
  }
}
</style>
