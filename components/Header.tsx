import { headerLinks, homeLinks } from "@/constants";
import Links from "@/components/Links";

const Header = async ({ isHome = false }: { isHome?: boolean }) => {
  return (
    <header className='fixed w-screen grid grid-cols-3 self-center text-slate-300 text-lg px-16 py-4'>
      <nav className='justify-self-start self-center'>
        <Links links={headerLinks} />
      </nav>
      <h1 className='justify-self-center self-center'>LC Tracker</h1>
      <nav className='justify-self-end'>
        <Links links={homeLinks} isHome={isHome} />
      </nav>
    </header>
  );
};

export default Header;
