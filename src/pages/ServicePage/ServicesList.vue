<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Dịch Vụ Nha Khoa</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Chúng tôi cung cấp các dịch vụ nha khoa chất lượng cao với đội ngũ bác sĩ giàu kinh nghiệm
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="service in services" 
          :key="service.id"
          class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <!-- Service Image -->
          <div class="relative h-48 overflow-hidden">
            <img 
              :src="service.mainImage" 
              :alt="service.title"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div class="absolute bottom-4 left-4">
              <span class="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                {{ service.category }}
              </span>
            </div>
          </div>

          <!-- Service Content -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ service.title }}</h3>
            <p class="text-gray-600 mb-4 line-clamp-3">{{ service.description }}</p>
            
            <!-- Service Features -->
            <div class="space-y-2 mb-6">
              <div 
                v-for="(advantage, index) in service.advantages.slice(0, 2)" 
                :key="index"
                class="flex items-start space-x-2"
              >
                <div class="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i class="fas fa-check text-white text-xs"></i>
                </div>
                <p class="text-sm text-gray-600">{{ advantage.split(':')[1] || advantage }}</p>
              </div>
            </div>

            <!-- Action Button -->
            <router-link 
              :to="`/service/${service.slug}`"
              class="inline-block w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold py-3 px-6 rounded-lg text-center hover:from-blue-600 hover:to-teal-500 transition-all duration-300 transform hover:scale-105"
            >
              Xem Chi Tiết
            </router-link>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="mt-16 text-center">
        <div class="bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg p-8 text-white">
          <h2 class="text-3xl font-bold mb-4">Cần Tư Vấn Thêm?</h2>
          <p class="text-xl mb-6 opacity-90">
            Hãy liên hệ với chúng tôi để được tư vấn chi tiết về dịch vụ phù hợp
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link 
              to="/contact"
              class="bg-white text-blue-500 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Liên Hệ Ngay
            </router-link>
            <a 
              href="tel:0313728397"
              class="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-500 transition-colors duration-300"
            >
              Gọi Hotline
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getAllServices } from '@/data/services'

const services = getAllServices()
</script>