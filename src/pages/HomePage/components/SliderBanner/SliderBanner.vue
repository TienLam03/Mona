<template>
    <section class="w-screen min-h-screen bg-[#b4f2f8] flex items-center px-6 md:px-20 overflow-hidden relative">
        <div
            class="flex transition-transform duration-700 ease-in-out"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
            <div
                v-for="(slide, index) in slides"
                :key="index"
                class="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 items-center gap-8"
            >
                <!-- Text -->
                <div class="space-y-6">
                    <p class="text-teal-600 text-lg font-semibold">Ytetot</p>
                    <h1
                        class="text-4xl md:text-5xl font-extrabold leading-tight text-[#031b4e] drop-shadow-[2px_2px_0_rgba(0,212,212,1)]"
                    >
                        {{ slide.title }}
                    </h1>
                    <p class="text-gray-600 max-w-lg">
                        {{ slide.desc }}
                    </p>
                    <button
                        class="bg-[#00d4d4] text-white py-3 px-6 rounded-full font-semibold shadow hover:bg-[#00bcbc] transition"
                    >
                        Đặt lịch khám
                    </button>
                </div>

                <!-- Image -->
                <div class="flex justify-center md:justify-end">
                    <img :src="doctor1" alt="Doctor" class="max-w-xs md:max-w-md" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import doctor1 from '@/assets/img/bacsi.png';
import doctor2 from '@/assets/img/bacsi.png';

const slides = [
    {
        title: 'Phòng Khám Nha Khoa\nChuyên Nghiệp, Hiện đại',
        desc: 'Đội ngũ bác sĩ chuyên nghiệp, thiết bị tiên tiến, cam kết cung cấp dịch vụ nha khoa hàng đầu.',
        image: doctor1,
    },
    {
        title: 'Chăm sóc răng miệng\nTận tâm và Chu đáo',
        desc: 'Dịch vụ thân thiện, tư vấn kỹ lưỡng để bạn có nụ cười tự tin mỗi ngày.',
        image: doctor2,
    },
];

const currentIndex = ref(0);
let interval;

onMounted(() => {
    interval = setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % slides.length;
    }, 5000); // đổi slide mỗi 5 giây
});

onBeforeUnmount(() => {
    clearInterval(interval);
});
</script>
