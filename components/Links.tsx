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
  className = "",
}: {
  links: Link[];
  className?: string;
}) => {
  const user = await currentUser();

  return (
    <ul className={`${className}`}>
      {links.map((link) =>
        link.href === "/sign-up" ? (
          !user ? (
            <Button
              key={link.name}
              variant={"outline"}
              className='dark:text-primary'
              asChild
            >
              <Link href='/sign-up'>Sign-Up</Link>
            </Button>
          ) : (
            <UserButton />
          )
        ) : link.href === "/dashboard" ? (
          !user ? (
            ""
          ) : (
            <DefaultLink key={link.name} link={link} />
          )
        ) : (
          <DefaultLink key={link.name} link={link} />
        )
      )}
    </ul>
  );
};

export default Links;
