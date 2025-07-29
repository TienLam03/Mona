<template>
    <section class="bg-[#2AD2C1] py-16 text-white relative overflow-hidden">
        <div class="max-w-6xl mx-auto px-4 text-center mb-12">
            <div class="flex items-start gap-6 justify-center mb-12 flex-wrap text-white max-w-6xl mx-auto">
                <!-- Cột trái: Đánh giá -->
                <div class="flex flex-col">
                    <p class="font-semibold text-sm uppercase tracking-wide">Đánh giá</p>
                    <h2 class="text-4xl font-bold mt-2">Đánh giá khách hàng</h2>
                </div>

                <!-- Cột phải: Mô tả -->
                <p class="mt-2 text-white/80 leading-relaxed max-w-xl">
                    Mọi sự đóng góp của khách hàng chúng tôi sẽ ghi nhận <br />
                    và cải thiện chất lượng dịch vụ trong tương lai
                </p>
            </div>
        </div>

        <swiper
            :modules="[Navigation]"
            navigation
            :slides-per-view="1"
            :breakpoints="{
                768: { slidesPerView: 2 },
            }"
            space-between="30"
            class="max-w-6xl mx-auto px-4"
        >
            <swiper-slide
                v-for="(item, i) in testimonials"
                :key="i"
                class="bg-white text-[#1c2760] p-6 rounded-2xl shadow-md"
            >
                <div class="flex items-center gap-4 mb-4">
                    <img
                        :src="item.image"
                        alt="avatar"
                        class="w-16 h-16 rounded-full object-cover border-4 border-white shadow"
                    />
                    <div>
                        <h3 class="font-bold text-lg">{{ item.name }}</h3>
                        <p class="text-teal-500 text-sm font-semibold uppercase">
                            {{ item.position }}
                        </p>
                    </div>
                </div>
                <div class="text-yellow-500 mb-2">
                    <span v-for="n in 5" :key="n">★</span>
                </div>
                <p class="text-gray-700 text-sm">"{{ item.feedback }}"</p>
            </swiper-slide>
        </swiper>

        <!-- Nút điều hướng custom -->
        <div class="swiper-button-prev text-white left-2 absolute top-1/2 -translate-y-1/2 z-10"></div>
        <div class="swiper-button-next text-white right-2 absolute top-1/2 -translate-y-1/2 z-10"></div>
    </section>
</template>

<script setup>
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';

import avatar1 from '@/assets/img/bacsi.png';
import avatar2 from '@/assets/img/bacsi.png';

const testimonials = [
    {
        name: 'Văn Long',
        position: 'Giám đốc marketing',
        feedback:
            'Dịch vụ tại Yteto khiến tôi ấn tượng từ lần đầu tiên. Các bác sĩ tư vấn kỹ lưỡng và giải thích rõ ràng. Tôi hoàn toàn hài lòng!',
        image: avatar1,
    },
    {
        name: 'Bạch Ngân',
        position: 'Trưởng phòng nhân sự',
        feedback: 'Dịch vụ chuyên nghiệp, đội ngũ tận tâm. Tôi chắc chắn sẽ giới thiệu cho bạn bè, người thân.',
        image: avatar2,
    },
];
</script>
