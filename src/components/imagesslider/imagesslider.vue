<template>
    <div class="relative w-full h-64 overflow-hidden rounded-xl shadow-lg">
        <!-- Slide Images -->
        <div
            class="flex transition-transform duration-700 ease-in-out"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
            <div
                v-for="(image, index) in images"
                :key="index"
                class="w-full flex-shrink-0 h-64 bg-cover bg-center"
                :style="{ backgroundImage: `url(${image})` }"
            />
        </div>

        <!-- Prev / Next buttons -->
        <button
            class="absolute top-1/2 -translate-y-1/2 left-4 bg-white/70 hover:bg-white rounded-full p-2 shadow"
            @click="prev"
        >
            <i class="fas fa-chevron-left text-[#1c2760]"></i>
        </button>
        <button
            class="absolute top-1/2 -translate-y-1/2 right-4 bg-white/70 hover:bg-white rounded-full p-2 shadow"
            @click="next"
        >
            <i class="fas fa-chevron-right text-[#1c2760]"></i>
        </button>

        <!-- Indicators -->
        <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            <span
                v-for="(image, index) in images"
                :key="'dot-' + index"
                class="w-3 h-3 rounded-full"
                :class="currentIndex === index ? 'bg-[#32e6a5]' : 'bg-gray-300'"
            ></span>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const images = ['/ban.png', '/ghe.png', '/vatchat.png'];

const currentIndex = ref(0);

const next = () => {
    currentIndex.value = (currentIndex.value + 1) % images.length;
};

const prev = () => {
    currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
};

// Auto slide
let interval = null;
onMounted(() => {
    interval = setInterval(next, 4000);
});
onBeforeUnmount(() => {
    clearInterval(interval);
});
</script>
