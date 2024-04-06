export const headerLinks = [
  { href: "#features", name: "features" },
  { href: "#mission", name: "mission" },
];

// Profile
export type userData = {
  userName: string;
  solvedProblem: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  totalSubmissionNum: problemsSolved[];
  acSubmissionNum: problemsSolved[];
};

export type problemsSolved = {
  difficulty: string;
  count: number;
  submissions: number;
};

// Recent Submissions
export type submission = {
  title: string;
  titleSlug: string;
  timestamp: string;
  statusDisplay: string;
  lang: string;
};

export type recentSubmissions = {
  count: number;
  submission: submission[];
};

// Daily
export type DailyQuestion = {
  questionLink: string;
  date: string;
  questionId: string;
  questionFrontendId: string;
  questionTitle: string;
  titleSlug: string;
  difficulty: string;
  isPaidOnly: boolean;
  question: string;
  exampleTestcases: string[];
  topicTags: TopicTag[];
  hints: string[];
  solution: Solution;
  companyTagStats: any | null;
  likes: number;
  dislikes: number;
  similarQuestions: SimilarQuestion[];
};

export type TopicTag = {
  name: string;
  slug: string;
  translatedName: string | null;
};

export type Solution = {
  id: string;
  canSeeDetail: boolean;
  paidOnly: boolean;
  hasVideoSolution: boolean;
  paidOnlyVideo: boolean;
};

export type SimilarQuestion = {
  title: string;
  titleSlug: string;
  difficulty: string;
  translatedTitle: string | null;
};
