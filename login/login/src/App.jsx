import React from "react";
import Form from "./components/Form";
import Signup from "./components/Form2";
import PostsList from "./components/Form3";

const App = () => {
  return (
    <div>
      <Signup />
      <Form />
      <PostsList />
    </div>
  );
};

export default App;
