import { Card } from "@/components/ui/card";

const Day = ({ day, submissions }: { day: number; submissions: number }) => {
  return (
    <Card className="bg-muted px-2 py-1">
      <h2>
        {day === 0 ? "Today" : day === 1 ? "Yesterday" : `${day} days ago`}
      </h2>
      <p>{submissions} submissions</p>
    </Card>
  );
};

export default Day;
