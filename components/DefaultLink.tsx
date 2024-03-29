"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Link = {
  name: string;
  href: string;
};

const DefaultLink = ({ link }: { link: Link }) => {
  const path = usePathname();

  return (
    <li key={link.name}>
      <Link
        className={`${
          path !== link.href
            ? "brightness-50"
            : "text-foreground hover:dark:text-foreground/80 transition-colors duration-300"
        }`}
        href={link.href}
      >
        {link.name}
      </Link>
    </li>
  );
};

export default DefaultLink;
