<template>
    <div class="flex max-w-[1200px] mx-auto gap-4">
        <div class="flex-1 p-4">
            <img :src="service" alt="" class="rounded-md" />
        </div>

        <div class="flex-1 p-4">
            <Span class="font-semibold text-3xl">Trám Răng Thẩm Mỹ</Span>
            <p class="mt-3">
                Trám răng thẩm mỹ là một phương pháp <br />
                nha khoa hiện đại giúp cải thiện vẻ đẹp và <br />
                sức khỏe cho nụ cười của bạn.
            </p>
            <div class="mt-10 flex items-start gap-4">
                <!-- Vòng tròn bao quanh ảnh -->
                <div class="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100">
                    <img :src="category" alt="" class="w-8 h-8" />
                </div>

                <!-- Văn bản -->
                <div class="flex flex-col mb-10 -mt-1">
                    <p>Checkup</p>
                    <p>Category</p>
                    <p class="text-blue-500">Family Care</p>
                </div>
            </div>

            <router-link
                to="/contact"
                class="inline-flex items-center px-8 h-11 rounded-full bg-gradient-to-r from-[#24B7D3] to-[#30EFAD] text-white font-semibold text-base shadow hover:opacity-90 transition"
            >
                <i class="mr-2 text-lg fa-regular fa-calendar-days"></i>
                Đặt lịch khám
            </router-link>
        </div>
        <div class="w-1/3 bg-[#E1F6F9] p-4 rounded-lg mt-5 space-y-4">
            <div>
                <i class="fa-solid fa-location-dot mr-2 text-[#2AD2C1]"></i>
                <span class="font-semibold">Địa chỉ</span>
                <p class="mt-1">107/23 CMT8, P.7 Tân Bình , TP.HCM</p>
            </div>

            <div class="h-[2px] bg-black w-50"></div>

            <div>
                <span class="font-semibold">Thông Tin Liên Hệ</span>
                <div class="flex items-center gap-2 mt-1">
                    <i class="fa-solid fa-envelope text-[#2AD2C1]"></i>
                    <p class="m-0">info@themona.global</p>
                </div>
                <div class="flex items-center gap-2 mt-1">
                    <i class="fa-solid fa-phone text-[#2AD2C1]"></i>
                    <p class="m-0">(+84) 0313-728-397</p>
                </div>
            </div>

            <div class="h-[2px] bg-black w-50"></div>

            <div>
                <span class="font-semibold">Giờ mở cửa</span>
                <p>Thứ 2 - Chủ nhật</p>
                <p class="text-[#2AD2C1]">8:00 - 18:00</p>
            </div>
        </div>

        <div class="w-[60px] h-[1px] bg-black mx-auto"></div>
    </div>
    <div class="max-w-[1200px] mx-auto flex">
        <div class="w-[60%] pr-4">
            <div class="p-4 rounded-md">
                <p>
                    Tại phòng khám chúng tôi, chúng tôi cung cấp dịch vụ trám răng thẩm mỹ chất lượng cao <br />
                    do đội ngũ bác sĩ giàu kinh nghiệm và được đào tạo chuyên sâu thực hiện.
                </p>
                <div class="mt-5">
                    <span class="font-semibold text-3xl">Ưu Điểm của Trám Răng Thẩm Mỹ</span>
                    <ul class="list-disc pl-5">
                        <li>
                            Cải Thiện Vẻ Đẹp: Trám răng giúp cải thiện màu sắc và hình dáng của răng, tạo nụ cười sáng
                            bóng và tự tin.
                        </li>
                        <li>
                            Cải Thiện Vẻ Đẹp: Trám răng giúp cải thiện màu sắc và hình dáng của răng, tạo nụ cười sáng
                            bóng và tự tin.
                        </li>
                        <li>
                            Tăng Tính Thẩm Mỹ: Trám răng không chỉ giúp cải thiện vẻ đẹp mà còn tạo ra sự cân đối và tự
                            nhiên cho nụ cười.
                        </li>
                    </ul>
                </div>
                <div class="flex gap-4">
                    <img :src="dichvu1" alt="" class="w-[200px] h-auto object-cover" />
                    <img :src="dichvu3" alt="" class="w-[200px] h-auto object-cover" />
                    <img :src="dichvu6" alt="" class="w-[200px] h-auto object-cover" />
                </div>
                <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-16 px-4 mt-10">
                    <div v-for="(step, index) in steps" :key="index" class="flex gap-4">
                        <div
                            class="min-w-[40px] h-10 w-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-500 font-semibold text-lg"
                        >
                            {{ index + 1 }}
                        </div>
                        <div>
                            <h3 class="font-semibold text-lg text-gray-900">{{ step.title }}</h3>
                            <p class="text-gray-500 text-sm mt-1">
                                {{ step.description }}
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="mt-10">
                        <span class="font-semibold text-2xl">Khách hàng đánh giá</span>
                    </div>
                    <Swiper
                        :modules="[Autoplay, Pagination]"
                        :pagination="{ clickable: true }"
                        :autoplay="{ delay: 4000, disableOnInteraction: false }"
                        :loop="true"
                        class="w-full max-w-5xl mx-auto bg-[#f7fcfd] p-6 md:p-10 rounded-3xl mt-5"
                    >
                        <SwiperSlide v-for="(item, index) in testimonials" :key="index">
                            <div class="flex flex-col md:flex-row items-center gap-6">
                                <!-- Avatar -->
                                <div class="flex flex-col items-center md:w-1/2">
                                    <img :src="item.avatar" alt="Avatar" class="w-32 h-32 rounded-full object-cover" />
                                    <h4 class="mt-4 text-lg font-semibold text-[#1d3557]">{{ item.name }}</h4>
                                    <p class="text-sm text-sky-600">{{ item.role }}</p>
                                </div>

                                <!-- Message -->
                                <div class="md:w-1/2 text-center md:text-left">
                                    <div class="flex justify-center md:justify-start mb-2 text-yellow-400 text-xl">
                                        <span v-for="i in 5" :key="i">★</span>
                                    </div>
                                    <p class="text-[#005b66] font-medium leading-relaxed text-base">
                                        "{{ item.message }}"
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div class="mt-10">
                    <span class="font-semibold text-2xl">FAQ</span>
                    <div class="flex flex-wrap -mx-2 mt-4">
                        <div v-for="(item, index) in faqs" :key="index" class="w-full md:w-1/2 px-2 mb-4">
                            <div class="border rounded-lg p-4 transition-all duration-300">
                                <div class="flex justify-between items-center cursor-pointer" @click="toggle(index)">
                                    <h3 class="font-semibold text-[#051a55]">
                                        {{ item.question }}
                                    </h3>
                                    <button
                                        class="bg-cyan-500 text-white font-bold w-6 h-6 flex items-center justify-center rounded"
                                    >
                                        {{ openIndex === index ? '-' : '+' }}
                                    </button>
                                </div>
                                <div v-if="openIndex === index" class="text-gray-600 text-sm mt-3">
                                    {{ item.answer }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-[40%] pl-4">
            <div class="p-6 rounded-md">
                <img :src="banner" alt="" />
            </div>
        </div>
    </div>
</template>
<script setup>
import service from '@/assets/img/service.png';
import banner from '@/assets/img/bg-banner-box.png';
import category from '@/assets/img/category.png';
import dichvu1 from '@/assets/img/dichvu1.png';
import dichvu3 from '@/assets/img/dichvu3.png';
import dichvu6 from '@/assets/img/dichvu6.png';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { ref } from 'vue';

const faqs = [
    {
        question: 'Trám răng thẩm mỹ là gì?',
        answer: 'Trám răng thẩm mỹ là quy trình nha khoa nhằm cải thiện vẻ đẹp và hình dáng của răng mà không làm thay đổi cấu trúc tự nhiên của chúng.',
    },
    {
        question: 'Bao lâu thì cần phải tái kiểm tra sau khi trám răng?',
        answer: 'Bạn nên kiểm tra định kỳ mỗi 6 tháng để đảm bảo hiệu quả trám.',
    },
    {
        question: 'Trám răng thẩm mỹ có những ưu điểm gì?',
        answer: 'Mang lại thẩm mỹ tự nhiên, không đau, chi phí hợp lý.',
    },
    {
        question: 'Trám răng thẩm mỹ có an toàn không?',
        answer: 'Hoàn toàn an toàn nếu thực hiện bởi bác sĩ chuyên môn.',
    },
    {
        question: 'Quy trình trám răng thẩm mỹ như thế nào?',
        answer: 'Gồm các bước: khám – vệ sinh – chọn màu – trám – điều chỉnh.',
    },
    {
        question: 'Trám răng thẩm mỹ có đau không?',
        answer: 'Không, bạn sẽ được gây tê và hoàn toàn thoải mái.',
    },
    {
        question: 'Trám răng thẩm mỹ có phù hợp với mọi người không?',
        answer: 'Phù hợp cho hầu hết mọi người trừ một số trường hợp đặc biệt.',
    },
    {
        question: 'Chi phí trám răng thẩm mỹ là bao nhiêu?',
        answer: 'Chi phí từ 300k – 1 triệu tuỳ vào chất liệu và tình trạng.',
    },
];

const openIndex = ref(0);
const toggle = (index) => {
    openIndex.value = openIndex.value === index ? null : index;
};

const testimonials = [
    {
        name: 'Bạch Ngân',
        role: 'Khách Hàng',
        avatar: 'https://i.imgur.com/8Km9tLL.png', // ảnh demo
        message:
            'Dịch vụ tại Yteto khiến tôi ấn tượng từ lần đầu tiên. Các bác sĩ tư vấn rất kỹ lưỡng và giải thích cặn kẽ về các quy trình.',
    },
    {
        name: 'Nguyễn Văn A',
        role: 'Khách Hàng',
        avatar: 'https://i.pravatar.cc/150?img=3',
        message: 'Rất hài lòng với dịch vụ, đội ngũ bác sĩ rất tận tình và chuyên nghiệp.',
    },
    {
        name: 'Trần Thị B',
        role: 'Khách Hàng',
        avatar: 'https://i.pravatar.cc/150?img=4',
        message: 'Không gian thoải mái, dịch vụ chất lượng. Sẽ quay lại lần sau.',
    },
];
const steps = [
    {
        title: 'Chuẩn Đoán',
        description: 'Bác sĩ sẽ tiến hành kiểm tra tình trạng răng và lên kế hoạch trám răng phù hợp',
    },
    {
        title: 'Chuẩn Bị Răng',
        description: 'Làm sạch và chuẩn bị bề mặt răng cho quá trình trám.',
    },
    {
        title: 'Chọn Vật Liệu',
        description: 'Chọn màu sắc và vật liệu trám phù hợp với tự nhiên của răng.',
    },
    {
        title: 'Trám Răng',
        description: 'Bác sĩ sẽ trám và tạo hình cho răng để đạt được kết quả thẩm mỹ cao nhất.',
    },
    {
        title: 'Kiểm Tra Và Điều Chỉnh',
        description: 'Kiểm tra kỹ lưỡng và điều chỉnh cho đến khi hoàn thiện.',
    },
    {
        title: 'Kiểm Tra Và Điều Chỉnh',
        description: 'Kiểm tra kỹ lưỡng và điều chỉnh cho đến khi hoàn thiện.',
    },
];
</script>
