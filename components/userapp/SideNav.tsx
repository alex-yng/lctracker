import Link from "next/link";
import { LayoutDashboard, NotebookPen, Settings } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

const SideNav = () => {
  return (
    <aside className="fixed flex h-screen w-16 flex-col items-center justify-between border-r border-muted bg-background px-2 py-4">
      <div className="flex flex-col items-center justify-center gap-6 py-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              asChild
              className="rounded-full transition-colors duration-300 hover:bg-primary/30"
            >
              <Link href="/dashboard">
                <LayoutDashboard size={24}></LayoutDashboard>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={15}>
              <p>Dashboard</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              asChild
              className="rounded-full transition-colors duration-300 hover:bg-primary/30"
            >
              <Link href="/notes">
                <NotebookPen size={24}></NotebookPen>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={15}>
              <p>Notes</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 py-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              asChild
              className="rounded-full transition-colors duration-300 hover:bg-primary/30"
            >
              <Link href="/dashboard">
                <Settings size={24}></Settings>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={15}>
              <p>Settings</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="rounded-full transition-colors duration-300 hover:bg-primary/30">
              <UserButton afterSignOutUrl="/" />
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={15}>
              <p>Profile</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </aside>
  );
};

export default SideNav;
