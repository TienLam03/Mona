<template>
    <footer class="text-white relative pt-[140px] mt-12">
        <div
            class="absolute right-0 -bottom-0 bg-center bg-no-repeat bg-cover h-full w-full"
            style="background-image: url('https://ytetot.monamedia.net/wp-content/uploads/2023/08/bg-footer3.jpg')"
        ></div>
        <div class="opacity-90 bg-[#002573] h-full w-full top-0 left-0 absolute"></div>
        <div class="relative">
            <!-- Đăng ký nhận tin -->
            <div
                class="w-full max-w-full xl:max-w-7xl px-5 py-10 rounded-2xl absolute top-[-180px] left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#24B7D3] to-[#39E2A8] mb-12 flex flex-col md:flex-row items-center justify-between gap-4"
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

            <!-- Nội dung chính -->
            <div class="max-w-full xl:max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <!-- ✅ Dùng ảnh từ public (không dùng import) -->
                    <img src="/logoo.png" alt="logo" class="w-36 mb-4" />
                    <p class="text-sm leading-relaxed text-white/90 mb-6">
                        Phòng khám nha khoa chuyên nghiệp với đội ngũ bác sĩ giàu kinh nghiệm, sẵn lòng phục vụ và chăm
                        sóc cho hàm răng của bạn
                    </p>
                    <div class="hidden xl:flex items-center gap-3">
                        <!-- Social Icons -->
                        <div class="flex gap-3">
                            <a
                                href="#"
                                class="w-9 h-9 bg-[#f5f8fc] rounded-full flex items-center justify-center text-[#1c2760] hover:text-[#e6f8f4] hover:bg-[#32e6a5] transition"
                            >
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a
                                href="#"
                                class="w-9 h-9 bg-[#f5f8fc] rounded-full flex items-center justify-center text-[#1c2760] hover:text-[#e6f8f4] hover:bg-[#32e6a5] transition"
                            >
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a
                                href="#"
                                class="w-9 h-9 bg-[#f5f8fc] rounded-full flex items-center justify-center text-[#1c2760] hover:text-[#e6f8f4] hover:bg-[#32e6a5] transition"
                            >
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a
                                href="#"
                                class="w-9 h-9 bg-[#f5f8fc] rounded-full flex items-center justify-center text-[#1c2760] hover:text-[#e6f8f4] hover:bg-[#32e6a5] transition"
                            >
                                <i class="fab fa-pinterest-p"></i>
                            </a>
                            <div class="w-px h-8 bg-gray-300"></div>
                        </div>
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
            <div class="max-w-7xl mx-auto mt-5 text-white grid grid-cols-1 md:grid-cols-3">
                <!-- Phone -->
                <div class="flex items-center gap-4 px-6 py-4 border border-[#FFFFFF33]">
                    <div class="bg-teal-400 p-3 rounded-full text-[#0B2C6A]">
                        <i class="fas fa-phone text-xl"></i>
                    </div>
                    <div>
                        <p class="text-sm">Liên hệ ngay</p>
                        <p class="text-green-400 font-bold">(+84) 0313-728-397</p>
                    </div>
                </div>

                <!-- Email -->
                <div class="flex items-center gap-4 px-6 py-4 border border-[#FFFFFF33]">
                    <i class="fas fa-envelope text-teal-400 text-xl"></i>
                    <p class="font-bold">info@themona.global</p>
                </div>

                <!-- Address -->
                <div class="flex items-center gap-4 px-6 py-4 border border-[#FFFFFF33]">
                    <i class="fas fa-map text-teal-400 text-xl"></i>
                    <p class="font-bold">1073/23 CMT8, P.7, Q.Tân Bình, TP.HCM</p>
                </div>
            </div>

            <div class="flex items-center justify-center text-center py-8 text-base font-medium">
                <p>@ Thiết lập và lập trình bởi MONA.Media/Website</p>
            </div>
        </div>
    </footer>

    <!-- Nút scroll lên đầu -->
    <button
        v-show="showButton"
        @click="scrollToTop"
        class="fixed w-12 h-12 bottom-4 right-4 bg-white text-teal-500 rounded-full shadow-lg border-[5px] border-teal-500 cursor-pointer hover:scale-105 transition z-50 flex items-center justify-center"
    >
        <i class="fas fa-arrow-up text-lg"></i>
    </button>
</template>

<script setup>
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
/* Font Awesome */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
</style>
