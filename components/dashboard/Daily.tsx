import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { fetchDaiy } from "@/lib/fetchStats";
import { DailyQuestion } from "@/const";
import { ThumbsUp, ThumbsDown } from "lucide-react";

const Daily = async ({ className = "" }: { className?: string }) => {
  const daily: DailyQuestion = await fetchDaiy();
  return (
    <Link
      href={daily.questionLink}
      target="_blank"
      className={cn(
        "w-full transition-all duration-300 hover:scale-[102%]",
        className,
      )}
    >
      <Card>
        <CardHeader>
          <CardTitle>Problem of the Day</CardTitle>
          <CardDescription>{daily?.date} 🔥</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <h2 className="font-semibold">
            {daily.questionFrontendId}. {daily.questionTitle}
          </h2>
          <div className="flex flex-wrap gap-3">
            <span
              className={`rounded bg-muted px-2 py-1 text-sm text-primary ${daily.difficulty === "Easy" ? "text-green-600 dark:text-green-500" : daily.difficulty === "Medium" ? "text-yellow-600 dark:text-yellow-400" : "text-red-600 dark:text-red-500"}`}
            >
              {daily.difficulty}
            </span>
            {daily.topicTags.map((tag) => (
              <span
                key={tag.slug}
                className="rounded bg-muted px-2 py-1 text-sm text-primary"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex gap-5">
          <div className="flex gap-2">
            <ThumbsUp size={20} /> {daily.likes}
          </div>
          <div className="flex gap-2">
            <ThumbsDown size={20} /> {daily.dislikes}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default Daily;
