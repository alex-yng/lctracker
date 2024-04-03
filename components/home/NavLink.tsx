import Link from "next/link";

const NavLink = ({ name, href }: { name: string; href: string }) => {
  return (
    <li key={name} className='group'>
      <Link href={href}>{name}</Link>
      <hr className='border-primary w-0 group-hover:w-full transition-all duration-500'></hr>
    </li>
  );
};

export default NavLink;
