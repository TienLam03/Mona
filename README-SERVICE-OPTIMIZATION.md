# Service Pages Optimization

## Overview
This document outlines the optimizations made to the service pages, including migration to Tailwind CSS, dynamic routing, and code reusability improvements.

## Key Optimizations

### 1. Data-Driven Architecture
- **Created `src/data/services.js`**: Centralized data management for all 6 services
- **Dynamic Content**: All service content is now data-driven, making it easy to add/modify services
- **Reusable Components**: Components now accept props instead of hardcoded data

### 2. Tailwind CSS Migration
- **Removed Custom CSS**: Eliminated all custom CSS files (`snipped.css`, `service-styles.css`)
- **Responsive Design**: Implemented responsive design using Tailwind's utility classes
- **Consistent Styling**: Unified design system across all service pages
- **Performance**: Reduced CSS bundle size significantly

### 3. Dynamic Routing
- **Route Structure**: `/service/:slug` for individual service pages
- **Services List**: `/service` shows all available services
- **SEO Friendly**: Clean URLs for each service

### 4. Component Optimization

#### ServiceDetailPage.vue
- **Dynamic Content**: Uses route parameters to load service data
- **Responsive Layout**: Mobile-first design with Tailwind CSS
- **Performance**: Optimized rendering with computed properties

#### FAQ.vue
- **Props-based**: Accepts `faqItems` as props
- **Reusable**: Can be used across different service pages
- **Tailwind Styling**: Modern accordion design

#### CustomerReviews.vue
- **Auto-play Carousel**: Automatic slide transitions
- **Interactive Controls**: Navigation arrows and dots
- **Responsive**: Works on all screen sizes

#### ServicesList.vue (New)
- **Grid Layout**: Displays all services in an attractive grid
- **Service Cards**: Each service has its own card with key information
- **Call-to-Action**: Prominent contact buttons

## Service Data Structure

```javascript
{
  id: 'service-id',
  title: 'Service Title',
  slug: 'service-slug',
  category: 'Service Category',
  description: 'Short description',
  longDescription: 'Detailed description',
  mainImage: 'path/to/image',
  galleryImages: ['image1', 'image2', 'image3'],
  advantages: ['advantage1', 'advantage2', 'advantage3'],
  processSteps: [
    {
      number: 1,
      title: 'Step Title',
      description: 'Step description'
    }
  ],
  faqItems: [
    {
      question: 'FAQ Question',
      answer: 'FAQ Answer'
    }
  ]
}
```

## Available Services

1. **Trám Răng Thẩm Mỹ** (`/service/tram-rang-tham-my`)
2. **Niềng Răng Thẩm Mỹ** (`/service/nieng-rang-tham-my`)
3. **Nhổ Răng Khôn** (`/service/nho-rang-khon`)
4. **Vệ Sinh Răng Miệng** (`/service/ve-sinh-rang-mieng`)
5. **Khám Răng Tổng Quát** (`/service/kham-rang-tong-quat`)
6. **Điều Trị Viêm Nướu** (`/service/dieu-tri-viem-nuou`)

## Navigation Updates

### Header.vue
- Updated all service links to use dynamic routing
- Each service now has its own dedicated route
- Consistent hover effects and transitions

## Performance Improvements

### Before Optimization
- Custom CSS files: ~50KB
- Hardcoded content in components
- Static routing for single service
- Manual content updates required

### After Optimization
- Tailwind CSS only: ~10KB (purged)
- Data-driven content
- Dynamic routing for all services
- Easy content management via data file

## Benefits

1. **Maintainability**: Easy to add new services or modify existing ones
2. **Performance**: Reduced CSS bundle size and optimized rendering
3. **Consistency**: Unified design system across all pages
4. **Scalability**: Easy to extend with new features
5. **SEO**: Clean, semantic URLs for each service
6. **User Experience**: Responsive design and smooth interactions

## Usage

### Adding a New Service
1. Add service data to `src/data/services.js`
2. Add navigation link in `src/components/Header.vue`
3. Add service images to assets folder
4. The service will automatically be available at `/service/[slug]`

### Modifying Service Content
1. Edit the service data in `src/data/services.js`
2. Changes will be reflected immediately across all pages

### Customizing Styles
1. Modify Tailwind classes in components
2. Add custom styles using Tailwind's `@apply` directive if needed
3. Update color scheme by modifying gradient classes

## File Structure

```
src/
├── data/
│   └── services.js          # Service data
├── components/
│   ├── CustomerReviews.vue  # Reviews carousel
│   └── FAQ.vue             # FAQ accordion
├── pages/ServicePage/
│   ├── ServiceDetailPage.vue # Individual service page
│   └── ServicesList.vue     # All services list
└── router/
    └── index.js            # Updated routing
```

## Technical Notes

- **Vue 3 Composition API**: All components use modern Vue 3 syntax
- **Tailwind CSS**: Utility-first CSS framework for consistent styling
- **Vue Router**: Dynamic routing with route parameters
- **Responsive Design**: Mobile-first approach with breakpoint utilities
- **Performance**: Optimized with computed properties and lazy loading

## Future Enhancements

1. **CMS Integration**: Connect to a headless CMS for content management
2. **Image Optimization**: Implement lazy loading and WebP format
3. **Analytics**: Add tracking for service page interactions
4. **A/B Testing**: Implement testing framework for service pages
5. **Internationalization**: Add multi-language support

