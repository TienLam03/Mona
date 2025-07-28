<template>
  <div class="overflow-hidden w-full">
    <div
      ref="slider"
      class="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-4"
    >
      <div
        v-for="(slide, i) in slides"
        :key="i"
        class="relative min-w-[280px] h-[400px] rounded-2xl overflow-hidden group flex-shrink-0"
      >
        <img
          :src="slide.image"
          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div
          class="absolute inset-0 bg-gradient-to-t from-[#1c2760]/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"
        ></div>

        <div
          class="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-4 shadow-md transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-500"
        >
          <p class="text-sm text-teal-500">{{ slide.label }}</p>
          <h3 class="text-lg font-semibold text-[#1c2760]">{{ slide.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'



const slides = [
  {
    image: "../../public/ghe.png",
    label: 'Pathology',
    title: 'Translational Research',
  },
  {
    image: "../../public/ban.png",
    label: 'Technology',
    title: 'Digital Dentistry',
  },
  {
    image: "../../public/may.png",
    label: 'Innovation',
    title: 'Smart Clinic Design',
  },
  {
    image: "../../public/vatchat.png",
    label: 'Equipment',
    title: 'Advanced Tools',
  },
   {
    image: "../../public/ghe.png",
    label: 'Pathology',
    title: 'Translational Research',
  },
   {
    image: "../../public/ban.png",
    label: 'Technology',
    title: 'Digital Dentistry',
  },
]

const slider = ref(null)
let interval = null

// Tự động cuộn slider
onMounted(() => {
  const el = slider.value
  let scrollAmount = 0

  interval = setInterval(() => {
    if (!el) return

    scrollAmount += 300 // px mỗi lần trượt
    if (scrollAmount >= el.scrollWidth - el.clientWidth) {
      scrollAmount = 0
    }

    el.scrollTo({
      left: scrollAmount,
      behavior: 'smooth',
    })
  }, 4000)
})

onBeforeUnmount(() => {
  clearInterval(interval)
})
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
