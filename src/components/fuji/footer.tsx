import Link from "next/link";
import { MountainIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <MountainIcon className="h-6 w-6 text-primary" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Fuji Club. All Rights Reserved.
          </p>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="#home" className="text-sm font-medium text-muted-foreground hover:text-primary">Home</Link>
          <Link href="#members" className="text-sm font-medium text-muted-foreground hover:text-primary">Members</Link>
          <Link href="#events" className="text-sm font-medium text-muted-foreground hover:text-primary">Events</Link>
          <Link href="#contact" className="text-sm font-medium text-muted-foreground hover:text-primary">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
