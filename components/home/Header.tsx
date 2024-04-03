import Link from "next/link";
import { Button } from "@/components/ui/button";
import NavLink from "@/components/home/NavLink";
import { headerLinks as Links } from "@/const";

const Header = () => {
  return (
    <header className='hidden md:grid fixed w-full py-4 px-8 md:px-12 lg:px-16'>
      <div className='bg-background flex justify-between items-center tracking-wider'>
        <Link href='/'>
          <strong>NAME</strong>
        </Link>
        <nav>
          <ul className='flex gap-8 md:gap-12 lg:gap-16 items-center'>
            {Links.map((link) => (
              <NavLink key={link.name} name={link.name} href={link.href} />
            ))}
            <li>
              <Button className='hover:scale-105 transition-transform duration-300 font-bold bg-gradient-to-tr from-blue-400 to-purple-300 dark:from-blue-600 dark:to-purple-500'>
                get started
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
