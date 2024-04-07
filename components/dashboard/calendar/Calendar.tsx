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
          Keep up the good work! <span className="text-lg">🤩</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        {Object.entries(parsed).map(([key, value]) => {
          console.log(key, value);
          const day = Math.round((initialTime - Number(key)) / 86400);
          return <Day day={day} />;
        })}
        <CardFooter></CardFooter>
      </CardContent>
    </Card>
  );
};

export default Calendar;
