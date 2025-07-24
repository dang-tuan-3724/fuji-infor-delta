
"use client";

import Link from "next/link";
import { Menu, MountainIcon } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

export function Navbar() {
  return (
    <header className="sticky top-4 z-50 w-full px-4">
      <div className="container flex h-16 items-center justify-between rounded-full border bg-background/95 px-6 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Link href="#home" className="flex items-center space-x-2">
          <MountainIcon className="h-6 w-6 text-primary" />
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
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="sm:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-4 text-lg font-medium mt-16">
                <SheetClose asChild>
                  <Link href="#home" className="flex w-full items-center py-2 text-muted-foreground transition-colors hover:text-primary">
                    Home
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="#members" className="flex w-full items-center py-2 text-muted-foreground transition-colors hover:text-primary">
                    Members
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="#events" className="flex w-full items-center py-2 text-muted-foreground transition-colors hover:text-primary">
                    Events
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="#contact" className="flex w-full items-center py-2 text-muted-foreground transition-colors hover:text-primary">
                    Contact
                  </Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
