
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo_clb.png"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Image src={logo} alt="Fuji Club Logo" width={24} height={24} className="rounded-full" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()}© 2025 Fuji BK-HCM Japanese Club. All rights reserved. For inquiries, please contact Fuji's development team.
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
