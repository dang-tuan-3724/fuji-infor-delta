
"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { CalendarIcon, Facebook, Image as ImageIcon, FileText } from 'lucide-react';
import { events } from '@/lib/events-data';

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
            <TabsTrigger value="upcoming" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2 px-4 text-sm sm:text-base">Sự kiện sắp tới</TabsTrigger>
            <TabsTrigger value="past" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2 px-4 text-sm sm:text-base">Sự kiện đã qua</TabsTrigger>
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
                    <div className="flex flex-col w-full gap-2">
                      {event.type === 'upcoming' ? (
                        <>
                          {event.facebookLink && (
                            <Link href={event.facebookLink} target="_blank" className='w-full'>
                              <Button className="w-full rounded-full">
                                <Facebook className="mr-2 h-4 w-4" />
                                Thông tin chi tiết
                              </Button>
                            </Link>
                          )}
                          {event.googleFormLink && (
                            <Link href={event.googleFormLink} target="_blank" className='w-full'>
                              <Button variant="outline" className="w-full rounded-full">
                                <FileText className="mr-2 h-4 w-4" />
                                Đăng ký ngay
                              </Button>
                            </Link>
                          )}
                        </>
                      ) : (
                        <>
                          {event.facebookLink && (
                            <Link href={event.facebookLink} target="_blank" className='w-full'>
                              <Button variant="outline" className="w-full rounded-full">
                                <Facebook className="mr-2 h-4 w-4" />
                                Bài viết Facebook
                              </Button>
                            </Link>
                          )}
                          {event.eventImagesLink && (
                            <Link href={event.eventImagesLink} target="_blank" className='w-full'>
                              <Button variant="outline" size="icon" className="w-full rounded-full">
                                <ImageIcon className="h-4 w-4" />
                                <span className='sr-only'>Ảnh sự kiện</span>
                              </Button>
                            </Link>
                          )}
                        </>
                      )}
                    </div>
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
