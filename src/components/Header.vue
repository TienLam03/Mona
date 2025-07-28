<template>
    <header class="w-full text-sm">
        <div class="text-white flex justify-between px-3 py-4 items-center">
            <div class="relative">
                <div
                    class="absolute top-1/2 right-0 bottom-0 z-[-1] h-[215%] w-[500%] bg-[#1D2864] transform -translate-y-1/2 skew-x-[40deg]"
                ></div>
                <div class="flex gap-2 items-center pr-12">
                    <span class="text-teal-400 font-semibold">HỖ TRỢ</span>
                    <span>ĐẶT KHÁM</span>
                    <div class="flex items-center gap-1 ml-4">
                        <div class="bg-[#18c3b9] text-white rounded-full w-7 h-7 flex items-center justify-center">
                            <i class="fas fa-phone"></i>
                        </div>
                        <span>(+84) <strong>0313-728-397</strong></span>
                    </div>
                </div>
            </div>
            <div class="flex items-center gap-4 text-[#1D2864] text-sm">
                <div class="flex items-center gap-1">
                    <i class="fas fa-envelope text-teal-400"></i>
                    <span>info@themona.global</span>
                </div>
                <div class="flex items-center gap-1">
                    <i class="fas fa-map-marker-alt text-teal-400"></i>
                    <span>1073/23 CMT8, P.7, Q.Tân Bình, TP.HCM</span>
                </div>
            </div>
        </div>

        <!-- Main Navigation -->
        <div class="flex justify-between items-center px-6 py-4">
            <!-- Logo -->
            <div class="flex items-center gap-2">
                <img src="/logoo.png" alt="logo" class="w-[150px] h-[70px]" />
                <div class="leading-15"></div>
            </div>

            <!-- Menu -->
            <nav class="flex gap-7 font-semibold text-[#1c2760] mr-[200px]">
                <a class="text-teal-500 border-b-2 border-teal-500 pb-1" href="/">Trang chủ</a>
                <a href="/about">Giới thiệu</a>
                <a href="#">Dịch vụ <i class="fas fa-chevron-down text-xs"></i></a>
                <a href="#">Hướng dẫn khách hàng</a>
                <a href="#">Kiến thức</a>
                <a href="#">Liên hệ</a>
            </nav>

            <div class="flex items-center gap-3">
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
                    <i class="fas fa-calendar-alt mr-2"></i> Đặt lịch khám
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
