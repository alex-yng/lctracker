import { userData } from "@/const";

const fetchStats = async (username: string) => {
  try {
    const response = await fetch(
      `https://leetcode-stats-api.herokuapp.com/${username}`,
    );
    const data = await response.json();
    return { ...data, userName: username };
  } catch (error) {
    console.error(error);
    return {} as userData;
  }
};

export const fetchRecentAC = async (username: string, limit: number) => {
  try {
    const response = await fetch(
      `http://localhost:3001/${username}/acSubmission?limit=${limit}`,
    );
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

export default fetchStats;
