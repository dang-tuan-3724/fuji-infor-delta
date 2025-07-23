import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HomeSection() {
  return (
    <section id="home" className="relative h-[calc(100vh-3.5rem)] w-full">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Club members"
        fill
        className="object-cover"
        data-ai-hint="club members group"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
            Welcome to Fuji Club
          </h1>
          <p className="mx-auto mt-4 max-w-[700px] text-lg md:text-xl text-neutral-200">
            Connecting students through shared interests in Japanese culture, creativity, and community.
          </p>
          <div className="mt-6">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="#events">Join an Event</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
