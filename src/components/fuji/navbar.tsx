"use client";

import Link from "next/link";
import { MountainIcon } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="#home" className="mr-6 flex items-center space-x-2">
          <MountainIcon className="h-6 w-6 text-primary" />
          <span className="font-bold">Fuji</span>
        </Link>
        <nav className="hidden flex-1 items-center space-x-4 sm:flex">
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
        <div className="flex flex-1 items-center justify-end space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
