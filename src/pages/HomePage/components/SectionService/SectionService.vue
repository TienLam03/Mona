<template>
    <section class="bg-white py-10">
        <div class="max-w-[1120px] mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
            <div class="w-full md:w-1/2 space-y-8">
                <p class="text-gray-600 text-lg leading-relaxed">
                    Chúng tôi cung cấp trải nghiệm dịch vụ nha khoa tốt nhất, với các gói chăm sóc chuyên sâu giúp xác
                    định sức khỏe răng miệng của từng cá nhân và cung cấp báo cáo chi tiết về tình trạng nha chu, sâu
                    răng, viêm nướu và các vấn đề khác.
                </p>

                <div class="flex items-start gap-4">
                    <img :src="icon1" alt="icon" class="w-14 h-14 rounded-xl shadow-md" />
                    <div>
                        <h3 class="text-lg font-bold text-[#1c2760]">25 năm kinh nghiệm</h3>
                        <p class="text-gray-600">
                            Là phòng khám nha khoa toàn diện phục vụ cho các khách hàng cần điều trị chuyên sâu...
                        </p>
                    </div>
                </div>

                <div class="flex items-start gap-4 border-t pt-6">
                    <img :src="icon2" alt="icon" class="w-14 h-14 rounded-xl shadow-md" />
                    <div>
                        <h3 class="text-lg font-bold text-[#1c2760]">Hỗ trợ nha khoa đẳng cấp thế giới</h3>
                        <p class="text-gray-600">
                            Với hàng triệu lượt khách hàng mỗi năm, chúng tôi luôn sẵn sàng chăm sóc...
                        </p>
                    </div>
                </div>
            </div>

            <div class="w-full md:w-1/2 relative">
                <img :src="doctor" alt="Bác sĩ" class="w-full max-w-md mx-auto object-contain" />
            </div>
        </div>
    </section>
</template>

<script setup>
import doctor from '@/assets/img/bacsi.png';
import icon1 from '@/assets/img/icon-ctb.png';
import icon2 from '@/assets/img/icon-ctb2.png';
</script>
