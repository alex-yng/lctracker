import Link from "next/link";
import { Button } from "@/components/ui/button";
import NavLink from "@/components/landing/NavLink";
import { headerLinks as Links } from "@/const";

const Header = () => {
  return (
    <header className="fixed z-50 hidden w-full border-b border-primary px-8 py-4 backdrop-blur-md md:grid md:px-12 lg:px-16">
      <div className="flex items-center justify-between tracking-wider">
        <Link href="/">
          <strong>NAME</strong>
        </Link>
        <nav>
          <ul className="flex items-center gap-8 md:gap-12 lg:gap-16">
            {Links.map((link) => (
              <NavLink key={link.name} name={link.name} href={link.href} />
            ))}
            <li>
              <Button
                className="bg-gradient-to-tr from-blue-400 to-purple-300 font-bold transition-transform duration-300 hover:scale-105 dark:from-blue-600 dark:to-purple-500"
                asChild
              >
                <Link href="/sign-up">get started</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
