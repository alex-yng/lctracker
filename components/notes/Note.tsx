import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Note = ({
  probID = "1",
  probTitle = "Two Sum",
  content = "",
  publishedDate = "2021-09-01",
  fetchNotes,
}: {
  probID: string;
  probTitle?: string;
  content: string;
  publishedDate?: string;
  fetchNotes: () => void;
}) => {
  const deletePost = () => {
    fetch(`http://localhost:8000/notes/${probID}/delete/`, {
      method: "DELETE",
    });
    fetchNotes();
  };

  return (
    <Card>
      <CardHeader>
        <h1 className="text-2xl">{`${probID}. ${probTitle}`}</h1>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
      <CardFooter className="flex w-full items-center justify-between">
        <p>{publishedDate}</p>
        <Button variant="destructive" onClick={deletePost}>
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Note;
