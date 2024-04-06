import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import fetchProfile from "@/lib/fetchStats";
import { Progress } from "@/components/ui/progress";

const Profile = async ({ username }: { username: string }) => {
  const data = await fetchProfile(username);

  return (
    <Card className="">
      <CardHeader>
        <CardTitle>
          <h1 className="text-xl md:text-2xl lg:text-4xl">
            {username === "alicks111"
              ? "Hello alex :)"
              : `Hello ${data.userName}!`}
          </h1>
        </CardTitle>
        <CardDescription>
          {data.totalSolved === 0
            ? "No problems yet? Better get started!"
            : data.totalSolved < 150
              ? "You're doing great! Keep it up!"
              : "Wow! You're really on the grind! Keep it up!!"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex w-full flex-col gap-4 px-2">
          <div className="flex flex-col gap-2">
            <p>Easys: {data.easySolved}</p>
            <Progress
              value={(data.easySolved / data.totalEasy) * 100}
              indicatorColor="bg-gradient-to-r from-green-500 to-green-300"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>Mediums: {data.mediumSolved}</p>
            <Progress
              value={(data.mediumSolved / data.totalMedium) * 100}
              indicatorColor="bg-gradient-to-r from-amber-500 to-amber-300"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>Hards: {data.hardSolved} </p>
            <Progress
              value={(data.hardSolved / data.totalHard) * 100}
              indicatorColor="bg-gradient-to-r from-rose-600 to-rose-400"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Profile;
