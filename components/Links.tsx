"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Link {
  name: string;
  href: string;
}

const Links = ({ links }: { links: Link[] }) => {
  const path = usePathname();
  return (
    <ul className='flex  gap-8'>
      {links.map((link) => (
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
      ))}
    </ul>
  );
};

export default Links;
