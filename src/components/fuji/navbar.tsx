"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image";


export function Navbar() {
  return (
    <header className="sticky top-4 z-50 w-full px-4">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between rounded-full border bg-background/95 px-6 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Link href="#home" className="flex items-center space-x-2">
          <Image src="https://raw.githubusercontent.com/dang-tuan-3724/Fuji-assets/main/fuji-logo.png" alt="Fuji Club Logo" width={32} height={32} className="rounded-full" />
          <span className="font-bold">Fuji</span>
        </Link>
        <nav className="hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center space-x-6 sm:flex">
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
        <div className="flex items-center justify-end gap-2">
          <ThemeToggle />
          <div className="sm:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="#home">Home</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#members">Members</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#events">Events</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#contact">Contact</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
