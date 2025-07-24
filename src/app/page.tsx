import { Navbar } from '@/components/fuji/navbar';
import { HomeSection } from '@/components/fuji/home-section';
import { MembersSection } from '@/components/fuji/members-section';
import { EventsSection } from '@/components/fuji/events-section';
import { ContactSection } from '@/components/fuji/contact-section';
import { Footer } from '@/components/fuji/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <Navbar />
      <main className="flex-1 w-full">
        <HomeSection />
        <MembersSection />
        <EventsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
