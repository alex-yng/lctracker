import Link from "next/link";
import { Button } from "@/components/ui/button";
import NavLink from "@/components/home/NavLink";
import { headerLinks as Links } from "@/const";
import ModeToggle from "@/components/ModeToggle";

const Header = () => {
  return (
    <header className='fixed w-full py-4 px-8 md:px-12 lg:px-16'>
      <div className='bg-background flex justify-between items-center tracking-wider'>
        <h1 className='font-semibold'>KIWI</h1>
        <nav>
          <ul className='flex gap-8 md:gap-12 lg:gap-16 items-center'>
            {Links.map((link) => (
              <NavLink key={link.name} name={link.name} href={link.href} />
            ))}
            <li>
              <Button
                variant='outline'
                className='hover:scale-105 transition-transform duration-300 border-primary font-bold'
              >
                Join Now
              </Button>
            </li>
          </ul>
        </nav>
      </div>
      <hr className='border-t border-primary mt-4' />
    </header>
  );
};

export default Header;
