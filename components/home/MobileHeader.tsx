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
import NavLink from "@/components/home/NavLink";

const MobileHeader = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className='grid md:hidden fixed w-full py-2 px-4 backdrop-blur-sm border-b border-primary'>
      <div className='flex justify-between items-center tracking-wider'>
        <Link href='/'>
          <strong>Name</strong>
        </Link>
        <Sheet>
          <SheetTrigger>
            <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
          </SheetTrigger>
          <SheetContent side='right'>
            <SheetHeader>
              <SheetTitle>
                <strong>NAME</strong>
              </SheetTitle>
              <SheetDescription>
                <nav className='text-2xl mt-16'>
                  <ul className='flex flex-col gap-8 justify-center items-center'>
                    {Links.map((link) => (
                      <NavLink
                        key={link.name}
                        name={link.name}
                        href={link.href}
                      />
                    ))}
                    <li>
                      <Button className='hover:scale-105 transition-transform duration-300 font-bold bg-gradient-to-tr from-blue-400 to-purple-300 dark:from-blue-600 dark:to-purple-500'>
                        get started
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
