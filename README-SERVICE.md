# Trang Dịch Vụ - Hướng Dẫn Sử Dụng

## Tổng Quan
Trang dịch vụ đã được clone lại từ HTML/CSS gốc với đầy đủ tính năng và giao diện tương tự như bản gốc.

## Cấu Trúc Files

### Components Chính
- `ServiceDetailPage.vue` - Trang chi tiết dịch vụ chính
- `CustomerReviews.vue` - Component đánh giá khách hàng
- `FAQ.vue` - Component câu hỏi thường gặp

### Assets
- `@/assets/service/snipped.css` - CSS gốc từ template
- `@/assets/service/service-styles.css` - CSS cho fonts và icons
- `@/assets/service/fonts/` - Thư mục chứa fonts
- `@/assets/service/images/` - Thư mục chứa hình ảnh

## Tính Năng

### 1. Trang Chi Tiết Dịch Vụ
- Hiển thị thông tin dịch vụ "Trám Răng Thẩm Mỹ"
- Hình ảnh và mô tả chi tiết
- Danh sách ưu điểm
- Gallery hình ảnh dịch vụ
- Quy trình 6 bước

### 2. Đánh Giá Khách Hàng
- Carousel đánh giá với 3 khách hàng
- Hình ảnh avatar khách hàng
- Đánh giá sao (5 sao)
- Nội dung đánh giá
- Navigation dots

### 3. FAQ (Câu Hỏi Thường Gặp)
- 8 câu hỏi chia thành 2 cột
- Accordion style với animation
- Toggle mở/đóng câu hỏi
- Gradient background cho câu hỏi active

### 4. Thông Tin Liên Hệ
- Địa chỉ phòng khám
- Email và số điện thoại
- Giờ mở cửa
- Box liên hệ nổi bật

## Cách Sử Dụng

### 1. Truy Cập Trang
- Click vào menu "Dịch vụ" trong header
- Chọn "Trám Răng Thẩm Mỹ"
- Hoặc truy cập trực tiếp: `/service/detail`

### 2. Navigation
- Scroll để xem toàn bộ nội dung
- Click vào avatar khách hàng để xem đánh giá
- Click vào câu hỏi FAQ để mở/đóng
- Click "Đặt lịch khám" để liên hệ

### 3. Responsive Design
- Tự động điều chỉnh layout trên mobile
- Font size và spacing responsive
- Touch-friendly trên thiết bị di động

## Customization

### Thay Đổi Nội Dung
1. **Dịch vụ khác**: Cập nhật nội dung trong `ServiceDetailPage.vue`
2. **Đánh giá**: Thêm/sửa trong `CustomerReviews.vue`
3. **FAQ**: Cập nhật trong `FAQ.vue`

### Thay Đổi Style
1. **Colors**: Cập nhật biến CSS trong `service-styles.css`
2. **Fonts**: Thay đổi font-family trong CSS
3. **Layout**: Điều chỉnh grid và flexbox

### Thêm Dịch Vụ Mới
1. Tạo component mới tương tự `ServiceDetailPage.vue`
2. Thêm route trong `router/index.js`
3. Cập nhật menu trong `Header.vue`

## Technical Details

### Dependencies
- Vue 3 Composition API
- Vue Router
- Tailwind CSS (cho responsive)

### Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

### Performance
- Lazy loading images
- Optimized fonts
- Minified CSS
- Efficient animations

## Troubleshooting

### Icons Không Hiển Thị
- Kiểm tra đường dẫn fonts trong `service-styles.css`
- Đảm bảo file fonts tồn tại trong thư mục `fonts/`

### Images Không Load
- Kiểm tra đường dẫn trong `@/assets/service/images/`
- Đảm bảo file images tồn tại

### Layout Bị Lỗi
- Kiểm tra CSS imports
- Đảm bảo Tailwind CSS được load
- Kiểm tra responsive breakpoints

## Future Enhancements
- Thêm animation cho scroll
- Tích hợp backend API
- Thêm form đặt lịch
- Tối ưu SEO
- Thêm loading states
