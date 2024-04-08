import { fetchCalendar, fetchRecentSub } from "@/lib/fetchStats";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Submission, recentSubmissions } from "@/const";
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
  const calendar: SubmissionCalendar = await fetchCalendar(username);
  const parsed = JSON.parse(calendar.submissionCalendar);
  const initialTime = Date.now() / 1000;
  const keys: number[] = [];
  Object.entries(parsed).map(([key, value]) => {
    keys.push(Number(key));
  });
  keys.reverse();
  let streak = 0;
  let i = 0;
  while (i < keys.length) {
    if (i === 0) {
      if (initialTime - keys[i] < 86400 * 7) {
        streak++;
        i++;
      }
    } else if (keys[i - 1] - keys[i] < 86400 * 7) {
      streak++;
      i++;
    } else {
      break;
    }
  }

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
          You're on a <strong>{streak}</strong> week streak! Keep up the good
          work! <span className="text-lg">🤩</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-4">
        {keys.map((key) => {
          const days = Math.round((initialTime - key) / 86400);
          return <Day key={key} day={days} submissions={parsed[key]} />;
        })}
        <CardFooter></CardFooter>
      </CardContent>
    </Card>
  );
};

export default Calendar;
