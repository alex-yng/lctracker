// api docs
// https://github.com/alfaArghya/alfa-leetcode-api?tab=readme-ov-file

const fetchStats = async (username: string, endpoint = "") => {
  let path = `https://alfa-leetcode-api.onrender.com/${username}/${endpoint}`;

  const res = await fetch(path);
  const data = await res.json();
  return data;

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
};

export default fetchStats;
