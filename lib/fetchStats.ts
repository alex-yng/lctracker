import { DailyQuestion, userData } from "@/const";

// Fetch profiles solved questions
export const fetchProfile = async (username: string) => {
  try {
    const response = await fetch(`http://localhost:3001/${username}/solved`);
    const data = await response.json();
    return { ...data, username: username };
  } catch (error) {
    console.error(error);
    return {} as userData;
  }
};

// Fetch last x subimssions
export const fetchRecentSub = async (username: string, limit: number) => {
  try {
    const response = await fetch(
      `http://localhost:3001/${username}/submission?limit=${limit}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

// Fetch the daily question
export const fetchDaiy = async () => {
  try {
    const response = await fetch(`http://localhost:3001/daily`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return {} as DailyQuestion;
  }
};

// Fetch submission calendar; returns json with submissionCalendar key which holds a stringified object of time: submissions
export const fetchCalendar = async (username: string) => {
  try {
    const response = await fetch(`http://localhost:3001/${username}/calendar`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

// export const fetchRecentAC = async (username: string, limit: number) => {
//   const graphqlQuery = JSON.stringify({
//     query: `query recentAcSubmissions($username: String!, $limit: Int!) {
//       recentAcSubmissionList(username: $username, limit: $limit) {
//         id
//         title
//         titleSlug
//         timestamp
//       }
//     }`,
//     variables: { username: `${username}, limit: ${limit}` },
//   });

//   const requestOptions = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: graphqlQuery,
//   };

//   try {
//     const response = await fetch(
//       "https://leetcode.com/graphql",
//       requestOptions,
//     );
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// };
