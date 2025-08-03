
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
    description: 'Trải nghiệm lễ hội mùa hè truyền thống của Nhật Bản với các trò chơi, biểu diễn và pháo hoa.',
    image: 'https://raw.githubusercontent.com/dang-tuan-3724/Fuji-assets/refs/heads/main/furin_workshop.jpg',
    hint: 'Furin Workshop',
    type: 'past',
    facebookLink: 'https://www.facebook.com/FujiBKHCM/posts/pfbid02ZRmVB8XYG5XYQDPq3JusoggaZSiWEWorWF1v4YTDe5Qqkc5DPock97gJTW8scAapl',
    eventImagesLink: '#'
  },
  { 
    title: 'Tuyển quân F12 - 2025', 
    date: '2025-09-01', 
    description: 'Hãy cùng tham gia vào đại gia đình Fuji nhé.',
    image: 'https://placehold.co/400x250.png',
    hint: 'workshop art',
    type: 'upcoming',
    facebookLink: '#',
    googleFormLink: '#'
  },

];
