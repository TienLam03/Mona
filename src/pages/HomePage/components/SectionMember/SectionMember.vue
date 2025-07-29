<template>
    <div class="flex flex-col items-center gap-6 p-6 bg-[#F6FAFF]">
        <div class="items-center justify-center text-center mt-5">
            <p class="text-teal-500">YTETOT</p>
            <h1 class="font-semibold text-[40px]">Đội ngũ bác sĩ</h1>
            <p>Các bác sĩ với nhiều năm kinh nghiệm trong ngành</p>

            <!-- Hàng trên -->
            <div class="flex flex-wrap justify-center gap-6 mt-10">
                <div
                    v-for="(doctor, index) in doctors.slice(0, 3)"
                    :key="index"
                    class="relative group w-[400px] h-[370px] rounded-2xl overflow-hidden"
                >
                    <img :src="doctor.img" alt="Doctor" class="w-full h-full object-cover" />
                    <!-- Hover content -->
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-[#2dd4bf]/90 to-transparent opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out flex flex-col justify-end p-6"
                    >
                        <h3 class="text-white font-bold text-xl mb-2">{{ doctor.name }}</h3>
                        <p class="text-white text-sm mb-4">{{ doctor.desc }}</p>
                        <button class="bg-white text-teal-500 font-semibold py-2 px-4 rounded-full hover:bg-gray-100">
                            Đặt khám ngay
                        </button>
                    </div>
                </div>
            </div>

            <!-- Hàng dưới -->
            <div class="flex flex-wrap justify-center gap-6 mt-5">
                <div
                    v-for="(doctor, index) in doctors.slice(3, 6)"
                    :key="index + 3"
                    class="relative group w-[400px] h-[370px] rounded-2xl overflow-hidden"
                >
                    <img :src="doctor.img" alt="Doctor" class="w-full h-full object-cover" />
                    <!-- Hover content -->
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-[#2dd4bf]/90 to-transparent opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out flex flex-col justify-end p-6"
                    >
                        <h3 class="text-white font-bold text-xl mb-2">{{ doctor.name }}</h3>
                        <p class="text-white text-sm mb-4">{{ doctor.desc }}</p>
                        <button class="bg-white text-teal-500 font-semibold py-2 px-4 rounded-full hover:bg-gray-100">
                            Đặt khám ngay
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import doctor1 from '@/assets/img/doctor1.png';
import doctor2 from '@/assets/img/doctor2.png';
import doctor3 from '@/assets/img/doctor3.png';
import doctor4 from '@/assets/img/doctor4.png';
import doctor5 from '@/assets/img/doctor5.png';
import doctor6 from '@/assets/img/doctor6.png';

const doctors = [
    { name: 'BS. Lê Hào', img: doctor1, desc: 'Chuyên gia răng hàm mặt' },
    { name: 'BS. Mai Ngọc', img: doctor2, desc: 'Kinh nghiệm 10 năm' },
    { name: 'BS. Trịnh Như', img: doctor3, desc: 'Tư vấn tận tâm' },
    { name: 'BS. Hồng Vân', img: doctor4, desc: 'Đào tạo quốc tế' },
    { name: 'BS. Trần Dũng', img: doctor5, desc: 'Chuyên khoa chỉnh nha' },
    { name: 'BS. Quốc Tuấn', img: doctor6, desc: 'Nhiều năm kinh nghiệm' },
];
</script>
