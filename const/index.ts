export const headerLinks = [
  { href: "#features", name: "features" },
  { href: "#mission", name: "mission" },
];

export type userData = {
  userName: string;
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  acceptanceRate: number;
  ranking: number;
  contributionPoints: number;
  reputation: number;
  submissionCalendar: any;
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
