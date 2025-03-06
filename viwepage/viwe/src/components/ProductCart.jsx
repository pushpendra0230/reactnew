import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProductCart = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [detail, setDetail] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then(response => setProducts(response.data.products))
            .catch(error => console.error("Error fetching products:", error));
    }, []);

    // Add to Cart
    const addToCart = (product) => {
        const itemExists = cart.find(item => item.id === product.id);
        if (itemExists) {
            setCart(cart.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    // Remove from Cart
    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const handleChange = () => {
        navigate("/login");
    };

    const deleteAccount = () => {
        localStorage.clear();
        navigate("/");
    };

    // Fetch product details and update state
    const moveDetail = async (id) => {
        try {
            const response = await axios.get(`https://dummyjson.com/products/${id}`);
            console.log("Fetched Data:", response.data);
            setDetail(response.data);
        } catch (error) {
            console.error("Error fetching product details:", error);
        }
    };


    const closeModal = () => {
        setDetail(null);
    };

    return (
        <div className="p-5 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-5">🛒 Shopping Cart</h1>
            <div className="flex justify-between pb-5">
                <button className="bg-blue-500 px-5 py-2 hover:bg-blue-900 text-white" onClick={handleChange}>Log Out</button>
                <button className="bg-blue-500 px-5 py-2 hover:bg-blue-900 text-white" onClick={deleteAccount}>Delete Account</button>
            </div>

            {/* Product List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map(product => (
                    <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
                        {/* <img src={product.thumbnail} alt={product.title} className="h-40 w-full object-cover rounded-md"/> */}

                        <LazyLoadImage
                            alt={product.title}
                            height={150}
                            src={product.thumbnail}
                            width={200}
                        />

                        <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
                        <p className="text-gray-600">${product.price}</p>
                        <button onClick={() => addToCart(product)}
                            className="mt-2 bg-blue-500 text-white py-1 px-3 rounded">
                            Add to Cart
                        </button>
                        <button onClick={() => moveDetail(product.id)}
                            className="mt-2 bg-blue-500 text-white py-1 px-3 ml-7 rounded">
                            View Details
                        </button>
                    </div>
                ))}
            </div>

            {/* Cart Section */}
            <div className="mt-10 p-5 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold">🛍️ Your Cart</h2>
                {cart.length === 0 ? <p className="text-gray-500">Cart is empty</p> :
                    cart.map(item => (
                        <div key={item.id} className="flex justify-between items-center mt-4 border-b pb-2">
                            <div className="flex items-center">
                                <img src={item.thumbnail} alt={item.title} className="h-12 w-12 rounded-md" />
                                <div className="ml-3">
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                    <p className="text-gray-600">${item.price} × {item.quantity}</p>
                                </div>
                            </div>
                            <button onClick={() => removeFromCart(item.id)}
                                className="bg-red-500 text-white py-1 px-2 rounded">
                                Remove
                            </button>
                        </div>
                    ))
                }
            </div>

            {/* Modal for View Details */}
            {detail && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-5 rounded-lg shadow-lg w-1/3 relative">
                        <button onClick={closeModal} className="absolute top-3 right-3 text-gray-500 text-lg">✖</button>
                        <h1 className="text-2xl font-bold">{detail.title}</h1>
                        <img src={detail.thumbnail} alt={detail.title} className="h-60 w-full object-cover rounded-md mt-2" />
                        <p className="text-gray-700 mt-2">{detail.description}</p>
                        <p className="text-lg font-semibold mt-2">${detail.price}</p>
                        <div className="flex justify-end mt-4">
                            <button onClick={closeModal} className="bg-gray-500 text-white py-2 px-4 rounded">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default ProductCart;