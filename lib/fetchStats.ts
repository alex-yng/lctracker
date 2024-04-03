import { userData } from "@/const";

const fetchStats = async (username: string) => {
  try {
    const response = await fetch(
      `https://leetcode-stats-api.herokuapp.com/${username}`
    );
    const data = await response.json();
    return { ...data, userName: username };
  } catch (error) {
    console.error(error);
    return {} as userData;
  }
};

export default fetchStats;
