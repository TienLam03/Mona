<template>
  <article 
    :id="`post-${article.id}`"
    :class="articleClasses"
    class="pxl-item--archive wow fadeInUp animate-[fadeInUp_0.8s_ease_forwards] [animation-fill-mode:both] [visibility:visible] [animation-name:fadeInUp]"
  >
    <!-- Featured Image with Date Badge -->
    <div class="pxl-feature pxl-item--image relative">
      <a :href="article.link" class="block">
        <div class="relative w-full aspect-[893/598] overflow-hidden rounded-3xl bg-gray-100">
          <img 
            :src="article.image" 
            :alt="article.title"
            :width="893"
            :height="598"
            :srcset="article.srcset"
            :sizes="article.sizes || '(max-width: 893px) 100vw, 893px'"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
            decoding="async"
          />
        </div>
      </a>
      
      <!-- Date Badge -->
      <span class="item--date absolute bottom-0 left-0 flex items-center px-6 py-3 text-xl font-medium text-white rounded-tr-3xl bg-gradient-to-r from-[#24B7D3] to-[#30EFAD] z-10">
        <i class="caseicon caseicon-calendar-1 mr-2 [font-family:'Caseicon',sans-serif] before:content-['\f120']" aria-hidden="true"></i>
        {{ article.date }}
      </span>
    </div>

    <!-- Article Content -->
    <div class="pxl-item--holder pt-4 lg:pt-8">
      <!-- Meta Information -->
      <ul class="pxl-item--meta flex flex-wrap items-center p-0 pb-3 mb-3 text-sm font-semibold list-none [font-family:'Chakra_Petch',sans-serif]">
        <!-- Author -->
        <li class="item--author relative inline-block pr-3 mr-3 font-medium text-gray-500 uppercase after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-px after:h-3 after:bg-gray-300">
          <i class="bootstrap-icons bi-person-circle text-[#2AD2C1] relative top-0.5 text-base mr-1 [font-family:'bootstrap-icons'] before:content-['\f4da']" aria-hidden="true"></i>
          <a 
            :href="article.authorLink" 
            :title="`Đăng bởi ${article.author}`"
            rel="author"
            class="transition-all duration-[250ms] [transition-timing-function:cubic-bezier(0.645,0.045,0.355,1)] text-inherit hover:text-[#2AD2C1] no-underline"
          >
            {{ article.author }}
          </a>
        </li>
        
        <!-- Categories -->
        <li class="item--category relative inline-block pr-3 mr-3 font-medium text-gray-500 uppercase after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-px after:h-3 after:bg-gray-300">
          <a 
            v-for="category in article.categories" 
            :key="category.slug"
            :href="category.link" 
            rel="tag"
            class="inline-block px-4 py-2 mr-2 text-blue-500 transition-all duration-[250ms] [transition-timing-function:cubic-bezier(0.645,0.045,0.355,1)] bg-blue-50 rounded-2xl hover:text-[#2AD2C1] no-underline text-sm"
          >
            {{ category.name }}
          </a>
        </li>
        
        <!-- Comments -->
        <li v-if="article.commentsCount >= 0" class="item-comment relative inline-block font-medium text-gray-500 uppercase">
          <a 
            :href="article.link"
            class="transition-all duration-[250ms] [transition-timing-function:cubic-bezier(0.645,0.045,0.355,1)] text-inherit hover:text-[#2AD2C1] no-underline"
          >
            <i class="flaticon flaticon-comment text-[#2AD2C1] relative top-0.5 text-base mr-1 [font-family:'flaticon'] before:content-['\f4ad']" aria-hidden="true"></i>
            {{ article.commentsCount }} Comments
          </a>
        </li>
      </ul>
      
      <!-- Article Title -->
      <h2 class="pxl-item--title mb-4 text-3xl lg:text-4xl font-semibold leading-tight tracking-wide break-words [font-family:'Chakra_Petch',sans-serif] text-slate-800">
        <a 
          :href="article.link" 
          :title="article.title"
          class="transition-all duration-[250ms] [transition-timing-function:cubic-bezier(0.645,0.045,0.355,1)] text-inherit hover:text-[#2AD2C1] no-underline"
        >
          {{ article.title }}
        </a>
      </h2>
      
      <!-- Article Excerpt -->
      <div class="pxl-item--excerpt mb-6 leading-relaxed text-gray-600 text-base">
        {{ article.excerpt }}
      </div>
      
      <!-- Read More Button -->
      <div class="pxl-item--readmore">
        <a 
          :href="article.link"
          class="btn btn-arvhice relative inline-flex items-center justify-center h-auto px-8 py-0 overflow-hidden text-lg font-medium text-[#2AD2C1] uppercase transition-all duration-300 bg-transparent border-none rounded-full cursor-pointer leading-[3rem] hover:text-[#2AD2C1] group no-underline"
          aria-label="Đọc thêm bài viết"
        >
          Xem thêm
          <svg 
            width="15" 
            height="15" 
            viewBox="0 0 15 15" 
            fill="none"
            class="ml-2 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          >
            <path 
              d="M2.04625 14.3533L0.520081 12.8271L10.9853 2.36189H1.6102V0.181641H14.6917V13.2631H12.5114V3.88806L2.04625 14.3533Z" 
              fill="#2AD2C1"
            />
          </svg>
        </a>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'BlogArticle',
  props: {
    article: {
      type: Object,
      required: true,
      validator: (value) => {
        const requiredFields = ['id', 'title', 'excerpt', 'link', 'image', 'date', 'author', 'authorLink'];
        return value && 
               requiredFields.every(field => value[field] !== undefined) &&
               Array.isArray(value.categories);
      }
    },
    customClasses: {
      type: [String, Array, Object],
      default: ''
    }
  },
  computed: {
    articleClasses() {
      const baseClasses = [
        'post',
        `post-${this.article.id}`,
        'post',
        'type-post', 
        'status-publish',
        'format-standard',
        'has-post-thumbnail',
        'hentry'
      ];
      
      const categoryClasses = this.article.categories?.map(cat => `category-${cat.slug}`) || [];
      const tagClasses = this.article.tags?.map(tag => `tag-${tag.slug}`) || [];
      
      return [
        ...baseClasses,
        ...categoryClasses,
        ...tagClasses,
        this.customClasses
      ].filter(Boolean);
    }
  }
};
</script>

<style>
/* Font Face */
@font-face {
  font-family: "Caseicon";
  src: url("data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAAZ0AAsAAAAADAwAAAYkAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDSAqKfIVzATYCJAMcCxAABCAFhAoHIBsXCsgOJSHBwABgPDzMiLxt/v+fyGCyK1asTdAhqSF1WgG5k3eoOhNqpJ7/3WPNfMBf+MUqAADAfPCfNBQAAOBRd3L8AAA4CgAA") format("woff2");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

/* Font Imports */
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;600;700&display=swap');

/* Custom Animation Keyframe */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
