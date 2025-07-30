<template>
  <article 
    :id="`post-${article.id}`"
    class="mb-8 overflow-hidden transition-all duration-500 pxl-item--archive wow fadeInUp lg:mb-12 lg:p-10 lg:rounded-3xl lg:border-2 lg:border-blue-50 animate-fadeInUp"
    :class="articleClasses"
    style="visibility: visible; animation-name: fadeInUp;"
  >
    <!-- Featured Image with Date Badge -->
    <div class="relative overflow-hidden pxl-feature pxl-item--image rounded-3xl">
      <a :href="article.link" class="block">
        <img 
          :src="article.image" 
          :alt="article.title"
          :width="article.imageWidth || 885"
          :height="article.imageHeight || 593"
          class="object-cover w-full h-auto transition-transform duration-300 hover:scale-105 attachment-patholab-archive size-patholab-archive wp-post-image"
          loading="lazy"
          decoding="async"
          :srcset="article.srcset"
          :sizes="article.sizes || '(max-width: 885px) 100vw, 885px'"
        />
      </a>
      
      <!-- Date Badge with Gradient Background -->
      <span class="absolute bottom-0 left-0 flex items-center px-6 py-3 text-xl font-medium text-white item--date rounded-tr-3xl bg-gradient-to-r from-cyan-400 to-emerald-400">
        <i class="mr-2 caseicon caseicon-calendar-1"></i>
        &nbsp;{{ article.date }}
      </span>
    </div>

    <!-- Article Content -->
    <div class="relative pt-4 transition-all duration-500 pxl-item--holder lg:pt-11">
      <!-- Meta Information -->
      <ul class="flex flex-wrap items-center p-0 pb-3 mb-3 text-sm font-semibold list-none pxl-item--meta font-chakra-petch">
        <!-- Author -->
        <li class="relative inline-block pr-3 mr-3 font-medium text-gray-500 uppercase item--author">
          <i class="bootstrap-icons bi-person-circle text-teal-400 relative top-0.5 text-base mr-1"></i>
          <a 
            :href="article.authorLink" 
            :title="`Đăng bởi ${article.author}`"
            rel="author"
            class="transition-colors text-inherit hover:text-teal-400"
          >
            {{ article.author }}
          </a>
        </li>
        
        <!-- Categories -->
        <li class="relative inline-block pr-3 mr-3 font-medium text-gray-500 uppercase item--category">
          <a 
            v-for="(category, index) in article.categories" 
            :key="category.slug"
            :href="category.link" 
            rel="tag"
            class="inline-block px-4 py-3 mr-2 text-blue-500 transition-colors bg-blue-50 rounded-3xl hover:text-teal-400"
          >
            {{ category.name }}
          </a>
        </li>
        
        <!-- Comments -->
        <li class="relative inline-block pr-3 mr-3 font-medium text-gray-500 uppercase item-comment last:pr-0 last:mr-0">
          <a 
            :href="`${article.link}#comments`"
            class="transition-colors text-inherit hover:text-teal-400"
          >
            <i class="flaticon flaticon-comment text-teal-400 relative top-0.5 text-base mr-1"></i>
            {{ article.commentsCount }} Comments
          </a>
        </li>
      </ul>
      
      <!-- Article Title -->
      <h2 class="clear-both mb-4 text-3xl font-semibold leading-tight tracking-wide break-words pxl-item--title font-chakra-petch text-slate-800 lg:mb-8 lg:text-5xl">
        <a 
          :href="article.link" 
          :title="article.title"
          class="transition-colors text-inherit hover:text-teal-400"
        >
          {{ article.title }}
        </a>
      </h2>
      
      <!-- Article Excerpt -->
      <div class="mb-6 leading-relaxed text-gray-600 pxl-item--excerpt lg:pr-12">
        {{ article.excerpt }}
      </div>
      
      <!-- Read More Button -->
      <div class="pxl-item--readmore">
        <a 
          :href="article.link"
          class="relative inline-flex items-center justify-center h-auto px-8 py-0 overflow-hidden text-lg font-medium text-teal-400 uppercase transition-all duration-300 bg-transparent border-none rounded-full cursor-pointer btn btn-arvhice leading-12 hover:text-teal-400 group"
        >
          Xem thêm
          <svg 
            width="15" 
            height="15" 
            viewBox="0 0 15 15" 
            fill="none"
            class="ml-2 transition-transform duration-300 group-hover:translate-x-1"
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
      validator(value) {
        return (
          value &&
          typeof value.id !== 'undefined' &&
          typeof value.title === 'string' &&
          typeof value.excerpt === 'string' &&
          typeof value.link === 'string' &&
          typeof value.image === 'string' &&
          typeof value.date === 'string' &&
          typeof value.author === 'string' &&
          typeof value.authorLink === 'string' &&
          Array.isArray(value.categories)
        );
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
        'type-post',
        'status-publish',
        'format-standard',
        'has-post-thumbnail',
        'hentry'
      ];
      
      // Add category classes
      const categoryClasses = this.article.categories.map(cat => `category-${cat.slug}`);
      
      // Add tag classes if available
      const tagClasses = this.article.tags ? this.article.tags.map(tag => `tag-${tag.slug}`) : [];
      
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

<style scoped>
/* Caseicon Font */
@font-face {
  font-family: "Caseicon";
  src: url("data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAAZ0AAsAAAAADAwAAAYkAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDSAqKfIVzATYCJAMcCxAABCAFhAoHIBsXCsgOJSHBwABgPDzMiLxt/v+fyGCyK1asTdAhqSF1WgG5k3eoOhNqpJ7/3WPNfMBf+MUqAADAfPCfNBQAAOBRd3L8AAA4CgAA") format("woff2");
  font-weight: normal;
  font-style: normal;
}

/* Google Fonts Import */
@import url('https://fonts.googleapis.com/css?family=Chakra+Petch:300,300i,400,400i,500,500i,600,600i,700,700i&display=swap');
@import url('https://fonts.googleapis.com/css?family=Heebo:100,200,300,400,500,600,700,800,900&display=swap');
@import url('https://fonts.googleapis.com/css?family=Work+Sans:100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i&display=swap');

/* CSS Variables */
:root {
  --primary-color: #2AD2C1;
  --secondary-color: #1D2864;
  --third-color: #6F7F90;
  --link-color: #2AD2C1;
  --link-color-hover: #2AD2C1;
  --gradient-color-from: #24B7D3;
  --gradient-color-to: #30EFAD;
}

/* Caseicon Icons */
.caseicon {
  font-family: "Caseicon", sans-serif;
  font-style: normal;
  font-weight: 400;
  display: inline-block;
}

.caseicon-calendar-1::before {
  content: "\f120";
}

/* Font Families */
.font-chakra-petch {
  font-family: 'Chakra Petch', sans-serif;
}

.font-work-sans {
  font-family: 'Work Sans', sans-serif;
}

.font-heebo {
  font-family: 'Heebo', sans-serif;
}

/* Component Styles */
.pxl-item--archive {
  transition: all 0.5s ease;
}

.pxl-item--holder {
  transition: all 0.5s ease;
}

/* Date Badge Gradient */
.item--date {
  background: linear-gradient(to right, var(--gradient-color-from), var(--gradient-color-to));
  font-size: 1.125rem;
  font-weight: 500;
}

/* Meta Styles */
.pxl-item--meta {
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
}

.pxl-item--meta li {
  position: relative;
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  color: #6b7280;
}

.pxl-item--meta li:not(:last-child)::after {
  content: '';
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 12px;
  background-color: #e5e7eb;
}

/* WordPress specific classes */
.attachment-patholab-archive {
  width: 100%;
  height: auto;
}

.size-patholab-archive {
  max-width: 885px;
  height: auto;
}

.wp-post-image {
  border-radius: 1.5rem;
}

/* Link Styles */
a {
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  outline: none;
  text-decoration: none;
}

a:hover,
a:focus {
  outline: none;
  text-decoration: none;
}

/* Button Styles */
.btn {
  line-height: 3rem;
  font-size: 1.125rem;
  font-weight: 500;
  text-transform: uppercase;
  color: var(--primary-color);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-arvhice {
  color: var(--primary-color);
}

.btn:hover,
.btn:active {
  outline: none;
  text-decoration: none;
  color: var(--primary-color);
}

.btn svg path {
  fill: var(--primary-color);
}

/* Animation */
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

.animate-fadeInUp {
  animation: fadeInUp 0.8s ease forwards;
}

.wow.fadeInUp {
  animation-name: fadeInUp;
  animation-duration: 1s;
  animation-fill-mode: both;
}

/* Responsive Design */
@media (max-width: 991px) {
  .pxl-item--archive {
    padding: 0;
    border-radius: 0;
    border: none;
  }
  
  .pxl-item--title {
    font-size: 2rem;
  }
}

@media (max-width: 767px) {
  .pxl-item--excerpt {
    padding-right: 0;
  }
  
  .pxl-item--title {
    font-size: 1.75rem;
  }
}

/* Bootstrap Icons Fallback */
.bi {
  font-family: "bootstrap-icons";
}

.bi-person-circle::before {
  content: "\f4da";
}

/* Flaticon Fallback */
.flaticon {
  font-family: "flaticon";
}

.flaticon-comment::before {
  content: "\f4ad";
}
</style>
