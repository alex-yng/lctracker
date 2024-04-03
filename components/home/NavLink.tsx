import Link from "next/link";

const NavLink = ({ name, href }: { name: string; href: string }) => {
  return (
    <li
      key={name}
      className='hover:scale-[115%] transition-transform duration-300'
    >
      <Link href={href}>{name}</Link>
    </li>
  );
};

export default NavLink;
