// import React, { useState } from "react";

// const counter = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <h1>Counter</h1>
//       <h2>{count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//     </div>
//   );
// };

// export default counter;

// import React, { useState } from "react";

// const Counter = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <h1>Counter</h1>
//       <h2>{count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//       <button onClick={() => setCount(0)}>Reset</button>
//     </div>
//   );
// };

// export default Counter;

import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    if (count >= 5) {
      alert("You cannot increase count more then 5!");
    } else {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (count <= 0) {
      alert("Count cannot be less than 0!");
    } else {
      setCount(count - 1);
    }
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
};

export default Counter;