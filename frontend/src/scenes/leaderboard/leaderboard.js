import React from 'react';
import '../leaderboard/leaderboard.css'

const Leaderboard = () => {
  // Replace this with your actual data
  const data = [
    { name: 'User 1', score: 100 },
    { name: 'User 2', score: 90 },
    { name: 'User 3', score: 80 },
    // ...
  ];

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <span>{item.name}</span>
          <span>{item.score}</span>
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;
