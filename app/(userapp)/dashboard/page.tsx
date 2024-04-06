"use client";

import Profile from "@/components/dashboard/Profile";
import RecentSubmissions from "@/components/dashboard/RecentSubmissions";
import { useState } from "react";

const Dashboard = () => {
  const [username, setUsername] = useState("alicks111");

  return (
    <main className="ml-16 grid gap-8 p-8 lg:grid-cols-3">
      <Profile username={username} />
      <RecentSubmissions username={username} className="lg:col-span-2" />
    </main>
  );
};

export default Dashboard;
