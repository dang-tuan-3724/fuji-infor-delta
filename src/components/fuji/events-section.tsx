"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { CalendarIcon } from 'lucide-react';

const events = [
  { 
    title: 'Cherry Blossom Festival', 
    date: '2024-04-15', 
    description: 'Annual celebration of spring with music, food, and art under the cherry blossoms.',
    image: 'https://placehold.co/400x250.png',
    hint: 'event social',
    type: 'past' 
  },
  { 
    title: 'Summer Matsuri', 
    date: '2024-08-05', 
    description: 'Experience a traditional Japanese summer festival with games, performances, and fireworks.',
    image: 'https://placehold.co/400x250.png',
    hint: 'festival fun',
    type: 'upcoming' 
  },
  { 
    title: 'Calligraphy Workshop', 
    date: '2024-09-20', 
    description: 'Learn the art of Japanese calligraphy from a master sensei. All materials provided.',
    image: 'https://placehold.co/400x250.png',
    hint: 'workshop art',
    type: 'upcoming' 
  },
  { 
    title: 'Anime Movie Marathon', 
    date: '2024-03-10', 
    description: 'A full day of classic and modern anime films, with free popcorn and drinks.',
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
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Club Events</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Check out our exciting lineup of past and future events. There's always something happening!
          </p>
        </div>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
          </TabsList>
          <TabsContent value={activeTab} className="mt-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredEvents.map((event) => (
                <Card key={event.title} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl">
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
                      <span>{new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <CardDescription className="mt-4">{event.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button className="w-full">Learn More</Button>
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
