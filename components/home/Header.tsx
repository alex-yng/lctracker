import Link from "next/link";
import { Button } from "@/components/ui/button";
import NavLink from "@/components/home/NavLink";
import { headerLinks as Links } from "@/const";

const Header = () => {
  return (
    <header className='container bg-background flex justify-between items-center py-4 fixed w-full'>
      <h1>Header</h1>
      <nav>
        <ul className='flex gap-16 items-center'>
          {Links.map((link) => (
            <NavLink key={link.name} name={link.name} href={link.href} />
          ))}
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
