<template>
    <header class="w-full text-sm sticky top-0 z-50 bg-white shadow">
        <div class="text-white flex justify-between px-3 py-4 items-center bg-[#1D2864] sm:bg-transparent">
            <div class="relative">
                <div
                    class="hidden xl:block absolute top-1/2 right-0 bottom-0 z-[-1] h-[215%] w-[500%] bg-[#1D2864] transform -translate-y-1/2 skew-x-[40deg]"
                ></div>
                <div class="flex items-center gap-2 pr-12">
                    <span class="font-semibold text-teal-400">HỖ TRỢ</span>
                    <span>ĐẶT KHÁM</span>
                    <div class="flex items-center gap-1 ml-4">
                        <div class="bg-[#18c3b9] text-white rounded-full w-7 h-7 flex items-center justify-center">
                            <i class="fas fa-phone"></i>
                        </div>
                        <span>(+84) <strong>0313-728-397</strong></span>
                    </div>
                </div>
            </div>
            <div class="hidden xl:flex items-center gap-4 text-[#1D2864] text-sm">
                <div class="flex items-center gap-1">
                    <i class="text-teal-400 fas fa-envelope"></i>
                    <span>info@themona.global</span>
                </div>
                <div class="flex items-center gap-1">
                    <i class="text-teal-400 fas fa-map-marker-alt"></i>
                    <span>1073/23 CMT8, P.7, Q.Tân Bình, TP.HCM</span>
                </div>
            </div>
        </div>

        <!-- Main Navigation -->
        <div class="flex items-center justify-between px-6 py-4">
            <!-- Logo -->
            <div class="flex items-center gap-2">
                <router-link to="/">
                    <img src="/logoo.png" alt="logo" class="w-[150px] h-[70px]" />
                </router-link>
                <div class="leading-15"></div>
            </div>

            <!-- Menu -->
            <nav class="hidden xl:flex gap-7 font-semibold text-[#1c2760] mr-[50px]">
                <a class="pb-1 text-teal-500 border-b-2 border-teal-500" href="/">Trang chủ</a>
                <a href="/about">Giới thiệu</a>
                <a href="#">Dịch vụ <i class="text-xs fas fa-chevron-down"></i></a>
                <a href="#">Hướng dẫn khách hàng</a>
                <a href="/blog">Kiến thức</a>
                <a href="/contact">Liên hệ</a>
            </nav>

            <!-- Icon Menu (mobile) -->
            <button class="xl:hidden text-2xl text-[#1c2760]" @click="isOpen = !isOpen">
                <i :class="isOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
            </button>

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
                <button
                    class="ml-4 px-4 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-[#18c3b9] to-[#32e6a5] text-2xl"
                >
                    <i class="mr-2 fas fa-calendar-alt"></i> Đặt lịch khám
                </button>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
};
</script>
