// Dữ liệu mẫu cho services
export const servicesData = [
  {
    id: '1',
    title: 'Trám Răng Thẩm Mỹ',
    slug: 'tram-rang-tham-my',
    category: 'Thẩm Mỹ',
    description: 'Trám răng thẩm mỹ là một phương pháp nha khoa hiện đại giúp cải thiện vẻ đẹp và sức khỏe cho nụ cười của bạn.',
    longDescription: 'Trám răng thẩm mỹ là kỹ thuật sử dụng vật liệu composite có màu sắc giống răng thật để phục hồi răng bị sâu, mẻ hoặc thưa kẽ. Phương pháp này không chỉ giúp bảo vệ răng mà còn tạo ra nụ cười tự nhiên và đẹp mắt.',
    mainImage: '/src/assets/img/service.png',
    galleryImages: [
      '/src/assets/img/service.png',
      '/src/assets/img/dichvu1.jpg',
      '/src/assets/img/dichvu4.jpg'
    ],
    advantages: [
      'Bảo vệ răng khỏi vi khuẩn',
      'Thẩm mỹ cao, màu sắc tự nhiên',
      'Thời gian thực hiện nhanh chóng',
      'Chi phí hợp lý'
    ],
    processSteps: [
      {
        number: 1,
        title: 'Khám và tư vấn',
        description: 'Bác sĩ sẽ khám tổng quát và tư vấn phương pháp phù hợp'
      },
      {
        number: 2,
        title: 'Vệ sinh răng miệng',
        description: 'Làm sạch vùng răng cần trám'
      },
      {
        number: 3,
        title: 'Trám răng',
        description: 'Thực hiện trám răng với vật liệu composite'
      },
      {
        number: 4,
        title: 'Hoàn thiện',
        description: 'Đánh bóng và kiểm tra kết quả'
      }
    ],
    faqItems: [
      {
        question: 'Trám răng có đau không?',
        answer: 'Quá trình trám răng thường không đau, bác sĩ sẽ gây tê nếu cần thiết.'
      },
      {
        question: 'Trám răng có bền không?',
        answer: 'Trám răng composite có thể bền từ 5-10 năm nếu được chăm sóc tốt.'
      },
      {
        question: 'Sau khi trám răng cần lưu ý gì?',
        answer: 'Tránh ăn đồ cứng trong 24h đầu, vệ sinh răng miệng đúng cách.'
      }
    ]
  },
  {
    id: '2',
    title: 'Niềng Răng Thẩm Mỹ',
    slug: 'nieng-rang-tham-my',
    category: 'Chỉnh Nha',
    description: 'Niềng răng thẩm mỹ giúp điều chỉnh răng mọc lệch, hô, móm để có nụ cười đẹp và hàm răng đều đặn.',
    longDescription: 'Niềng răng thẩm mỹ là phương pháp sử dụng các khí cụ chỉnh nha để di chuyển răng về vị trí mong muốn. Phương pháp này không chỉ cải thiện thẩm mỹ mà còn giúp cải thiện chức năng ăn nhai và vệ sinh răng miệng.',
    mainImage: '/src/assets/img/service.png',
    galleryImages: [
      '/src/assets/img/service.png',
      '/src/assets/img/dichvu1.jpg'
    ],
    advantages: [
      'Cải thiện thẩm mỹ răng miệng',
      'Tăng cường chức năng ăn nhai',
      'Dễ dàng vệ sinh răng miệng',
      'Kết quả lâu dài'
    ],
    processSteps: [
      {
        number: 1,
        title: 'Khám và chụp X-quang',
        description: 'Bác sĩ khám và chụp X-quang để đánh giá tình trạng răng'
      },
      {
        number: 2,
        title: 'Lập kế hoạch điều trị',
        description: 'Xây dựng phác đồ điều trị phù hợp'
      },
      {
        number: 3,
        title: 'Gắn mắc cài',
        description: 'Gắn mắc cài và dây cung'
      },
      {
        number: 4,
        title: 'Theo dõi và điều chỉnh',
        description: 'Tái khám định kỳ để điều chỉnh'
      }
    ],
    faqItems: [
      {
        question: 'Niềng răng mất bao lâu?',
        answer: 'Thời gian niềng răng thường từ 18-24 tháng tùy theo mức độ phức tạp.'
      },
      {
        question: 'Niềng răng có đau không?',
        answer: 'Có thể hơi khó chịu trong những ngày đầu, nhưng sẽ quen dần.'
      },
      {
        question: 'Có cần nhổ răng không?',
        answer: 'Tùy theo tình trạng răng, bác sĩ sẽ quyết định có cần nhổ răng hay không.'
      }
    ]
  },
  {
    id: '3',
    title: 'Nhổ Răng Khôn',
    slug: 'nho-rang-khon',
    category: 'Phẫu Thuật',
    description: 'Nhổ răng khôn an toàn, không đau với công nghệ hiện đại và bác sĩ giàu kinh nghiệm.',
    longDescription: 'Răng khôn thường mọc ở độ tuổi 17-25 và có thể gây ra nhiều vấn đề như đau, viêm, ảnh hưởng đến răng bên cạnh. Nhổ răng khôn là giải pháp hiệu quả để tránh các biến chứng này.',
    mainImage: '/src/assets/img/service.png',
    galleryImages: [
      '/src/assets/img/service.png'
    ],
    advantages: [
      'Loại bỏ đau đớn',
      'Ngăn ngừa biến chứng',
      'Bảo vệ răng bên cạnh',
      'Thủ thuật an toàn'
    ],
    processSteps: [
      {
        number: 1,
        title: 'Khám và chụp X-quang',
        description: 'Đánh giá vị trí và tình trạng răng khôn'
      },
      {
        number: 2,
        title: 'Gây tê',
        description: 'Gây tê cục bộ để không đau'
      },
      {
        number: 3,
        title: 'Nhổ răng',
        description: 'Thực hiện nhổ răng khôn'
      },
      {
        number: 4,
        title: 'Hướng dẫn chăm sóc',
        description: 'Hướng dẫn chăm sóc sau nhổ răng'
      }
    ],
    faqItems: [
      {
        question: 'Nhổ răng khôn có đau không?',
        answer: 'Quá trình nhổ răng khôn được gây tê nên không đau.'
      },
      {
        question: 'Sau khi nhổ răng khôn cần lưu ý gì?',
        answer: 'Tránh ăn đồ cứng, nóng trong 24h đầu, vệ sinh răng miệng nhẹ nhàng.'
      },
      {
        question: 'Thời gian hồi phục bao lâu?',
        answer: 'Thường từ 3-7 ngày, tùy theo mức độ phức tạp của ca nhổ răng.'
      }
    ]
  }
];

// Function để lấy tất cả services
export function getAllServices() {
  return servicesData;
}

// Function để lấy service theo slug
export function getServiceBySlug(slug) {
  return servicesData.find(service => service.slug === slug);
}

// Function để lấy service theo ID
export function getServiceById(id) {
  return servicesData.find(service => service.id === id);
}

