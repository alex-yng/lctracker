import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Note = ({
  probID = "1",
  probTitle = "Two Sum",
  content = "",
}: {
  probID: string;
  probTitle?: string;
  content: string;
}) => {
  return (
    <Card>
      <CardHeader>
        <h1 className="text-2xl">{`${probID}. ${probTitle}`}</h1>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
    </Card>
  );
};

export default Note;
