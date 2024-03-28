"use client";

import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Link {
  name: string;
  href: string;
}

const Links = ({
  links,
  isLoggedIn,
}: {
  links: Link[];
  isLoggedIn: boolean;
}) => {
  const path = usePathname();

  return (
    <ul className='flex  gap-8'>
      {links.map((link) =>
        link.href === "/sign-up" ? (
          !isLoggedIn ? (
            <li key={link.href}>
              <Link
                className={`${
                  path === link.href
                    ? "text-white"
                    : "hover:text-slate-200 transition-colors duration-300"
                }`}
                href={link.href}
              >
                {link.name}
              </Link>
            </li>
          ) : (
            <UserButton />
          )
        ) : (
          <li key={link.href}>
            <Link
              className={`${
                path === link.href
                  ? "text-white"
                  : "hover:text-slate-200 transition-colors duration-300"
              }`}
              href={link.href}
            >
              {link.name}
            </Link>
          </li>
        )
      )}
    </ul>
  );
};

export default Links;
