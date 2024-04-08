import { fetchRecentSub } from "@/lib/fetchStats";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import RecentRow from "@/components/dashboard/recentTable/RecentRow";
import { recentSubmissions } from "@/const";
import { cn } from "@/lib/utils";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const RecentSubmissions = async ({
  username,
  className = "",
}: {
  username: string;
  className?: string;
}) => {
  // Fetch recent submissions and calculate time elapsed since now
  const recentAC: recentSubmissions = await fetchRecentSub(username, 7);
  const submissions = recentAC.submission;
  const initialTime = Date.now() / 1000;

  return (
    <Card
      className={cn(
        "transition-all duration-300 hover:scale-[102%]",
        className,
      )}
    >
      <CardHeader>
        <CardTitle>Recent Submissions</CardTitle>
        <CardDescription>Your past 7 submissions!</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">Status</TableHead>
              <TableHead>Problem</TableHead>
              <TableHead className="text-right">Time Submitted</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {submissions.map((submission) => {
              const hours = Math.round(
                (initialTime - Number(submission.timestamp)) / 3600,
              );
              return (
                <RecentRow
                  key={submission.timestamp}
                  status={
                    submission.statusDisplay === "Accepted"
                      ? "Accepted"
                      : submission.statusDisplay === "Wrong Answer"
                        ? "Wrong Answer"
                        : "Runtime error"
                  }
                  problem={submission.title}
                  time={
                    hours < 24
                      ? `${hours} hours ago`
                      : hours < 48
                        ? "Yesterday"
                        : hours < 72
                          ? "2 days ago"
                          : hours < 96
                            ? "3 days ago"
                            : hours < 120
                              ? "4 days ago"
                              : hours < 144
                                ? "5 days ago"
                                : hours < 168
                                  ? "6 days ago"
                                  : hours < 168 * 2
                                    ? "Last Week"
                                    : "More than a week ago"
                  }
                />
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RecentSubmissions;
