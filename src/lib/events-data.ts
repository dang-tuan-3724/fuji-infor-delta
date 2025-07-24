
export type Event = {
  title: string;
  date: string;
  description: string;
  image: string;
  hint: string;
  type: 'upcoming' | 'past';
};

export const events: Event[] = [
  { 
    title: 'Lễ hội hoa anh đào', 
    date: '2024-04-15', 
    description: 'Lễ hội thường niên chào xuân với âm nhạc, ẩm thực và nghệ thuật dưới những tán hoa anh đào.',
    image: 'https://placehold.co/400x250.png',
    hint: 'event social',
    type: 'past' 
  },
  { 
    title: 'Lễ hội mùa hè Matsuri', 
    date: '2024-08-05', 
    description: 'Trải nghiệm lễ hội mùa hè truyền thống của Nhật Bản với các trò chơi, biểu diễn và pháo hoa.',
    image: 'https://placehold.co/400x250.png',
    hint: 'festival fun',
    type: 'upcoming' 
  },
  { 
    title: 'Workshop Thư pháp', 
    date: '2024-09-20', 
    description: 'Học nghệ thuật thư pháp Nhật Bản từ một sensei bậc thầy. Tất cả dụng cụ sẽ được cung cấp.',
    image: 'https://placehold.co/400x250.png',
    hint: 'workshop art',
    type: 'upcoming' 
  },
  { 
    title: 'Marathon phim Anime', 
    date: '2024-03-10', 
    description: 'Một ngày trọn vẹn với các bộ phim anime kinh điển và hiện đại, kèm bắp rang bơ và nước uống miễn phí.',
    image: 'https://placehold.co/400x250.png',
    hint: 'movie night',
    type: 'past' 
  },
];
