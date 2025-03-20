// import React, { useEffect, useState } from 'react';
// import Api from './components/api';

// const App = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then(response => response.json())
//       .then(data => setData(data));
//   }, []);

//   return (
//     <div>
//       <Api />
//     </div>
//   );
// };
// export default App;




// import React from 'react';
// import Api from './components/api';

// const App = () => {

//   return (
//     <div>
//       <Api />
//     </div>
//   );
// };
// export default App;




// redux ............

// State – Represent the current state of the application store in the Redux Store.

// Action – A JavaScript object that describes a state change.

// Payload – Data that is passed along with an action to update the state.

// useSelector – To get the data from the store to any component.

// useDispatch – To dispatch the data to the store.




// import Counter from './components/Counter';
import React from 'react';
import Counter from './components/Counter';

const App = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default App;