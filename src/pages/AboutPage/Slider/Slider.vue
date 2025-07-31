<template>
    <div class="relative w-full max-w-6xl mx-auto overflow-hidden rounded-lg mt-16">
        <img :src="images[currentIndex]" alt="slider" class="w-full object-cover transition-all duration-500" />

        <button
            @click="prevSlide"
            class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-100"
        >
            ‹
        </button>

        <!-- Next Button -->
        <button
            @click="nextSlide"
            class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-100"
        >
            ›
        </button>
        <!-- Prev Button -->
    </div>
    <div class="w-full space-y-4 mx-auto max-w-6xl mt-10">
        <h2 class="font-semibold text-4xl text-[#1c2760]">Giới thiệu về Phòng khám Nha khoa Ytetot</h2>
        <p>
            Chúng tôi đồng hành cùng khách hàng vượt qua những vấn đề khó khăn, mang đến sự thấu hiểu và đánh giá chuyên
            sâu cho <br />
            từng trường hợp. Các phương pháp sáng tạo của Yteto tạo ra các giải pháp tối ưu cho những tình huống phức
            tạp nhất, từ <br />
            điều trị nha khoa đơn lẻ đến các vấn đề nha khoa chuyên sâu. Bằng việc suy nghĩ vì khách hàng mỗi ngày,
            chúng tôi không chỉ <br />
            đáp ứng nhu cầu mà còn xây dựng mối quan hệ bền vững. Yteto là phòng khám nha khoa tốt nhất trong thành phố
            với kết <br />
            quả điều trị uy tín và không gian phòng khám thoải mái. Tôi hoàn toàn hài lòng và tin tưởng vào chất lượng
            dịch vụ của Yteto.
        </p>
        <p class="text-blue-600">
            Trong hơn 35 năm qua, Yteto đã tạo ra một dấu ấn mạnh mẽ trong lĩnh vực chăm sóc răng miệng và vẫn còn cả
            một hành trình dài phía trước.
        </p>
        <p>
            Yteto là phòng khám nha khoa uy tín nhất trong thành phố. Tôi có trải nghiệm tuyệt vời tại đây, từ kết quả
            điều trị đến môi trường thân thiện và chuyên nghiệp. Tôi chân thành khuyên mọi người nên lựa chọn Yteto.
        </p>
    </div>
    <div class="mt-10 pb-20 w-full max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-10">
        <div class="w-1/2 space-y-4">
            <p class="text-[#2AD2C1] text-base">YTETOT</p>
            <p class="font-semibold text-4xl">Dịch vụ nha khoa đa dạng</p>
            <p class="mt-3">
                Chúng tôi cung cấp trải nghiệm dịch vụ nha khoa tốt nhất, với các gói chăm sóc chuyên sâu giúp xác định
                sức khỏe răng miệng của từng cá nhân và cung cấp báo cáo chi tiết về tình trạng nha chu, sâu răng, viêm
                nướu và các vấn đề khác.
            </p>
            <div class="flex items-center py-5">
                <div
                    class="max-w-24 max-h-24 min-w-24 min-h-24 mr-[23px] relative rounded-[12px] z-[1] flex items-center justify-center item-icon"
                >
                    <div>
                        <img :src="icon1" alt="" class="h-auto max-w-full" width="71" height="71" />
                    </div>
                </div>
                <div>
                    <p class="text-lg font-semibold">25 năm kinh nghiệm</p>
                    <p>
                        Là phòng khám nha khoa toàn diện phục vụ cho các khách hàng cần điều trị chuyên sâu. Sứ mệnh của
                        chúng tôi là đảm bảo cung cấp kết quả chính xác và đáng tin cậy để hỗ trợ sức khỏe răng miệng
                        toàn diện.
                    </p>
                </div>
            </div>
            <div class="flex items-center py-5 pt-10 border-t">
                <div
                    class="max-w-24 max-h-24 min-w-24 min-h-24 mr-[23px] relative rounded-[12px] z-[1] flex items-center justify-center item-icon"
                >
                    <div>
                        <img :src="icon2" alt="" class="h-auto max-w-full" width="71" height="71" />
                    </div>
                </div>

                <div>
                    <p class="text-lg font-semibold">Hỗ trợ nha khoa đẳng cấp thế giới</p>
                    <p>
                        Với hàng triệu lượt khách hàng mỗi năm, chúng tôi luôn sẵn sàng chăm sóc cho từng người với sự
                        tận tâm và chất lượng cao nhất.
                    </p>
                </div>
            </div>
        </div>

        <div class="w-full md:w-1/2 space-y-8 relative flex content-end items-end">
            <div class="relative inline-block px-8 pt-0 pb-[100px] z-10">
                <!-- Ảnh nền (nếu muốn nằm dưới) -->
                <div
                    class="bg-auto bg-[position:center_bottom] -z-10 w-full h-full absolute top-0 left-0 bottom-0 right-0"
                    style="
                        background-image: url('https://ytetot.monamedia.net/wp-content/uploads/2023/09/Vector-banner.png');
                    "
                ></div>

                <div class="max-w-[72%] bg-style">
                    <img :src="service" alt="" class="w-full h-auto max-w-full border-none rounded-none shadow-none" />
                </div>
                <div
                    class="inline-flex flex-col justify-center items-center absolute z-[1] text-center min-w-[160px] px-[15px] py-[28px] bottom-[66px] left-[30px] bg-style"
                >
                    <div class="absolute inset-0 w-full h-full z-[-1] bg-gradient"></div>
                    <div class="text-[44px] text-white leading-[1] font-semibold min-w-[80px] mb-[5px]">25</div>
                    <div class="text-white font-bold">
                        <p class="text-sm">NĂM</p>
                        <p class="text-[13px]">Kinh nghiệm</p>
                    </div>
                </div>
                <div class="absolute bottom-[50px] right-[30px] w-[217px] h-[217px] bg-style">
                    <img :src="service2" alt="" class="h-auto max-w-full border-0 rounded-none shadow-none" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Import icon
import icon1 from '@/assets/img/icon-ctb.png';
import icon2 from '@/assets/img/icon-ctb2.png';
import news1 from '@/assets/img/news1.png';
import banner from '@/assets/img/slderBanner.png';
import service from '@/assets/img/dichvu.png';
import service2 from '@/assets/img/dichvu4.png';
import mask from '@/assets/img/mask-banner.png';

// Import slider images using alias "@"
const images = [
    new URL('@/assets/img/news1.png', import.meta.url).href,
    new URL('@/assets/img/news2.png', import.meta.url).href,
    new URL('@/assets/img/news3.png', import.meta.url).href,
];

// Slide index state
const currentIndex = ref(0);

const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % images.length;
};

const prevSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
};
</script>

<style scoped>
.bg-style {
    mask-image: url('@/assets/img/mask-banner.png');
    -webkit-mask-image: url('@/assets/img/mask-banner.png');
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    mask-position: center top;
    -webkit-mask-position: center top;
    mask-size: 100% auto;
    -webkit-mask-size: 100% auto;
}

.bg-gradient {
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    background-image: linear-gradient(90deg, #24b7d3 0%, #30efad 50%, #24b7d3);
    background-size: 180%, 1px;
    background-position: 0%;
}

.item-icon::before,
.item-icon::after {
    border-radius: 12px;
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 2px 5px rgba(42, 210, 193, 0.5);
}

.item-icon:before {
    z-index: -2;
    transform: rotate(-80deg);
    background-color: #24b7d3;
}

.item-icon::after {
    z-index: -2;
    background-color: #fff;
}
</style>
