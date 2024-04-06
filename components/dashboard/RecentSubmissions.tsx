import { fetchRecentSub } from "@/lib/fetchStats";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import RecentRow from "@/components/dashboard/RecentRow";
import { recentSubmissions } from "@/const";
import { cn } from "@/utils/cn";

const RecentSubmissions = async ({
  username,
  className = "",
}: {
  username: string;
  className?: string;
}) => {
  const recentAC: recentSubmissions = await fetchRecentSub(username, 5);
  const submissions = recentAC.submission;

  return (
    <Card
      className={cn(
        "transition-all duration-300 hover:scale-[102%]",
        className,
      )}
    >
      <CardHeader>
        <CardTitle>Recent Submissions</CardTitle>
        <CardDescription>
          Your past 5 AC (accepted code) submissions
        </CardDescription>
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
              return (
                <RecentRow
                  key={submission.timestamp}
                  status={
                    submission.statusDisplay === "Wrong Answer"
                      ? "Incorrect"
                      : "Accepted"
                  }
                  problem={submission.title}
                  time={submission.timestamp}
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
