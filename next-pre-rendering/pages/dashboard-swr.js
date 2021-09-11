import useSwr from "swr";

const fetcher = async () => {
  const res = await fetch("http://localhost:4000/dashboard");
  const data = await res.json();
  return data;
};
const SashboardSwr = () => {
  const { data, error } = useSwr("dashboard", fetcher);
  if (error) return "An error has occured";
  if (!data) {
    return <h2>Loading.....</h2>;
  }
  return (
    <div>
      <h2>Dashboard</h2>
      <h2>post - {data.posts}</h2>
      <h2>likes - {data.likes}</h2>
      <h2>followers - {data.followers}</h2>
      <h2>following - {data.following}</h2>
    </div>
  );
};

export default SashboardSwr;
