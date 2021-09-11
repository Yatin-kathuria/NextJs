import { useState, useEffect } from "react";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    async function fetchDashoboarData() {
      const res = await fetch("http://localhost:4000/dashboard");
      const data = await res.json();
      setDashboardData(data);
      setIsLoading(false);
    }

    fetchDashoboarData();
  }, []);

  if (isLoading) {
    return <h2>Loading.....</h2>;
  }
  return (
    <div>
      <h2>Dashboard</h2>
      <h2>post - {dashboardData.posts}</h2>
      <h2>likes - {dashboardData.likes}</h2>
      <h2>followers - {dashboardData.followers}</h2>
      <h2>following - {dashboardData.following}</h2>
    </div>
  );
};

export default Dashboard;
