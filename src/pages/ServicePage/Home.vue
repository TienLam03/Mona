<template>
    <div class="max-w-[1200px] mx-auto flex gap-6 mt-10">
        <div class="w-1/3 p-4 rounded">
            <img :src="service" alt="" />
        </div>

        <div class="w-1/3 p-4 rounded">
            <Span class="font-semibold text-3xl">Trám Răng Thẩm Mỹ</Span>
            <p class="mt-3">
                Trám răng thẩm mỹ là một phương pháp <br />
                nha khoa hiện đại giúp cải thiện vẻ đẹp và <br />
                sức khỏe cho nụ cười của bạn.
            </p>
        </div>
        <div class="w-1/3 bg-gray-300 p-4 rounded">Cột 3</div>
    </div>
</template>
<script setup>
import service from '@/assets/img/service.png';
</script>
