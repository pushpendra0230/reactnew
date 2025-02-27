import React from "react";

const About = ({ data }) => {
    return (
        <div>
          <h1>about</h1>
          {data.map((item, index) => (
            <div key={index}>
              <h2>{item.age}</h2>
            </div>
          ))}
        </div>
      );
};

export default About;
