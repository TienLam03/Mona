<template>
    <footer class="text-white relative pt-[140px]">
        <div
            class="absolute right-0 -bottom-0 bg-center bg-no-repeat bg-cover h-full w-full"
            style="background-image: url('https://ytetot.monamedia.net/wp-content/uploads/2023/08/bg-footer3.jpg')"
        ></div>
        <div class="opacity-90 bg-[#002573] h-full w-full top-0 left-0 absolute"></div>
        <div class="relative">
            <div
                class="p-6 rounded-2xl absolute top-[-180px] left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#24B7D3] to-[#39E2A8] max-w-4xl mb-12 flex flex-col md:flex-row items-center justify-between gap-4"
            >
                <h3 class="text-2xl font-bold text-white text-center md:text-left">Đăng ký để nhận tin tức mới nhất</h3>
                <div class="flex gap-2 w-full md:w-auto">
                    <input
                        type="email"
                        placeholder="Nhập Email..."
                        class="rounded-full px-6 py-2 text-gray-800 w-full md:w-64"
                    />
                    <button
                        class="bg-white text-teal-500 font-bold px-6 py-2 rounded-full shadow hover:bg-gray-100 transition"
                    >
                        Đăng ký
                    </button>
                </div>
            </div>

            <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <img :src="avatar1" alt="logo" class="w-36 mb-4" />
                    <p class="text-sm leading-relaxed text-white/90 mb-6">
                        Phòng khám nha khoa chuyên nghiệp với đội ngũ bác sĩ giàu kinh nghiệm, sẵn lòng phục vụ và chăm
                        sóc cho hàm răng của bạn
                    </p>
                    <div class="flex gap-4">
                        <i class="fab fa-facebook-f bg-white/10 p-2 rounded-md hover:bg-white/20 cursor-pointer"></i>
                        <i class="fab fa-twitter bg-white/10 p-2 rounded-md hover:bg-white/20 cursor-pointer"></i>
                        <i class="fab fa-instagram bg-white/10 p-2 rounded-md hover:bg-white/20 cursor-pointer"></i>
                        <i class="fab fa-pinterest bg-white/10 p-2 rounded-md hover:bg-white/20 cursor-pointer"></i>
                    </div>
                </div>

                <!-- Dịch vụ -->
                <div>
                    <h4 class="text-xl font-bold mb-3">Dịch vụ</h4>
                    <ul class="space-y-2 text-white/90 text-sm">
                        <li>Vệ Sinh Răng Miệng</li>
                        <li>Trám Răng Thẩm Mỹ</li>
                        <li>Khám Răng Tổng Quát</li>
                        <li>Niềng Răng Thẩm Mỹ</li>
                    </ul>
                </div>

                <!-- Kiến thức -->
                <div>
                    <h4 class="text-xl font-bold mb-3">Kiến thức</h4>
                    <ul class="space-y-2 text-white/90 text-sm">
                        <li>Thông tin kiến thức</li>
                        <li>Hỏi đáp bác sĩ</li>
                        <li>Phân tích</li>
                        <li>Tin tức</li>
                    </ul>
                </div>

                <!-- Google Maps -->
                <div>
                    <iframe
                        src="https://www.google.com/maps?q=1073%2F23%20C%C3%A1ch%20M%E1%BA%A1ng%20Th%C3%A1ng%208,%20T%C3%A2n%20B%C3%ACnh,%20HCM&output=embed"
                        width="100%"
                        height="200"
                        style="border: 0; border-radius: 12px"
                        allowfullscreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>

            <!-- Thông tin cuối -->
            <div
                class="max-w-7xl mx-auto mt-5 text-white grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white"
            >
                <!-- Phone -->
                <div class="flex items-center gap-4 px-6 py-4 max-w-7xl">
                    <div class="bg-teal-400 p-3 rounded-full text-[#0B2C6A]">
                        <i class="fas fa-phone text-xl"></i>
                    </div>
                    <div>
                        <p class="text-sm">Liên hệ ngay</p>
                        <p class="text-green-400 font-bold">(+84) 0313-728-397</p>
                    </div>
                </div>

                <!-- Email -->
                <div class="flex items-center gap-4 px-6 py-4">
                    <i class="fas fa-envelope text-teal-400 text-xl"></i>
                    <p class="font-bold">info@themona.global</p>
                </div>

                <!-- Address -->
                <div class="flex items-center gap-4 px-6 py-4">
                    <i class="fas fa-map text-teal-400 text-xl"></i>
                    <p class="font-bold">1073/23 CMT8, P.7, Q.Tân Bình, TP.HCM</p>
                </div>
            </div>
            <div class="flex items-center justify-center text-center">
                <p>@ Thiết lập và lập trình bởi MONA.Media/Website</p>
            </div>
        </div>
    </footer>

    <!-- Nút scroll lên đầu -->
    <button
        v-show="showButton"
        @click="scrollToTop"
        class="fixed bottom-4 right-4 bg-white text-teal-500 p-3 rounded-full shadow-lg cursor-pointer hover:scale-105 transition z-50"
    >
        <i class="fas fa-arrow-up"></i>
    </button>
</template>

<script setup>
import avatar1 from '../../public/logoo.png';
import { ref, onMounted, onUnmounted } from 'vue';

const showButton = ref(false);

const handleScroll = () => {
    showButton.value = window.scrollY > 200;
};

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Font Awesome nếu chưa cài: */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
</style>
