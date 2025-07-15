"use client";

import React, { useEffect, useState } from "react";

function Leaderboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchLeaderboard() {
      try {
        const res = await fetch("/api/leaderboard");
        if (!res.ok) {
          throw new Error(`API Error: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error("Fetch Error:", error);
      }
    }

    fetchLeaderboard();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">🏆 Leaderboard</h1>
      {users.length === 0 ? (
        <p>No data available</p>
      ) : (
        <table className="w-full border border-collapse">
          <thead>
            <tr className="bg-gray-100 border">
              <th className="p-2 border">Rank</th>
              <th className="p-2 border">User</th>
              <th className="p-2 border">High Score</th>
              <th className="p-2 border">Badges</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border">
                <td className="p-2 border">{index + 1}</td>
                <td className="p-2 border">{user.userEmail}</td>
                <td className="p-2 border">{user.highScore}</td>
                <td className="p-2 border">{user.badgesEarned || "None"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Leaderboard;
