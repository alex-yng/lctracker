import { headerLinks, socialLinks } from "@/constants";
import Links from "@/components/Links";
import { currentUser } from "@clerk/nextjs";

const Header = async () => {
  const user = await currentUser();
  let isLoggedIn = user !== null;

  return (
    <header className='fixed w-screen grid grid-cols-3 self-center text-slate-300 text-lg px-16 py-4'>
      <nav className='justify-self-start'>
        <Links links={headerLinks} isLoggedIn={false} />
      </nav>
      <h1 className='justify-self-center'>LC Tracker</h1>
      <nav className='justify-self-end'>
        <Links links={socialLinks} isLoggedIn={isLoggedIn} />
      </nav>
    </header>
  );
};

export default Header;
