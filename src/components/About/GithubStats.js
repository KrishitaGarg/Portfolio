import React from "react";
import "./GitHubStats.css";

export default function GitHubStats() {
  const username = "KrishitaGarg";

  return (
    <div className="stats-container">
      {/* Full GitHub Stats SVG */}
      <div className="card" style={{ backgroundColor: "violet" }}>
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical`}
          alt="GitHub Stats"
          className="svg-card"
        />
      </div>

      {/* Top Languages SVG */}
      <div className="card" style={{ backgroundColor: "violet" }}>
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical`}
          alt="Top Languages"
          className="svg-card"
          onError={(e) => (e.target.parentNode.style.display = "none")}
        />
      </div>
    </div>
  );
}
