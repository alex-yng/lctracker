"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import {
  DialogHeader,
  DialogFooter,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  Dialog,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { DialogClose } from "@radix-ui/react-dialog";

const Note = ({
  probID,
  probTitle,
  content,
  publishedDate,
  fetchNotes,
}: {
  probID: string;
  probTitle?: string;
  content: string;
  publishedDate?: string;
  fetchNotes: () => void;
}) => {
  const [newContent, setNewContent] = useState("content");

  const deletePost = () => {
    fetch(`http://localhost:8000/notes/${probID}/`, {
      method: "DELETE",
    });
    fetchNotes();
  };

  const updatePost = (content: string) => {
    fetch(`http://localhost:8000/notes/${probID}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: content }),
    });
    fetchNotes();
  };

  return (
    <Card>
      <CardHeader>
        <h1 className="text-2xl">{`${probID}. ${probTitle}`}</h1>
      </CardHeader>
      <CardContent className="flex items-start justify-between">
        <p>{content}</p>
        <Dialog>
          <DialogTrigger>
            <Button variant="secondary" className="relative w-12">
              <Pencil />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit note</DialogTitle>
              <DialogDescription>
                <Textarea
                  className="h-48 w-full"
                  defaultValue={content}
                  onChange={(e) => setNewContent(e.target.value)}
                />
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button
                  variant="outline"
                  onClick={() => updatePost(newContent)}
                >
                  Save
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
      <CardFooter className="flex justify-between">
        <p>{publishedDate}</p>
        <Button
          variant="destructive"
          onClick={deletePost}
          className="relative w-12"
        >
          X
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Note;
