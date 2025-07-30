<template>
    <div id="pxl-main" class="bg-white">
        <div class="container px-4 mx-auto max-w-7xl">
            <div class="flex flex-col gap-8 row pxl-content-wrap pxl-has-sidebar pxl-sidebar-right lg:flex-row">
                <!-- Main Content Area -->
                <div id="pxl-content-area" class="pxl-content-area pxl-content-blog col-12 col-lg-9 lg:w-3/4">
                    <main id="pxl-content-main" class="pt-16">
                        <!-- Articles List -->
                        <BlogArticle 
                            v-for="article in articles" 
                            :key="article.id"
                            :article="article"
                            :custom-classes="['knowledge-page-article']"
                        />

                        <!-- Pagination -->
                        <nav class="flex justify-center mt-16 pxl-pagination-wrap">
                            <div class="flex items-center gap-1 pxl-pagination-links">
                                <span class="page-numbers current bg-teal-400 text-white border border-teal-400 flex items-center justify-center min-w-[45px] h-[45px] font-semibold">
                                    <span class="text-sm number-wrapp">1</span>
                                </span>
                                <a href="#" class="page-numbers bg-gray-50 border border-gray-200 text-gray-600 hover:bg-teal-400 hover:text-white hover:border-teal-400 transition-all flex items-center justify-center min-w-[45px] h-[45px] font-semibold">
                                    <span class="text-sm number-wrapp">2</span>
                                </a>
                                <span class="page-numbers dots border-none bg-transparent text-gray-600 cursor-default flex items-center justify-center min-w-[45px] h-[45px]">…</span>
                                <a href="#" class="page-numbers bg-gray-50 border border-gray-200 text-gray-600 hover:bg-teal-400 hover:text-white hover:border-teal-400 transition-all flex items-center justify-center min-w-[45px] h-[45px] font-semibold">
                                    <span class="text-sm number-wrapp">4</span>
                                </a>
                                <a href="#" class="page-numbers bg-gray-50 border border-gray-200 text-gray-600 hover:bg-teal-400 hover:text-white hover:border-teal-400 transition-all flex items-center justify-center min-w-[45px] h-[45px] font-semibold">
                                    <i class="text-xs caseicon caseicon-double-chevron-right"></i>
                                </a>
                            </div>
                        </nav>
                    </main>
                </div>

                <!-- Sidebar -->
                <div id="pxl-sidebar-area" class="pxl-sidebar-area pxl-sidebar-blog col-12 col-lg-3 lg:w-1/4">
                    <div class="pxl-sidebar-sticky lg:pt-16">
                        <!-- Search Widget -->
                        <section class="mb-10 border border-gray-200 widget widget_search bg-gray-50">
                            <div class="p-8 widget-content">
                                <form class="relative search-form">
                                    <label class="sr-only screen-reader-text">Search for:</label>
                                    <input 
                                        type="search" 
                                        class="w-full py-3 pl-4 pr-12 text-sm transition-colors bg-white border border-gray-300 outline-none search-field focus:border-teal-400" 
                                        placeholder="Search..." 
                                        v-model="searchQuery"
                                    >
                                    <button 
                                        type="submit" 
                                        class="absolute top-0 right-0 flex items-center justify-center w-12 h-full text-white transition-colors bg-teal-400 border-none cursor-pointer search-submit hover:bg-teal-500"
                                    >
                                        <i class="fas fa-search"></i>
                                    </button>
                                </form>
                            </div>
                        </section>

                        <!-- Categories Widget -->
                        <section class="mb-10 border border-gray-200 widget widget_categories bg-gray-50">
                            <div class="p-8 widget-content">
                                <h3 class="m-0 mb-6 text-xl font-bold tracking-wider text-gray-900 uppercase widget-title">
                                    Danh mục
                                </h3>
                                <ul class="p-0 m-0 list-none">
                                    <li v-for="category in categories" :key="category.name" class="flex items-center justify-between py-3 border-b border-gray-200 cat-item last:border-b-0">
                                        <a 
                                            :href="category.link" 
                                            class="font-medium text-gray-600 no-underline transition-colors hover:text-teal-400"
                                        >
                                            {{ category.name }}
                                        </a>
                                        <span class="px-2 py-1 text-xs text-gray-500 bg-gray-200 rounded-full post-count">{{ category.count }}</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <!-- Recent Posts Widget -->
                        <section class="mb-10 border border-gray-200 widget widget_pxl_recent_posts bg-gray-50">
                            <div class="p-8 widget-content">
                                <h3 class="m-0 mb-6 text-xl font-bold tracking-wider text-gray-900 uppercase widget-title">
                                    Bài viết mới nhất
                                </h3>
                                <div class="space-y-5">
                                    <div 
                                        v-for="post in recentPosts" 
                                        :key="post.id"
                                        class="flex gap-4 pb-5 mb-5 border-b border-gray-200 pxl-item--post last:border-b-0 last:mb-0 last:pb-0"
                                    >
                                        <div class="flex-shrink-0 pxl-item--image">
                                            <img 
                                                :src="post.image" 
                                                :alt="post.title"
                                                class="object-cover w-20 rounded h-15"
                                            >
                                        </div>
                                        <div class="flex-1">
                                            <h4 class="m-0 mb-2 text-sm font-semibold leading-tight text-gray-800 pxl-item--title">
                                                <a :href="post.link" class="text-gray-800 no-underline transition-colors hover:text-teal-400">{{ post.title }}</a>
                                            </h4>
                                            <div class="flex items-center gap-1 text-xs text-gray-500 pxl-item--date">
                                                <i class="caseicon caseicon-calendar-1 text-teal-400 text-[10px]"></i>
                                                {{ post.date }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <!-- Tag Cloud Widget -->
                        <section class="mb-10 border border-gray-200 widget widget_tag_cloud bg-gray-50">
                            <div class="p-8 widget-content">
                                <h3 class="m-0 mb-6 text-xl font-bold tracking-wider text-gray-900 uppercase widget-title">
                                    Từ khóa phổ biến
                                </h3>
                                <div class="flex flex-wrap gap-2 tagcloud">
                                    <a 
                                        v-for="tag in popularTags" 
                                        :key="tag.name"
                                        :href="tag.link"
                                        class="inline-block px-4 py-2 text-xs font-medium tracking-wider text-gray-600 no-underline uppercase transition-all bg-white border border-gray-300 tag-cloud-link hover:bg-teal-400 hover:text-white hover:border-teal-400"
                                    >
                                        {{ tag.name }}
                                    </a>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BlogArticle from '@/components/BlogArticle.vue';

export default {
    name: 'KnowledgePage',
    components: {
        BlogArticle
    },
    data() {
        return {
            searchQuery: '',
            
            // Sample articles data - Updated format for BlogArticle component
            articles: [
                {
                    id: 855,
                    title: 'Patient-Centered Hospital Labs Start Here',
                    excerpt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperia m, eaque ipsa quae ab illo inventore veritatis et quasi arch itecto beatae vitae dic sunt explicabo. Nemo enim ipsam vo luptatem quia voluptas sit aspernatur aut odit quia consequuntur magni dolores eos qui…',
                    image: '/public/vatchat.png',
                    imageWidth: 885,
                    imageHeight: 593,
                    date: '31/08/2023',
                    categories: [
                        { name: 'Nutrition', slug: 'nutrition', link: '#category/nutrition' },
                        { name: 'Research', slug: 'research', link: '#category/research' }
                    ],
                    commentsCount: 0,
                    author: 'monamedia',
                    authorLink: '#author/monamedia',
                    link: '#patient-centered-hospital-labs-start-here',
                    tags: [
                        { name: 'AI Science', slug: 'ai-science', link: '#tag/ai-science' },
                        { name: 'Scientific', slug: 'scientific', link: '#tag/scientific' }
                    ]
                },
                {
                    id: 738,
                    title: 'Blood Protein Signatures Change Across Lifespan',
                    excerpt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperia m, eaque ipsa quae ab illo inventore veritatis et quasi arch itecto beatae vitae dic sunt explicabo. Nemo enim ipsam vo luptatem quia voluptas sit aspernatur aut odit quia consequuntur magni dolores eos qui…',
                    image: '/public/may.png',
                    imageWidth: 885,
                    imageHeight: 593,
                    date: '29/08/2023',
                    categories: [
                        { name: 'Neuroscience', slug: 'neuroscience', link: '#category/neuroscience' },
                        { name: 'Nutrition', slug: 'nutrition', link: '#category/nutrition' }
                    ],
                    commentsCount: 3,
                    author: 'monamedia',
                    authorLink: '#author/monamedia',
                    link: '#blood-protein-signatures-change-across-lifespan',
                    tags: [
                        { name: 'AI Science', slug: 'ai-science', link: '#tag/ai-science' },
                        { name: 'Scientific', slug: 'scientific', link: '#tag/scientific' }
                    ]
                },
                {
                    id: 737,
                    title: 'Microbiologics Introduces SARS-CoV-2 Synthetic',
                    excerpt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperia m, eaque ipsa quae ab illo inventore veritatis et quasi arch itecto beatae vitae dic sunt explicabo. Nemo enim ipsam vo luptatem quia voluptas sit aspernatur aut odit quia consequuntur magni dolores eos qui…',
                    image: '/public/bacsi.png',
                    imageWidth: 885,
                    imageHeight: 593,
                    date: '29/08/2023',
                    categories: [
                        { name: 'Nutrition', slug: 'nutrition', link: '#category/nutrition' },
                        { name: 'Research', slug: 'research', link: '#category/research' }
                    ],
                    commentsCount: 1,
                    author: 'monamedia',
                    authorLink: '#author/monamedia',
                    link: '#microbiologics-introduces-sars-cov-2-synthetic',
                    tags: [
                        { name: 'AI Science', slug: 'ai-science', link: '#tag/ai-science' },
                        { name: 'Scientific', slug: 'scientific', link: '#tag/scientific' }
                    ]
                }
            ],

            // Sidebar data
            categories: [
                { name: 'Genetics', link: '#category/genetics', count: 4 },
                { name: 'Neuroscience', link: '#category/neuroscience', count: 7 },
                { name: 'Nutrition', link: '#category/nutrition', count: 5 },
                { name: 'Research', link: '#category/research', count: 5 }
            ],

            recentPosts: [
                {
                    id: 1,
                    title: 'Patient-Centered Hospital Labs Start Here',
                    image: '/public/vatchat.png',
                    date: '31/08/2023',
                    link: '#patient-centered-hospital-labs-start-here'
                },
                {
                    id: 2,
                    title: 'Blood Protein Signatures Change Across Lifespan',
                    image: '/public/may.png',
                    date: '29/08/2023',
                    link: '#blood-protein-signatures-change-across-lifespan'
                },
                {
                    id: 3,
                    title: 'Microbiologics Introduces SARS-CoV-2 Synthetic',
                    image: '/public/bacsi.png',
                    date: '29/08/2023',
                    link: '#microbiologics-introduces-sars-cov-2-synthetic'
                }
            ],

            popularTags: [
                { name: 'AI SCIENCE', link: '#tag/ai-science' },
                { name: 'GENETICS', link: '#tag/genetics' },
                { name: 'LABORATORY', link: '#tag/laboratory' },
                { name: 'Medical', link: '#tag/medical' },
                { name: 'NEUROSCIENCE', link: '#tag/neuroscience' },
                { name: 'PATHOLOGY', link: '#tag/pathology' },
                { name: 'Scientific', link: '#tag/scientific' }
            ]
        };
    },

    methods: {
        handleSearch() {
            // Handle search functionality
            console.log('Searching for:', this.searchQuery);
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

.caseicon {
    font-family: "Caseicon", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.caseicon-calendar-1::before {
    content: "\e900";
}

.caseicon-user::before {
    content: "\e901";
}

.caseicon-folder::before {
    content: "\e902";
}

.caseicon-comment::before {
    content: "\e903";
}

.caseicon-arrow-right::before {
    content: "\e904";
}

.caseicon-double-chevron-right::before {
    content: "\e905";
}

/* Original CSS Styles converted for Vue component */
#pxl-main {
    font-family: 'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    background-color: #fff;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}

.pxl-content-area {
    padding: 0 15px;
}

#pxl-content-main {
    padding-top: 60px;
}

/* Article Styles */
.pxl-item--archive {
    background: #fff;
    margin-bottom: 60px;
    box-shadow: none;
    border: none;
}

/* Featured Image */
.pxl-feature {
    position: relative;
    margin-bottom: 30px;
}

.pxl-feature img {
    width: 100%;
    height: auto;
    display: block;
}

/* Date Badge */
.item--date {
    position: absolute;
    bottom: 25px;
    left: 25px;
    background: rgba(255, 255, 255, 0.95);
    color: #333;
    padding: 8px 15px;
    border-radius: 4px;
    font-size: 13px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.item--date .caseicon {
    font-size: 12px;
    color: #2AD2C1;
}

/* Article Content */
.pxl-item--holder {
    padding: 0;
}

/* Meta Information */
.pxl-item--meta {
    list-style: none;
    padding: 0;
    margin: 0 0 20px 0;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    font-size: 13px;
    color: #888;
}

.pxl-item--meta li {
    display: flex;
    align-items: center;
    gap: 5px;
}

.pxl-item--meta .caseicon {
    font-size: 12px;
    color: #2AD2C1;
}

.pxl-item--meta a {
    color: #888;
    text-decoration: none;
    transition: color 0.3s ease;
}

.pxl-item--meta a:hover {
    color: #2AD2C1;
}

/* Article Title */
.pxl-item--title {
    margin: 0 0 20px 0;
    font-size: 28px;
    font-weight: 700;
    line-height: 1.3;
    color: #333;
}

.pxl-item--title a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;
}

.pxl-item--title a:hover {
    color: #2AD2C1;
}

/* Article Excerpt */
.pxl-item--excerpt {
    color: #666;
    line-height: 1.7;
    margin-bottom: 25px;
    font-size: 16px;
}

/* Read More Button */
.pxl-item--readmore {
    margin-bottom: 0;
}

.btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 25px;
    background: #2AD2C1;
    color: #fff;
    text-decoration: none;
    border-radius: 4px;
    font-weight: 600;
    font-size: 14px;
    transition: all 0.3s ease;
    border: 2px solid #2AD2C1;
}

.btn:hover {
    background: transparent;
    color: #2AD2C1;
}

.btn .caseicon {
    font-size: 12px;
}

/* Sidebar */
.pxl-sidebar-area {
    padding: 0 15px;
}

.pxl-sidebar-sticky {
    position: sticky;
    top: 100px;
    padding-top: 60px;
}

/* Widget Styles */
.widget {
    background: #f8f9fa;
    margin-bottom: 40px;
    border: 1px solid #e9ecef;
}

.widget-content {
    padding: 30px;
}

.widget-title {
    margin: 0 0 25px 0;
    font-size: 20px;
    font-weight: 700;
    color: #333;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

/* Search Widget */
.search-form {
    position: relative;
}

.search-field {
    width: 100%;
    padding: 12px 50px 12px 15px;
    border: 1px solid #ddd;
    font-size: 14px;
    outline: none;
    transition: border-color 0.3s ease;
}

.search-field:focus {
    border-color: #2AD2C1;
}

.search-submit {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 50px;
    background: #2AD2C1;
    border: none;
    color: white;
    cursor: pointer;
    transition: background 0.3s ease;
}

.search-submit:hover {
    background: #1DB4A7;
}

/* Categories Widget */
.widget_categories ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.cat-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #e9ecef;
}

.cat-item:last-child {
    border-bottom: none;
}

.cat-item a {
    color: #666;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
}

.cat-item a:hover {
    color: #2AD2C1;
}

.post-count {
    color: #999;
    font-size: 12px;
    background: #e9ecef;
    padding: 2px 8px;
    border-radius: 10px;
}

/* Recent Posts Widget */
.pxl-item--post {
    display: flex;
    gap: 15px;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #e9ecef;
}

.pxl-item--post:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
}

.pxl-item--image {
    flex-shrink: 0;
}

.pxl-item--image img {
    width: 80px;
    height: 60px;
    object-fit: cover;
    border-radius: 4px;
}

.pxl-item--post .pxl-item--title {
    margin: 0 0 8px 0;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.4;
}

.pxl-item--post .pxl-item--title a {
    color: #333;
    text-decoration: none;
    transition: color 0.3s ease;
}

.pxl-item--post .pxl-item--title a:hover {
    color: #2AD2C1;
}

.pxl-item--post .pxl-item--date {
    color: #999;
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 5px;
}

.pxl-item--post .caseicon {
    font-size: 10px;
    color: #2AD2C1;
}

/* Tag Cloud */
.tagcloud {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.tag-cloud-link {
    display: inline-block;
    padding: 8px 15px;
    background: #fff;
    color: #666;
    text-decoration: none;
    border: 1px solid #ddd;
    font-weight: 500;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.tag-cloud-link:hover {
    background: #2AD2C1;
    color: white;
    border-color: #2AD2C1;
}

/* Pagination */
.pxl-pagination-wrap {
    margin-top: 60px;
    display: flex;
    justify-content: center;
}

.pxl-pagination-links {
    display: flex;
    gap: 5px;
    align-items: center;
}

.page-numbers {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 45px;
    height: 45px;
    background: #f8f9fa;
    color: #666;
    text-decoration: none;
    border: 1px solid #e9ecef;
    font-weight: 600;
    transition: all 0.3s ease;
}

.page-numbers:hover,
.page-numbers.current {
    background: #2AD2C1;
    color: white;
    border-color: #2AD2C1;
}

.page-numbers.dots {
    border: none;
    background: transparent;
    cursor: default;
}

.page-numbers.dots:hover {
    background: transparent;
    color: #666;
}

.number-wrapp {
    font-size: 14px;
}

/* Animation */
.fadeInUp {
    animation: fadeInUp 0.8s ease forwards;
}

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

/* Responsive */
@media (max-width: 991px) {
    .pxl-sidebar-sticky {
        position: static;
        padding-top: 40px;
    }
    
    #pxl-content-main {
        padding-top: 40px;
    }
    
    .pxl-item--archive {
        margin-bottom: 40px;
    }
}

@media (max-width: 767px) {
    .container {
        padding: 0 10px;
    }
    
    .pxl-content-area,
    .pxl-sidebar-area {
        padding: 0 10px;
    }
    
    .pxl-item--title {
        font-size: 24px;
    }
    
    .widget-content {
        padding: 20px;
    }
    
    .item--date {
        bottom: 15px;
        left: 15px;
        padding: 6px 12px;
        font-size: 12px;
    }
}

/* Screen Reader */
.screen-reader-text,
.sr-only {
    position: absolute;
    left: -9999px;
    width: 1px;
    height: 1px;
    overflow: hidden;
}
</style>
