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




import React from 'react';
import Api from './components/api';

const App = () => {

  return (
    <div>
      <Api />
    </div>
  );
};
export default App;