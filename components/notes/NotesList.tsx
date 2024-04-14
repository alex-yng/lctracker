"use client";

import Note from "@/components/notes/Note";

const NotesList = ({
  fetchNotes,
  data,
}: {
  fetchNotes: () => void;
  data: any[];
}) => {
  return (
    <section className="flex h-full flex-col gap-8 py-8 ">
      {data.map(
        (note: { title: string; content: string; published_date: string }) => {
          return (
            <Note
              key={note.published_date}
              probID={note.title}
              probTitle=""
              content={note.content}
              publishedDate={note.published_date.substring(0, 10)}
              fetchNotes={fetchNotes}
            />
          );
        },
      )}
    </section>
  );
};

export default NotesList;
