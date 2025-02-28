// import React from "react";
// import Form from "./components/Form";
// import Signup from "./components/Form2";
// import Apps from "./components/Form3";

// const App = () => {
//   return (
//     <div>
//       <Signup />
//       <Form />
//       <Apps />
//     </div>
//   );
// };

// export default App;




import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Form";
import Signup from './components/Form2';
import Products from "./components/Form3";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
};

export default App;