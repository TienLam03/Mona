<template>
    <section class="relative w-full h-[300px] md:h-[420px] text-white text-center">
        <!-- Ảnh nền -->
        <img :src="banner" alt="Banner giới thiệu" class="absolute inset-0 w-full h-full object-cover z-0" />

        <!-- Overlay mờ -->
        <div class="absolute inset-0 z-10"></div>

        <!-- Nội dung -->
        <div class="relative z-20 flex flex-col justify-center items-center h-full px-4">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">Giới thiệu</h1>
            <div class="text-base md:text-lg flex items-center gap-2">
                <span>TRANG CHỦ</span>
                <span class="text-white/70">›</span>
                <span class="text-teal-400 font-semibold">GIỚI THIỆU</span>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import banner from '@/assets/img/bannergt.png';
</script>
