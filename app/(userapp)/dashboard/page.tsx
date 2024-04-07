"use client";

import Calendar from "@/components/dashboard/calendar/Calendar";
import Daily from "@/components/dashboard/Daily";
import Profile from "@/components/dashboard/Profile";
import RecentSubmissions from "@/components/dashboard/recentTable/RecentSubmissions";
import { useState } from "react";

const Dashboard = () => {
  const [username, setUsername] = useState("alicks111");

  return (
    <main className="lg:grid-cols-24 lg:grid-rows-24 grid h-screen gap-8 p-8 pl-28">
      <Profile
        username={username}
        className="opacity-80 lg:col-span-9 lg:row-span-9"
      />
      <RecentSubmissions
        username={username}
        className="lg:col-span-15 opacity-80 lg:row-span-12"
      />
      <Daily className="opacity-80 lg:col-span-9 lg:row-span-9" />
      <Calendar
        username={username}
        className="lg:col-span-15 lg:row-span-14 opacity-80"
      />
    </main>
  );
};

export default Dashboard;
