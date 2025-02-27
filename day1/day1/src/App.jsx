// import React from "react";
// import About from "./components/About";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Contact from "./components/Contact";
// import Home from "./components/Home";
// import Counter from "./components/Counting";
// import Header from "./components/Header";

// const App = () => {
//   const data = [
//     {
//       name: "pushpendra",
//       age: 20,
//       phone: 1234567890,
//     },
//   ];

//   return (
//     <Router>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//           {/* <li>
//             <Link to="/counter">Counter</Link>
//           </li> */}
//           <li>
//             <a href="/counter">Counter</a>
//           </li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home data={data} />} />
//         <Route path="/about" element={<About data={data} />} />
//         <Route path="/contact" element={<Contact data={data} />} />
//         <Route path="/counter" element={<Counter />} />
//       </Routes>
//     </Router>
//   );
// };
// export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./Header";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Home from "./components/Home";
// import Counter from "./components/Counting";

// const App = () => {
//   const data = [
//     {
//       name: "pushpendra",
//       age: 20,
//       phone: 1234567890,
//     },
//   ];

//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home data={data} />} />
//         <Route path="/about" element={<About data={data} />} />
//         <Route path="/contact" element={<Contact data={data} />} />
//         <Route path="/counter" element={<Counter />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Counter from "./components/Counting";

const App = () => {
  const data = [
    {
      name: "pushpendra",
      age: 20,
      phone: 1234567890,
    },
  ];

  return (
    <Router>
      <Header />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <a href="/counter">Counter</a>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/about" element={<About data={data} />} />
        <Route path="/contact" element={<Contact data={data} />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </Router>
  );
};
export default App;
