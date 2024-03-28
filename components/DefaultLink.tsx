"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Link {
  name: string;
  href: string;
}

const DefaultLink = ({ link }: { link: Link }) => {
  const path = usePathname();

  return (
    <li key={link.name}>
      <Link
        className={`${
          path === link.href
            ? "dark:text-foreground"
            : "hover:dark:text-primary/80 transition-colors duration-300"
        }`}
        href={link.href}
      >
        {link.name}
      </Link>
    </li>
  );
};

export default DefaultLink;
