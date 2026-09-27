import "./App.css";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import StatCard from "./components/statcard";

function App() {
  return (
    <div>
      <Navbar />

      <div className="app-layout">

        <Sidebar />

        <main className="main-content">
          <h1>Dashboard</h1>
          <p>Track your job and internship applications.</p>

          <div className="stats-grid">
            <StatCard title="Total Applications" value="20" />
            <StatCard title="Applied" value="10" />
            <StatCard title="Interviews" value="5" />
            <StatCard title="Selected" value="2" />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;