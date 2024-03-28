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
  );
};

export default DefaultLink;
