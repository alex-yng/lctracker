import ProblemList from "@/components/insights/ProblemList";

const Insights = () => {
  return (
    <section className="ml-16 grid h-screen grid-cols-3 gap-8 p-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl">To Review</h1>
        <div className="h-full border">
          <ProblemList />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl">Recently Completed</h1>
        <div className="h-full border">
          <ProblemList />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl">Solid</h1>
        <div className="h-full border">
          <ProblemList />
        </div>
      </div>
    </section>
  );
};

export default Insights;
