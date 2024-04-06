"use client";

import Profile from "@/components/dashboard/Profile";
import RecentSubmissions from "@/components/dashboard/RecentSubmissions";
import { useState } from "react";

const Dashboard = () => {
  const [username, setUsername] = useState("alicks111");

  return (
    <main className="ml-16 grid gap-8 p-6">
      <Profile username={username} />
      <RecentSubmissions username={username} />
    </main>
  );
};

export default Dashboard;
