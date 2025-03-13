// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ProductCart from "./components/ProductCart";

// const App = () => {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<ProductCart />} />
//                 <Route path="/product" element={<ProductCart />} />
//             </Routes>
//         </BrowserRouter>
//     );
// };
// export default App;




import React, { useEffect, useState } from 'react';
import Counter from './components/Counter';
import Login from './components/Login';
import SignUp from './components/SignUp';
import LazyLoadingImage from './components/LazyLoadingImage';
import Fakepro from './components/Fakepro';

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <div>
            {/* <Counter /> */}
            {/* <Login /> */}
            {/* <SignUp /> */}
            {/* <LazyLoadingImage data={data} /> */}
            <Fakepro />
        </div>
    );
};

export default App;