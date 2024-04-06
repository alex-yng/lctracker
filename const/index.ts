export const headerLinks = [
  { href: "#features", name: "features" },
  { href: "#mission", name: "mission" },
];

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
