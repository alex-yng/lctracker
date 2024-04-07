"use client";

import Link from "next/link";
import { LayoutDashboard, NotebookPen } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import NavIcon from "@/components/userapp/NavIcon";
import ModeToggle from "@/components/ModeToggle";
import { SettingsDialogue } from "@/components/userapp/SettingsDialogue";

const SideNav = () => {
  return (
    <aside className="fixed flex h-screen w-16 flex-col items-center justify-between border-r border-muted bg-background px-2 py-4 opacity-80">
      <div className="flex flex-col items-center justify-center gap-6 py-2">
        <NavIcon text="Dashboard" href="/dashboard">
          <Link href="/dashboard">
            <LayoutDashboard size={24}></LayoutDashboard>
          </Link>
        </NavIcon>
        <NavIcon text="Notes" href="/notes">
          <NotebookPen size={24}></NotebookPen>
        </NavIcon>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 py-2">
        <ModeToggle />
        <SettingsDialogue />
        <NavIcon text="Profile" href="">
          <UserButton afterSignOutUrl="/" />
        </NavIcon>
      </div>
    </aside>
  );
};

export default SideNav;
