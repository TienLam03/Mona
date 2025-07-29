<template>
    <section class="bg-[#e6fbff] py-16">
        <div class="max-w-6xl mx-auto text-center mb-12 px-4">
            <p class="text-teal-500 font-semibold">Cam Kết Chất Lượng</p>
            <h2 class="text-4xl font-bold mt-2 mb-4">Dịch vụ phổ biến</h2>
            <p class="text-gray-600">
                Tại <span class="font-semibold text-[#1c2760]">Ytetot</span>, mục tiêu của chúng tôi là mang lại các
                dịch vụ nha khoa tốt nhất <br />
                cho khách hàng và không ngừng cải tiến để hỗ trợ sức khỏe răng miệng một <br />
                cách tối ưu.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
            <div
                v-for="(service, index) in services"
                :key="index"
                class="group relative rounded-xl overflow-hidden shadow-lg bg-white transition-all duration-500 hover:shadow-2xl"
            >
                <!-- Ảnh + Overlay -->
                <div class="relative w-full h-72 overflow-hidden">
                    <img
                        :src="service.image"
                        :alt="service.title"
                        class="w-full h-full object-cover transition duration-500"
                    />

                    <!-- Chữ hiện lên giữa khi hover -->
                    <div
                        class="absolute inset-0 flex items-center justify-center bg-white/80 text-center opacity-0 group-hover:opacity-100 transition duration-500"
                    >
                        <h3 class="text-xl font-bold text-[#1c2760] px-4">
                            {{ service.title }}
                        </h3>
                    </div>
                </div>

                <!-- Nội dung dưới -->
                <div class="p-6 text-left">
                    <h3 class="text-xl font-bold text-[#1c2760] mb-2">
                        {{ service.title }}
                    </h3>
                    <p class="text-gray-500 text-sm mb-4">
                        {{ service.desc }}
                    </p>
                    <p class="text-sm">
                        <span class="text-teal-500 font-semibold">Bao gồm</span>
                        <span class="text-[#1c2760] font-semibold"> Kiểm tra chỉ số về sức khỏe</span>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const services = [
    {
        title: 'Điều Trị Viêm Nướu',
        desc: 'Bao gồm kiểm tra và đánh giá 90 chỉ số về sức khỏe răng miệng.',
        image: doctor,
    },
    {
        title: 'Nhổ Răng Khôn',
        desc: 'Bao gồm kiểm tra toàn diện và xét nghiệm định kỳ.',
        image: doctor1,
    },
    {
        title: 'Vệ Sinh Răng Miệng',
        desc: 'Kiểm tra định kỳ để duy trì sức khỏe răng miệng.',
        image: doctor2,
    },
    {
        title: 'Vệ Sinh Răng Miệng',
        desc: 'Kiểm tra định kỳ để duy trì sức khỏe răng miệng.',
        image: doctor2,
    },
    {
        title: 'Nhổ Răng Khôn',
        desc: 'Bao gồm kiểm tra toàn diện và xét nghiệm định kỳ.',
        image: doctor1,
    },
    {
        title: 'Nhổ Răng Khôn',
        desc: 'Bao gồm kiểm tra toàn diện và xét nghiệm định kỳ.',
        image: doctor1,
    },
];
import doctor from '@/assets/img/bacsi.png';
import doctor1 from '@/assets/img/bacsi.png';
import doctor2 from '@/assets/img/bacsi.png';
</script>
