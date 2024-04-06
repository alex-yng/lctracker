"use client";

import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const NavIcon = ({
  children,
  text,
  href,
}: {
  children: React.ReactNode;
  text: string;
  href?: string;
}) => {
  const pathname = usePathname();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          asChild
          className={cn(
            "rounded-full text-primary/70 transition-colors duration-300 hover:text-primary/90",
            pathname === href && "text-primary",
          )}
        >
          {children}
        </TooltipTrigger>
        <TooltipContent side="right" sideOffset={15}>
          <p>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default NavIcon;
