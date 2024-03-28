import { headerLinks, socialLinks } from "@/constants";
import Link from "next/link";

const Header = () => {
  return (
    <header className='fixed w-screen grid grid-cols-3 self-center text-slate-200 text-lg px-16 py-4'>
      <nav className='justify-self-start'>
        <ul className='flex  gap-8'>
          {headerLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <h1 className='justify-self-center'>LC Tracker</h1>
      <nav className='justify-self-end'>
        <ul className='flex gap-8'>
          {socialLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
