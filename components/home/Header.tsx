import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className='container bg-background flex justify-between items-center py-4 fixed w-full'>
      <h1>Header</h1>
      <nav>
        <ul className='flex gap-16 items-center'>
          <li className=''>
            <Link href=''>Mission</Link>
          </li>
          <li>
            <Link href=''>Features</Link>
          </li>
          <li>
            <Link href=''>About</Link>
          </li>
          <li>
            <Button>Join Now</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
