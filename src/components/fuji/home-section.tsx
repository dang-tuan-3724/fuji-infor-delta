
import Image from 'next/image';

export function HomeSection() {
  return (
    <section id="home" className="relative w-full p-4">
      {/* Container for text, positioned over the image */}
      <div className="absolute inset-4 z-10 flex flex-col items-center justify-start pt-10 text-center text-white sm:pt-20">
        <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl font-headline">
               Chào mừng đến với Câu lạc bộ Fuji
            </h2>
        </div>
      </div>

      {/* Image container */}
      <div className="relative w-full h-auto rounded-2xl overflow-hidden">
        {/* Mobile image with 3/4 aspect ratio */}
        <div className="block sm:hidden aspect-[3/4] w-full">
           <div className="absolute inset-0 bg-black/60" />
           <Image
            src="https://raw.githubusercontent.com/dang-tuan-3724/Fuji-assets/refs/heads/main/background.jpg"
            alt="Thành viên câu lạc bộ"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Desktop image */}
        <div className="hidden sm:block h-[calc(100vh-3.5rem-2rem)] w-full">
           <div className="absolute inset-0 bg-black/60" />
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
