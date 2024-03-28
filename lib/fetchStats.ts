const fetchStats = async (username: string) => {
  let path = `https://leetcodestats.cyclic.app/${username}`;

  const res = await fetch(path);
  const data = await res.json();
  return data;
};

export default fetchStats;
