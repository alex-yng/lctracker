"use client";

import { useState, useEffect } from "react";
import MakeNote from "@/components/notes/MakeNote";
import NotesList from "@/components/notes/NotesList";

const Notes = () => {
  const [data, setData] = useState([]);

  const fetchNotes = async () => {
    setTimeout(async () => {
      try {
        const response = await fetch("http://localhost:8000/notes/");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    }, 200);
  };
  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <section className="ml-16 grid h-screen grid-cols-2 gap-8 p-8">
      <NotesList data={data} fetchNotes={fetchNotes} />
      <MakeNote fetchNotes={fetchNotes} />
    </section>
  );
};

export default Notes;
