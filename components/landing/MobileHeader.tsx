"use client";

import Link from "next/link";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import Hamburger from "hamburger-react";
import { headerLinks as Links } from "@/const";
import { useState } from "react";
import { Button } from "../ui/button";
import NavLink from "@/components/landing/NavLink";

const MobileHeader = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="fixed grid w-full border-b border-primary px-4 py-2 backdrop-blur-md md:hidden">
      <div className="flex items-center justify-between tracking-wider">
        <Link href="/">
          <strong>Name</strong>
        </Link>
        <Sheet>
          <SheetTrigger>
            <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>
                <strong>NAME</strong>
              </SheetTitle>
              <SheetDescription>
                <nav className="mt-16 text-2xl">
                  <ul className="flex flex-col items-center justify-center gap-8">
                    {Links.map((link) => (
                      <NavLink
                        key={link.name}
                        name={link.name}
                        href={link.href}
                      />
                    ))}
                    <li>
                      <Button
                        className="bg-gradient-to-tr from-blue-400 to-purple-300 font-bold transition-transform duration-300 hover:scale-105 dark:from-blue-600 dark:to-purple-500"
                        asChild
                      >
                        <Link href="/sign-up">get started</Link>
                      </Button>
                    </li>
                  </ul>
                </nav>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default MobileHeader;
