import { headerLinks, socialLinks } from "@/constants";
import Link from "next/link";
import Links from "@/components/Links";

const Header = () => {
  return (
    <header className='fixed w-screen grid grid-cols-3 self-center text-slate-300 text-lg px-16 py-4'>
      <nav className='justify-self-start'>
        <Links links={headerLinks} />
      </nav>
      <h1 className='justify-self-center'>LC Tracker</h1>
      <nav className='justify-self-end'>
        <Links links={socialLinks} />
      </nav>
    </header>
  );
};

export default Header;
