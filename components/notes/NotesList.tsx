"use client";

import Note from "@/components/notes/Note";
import { useState, useEffect } from "react";

const NotesList = () => {
  const [data, setData] = useState([]);

  const fetchNotes = async () => {
    try {
      const response = await fetch("http://localhost:8000/notes/");
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  useEffect(() => {
    fetchNotes();
  });

  return (
    <section className="flex h-full flex-col gap-8 py-8 ">
      {data.map(
        (note: { title: string; content: string; published_date: string }) => {
          return (
            <Note
              probID={note.title}
              probTitle=""
              content={note.content}
              publishedDate={note.published_date.substring(0, 10)}
            />
          );
        },
      )}
    </section>
  );
};

export default NotesList;
