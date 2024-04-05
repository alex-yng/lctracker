"use client";

import { fetchRecentAC } from "@/lib/fetchStats";
import { Button } from "../ui/button";

const RecentCompletion = async () => {
  return (
    <div>
      <Button
        onClick={async () => {
          const data = await fetchRecentAC("alicks111", 5);
          console.log(data);
        }}
      >
        Test Fetch
      </Button>
    </div>
  );
};

export default RecentCompletion;
