import { fetchRecentAC } from "@/lib/fetchStats";
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

const RecentSubmissions = async ({ username }: { username: string }) => {
  const recentAC: recentSubmissions = await fetchRecentAC(username, 5);
  const submissions = await recentAC.submission;

  return (
    <Card className="col-span-2">
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
