import ProblemList from "@/components/insights/ProblemList";
import { recentACSubmissions, submission } from "@/const";
import { fetchRecentAC } from "@/lib/fetchStats";

const Insights = async () => {
  const recentAC = await fetchRecentAC("alicks111", 20);

  const parseAC = (submissions: recentACSubmissions) => {
    const review = submissions.submission.filter((sub) => {
      // Calculate time since submission
      const diff = Date.now() - Number(sub.timestamp);
      // if time greater than 2 weeks (in seconds), add to review
      return diff > 120960000000;
    });
    console.log(review);
  };
  if (recentAC) {
    parseAC(recentAC);
  }

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
