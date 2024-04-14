"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Notes = () => {
  const handleSubmit = (e: FormData) => {
    console.log("submitted");
    fetch("http://localhost:8000/notes/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: e.get("probID"),
        content: e.get("noteContent"),
      }),
    });
  };

  return (
    <div className="ml-16 flex h-screen flex-col">
      <h1 className="px-8 pt-8 text-4xl">New Note</h1>
      <form
        className="flex h-full w-2/5 flex-col gap-8 p-8"
        action={handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <Label htmlFor="probID" className="text-2xl">
            problem #
          </Label>
          <Input type="number" id="probID" name="probID" required />
        </div>
        <div className="flex h-full flex-col gap-2">
          <Label htmlFor="noteContent" className="text-2xl">
            notes !
          </Label>
          <Textarea
            id="noteContent"
            name="noteContent"
            className="h-full text-lg"
            required
          />
        </div>
        <Button variant="outline" type="submit">
          Save
        </Button>
      </form>
    </div>
  );
};

export default Notes;
