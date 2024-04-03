import Link from "next/link";
import { Button } from "@/components/ui/button";
import NavLink from "@/components/home/NavLink";
import { headerLinks as Links } from "@/const";
import ModeToggle from "@/components/ModeToggle";

const Header = () => {
  return (
    <header className='bg-background flex justify-between items-center py-4 fixed w-full px-8 md:px-12 lg:px-16'>
      <h1>Header</h1>
      <nav>
        <ul className='flex gap-8 md:gap-12 lg:gap-16 items-center'>
          {Links.map((link) => (
            <NavLink key={link.name} name={link.name} href={link.href} />
          ))}
          <li className='hover:scale-110 transition-transform duration-300'>
            <ModeToggle />
          </li>
          <li>
            <Button
              variant='outline'
              className='hover:scale-110 transition-transform duration-300 border-primary'
            >
              Join Now
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
