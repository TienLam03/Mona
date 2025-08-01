<template>
    <article
        :id="`post-${article.id}`"
        class="mb-8 lg:p-10 border-2 border-[#f2f5ff] rounded-[25px] overflow-hidden fadeInUp bg-white"
        style="animation-name: fadeInUp; visibility: visible"
    >
        <!-- IMAGE + DATE -->
        <div class="relative overflow-hidden rounded-[25px]">
            <router-link :to="`/blog/${article.id}`">
                <div class="relative w-full aspect-[885/593] overflow-hidden rounded-[25px] bg-gray-100">
                    <img
                        width="885"
                        height="593"
                        :src="article.image"
                        :alt="article.title"
                        class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-100 scale-[1.01]"
                    />
                </div>
            </router-link>
            <span
                class="absolute bottom-0 left-0 text-white text-[22px] px-[25px] py-[13px] rounded-tl-none rounded-tr-[25px] flex items-center bg-gradient-to-r from-[#24B7D3] to-[#30EFAD]"
            >
                <i class="mr-2 caseicon caseicon-calendar-1"></i>
                {{ article.date }}
            </span>
        </div>
<<<<<<< HEAD
        <!-- CONTENT HOLDER -->
        <div class="pt-[45px] transition-all duration-500 relative">
            <ul
                class="flex flex-wrap items-center font-semibold mb-[10px] pb-[10px] text-[14px] uppercase pxl-item--meta"
                style="font-family: 'Chakra Petch', sans-serif"
            >
                <li class="flex items-center text-[#6F7F90] font-medium mr-[10px] pr-[10px]">
                    <i class="bootstrap-icons bi-person-circle text-[#2AD2C1] text-[16px] mr-1"></i>
                    <router-link :to="article.authorLink" class="hover:text-[#2AD2C1]">
                        {{ article.author }}
                    </router-link>
                </li>
                <li class="flex items-center mr-[10px] pr-[10px] item--category">
                    <a
                        v-for="(category, index) in article.categories"
                        :key="category.slug"
                        :href="category.link"
                        rel="tag"
                        :class="index > 0 ? '' : 'mr-1'"
                        class="py-[11px] px-[15px] rounded-[25px] bg-[#e1f6f9] text-[#4286f5] inline-block hover:text-[#2AD2C1]"
                        >{{ category.name }}</a
                    >
                </li>
                <li class="item-comment">
                    <router-link
                        :to="`/blog/${article.id}`"
                        class="flex items-center text-[#6F7F90] font-medium hover:text-[#2AD2C1]"
                    >
                        <i class="flaticon flaticon-comment text-[#2AD2C1] text-[16px] mr-1"></i>
                        {{ article.commentsCount }} Comments
                    </router-link>
                </li>
            </ul>
            <h2
                class="pxl-item--title text-[40px] leading-tight mb-[30px] font-semibold text-[#1D2864]"
                style="font-family: 'Chakra Petch', sans-serif"
            >
                <router-link :to="`/blog/${article.id}`" :title="article.title" class="hover:text-[#2AD2C1]">{{
                    article.title
                }}</router-link>
            </h2>
            <div class="mb-[25px] lg:pr-[50px] text-[#6F7F90] pxl-item--excerpt">
                {{ article.excerpt }}
            </div>
            <div class="pxl-item--readmore">
                <router-link
                    class="btn px-0 text-[#2AD2C1] text-[18px] font-semibold uppercase leading-[47px] hover:text-[#2AD2C1] flex items-center gap-2 bg-transparent shadow-none group"
                    :to="`/blog/${article.id}`"
                >
                    Xem thêm
                    <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        class="ml-1 transition-transform duration-300 group-hover:rotate-45"
                    >
                        <path
                            d="M2.04625 14.3533L0.520081 12.8271L10.9853 2.36189H1.6102V0.181641H14.6917V13.2631H12.5114V3.88806L2.04625 14.3533Z"
                            fill="#2AD2C1"
                        ></path>
                    </svg>
                </router-link>
            </div>
        </div>
    </article>
=======
      </router-link>
      <span
        class="absolute bottom-0 left-0 text-white text-[22px] px-[25px] py-[13px] rounded-tl-none rounded-tr-[25px] flex items-center bg-gradient-to-r from-[#24B7D3] to-[#30EFAD]"
      >
        <i class="mr-2 far fa-calendar-alt"></i>
        {{ article.date }}
      </span>
    </div>
    <!-- CONTENT HOLDER -->
    <div class="pt-[45px] transition-all duration-500 relative">
      <ul
        class="flex flex-wrap items-center font-semibold mb-[10px] pb-[10px] text-[14px] uppercase pxl-item--meta"
        style="font-family: 'Chakra Petch', sans-serif;"
      >
        <li class="flex items-center text-[#6F7F90] font-medium mr-[10px] pr-[10px]">
          <i class="bootstrap-icons bi-person-circle text-[#2AD2C1] text-[16px] mr-1"></i>
          <router-link
            :to="article.authorLink"
            class="hover:text-[#2AD2C1]"
          >
            {{ article.author }}
          </router-link>
        </li>
        <li class="flex items-center mr-[10px] pr-[10px] item--category">
          <a
            v-for="(category, index) in article.categories"
            :key="category.slug"
            :href="category.link"
            rel="tag"
            :class="index > 0 ? '' : 'mr-1'"
            class="py-[11px] px-[15px] rounded-[25px] bg-[#e1f6f9] text-[#4286f5] inline-block hover:text-[#2AD2C1]"
          >{{ category.name }}</a>
        </li>
        <li class="item-comment">
          <router-link
            :to="`/blog/${article.id}`"
            class="flex items-center text-[#6F7F90] font-medium hover:text-[#2AD2C1]"
          >
            <i class="flaticon flaticon-comment text-[#2AD2C1] text-[16px] mr-1"></i>
            {{ article.commentsCount }} Comments
          </router-link>
        </li>
      </ul>
      <h2 class="pxl-item--title text-[40px] leading-tight mb-[30px] font-semibold text-[#1D2864]"
          style="font-family: 'Chakra Petch', sans-serif;">
        <router-link
          :to="`/blog/${article.id}`"
          :title="article.title"
          class="hover:text-[#2AD2C1]"
        >{{ article.title }}</router-link>
      </h2>
      <div class="mb-[25px] lg:pr-[50px] text-[#6F7F90] pxl-item--excerpt">
        {{ article.excerpt }}
      </div>
      <div class="pxl-item--readmore">
        <router-link
          class="btn px-0 text-[#2AD2C1] text-[18px] font-semibold uppercase leading-[47px] hover:text-[#2AD2C1] flex items-center gap-2 bg-transparent shadow-none group"
          :to="`/blog/${article.id}`"
        >
          Xem thêm
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" class="ml-1 transition-transform duration-300 group-hover:rotate-45">
            <path
              d="M2.04625 14.3533L0.520081 12.8271L10.9853 2.36189H1.6102V0.181641H14.6917V13.2631H12.5114V3.88806L2.04625 14.3533Z"
              fill="#2AD2C1"
            ></path>
          </svg>
        </router-link>
      </div>
    </div>
  </article>
>>>>>>> 64f8610e0c82a0505d79cee123d543481d1f581f
</template>

<script setup>
// Define props
defineProps({
    article: {
        type: Object,
        required: true,
        validator: (value) => {
            const requiredFields = ['id', 'title', 'excerpt', 'link', 'image', 'date', 'author', 'authorLink'];
            return (
                value && requiredFields.every((field) => value[field] !== undefined) && Array.isArray(value.categories)
            );
        },
    },
});
</script>

<style scoped>
/* Nếu bạn đã import font family Chakra Petch, Heebo, Work Sans, Caseicon ở global, không cần import lại */
/* Nếu chưa, thêm vào main entry hoặc trong public/index.html/project.css */
</style>
