const fetchStats = async (username: string, endpoint = "") => {
  let path = `https://alfa-leetcode-api.onrender.com/${username}/${endpoint}`;

  const res = await fetch(path);
  const data = await res.json();
  return data;
};

export default fetchStats;
