import { fetchCalendar } from "@/lib/fetchStats";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { SubmissionCalendar } from "@/const";
import Day from "@/components/dashboard/calendar/Day";

const Calendar = async ({
  username,
  className = "",
}: {
  username: string;
  className?: string;
}) => {
  // Fetch the recent submissions
  const calendar: SubmissionCalendar = await fetchCalendar(username);
  const parsed = JSON.parse(calendar.submissionCalendar);
  // Get the current time
  const initialTime = Date.now() / 1000;
  // Get the times of the Records into an array
  const keys: number[] = [];
  Object.entries(parsed).map(([key, value]) => {
    keys.push(Number(key));
  });
  // Sort the array in ascending order
  keys.reverse();
  const display = keys.slice(0, 14);

  // Get last 14 days of submissions
  // ith day holds the number of submissions on the ith day
  // let test = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  // let i = 0;
  // let j = 0;
  // while (i < 14 && j < keys.length) {
  //   let time = initialTime - 86400 * (i + 1);
  //   let submissions = 0;

  //   while (j < keys.length && keys[j] > time) {
  //     submissions += parsed[keys[j]];
  //     j++;
  //   }

  //   display[i] = submissions;
  //   i++;
  // }

  // Calculate the streak and get recent submissions to display
  let streak = 0;
  let recentSubmissions: number[] = [];
  let i = 0;
  while (i < keys.length) {
    if (i === 0) {
      if (initialTime - keys[i] < 86400 * 7) {
        streak++;
        recentSubmissions.push(keys[i]);
        i++;
      }
    } else if (keys[i - 1] - keys[i] < 86400 * 7) {
      streak++;
      recentSubmissions.push(keys[i]);
      i++;
    } else {
      break;
    }
  }
  streak = Math.ceil(
    (initialTime - recentSubmissions[recentSubmissions.length - 1]) / 86400 / 7,
  );

  return (
    <Card
      className={cn(
        "transition-all duration-300 hover:scale-[102%]",
        className,
      )}
    >
      <CardHeader>
        <CardTitle>Subimssion Calendar</CardTitle>
        <CardDescription className="flex items-center gap-2">
          You're on a <strong>{streak}</strong> week streak! Keep it up!{" "}
          <span className="text-lg">🤩</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="grid h-3/4 grid-cols-7 grid-rows-2 place-items-center gap-4">
        {display.map((key) => {
          const days = Math.floor((initialTime - key) / 86400);
          return <Day key={key} day={days} submissions={parsed[key]} />;
        })}
        <CardFooter></CardFooter>
      </CardContent>
    </Card>
  );
};

export default Calendar;
