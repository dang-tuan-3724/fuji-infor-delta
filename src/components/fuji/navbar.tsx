"use client";

import Link from "next/link";
import { MountainIcon } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <header className="sticky top-4 z-50 w-full px-4">
      <div className="container flex h-16 items-center justify-between rounded-full border bg-background/95 px-6 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Link href="#home" className="flex items-center space-x-2">
          <MountainIcon className="h-6 w-6 text-primary" />
          <span className="font-bold">Fuji</span>
        </Link>
        <nav className="hidden items-center space-x-6 sm:flex">
          <Link href="#home" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="#members" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Members
          </Link>
          <Link href="#events" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Events
          </Link>
          <Link href="#contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>
        <div className="flex items-center justify-end">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
