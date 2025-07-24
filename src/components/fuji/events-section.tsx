
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { CalendarIcon, Facebook, Image as ImageIcon } from 'lucide-react';

const events = [
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

export function EventsSection() {
  const [activeTab, setActiveTab] = useState('upcoming');

  const filteredEvents = events.filter(event => event.type === activeTab);

  return (
    <section id="events" className="w-full py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Sự kiện của Câu lạc bộ</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Khám phá danh sách các sự kiện hấp dẫn đã và đang diễn ra của chúng tôi. Luôn có điều gì đó mới mẻ!
          </p>
        </div>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 h-auto rounded-full gap-2">
            <TabsTrigger value="upcoming" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2">Sự kiện sắp tới</TabsTrigger>
            <TabsTrigger value="past" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2">Sự kiện đã qua</TabsTrigger>
          </TabsList>
          <TabsContent value={activeTab} className="mt-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredEvents.map((event) => (
                <Card key={event.title} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl rounded-2xl">
                  <CardHeader className="p-0">
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={400}
                      height={250}
                      className="object-cover w-full h-48"
                      data-ai-hint={event.hint}
                    />
                  </CardHeader>
                  <CardContent className="flex-1 p-6">
                    <CardTitle className="text-xl font-bold">{event.title}</CardTitle>
                    <div className="flex items-center mt-2 text-sm text-muted-foreground">
                      <CalendarIcon className="w-4 h-4 mr-2" />
                      <span>{new Date(event.date).toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <CardDescription className="mt-4">{event.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    {event.type === 'upcoming' ? (
                      <Button className="w-full">Tìm hiểu thêm</Button>
                    ) : (
                      <div className="flex flex-col w-full gap-2">
                        <Button variant="outline" className="w-full rounded-full">
                          <Facebook className="mr-2 h-4 w-4" />
                          Bài viết Facebook
                        </Button>
                        <Button variant="outline" className="w-full rounded-full">
                          <ImageIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
