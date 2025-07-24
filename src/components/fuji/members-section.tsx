
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { members } from '@/lib/members-data';
import { Badge } from '@/components/ui/badge';

const departments = ['Tất cả', 'Ban Chuyên Môn', 'Ban Đối Ngoại', 'Ban Tổ Chức Sự Kiện', 'Ban Truyền Thông'];

export function MembersSection() {
  const [activeTab, setActiveTab] = useState('Tất cả');

  const filteredMembers = activeTab === 'Tất cả'
    ? members
    : members.filter(member => member.department === activeTab);

  return (
    <section id="members" className="w-full py-12 md:py-20 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Gặp gỡ các thành viên của chúng tôi</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Một nhóm đa dạng các cá nhân tài năng đam mê sáng tạo và văn hóa.
          </p>
        </div>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-8">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-5 mb-8 h-auto flex-wrap gap-2">
            {departments.map(dept => (
              <TabsTrigger key={dept} value={dept} className="flex-1 text-xs sm:text-sm rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">{dept}</TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value={activeTab}>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
              {filteredMembers.map((member) => (
                <Card key={member.id} className="overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 rounded-2xl group">
                  <CardContent className="relative flex flex-col items-center p-0 text-center">
                    <div className="relative w-full aspect-square">
                      <Image 
                        src={member.imageUrl as string} 
                        alt={member.name} 
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4 sm:p-6 w-full">
                      <h3 className="text-base font-medium sm:text-lg">{member.name}</h3>
                      <p className="text-xs text-muted-foreground sm:text-sm">{member.department}</p>
                    </div>
                    <div className='absolute top-2 right-2 flex flex-col gap-1'>
                      {member.isPresident && <Badge variant="destructive">Chủ nhiệm</Badge>}
                      {member.isLeader && <Badge variant="secondary">Trưởng ban</Badge>}
                    </div>
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
