<template>
    <section
        class="pt-10 bg-[#F5F8FD] bg-cover"
        style="
            background-image: url('https://ytetot.monamedia.net/wp-content/uploads/2023/09/bg-sv.png');
            background-position: bottom center;
        "
    >
        <div class="max-w-[1120px] mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
            <div class="w-full md:w-1/2">
                <div>
                    <span class="text-[#2AD2C1] text-base">YTETOT</span>
                </div>
                <span class="font-semibold text-[48px]"
                    >Dịch Vụ Nha Khoa <br />
                    Chuyên Nghiệp
                </span>
                <p class="text-gray-600 text-lg leading-relaxed">
                    Chúng tôi cung cấp trải nghiệm dịch vụ nha khoa tốt nhất, với các gói chăm sóc chuyên sâu giúp xác
                    định sức khỏe răng miệng của từng cá nhân và cung cấp báo cáo chi tiết về tình trạng nha chu, sâu
                    răng, viêm nướu và các vấn đề khác.
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
                            Là phòng khám nha khoa toàn diện phục vụ cho các khách hàng cần điều trị chuyên sâu. Sứ mệnh
                            của chúng tôi là đảm bảo cung cấp kết quả chính xác và đáng tin cậy để hỗ trợ sức khỏe răng
                            miệng toàn diện.
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
                            Với hàng triệu lượt khách hàng mỗi năm, chúng tôi luôn sẵn sàng chăm sóc cho từng người với
                            sự tận tâm và chất lượng cao nhất.
                        </p>
                    </div>
                </div>
            </div>

            <div class="w-full md:w-1/2 relative">
                <div class="relative z-10">
                    <img :src="doctor" alt="Bác sĩ" class="w-full max-w-md mx-auto object-contain" />
                </div>
                <div class="absolute top-0 right-0 z-0">
                    <img :src="bg" alt="Bác sĩ" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import doctor from '@/assets/img/bacsi.png';
import icon1 from '@/assets/img/icon-ctb.png';
import icon2 from '@/assets/img/icon-ctb2.png';
import bg from '@/assets/img/bg-image-man.png';
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
