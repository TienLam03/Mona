<template>
    <div class="flex flex-col md:flex-row items-start gap-8 px-8 py-12 max-w-[1200px] mx-auto">
        <!-- Cột trái: Nội dung -->
        <div class="flex-1">
            <h2 class="text-4xl font-bold text-[#1D267D] mb-4">Tìm kiếm phòng khám</h2>
            <div class="w-10 h-1 bg-teal-400 mb-6"></div>
            <p class="text-gray-600 mb-4">
                Trang web phòng khám của chúng tôi cung cấp dịch vụ tìm kiếm phòng khám hiệu quả và tiện lợi cho mọi
                người. Với công cụ tìm kiếm thông minh, bạn có thể dễ dàng tìm kiếm các phòng khám theo vị trí, chuyên
                khoa, bảo hiểm y tế hoặc tên phòng khám cụ thể.
            </p>
            <p class="text-gray-600 mb-4">
                Dù bạn cần một bác sĩ chuyên khoa hay phòng khám gần nơi bạn đang sinh sống, trang web của chúng tôi sẽ
                giúp bạn nhanh chóng tìm thấy thông tin cần thiết. Bạn cũng có thể xem đánh giá từ người dùng khác để
                chọn lựa phòng khám phù hợp nhất.
            </p>
            <p class="text-gray-600">
                Hãy trải nghiệm công cụ tìm kiếm của chúng tôi ngay hôm nay để đảm bảo bạn và gia đình sẽ nhận được dịch
                vụ y tế chất lượng nhất.
            </p>
            <div class="mt-14">
                <img :src="customer1" alt="" />
            </div>
            <div class="max-w-2xl mx-auto px-4 py-10">
                <h2 class="text-4xl font-bold text-[#1D267D] mb-4">Tư vấn khách hàng</h2>
                <div class="w-10 h-1 bg-teal-400 mb-8"></div>

                <div v-for="(item, index) in faqs" :key="index" class="border rounded mb-4">
                    <button
                        class="flex items-center justify-between w-full p-4 focus:outline-none"
                        @click="toggle(index)"
                    >
                        <span class="font-semibold text-[#1D267D] text-left">
                            {{ item.question }}
                        </span>
                        <span class="w-8 h-8 flex items-center justify-center rounded bg-teal-400 text-white text-2xl">
                            {{ activeIndex === index ? '−' : '+' }}
                        </span>
                    </button>

                    <div v-if="activeIndex === index" class="px-4 pb-4 text-gray-500">
                        {{ item.answer }}
                    </div>
                </div>
            </div>
        </div>

        <!-- Cột phải: Google Map -->
        <div class="flex-1 w-full h-80 md:h-[400px]">
            <iframe
                class="w-full h-full rounded-xl border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.131226432985!2d106.66017277587006!3d10.801608958734446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed3fb0f8e07%3A0xa482a5ff32fe60f3!2zMTA3My8yMyDEkC4gQ2jhuqFjaCBN4bqhbmcgVGjDoW5nIFTDom0sIFAuNywgVMOibiBCw6xuaCwgSOG7kyBDaMOtbmggTWluaCA3MjEwMA!5e0!3m2!1svi!2s!4v1698723941111!5m2!1svi!2s"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div class="mt-10">
                <span class="font-semibold text-5xl">Thời gian làm việc</span>
                <p class="mt-6">
                    Phòng khám của chúng tôi hoạt động theo lịch trình cụ thể và chính <br />
                    xác để phục vụ tốt nhất cho bệnh nhân. Dưới đây là một mô tả chi <br />
                    tiết về giờ giấc hoạt động của phòng khám:
                </p>
                <p class="font-semibold mb-2">Giờ mở cửa:</p>
                <ul class="list-disc list-inside space-y-1">
                    <li>Thứ Hai đến Thứ Sáu: từ 8:00 đến 17:00</li>
                    <li>Thứ Bảy: từ 8:00 đến 15:00</li>
                    <li>Chủ Nhật: từ 9:00 đến 12:00</li>
                </ul>
                <p class="font-semibold mb-2">Lịch hẹn:</p>
                <ul class="list-disc list-inside space-y-1">
                    <li>
                        Bệnh nhân có thể đặt lịch hẹn trước trực tuyến thông qua <br />
                        website hoặc gọi điện thoại đến tổng đài hỗ trợ khách hàng
                    </li>
                </ul>
                <p class="font-semibold mb-2">Đặt lịch tái khám:</p>
                <ul class="list-disc list-inside space-y-1">
                    <li>
                        Sau khi hoàn tất quá trình điều trị, bệnh nhân sẽ được hướng dẫn <br />
                        và đặt lịch tái khám theo yêu cầu của bác sĩ
                    </li>
                </ul>
                <div class="mt-[120px]">
                    <img :src="customer2" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import customer1 from '@/assets/img/customer.png';
import customer2 from '@/assets/img/customer1.png';
import { ref } from 'vue';

const activeIndex = ref(null);

const faqs = [
    {
        question: 'Do we need prescription for these testing?',
        answer: 'Patholab’s Complete Care Geno identify DNA variant specific to an individual & provides report about detoxification. Hormone Insight can be useful at the various stages of life.',
    },
    {
        question: 'What is the cost for these testing?',
        answer: 'The cost depends on the specific test and the package you choose.',
    },
    {
        question: 'Do I have to come with empty stomach?',
        answer: 'For some tests, fasting might be required. Please consult with our staff.',
    },
];

function toggle(index) {
    activeIndex.value = activeIndex.value === index ? null : index;
}
</script>
