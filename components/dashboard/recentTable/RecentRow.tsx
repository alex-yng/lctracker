import { TableRow, TableCell } from "@/components/ui/table";

const RecentRow = ({
  status,
  problem,
  time,
}: {
  status: string;
  problem: string;
  time: string;
}) => {
  return (
    <TableRow>
      <TableCell
        className={`font-medium ${status === "Accepted" ? "text-green-600 dark:text-green-400" : "text-red-500 dark:text-red-400"}`}
      >
        {status}
      </TableCell>
      <TableCell>{problem}</TableCell>
      <TableCell className="text-right">{time}</TableCell>
    </TableRow>
  );
};

export default RecentRow;
