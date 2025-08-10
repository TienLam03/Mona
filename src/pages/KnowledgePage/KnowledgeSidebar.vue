<template>
    <div id="pxl-sidebar-area" class="w-full pt-0 pl-0 lg:w-3/12 pxl-sidebar-area pxl-sidebar-blog lg:pt-0 lg:pl-2">
        <div class="pxl-sidebar-sticky sticky top-[40px] pl-[10px]">
            <!-- Search -->
            <section id="search-1" class="widget widget_search mb-[35px] border-none p-0">
                <div class="widget-content">
                    <form role="search" method="get" class="search-form" @submit.prevent>
                        <div class="relative searchform-wrap">
                            <input
                                v-model="searchQueryProxy"
                                type="text"
                                placeholder="Tìm kiếm bài viết..."
                                name="s"
                                class="search-field text-[14px] text-[#6F7F90] border-2 border-[#f2f5ff] bg-white h-[50px] pl-[25px] pr-[60px] rounded-full w-full outline-none focus:border-[#2AD2C1] transition-colors"
                            />
                            <button
                                type="submit"
                                class="search-submit absolute top-0 right-[-1px] w-[49px] h-[49px] flex items-center justify-center bg-gradient-to-r from-[#24B7D3] to-[#30EFAD] text-white rounded-full hover:from-[#30EFAD] hover:to-[#24B7D3] transition-all"
                            >
                                <i class="fas fa-search text-white text-[18px]"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            <!-- Categories -->
            <section
                id="categories-1"
                class="widget widget_categories border-l-2 border-r-2 border-t-2 border-[#f2f5ff] rounded-t-[8px] px-5 pt-8 pb-2 mb-0"
            >
                <div class="widget-content">
                    <h2 class="widget-title text-[24px] font-semibold text-[#1D2864] mb-[20px] pb-[20px] relative">
                        <span>Danh mục</span>
                    </h2>
                    <ul>
                        <li>
                            <a
                                href="#"
                                @click.prevent="onFilterCategory('all')"
                                :class="selectedCategory === 'all' ? 'text-[#2AD2C1]' : 'text-[#6F7F90]'"
                                class="block text-[17px] font-normal leading-[27px] py-[10px] relative hover:text-[#2AD2C1] transition-colors cursor-pointer"
                            >
                                Tất cả
                                <span
                                    class="pxl-count pxl-right float-right w-[27px] h-[27px] inline-block text-center leading-[27px] relative right-[-5px]"
                                    >({{ totalArticles }})&nbsp;</span
                                >
                            </a>
                        </li>
                        <li v-for="category in categoryCounts" :key="category.id">
                            <a
                                href="#"
                                @click.prevent="onFilterCategory(category.slug)"
                                :class="isCategorySelected(category) ? 'text-[#2AD2C1]' : 'text-[#6F7F90]'"
                                class="block text-[17px] font-normal leading-[27px] py-[10px] relative hover:text-[#2AD2C1] transition-colors cursor-pointer"
                            >
                                {{ category.name }}
                                <span
                                    class="pxl-count pxl-right float-right w-[27px] h-[27px] inline-block text-center leading-[27px] relative right-[-5px]"
                                    >({{ category.total }})&nbsp;</span
                                >
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
            <!-- Recent Posts -->
            <section
                id="pxl_recent_posts-1"
                class="widget widget_pxl_recent_posts border-l-2 border-r-2 border-[#f2f5ff] px-5 pt-8 pb-2 mb-0"
            >
                <div class="widget-content">
                    <h2 class="widget-title text-[24px] font-semibold text-[#1D2864] mb-[20px] pb-[20px] relative">
                        <span>Bài viết mới nhất</span>
                    </h2>
                    <div class="pxl--items">
                        <div v-for="post in recentPosts" :key="post.id" class="pxl--item flex items-center mb-[30px]">
                            <div class="pxl-item--img w-[95px] min-w-[95px] mr-[15px] pt-[5px] overflow-hidden">
                                <a
                                    :href="post.link"
                                    class="block rounded-[5px] relative min-h-[75px] max-h-[75px] overflow-hidden"
                                >
                                    <div class="w-full h-[75px] overflow-hidden rounded-[5px] bg-gray-100">
                                        <img
                                            :src="post.image"
                                            :alt="post.title"
                                            class="w-full h-full object-cover transition-transform duration-300 scale-[1.02] hover:scale-100"
                                        />
                                    </div>
                                </a>
                            </div>
                            <div class="pxl-meta">
                                <h4 class="pxl-item--title mb-[5px] text-[14px] font-bold">
                                    <a :href="post.link" class="text-[#1D2864] hover:text-[#2AD2C1] line-clamp-2">{{
                                        post.title
                                    }}</a>
                                </h4>
                                <div class="pxl-item--date text-[10px] text-[#2fc58d] uppercase font-medium">
                                    {{ post.date }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Tag Cloud -->
            <section
                id="tag_cloud-1"
                class="widget widget_tag_cloud border-l-2 border-r-2 border-b-2 border-[#f2f5ff] rounded-b-[8px] px-5 pt-8 pb-8 mb-0"
            >
                <div class="widget-content">
                    <h2 class="widget-title text-[24px] font-semibold text-[#1D2864] mb-[30px] pb-[20px] relative">
                        <span>Từ khóa phổ biến</span>
                    </h2>
                    <div class="flex flex-wrap tagcloud">
                        <a
                            v-for="tag in tags"
                            :key="tag"
                            :href="getTagLink(tag)"
                            class="tag-cloud-link mr-2 mb-2 text-[#2AD2C1] font-medium text-[11px] px-[15px] leading-[32px] rounded-[25px] bg-[#e1f6f9] uppercase hover:bg-gradient-to-r hover:from-[#24B7D3] hover:to-[#30EFAD] hover:text-white shadow transition"
                        >
                            {{ tag }}
                        </a>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';

const props = defineProps({
    searchQuery: String,
    categories: Array,
    selectedCategory: String,
    onFilterCategory: Function,
    allArticles: Array,
    recentPosts: Array,
    tags: Array,
    getTagLink: Function,
});

// Để v-model hoạt động 2 chiều với searchQuery prop
const searchQueryProxy = ref(props.searchQuery);

const categoryCounts = computed(() => {
    if (!props.categories || props.categories.length === 0) {
        return [];
    }
    
    return props.categories.map(cat => ({
        id: cat.id,
        name: cat.name,
        slug: cat.slug,
        total: cat.count || 0
    }));
});

watch(
    () => props.searchQuery,
    (val) => {
        searchQueryProxy.value = val;
    },
);

// Emit event khi searchQuery thay đổi
const emit = defineEmits(['update:searchQuery']);

watch(searchQueryProxy, (val) => {
    if (val !== props.searchQuery) {
        emit('update:searchQuery', val);
    }
});

// Không cần watch này nữa vì categoryCounts đã là computed property

const totalArticles = computed(() => {
    if (!props.allArticles || props.allArticles.length === 0) {
        return 0;
    }
    return props.allArticles.length;
});

// Method để kiểm tra category nào đang được chọn
const isCategorySelected = (category) => {
    return props.selectedCategory === category.id?.toString() || props.selectedCategory === 'all';
};
</script>
