<template>
    <!-- Topbar: Hotline chéo trái + contact info -->
    <div class="relative w-full bg-white">
        <div class="flex items-center justify-between mx-auto h-[48px]">
            <!-- Khối xanh hình thang vuông -->
            <div
                class="relative flex items-center h-full xl:min-w-[480px] xl:max-w-[495px] w-full z-10 xl:clip-polygon-custom"
                style="background: #23336a"
            >
                <span class="uppercase text-[#2AD2C1] font-bold tracking-wider text-base ml-6">Hỗ trợ</span>
                <span class="ml-1 text-base font-bold tracking-wider text-white uppercase">Đặt khám</span>
                <span class="w-8 h-8 flex items-center justify-center rounded-full bg-[#2AD2C1] text-white ml-4 mr-2">
                    <i class="text-lg fa-solid fa-phone"></i>
                </span>
                <a
                    href="tel:0313728397"
                    class="text-white text-base font-bold tracking-wide hover:text-[#2AD2C1] transition"
                >
                    (+84) 0313-728-397
                </a>
            </div>
            <!-- Contact info bên phải -->
            <div
                class="hidden xl:flex flex-1 justify-end items-center h-full gap-0 text-[#23336A] text-base font-medium"
            >
                <a
                    href="mailto:info@themona.global"
                    class="flex items-center gap-1 hover:text-[#2AD2C1] transition mr-6"
                >
                    <i class="fa-regular fa-envelope text-[#2AD2C1] mr-1"></i>
                    info@themona.global
                </a>
                <span class="w-px h-4 mx-2 bg-gray-200"></span>
                <a class="flex items-center gap-1 hover:text-[#2AD2C1] transition">
                    <i class="fa-regular fa-map text-[#2AD2C1] mr-1"></i>
                    1073/23 CMT8, P.7, Q.Tân Bình, TP.HCM
                </a>
            </div>
        </div>
    </div>

    <!-- Main header: Logo, menu, social, button -->
    <header class="w-full bg-white">
        <div class="max-w-[1920px] mx-auto flex items-center justify-between px-2 lg:px-8 py-4">
            <!-- Logo -->
            <router-link to="/" class="flex items-center min-w-[220px]">
                <img
                    src="https://ytetot.monamedia.net/wp-content/uploads/2024/11/1-e1730690836792.png"
                    alt="Logo"
                    class="object-contain w-auto h-10"
                />
            </router-link>

            <!-- Hamburger Button -->
            <button
                class="lg:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5"
                @click="toggleMenu"
            >
                <span :class="['w-6 h-0.5 bg-black transition-all duration-300']"></span>
                <span :class="['w-6 h-0.5 bg-black transition-all duration-300']"></span>
                <span :class="['w-6 h-0.5 bg-black transition-all duration-300']"></span>
            </button>

            <!-- Slide-in Menu -->
            <transition name="slide">
                <div
                    v-if="isOpen"
                    class="fixed top-0 left-0 h-full w-[250px] bg-white shadow-lg p-6 z-40 transition-transform duration-300 ease-in-out"
                >
                    <button
                        @click="toggleMenu"
                        class="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-black"
                    >
                        ×
                    </button>
                    <ul class="space-y-4">
                        <li><a href="/" class="block font-medium">Trang chủ</a></li>
                        <li><a href="/gioi-thieu" class="block font-medium">Giới thiệu</a></li>
                        <li><a href="/dich-vu" class="block font-medium">Dịch vụ</a></li>
                        <!-- ... -->
                    </ul>
                </div>
            </transition>

            <!-- Overlay (click để đóng menu) -->
            <!-- <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-40 z-30" @click="toggleMenu"></div> -->

            <!-- Menu -->
            <nav class="hidden xl:flex justify-center flex-1">
                <ul class="flex gap-8 items-center text-[#23336A] font-semibold text-base">
                    <li>
                        <router-link to="/" class="nav-link hover:text-[#2AD2C1] transition-colors duration-300"
                            >Trang chủ</router-link
                        >
                    </li>
                    <li>
                        <router-link to="/about" class="nav-link hover:text-[#2AD2C1] transition-colors duration-300"
                            >Giới thiệu</router-link
                        >
                    </li>
                    <li class="relative group">
                        <a
                            href="#"
                            class="nav-link flex items-center hover:text-[#2AD2C1] transition-colors duration-300"
                            >Dịch vụ
                            <i class="ml-1 text-xs fa-solid fa-chevron-down"></i>
                        </a>
                        <!-- Dropdown -->
                        <ul
                            class="absolute left-0 top-full mt-2 min-w-[210px] bg-white shadow-lg rounded py-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-30"
                        >
                            <li>
                                <router-link
                                    to="/service"
                                    class="block px-6 py-2 text-[#23336A] hover:bg-[#E8F8F6] hover:text-[#2AD2C1] rounded transition"
                                    >Trám Răng Thẩm Mỹ</router-link
                                >
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="block px-6 py-2 text-[#23336A] hover:bg-[#E8F8F6] hover:text-[#2AD2C1] rounded transition"
                                    >Niềng răng thẩm mỹ</a
                                >
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="block px-6 py-2 text-[#23336A] hover:bg-[#E8F8F6] hover:text-[#2AD2C1] rounded transition"
                                    >Nhổ Răng Khôn</a
                                >
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="block px-6 py-2 text-[#23336A] hover:bg-[#E8F8F6] hover:text-[#2AD2C1] rounded transition"
                                    >Vệ Sinh Răng Miệng</a
                                >
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="block px-6 py-2 text-[#23336A] hover:bg-[#E8F8F6] hover:text-[#2AD2C1] rounded transition"
                                    >Khám Răng Tổng Quát</a
                                >
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="block px-6 py-2 text-[#23336A] hover:bg-[#E8F8F6] hover:text-[#2AD2C1] rounded transition"
                                    >Điều Trị Viêm Nướu</a
                                >
                            </li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="/customer" class="nav-link hover:text-[#2AD2C1] transition-colors duration-300"
                            >Hướng dẫn khách hàng</router-link
                        >
                    </li>
                    <li>
                        <router-link to="/blog" class="nav-link hover:text-[#2AD2C1] transition-colors duration-300"
                            >Kiến thức</router-link
                        >
                    </li>
                    <li>
                        <router-link to="contact" class="nav-link hover:text-[#2AD2C1] transition-colors duration-300"
                            >Liên hệ</router-link
                        >
                    </li>
                </ul>
            </nav>
            <!-- Social + Button -->
            <div class="hidden xl:flex items-center gap-3">
                <div class="flex items-center gap-2 mr-4">
                    <a
                        href="#"
                        class="w-9 h-9 flex items-center justify-center rounded-full bg-[#F5F8FD] text-[#23336A] hover:bg-gradient-to-r hover:from-[#24B7D3] hover:to-[#30EFAD] hover:text-white transition"
                    >
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a
                        href="#"
                        class="w-9 h-9 flex items-center justify-center rounded-full bg-[#F5F8FD] text-[#23336A] hover:bg-gradient-to-r hover:from-[#24B7D3] hover:to-[#30EFAD] hover:text-white transition"
                    >
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a
                        href="#"
                        class="w-9 h-9 flex items-center justify-center rounded-full bg-[#F5F8FD] text-[#23336A] hover:bg-gradient-to-r hover:from-[#24B7D3] hover:to-[#30EFAD] hover:text-white transition"
                    >
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a
                        href="#"
                        class="w-9 h-9 flex items-center justify-center rounded-full bg-[#F5F8FD] text-[#23336A] hover:bg-gradient-to-r hover:from-[#24B7D3] hover:to-[#30EFAD] hover:text-white transition"
                    >
                        <i class="fab fa-pinterest-p"></i>
                    </a>
                </div>
                <router-link
                    to="/contact"
                    class="inline-flex items-center px-8 h-11 rounded-full bg-gradient-to-r from-[#24B7D3] to-[#30EFAD] text-white font-semibold text-base shadow hover:opacity-90 transition"
                >
                    <i class="mr-2 text-lg fa-regular fa-calendar-days"></i>
                    Đặt lịch khám
                </router-link>
            </div>
        </div>
    </header>
</template>

<!-- FontAwesome CDN, bắt buộc để icon hoạt động -->
<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"> -->

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const toggleMenu = () => {
    isOpen.value = !isOpen.value;
};
</script>

<style scoped>
/* Navigation Link Hover Effects */
.nav-link {
    position: relative;
    display: inline-block;
    padding-bottom: 4px;
    transition: color 0.3s ease-in-out;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #2ad2c1, #30efad);
    transition: width 0.4s ease-in-out;
}

.nav-link:hover::after {
    width: 100%;
}

/* Hover effect for text color */
.nav-link:hover {
    color: #2ad2c1 !important;
}

/* Animation for underline going from left to right on hover in, and right to left on hover out */
.nav-link::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #2ad2c1, #30efad);
    transition: width 0.4s ease-in-out;
    z-index: -1;
}

.nav-link:not(:hover)::before {
    width: 100%;
    transition: width 0.4s ease-in-out;
}

.nav-link:not(:hover)::after {
    transition-delay: 0.1s;
    width: 0;
}

/* Ensure dropdown menu items don't have the underline effect */
.group ul .nav-link::after,
.group ul .nav-link::before {
    display: none;
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease;
}
.slide-enter-from {
    transform: translateX(-100%);
}
.slide-enter-to {
    transform: translateX(0%);
}
.slide-leave-from {
    transform: translateX(0%);
}
.slide-leave-to {
    transform: translateX(-100%);
}
</style>
