import MakeNote from "@/components/notes/MakeNote";
import NotesList from "@/components/notes/NotesList";

const Notes = () => {
  return (
    <section className="ml-16 grid h-screen grid-cols-2 gap-8 p-8">
      <NotesList />
      <MakeNote />
    </section>
  );
};

export default Notes;
