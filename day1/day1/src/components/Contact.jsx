import React from "react";

const Contact = ({data}) => {
  return (
    <div>
      <h1>contact</h1>
      {data.map((item, index) => (
        <div key={index}>
          <h2>{item.phone}</h2>
        </div>
      ))}
    </div>
  );
};

export default Contact;
