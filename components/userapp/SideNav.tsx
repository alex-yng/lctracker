import Link from "next/link";
import { LayoutDashboard, NotebookPen, Settings } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import NavIcon from "@/components/userapp/NavIcon";

const SideNav = () => {
  return (
    <aside className="fixed flex h-screen w-16 flex-col items-center justify-between border-r border-muted bg-background px-2 py-4">
      <div className="flex flex-col items-center justify-center gap-6 py-2">
        <NavIcon text="Dashboard">
          <Link href="/dashboard">
            <LayoutDashboard size={28}></LayoutDashboard>
          </Link>
        </NavIcon>
        <NavIcon text="Notes">
          <NotebookPen size={28}></NotebookPen>
        </NavIcon>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 py-2">
        <NavIcon text="Settings">
          <Settings size={28}></Settings>
        </NavIcon>
        <NavIcon text="Profile">
          <UserButton afterSignOutUrl="/" />
        </NavIcon>
      </div>
    </aside>
  );
};

export default SideNav;
