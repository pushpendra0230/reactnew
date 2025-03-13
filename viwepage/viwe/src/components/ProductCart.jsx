// import React, { useEffect, useState } from "react";
// import axios from "axios";
// // import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { LazyLoadImage } from 'react-lazy-load-image-component';

// const ProductCart = () => {
//     const [products, setProducts] = useState([]);
//     const [cart, setCart] = useState([]);

//     useEffect(() => {
//         axios.get("https://dummyjson.com/products")
//             .then(response => setProducts(response.data.products))
//     }, []);

//     const addToCart = (product) => {
//         const itemExists = cart.find(item => item.id === product.id);
//         setCart(itemExists
//             ? cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
//             : [...cart, { ...product, quantity: 1 }]
//         );
//         console.log(cart);
//         // console.log(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
//     };

//     return (
//         <div className="p-5 bg-gray-100 min-h-screen">
//             <h1 className="text-3xl font-bold text-center mb-5">Shopping Cart</h1>
//             <div className="flex justify-between">
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {products.map(product => (
//                     <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
//                         <LazyLoadImage alt={product.title} height={150} src={product.thumbnail} width={200} />
//                         <h2 className="text-lg font-semibold mt-2">title :- {product.title}</h2>
//                         <p className="text-gray-600">description :- {product.description}</p>
//                         <p className="text-gray-600">category :- {product.category}</p>
//                         <p className="text-gray-600">price :- {product.price}</p>
//                         <p className="text-gray-600">discountPercentage :- {product.discountPercentage}</p>
//                         <p className="text-gray-600">rating :- {product.rating}</p>
//                         <p className="text-gray-600">stock :- {product.stock}</p>
//                         <button onClick={() => addToCart(product)} className="mt-2 bg-green-600 text-white py-1 px-3 rounded">Add to Cart</button>
//                         <button onClick={() => addToCart(product)} className="mt-2 bg-green-600 text-white py-1 px-3 rounded">Buy Now</button>
//                     </div>
//                 ))}
//             </div>

//             <div className="mt-10 p-5 bg-white shadow-lg rounded-lg">
//                 <h2 className="text-2xl font-bold">Your Cart</h2>
//                 {cart.length === 0 ? <p className="text-gray-500">Cart is empty</p> :
//                     cart.map(item => (
//                         <div key={item.id} className="flex justify-between items-center mt-4 border-b pb-2">
//                             <div className="flex items-center">
//                                 <img src={item.thumbnail} alt={item.title} className="h-12 w-12 rounded-md" />
//                                 <div className="ml-3">
//                                     <h3 className="text-lg font-semibold">{item.title}</h3>
//                                 </div>
//                             </div>
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     );
// };
// export default ProductCart;








// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { LazyLoadImage } from 'react-lazy-load-image-component';

// const ProductCart = () => {
//     const [products, setProducts] = useState([]);
//     const [cart, setCart] = useState([]);

//     useEffect(() => {
//         axios.get("https://dummyjson.com/products")
//             .then(response => setProducts(response.data.products))
//             .catch(error => console.error("Error fetching products:", error));
//     }, []);

//     const addToCart = (product) => {
//         const itemExists = cart.find(item => item.id === product.id);
//         setCart(itemExists
//             ? cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
//             : [...cart, { ...product, quantity: 1 }]
//         );
//     };

//     return (
//         <div className="p-5 bg-gray-100 min-h-screen">
//             <h1 className="text-3xl font-bold text-center mb-5">Shopping Cart</h1>

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {products.map(product => (
//                     <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
//                         <LazyLoadImage alt={product.title} height={150} src={product.thumbnail} width={200} />
//                         <h2 className="text-lg font-semibold mt-2">Title: {product.title}</h2>
//                         <p className="text-gray-600">Description: {product.description}</p>
//                         <p className="text-gray-600">Category: {product.category}</p>
//                         <p className="text-gray-600">Price: {product.price}</p>
//                         <p className="text-gray-600">Discount: {product.discountPercentage}</p>
//                         <p className="text-gray-600">Rating: {product.rating}</p>
//                         <p className="text-gray-600">Stock: {product.stock}</p>
//                         <button onClick={() => addToCart(product)} className="mt-2 bg-green-600 text-white py-1 px-3 rounded">Add to Cart</button>
//                         <button onClick={() => console.log("Buy Now clicked")} className="mt-2 bg-green-600 text-white py-1 px-3 rounded">Buy Now</button>
//                     </div>
//                 ))}
//             </div>

//             <div className="mt-10 p-5 bg-white shadow-lg rounded-lg">
//                 <h2 className="text-2xl font-bold">Your Cart</h2>
//                 {cart.length === 0 ? <p className="text-gray-500">Cart is empty</p> :
//                     cart.map(item => (
//                         <div key={item.id} className="flex justify-between items-center mt-4 border-b pb-2">
//                             <div className="flex items-center">
//                                 <LazyLoadImage alt={item.title} className="h-12 w-12 rounded-md" height={48} src={item.thumbnail} width={48} />
//                                 <div className="ml-3">
//                                     <h3 className="text-lg font-semibold">{item.title}</h3>
//                                     <p className="text-gray-600">Quantity: {item.quantity}</p>
//                                     <p className="text-gray-600">Price: {item.price}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     );
// };

// export default ProductCart;

















// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { LazyLoadImage } from 'react-lazy-load-image-component';

// const ProductCart = () => {
//     const [products, setProducts] = useState([]);
//     const [cart, setCart] = useState({});

//     useEffect(() => {
//         axios.get("https://dummyjson.com/products")
//             .then(response => setProducts(response.data.products))
//     }, []);

//     const addToCart = (product) => {
//         setCart(prevCart => ({
//             ...prevCart,
//             [product.id]: prevCart[product.id]
//                 ? { ...prevCart[product.id], quantity: prevCart[product.id].quantity + 1 }
//                 : { ...product, quantity: 1 }
//         }));
//         console.log(cart);
//     };

//     return (
//         <div className="p-5 bg-gray-100 min-h-screen">
//             <h1 className="text-3xl font-bold text-center mb-5">Shopping Cart</h1>

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {products.map(product => (
//                     <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
//                         <LazyLoadImage alt={product.title} height={150} src={product.thumbnail} width={200} />
//                         <h2 className="text-lg font-semibold mt-2">Title: {product.title}</h2>
//                         <p className="text-gray-600">Description: {product.description}</p>
//                         <p className="text-gray-600">Category: {product.category}</p>
//                         <p className="text-gray-600">Price: {product.price}</p>
//                         <p className="text-gray-600">Discount: {product.discountPercentage}%</p>
//                         <p className="text-gray-600">Rating: {product.rating}</p>
//                         <p className="text-gray-600">Stock: {product.stock}</p>

//                         <div className="flex items-center justify-between mt-4">
//                             <button
//                                 onClick={() => addToCart(product)}
//                                 className="bg-green-600 text-white py-1 px-3 rounded"
//                             >
//                                 Add to Cart
//                             </button>
//                             {cart[product.id] && (
//                                 <div className="flex items-center ml-2">
//                                     <span className="text-gray-700 font-medium">{cart[product.id].quantity}</span>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };
// export default ProductCart;









import React, { useEffect, useState } from "react";
import axios from "axios";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProductCart = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then(response => setProducts(response.data.products))
    }, []);

    const addToCart = (product) => {
        setCart(prevCart => ({
            ...prevCart,
            [product.id]: prevCart[product.id]
                ? { ...prevCart[product.id], quantity: prevCart[product.id].quantity + 1 }
                : { ...product, quantity: 1 }
        }));
    };

    const removeFromCart = (productId) => {
        setCart(prevCart => {
            const updatedCart = { ...prevCart };
            if (updatedCart[productId].quantity > 1) {
                updatedCart[productId].quantity -= 1;
            } else {
                delete updatedCart[productId];
            }
            return updatedCart;
        });
    };

    return (
        <div className="p-5 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-5">Shopping Cart</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map(product => (
                    <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
                        <LazyLoadImage alt={product.title} height={150} src={product.thumbnail} width={200} />
                        <h2 className="text-lg font-semibold mt-2">Title: {product.title}</h2>
                        <p className="text-gray-600">Description: {product.description}</p>
                        <p className="text-gray-600">Category: {product.category}</p>
                        <p className="text-gray-600">Price: {product.price}</p>
                        <p className="text-gray-600">Discount: {product.discountPercentage}%</p>
                        <p className="text-gray-600">Rating: {product.rating}</p>
                        <p className="text-gray-600">Stock: {product.stock}</p>

                        <div className="flex items-center justify-between mt-4">
                            <button
                                onClick={() => addToCart(product)}
                                className="bg-green-600 text-white py-1 px-3 rounded"
                            >
                                Add to Cart
                            </button>
                            {cart[product.id] && (
                                <div className="flex items-center ml-2">
                                    <span className="text-gray-700 font-medium">{cart[product.id].quantity}</span>
                                    <button
                                        onClick={() => removeFromCart(product.id)}
                                        className="bg-red-600 text-white py-1 px-3 rounded ml-2"
                                    >
                                        Remove
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default ProductCart;







































// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { LazyLoadImage } from 'react-lazy-load-image-component';

// const ProductCart = () => {
//     const [products, setProducts] = useState([]);
//     const [cart, setCart] = useState({});
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         axios.get("https://dummyjson.com/products")
//             .then(response => {
//                 setProducts(response.data.products);
//                 setLoading(false);
//             })
//             .catch(() => setLoading(false));
//     }, []);

//     const addToCart = (product) => {
//         setCart(prevCart => ({
//             ...prevCart,
//             [product.id]: prevCart[product.id]
//                 ? { ...prevCart[product.id], quantity: prevCart[product.id].quantity + 1 }
//                 : { ...product, quantity: 1 }
//         }));
//     };

//     const removeFromCart = (productId) => {
//         setCart(prevCart => {
//             const updatedCart = { ...prevCart };
//             if (updatedCart[productId].quantity > 1) {
//                 updatedCart[productId].quantity -= 1;
//             } else {
//                 delete updatedCart[productId];
//             }
//             return updatedCart;
//         });
//     };

//     return (
//         <div className="p-5 bg-gray-100 min-h-screen">
//             <h1 className="text-3xl font-bold text-center mb-5">Shopping Cart</h1>
//             {loading ? (
//                 <p className="text-center text-gray-600">Loading the products.......</p>
//             ) : products.length === 0 ? (
//                 <p className="text-center text-gray-600">No products available.</p>
//             ) : (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                     {products.map(product => (
//                         <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
//                             <LazyLoadImage alt={product.title} height={150} src={product.thumbnail} width={200} />
//                             <h2 className="text-lg font-semibold mt-2">Title: {product.title}</h2>
//                             <p className="text-gray-600">Description: {product.description}</p>
//                             <p className="text-gray-600">Category: {product.category}</p>
//                             <p className="text-gray-600">Price: ${product.price}</p>
//                             <p className="text-gray-600">Discount: {product.discountPercentage}%</p>
//                             <p className="text-gray-600">Rating: {product.rating}</p>
//                             <p className="text-gray-600">Stock: {product.stock}</p>

//                             <div className="flex items-center justify-between mt-4">
//                                 {product.stock > 0 ? (
//                                     <button
//                                         onClick={() => addToCart(product)}
//                                         className="bg-green-600 text-white py-1 px-3 rounded"
//                                     >
//                                         Add to Cart
//                                     </button>
//                                 ) : (
//                                     <span className="text-red-500 font-medium">Out of Stock</span>
//                                 )}

//                                 {cart[product.id] && (
//                                     <div className="flex items-center ml-2">
//                                         <span className="text-gray-700 font-medium">{cart[product.id].quantity}</span>
//                                         <button
//                                             onClick={() => removeFromCart(product.id)}
//                                             className="bg-red-600 text-white py-1 px-3 rounded ml-2"
//                                         >
//                                             Remove
//                                         </button>
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };
// export default ProductCart;
