<template>
    <section class="bg-white py-12 px-4 md:px-8">
        <div class="max-w-7xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div v-for="(post, index) in posts" :key="index" class="bg-white rounded-2xl shadow border overflow-hidden">
                <!-- Image and Date -->
                <div class="relative">
                    <img :src="post.image" alt="Blog image" class="w-full h-56 object-cover rounded-t-2xl" />
                    <div
                        class="absolute top-2 right-2 bg-gradient-to-r from-[#00e0c6] to-[#1ec9e0] text-white font-semibold text-sm px-3 py-1 rounded-bl-xl"
                    >
                        {{ post.date }}
                    </div>
                </div>

                <!-- Author and Comments -->
                <div class="px-4 py-2 flex items-center text-sm text-gray-500 border-b">
                    <span class="mr-2">👤 {{ post.author }}</span>
                    <span class="mx-1">•</span>
                    <span class="text-green-500 text-xs mr-1">●</span>
                    <span>{{ post.comments }} Bình luận</span>
                </div>

                <!-- Tags -->
                <div class="px-4 py-2 flex gap-2 flex-wrap">
                    <span
                        v-for="(tag, i) in post.tags"
                        :key="i"
                        class="bg-[#E8FAFF] text-[#0ABAB5] text-xs px-3 py-1 rounded-full"
                    >
                        {{ tag }}
                    </span>
                </div>

                <!-- Title -->
                <div class="px-4 py-2 font-bold text-[#0B2C6A] text-lg leading-snug">
                    {{ post.title }}
                </div>

                <!-- Read more -->
                <div class="px-4 pb-4">
                    <a
                        href="#"
                        class="text-[#00BFA6] font-semibold text-sm hover:underline inline-flex items-center gap-1 group"
                    >
                        XEM THÊM
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-4 h-4 text-[#00BFA6] transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 19l14-14M13 5h6v6" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const posts = [
    {
        image: avatar1,
        date: '31/08/2023',
        author: 'monamedia',
        comments: 0,
        tags: ['AI SCIENCE', 'SCIENTIFIC'],
        title: 'Patient-Centered Hospital Labs Start Here',
    },
    {
        image: avatar2,
        date: '29/08/2023',
        author: 'monamedia',
        comments: 0,
        tags: ['AI SCIENCE', 'SCIENTIFIC'],
        title: 'Blood Protein Signatures Change Across Lifespan',
    },
    {
        image: avatar3,
        date: '29/08/2023',
        author: 'monamedia',
        comments: 0,
        tags: ['AI SCIENCE', 'SCIENTIFIC'],
        title: 'Microbiologics Introduces SARS-CoV-2 Synthetic',
    },
];
import avatar1 from '@/assets/img/news1.png';
import avatar2 from '@/assets/img/news2.png';
import avatar3 from '@/assets/img/news3.png';
</script>
