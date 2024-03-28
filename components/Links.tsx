import { UserButton, currentUser } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import DefaultLink from "@/components/DefaultLink";

interface Link {
  name: string;
  href: string;
}

const Links = async ({
  links,
  isHome = false,
}: {
  links: Link[];
  isHome?: boolean;
}) => {
  const user = await currentUser();

  return (
    <ul className='flex gap-8 items-center'>
      {links.map((link) =>
        link.href === "/sign-up" ? (
          !user ? (
            <Button
              key={link.href}
              variant={"outline"}
              className='text-black'
              asChild
            >
              <Link href='/sign-up'>Sign-Up</Link>
            </Button>
          ) : (
            <UserButton />
          )
        ) : (
          <DefaultLink key={link.href} link={link} />
        )
      )}
    </ul>
  );
};

export default Links;
