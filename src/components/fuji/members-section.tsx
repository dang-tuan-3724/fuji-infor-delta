"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const members = [
  { name: 'Haruki Tanaka', department: 'Art', image: 'https://placehold.co/200x200.png', hint: 'portrait person' },
  { name: 'Yui Sato', department: 'Music', image: 'https://placehold.co/200x200.png', hint: 'portrait person' },
  { name: 'Kenji Suzuki', department: 'Literature', image: 'https://placehold.co/200x200.png', hint: 'portrait person' },
  { name: 'Airi Yamamoto', department: 'Art', image: 'https://placehold.co/200x200.png', hint: 'portrait person' },
  { name: 'Takashi Ito', department: 'Photography', image: 'https://placehold.co/200x200.png', hint: 'portrait person' },
  { name: 'Mio Watanabe', department: 'Music', image: 'https://placehold.co/200x200.png', hint: 'portrait person' },
  { name: 'Daiki Kobayashi', department: 'Literature', image: 'https://placehold.co/200x200.png', hint: 'portrait person' },
  { name: 'Hina Nakamura', department: 'Photography', image: 'https://placehold.co/200x200.png', hint: 'portrait person' },
];

const departments = ['All', 'Art', 'Music', 'Literature', 'Photography'];

export function MembersSection() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredMembers = activeTab === 'All'
    ? members
    : members.filter(member => member.department === activeTab);

  return (
    <section id="members" className="w-full py-12 md:py-20 lg:py-24 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Meet Our Members</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A diverse group of talented individuals passionate about creativity and culture.
          </p>
        </div>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-8">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-5 mb-8">
            {departments.map(dept => (
              <TabsTrigger key={dept} value={dept}>{dept}</TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value={activeTab}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredMembers.map((member) => (
                <Card key={member.name} className="overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <Avatar className="w-24 h-24 mb-4">
                      <AvatarImage src={member.image} alt={member.name} data-ai-hint={member.hint} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-lg font-medium">{member.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{member.department}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
