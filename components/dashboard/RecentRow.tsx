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
      <TableCell className="font-medium">{status}</TableCell>
      <TableCell>{problem}</TableCell>
      <TableCell className="text-right">{time}</TableCell>
    </TableRow>
  );
};

export default RecentRow;
