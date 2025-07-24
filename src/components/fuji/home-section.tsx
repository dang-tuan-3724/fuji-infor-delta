
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HomeSection() {
  return (
    <section id="home" className="relative w-full">
      {/* Container for text, positioned over the image */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-start pt-8 text-center text-white sm:pt-24">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
            Chào mừng đến với Câu lạc bộ Fuji
          </h1>
          <div className="mt-6">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
              <Link href="#events">Tham gia sự kiện</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Image container */}
      <div className="relative w-full h-auto">
        {/* Mobile image with 4/3 aspect ratio */}
        <div className="block sm:hidden aspect-[3/4] w-full">
           <div className="absolute inset-0 bg-black/50" />
           <Image
            src="https://raw.githubusercontent.com/dang-tuan-3724/Fuji-assets/refs/heads/main/background.jpg"
            alt="Thành viên câu lạc bộ"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Desktop image */}
        <div className="hidden sm:block h-[calc(100vh-3.5rem)] w-full">
           <div className="absolute inset-0 bg-black/50" />
           <Image
            src="https://raw.githubusercontent.com/dang-tuan-3724/Fuji-assets/refs/heads/main/background.jpg"
            alt="Thành viên câu lạc bộ"
            fill
            className="object-cover"
            style={{ objectPosition: 'center' }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
