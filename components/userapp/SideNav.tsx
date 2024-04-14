"use client";

import Link from "next/link";
import { LayoutDashboard, NotebookPen } from "lucide-react";
import NavIcon from "@/components/userapp/NavIcon";
import ModeToggle from "@/components/ModeToggle";
import { SettingsDialogue } from "@/components/userapp/SettingsDialogue";

const SideNav = () => {
  return (
    <aside className="fixed flex h-screen w-16 flex-col items-center justify-between border-r border-muted bg-background px-2 py-4 opacity-80">
      <div className="flex flex-col items-center justify-center gap-6 py-2">
        <NavIcon text="Dashboard" href="/dashboard">
          <a href="/dashboard">
            <LayoutDashboard size={24}></LayoutDashboard>
          </a>
        </NavIcon>
        <NavIcon text="Notes" href="/notes">
          <Link href="/notes">
            <NotebookPen size={24}></NotebookPen>
          </Link>
        </NavIcon>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 py-2">
        <ModeToggle />
        <SettingsDialogue />
      </div>
    </aside>
  );
};

export default SideNav;
