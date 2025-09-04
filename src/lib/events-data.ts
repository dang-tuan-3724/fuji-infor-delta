
export type Event = {
  title: string;
  date: string;
  description: string;
  image: string;
  hint: string;
  type: 'upcoming' | 'past';
  facebookLink?: string;
  googleFormLink?: string;
  eventImagesLink?: string;
};

export const events: Event[] = [
  { 
    title: 'Ngày hội văn hóa đọc', 
    date: '2025-04-18', 
    description: 'Tại Ngày hội Văn hóa đọc, các bạn sẽ có cơ hội chìm đắm vào không gian sách vô cùng thú vị, được trải nghiệm nhiều gian hàng độc đáo đến từ các đơn vị đồng hành',
    image: 'https://raw.githubusercontent.com/dang-tuan-3724/Fuji-assets/refs/heads/main/van_hoa_doc.jpg',
    hint: 'Ngày hội văn hóa đọc',
    type: 'past',
    facebookLink: 'https://www.facebook.com/FujiBKHCM/posts/pfbid02QkrXvcLHHDVPJYnLhoq9BcRffTtJfzFewE2kpE6tZuXxEhqEYUCWrStyt2BsEysxl',
    eventImagesLink: '#'
  },
  { 
    title: 'Workshop làm chuông gió Furin', 
    date: '2025-05-30', 
    description: 'Trải nghiệm workshop làm chuông gió Furin. Cùng nhau tạo nên những chiếc chuông gió xinh xắn và mang về nhà nhé!',
    image: 'https://raw.githubusercontent.com/dang-tuan-3724/Fuji-assets/refs/heads/main/furin_workshop.jpg',
    hint: 'Furin Workshop',
    type: 'past',
    facebookLink: 'https://www.facebook.com/FujiBKHCM/posts/pfbid02ZRmVB8XYG5XYQDPq3JusoggaZSiWEWorWF1v4YTDe5Qqkc5DPock97gJTW8scAapl',
    eventImagesLink: '#'
  },
  { 
    title: 'Tuyển quân F12 - 2025', 
    date: '2025-09-04', 
    description: 'FUJI mở đơn tuyển F12 2025 — gồm 3 vòng: Điền form (Wall Sina), Phỏng vấn (Wall Rose) và Training (Wall Maria). Đăng ký để thể hiện đam mê, kỹ năng và gia nhập câu lạc bộ Fuji cùng tụi mình nhé!',
    image: 'https://raw.githubusercontent.com/dang-tuan-3724/Fuji-assets/refs/heads/main/tuyen_quan_f12.jpg',
    hint: 'workshop art',
    type: 'upcoming',
    facebookLink: 'https://www.facebook.com/share/p/1GGc3HCyAi/',
    googleFormLink: 'https://forms.gle/q9wHAsmqAdin4Qyt6'
  },

];
