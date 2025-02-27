import React from "react";

const Home = ({ data }) => {
  return (
    <div>
      <h1>Home</h1>
      {data.map((item, index) => (
        <div key={index}>
          <h2>{item.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Home;