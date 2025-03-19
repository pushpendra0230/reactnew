// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const Api = () => {
//     const [productData, setProductData] = useState([])
//     const [cartdata, setcartdata] = useState([])

//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await axios.get('https://fakestoreapi.com/products');
//             console.log(response.data)
//             setProductData(response.data)
//         }
//         fetchData()
//     }, [])

//     const addToCart = (item) => {
//         setcartdata([...cartdata, item])
//         // const newItems = [...cartdata, item]
//         // console.log(newItems)
//     }

//     const removeCart = (id) => {
//         const newItems = cartdata.filter((item) => item.id !== id)
//         setcartdata(newItems)
//     }

//     return (
//         <>
//             <h1>cart items : {cartdata.length}</h1>
//             {cartdata.map((item, index) => (
//                 <div key={index}>
//                     <h5>{item.title}</h5>
//                     <p>{item.category}</p>
//                     <p>{item.price}</p>
//                 </div>
//             ))}

//             {productData.map((item, index) => (
//                 <div key={index} className=''>
//                     <img src={item.image} className='w-[100px]' />
//                     <h5>{item.title}</h5>
//                     <p>{item.category}</p>
//                     <p>{item.price}</p>
//                     <button className='bg-green-500 ' onClick={() => addToCart(item)}>Add to cart</button>
//                     <button className='bg-red-500 ' onClick={() => removeCart(item.id)}>remove item</button>
//                 </div>
//             ))}
//         </>
//     )
// }
// export default Api;







import React, { use, useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';


const api = () => {
    const [productData, setProductData] = useState([])
    const [cartdata, setcartdata] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://fakestoreapi.com/products");
                console.log(response.data)
                setProductData(response.data);
            } catch (error) {
                console.error("error", error);
            }
        }
        fetchData();
    }, []);

    const addtocart = (item) => {
        setcartdata([...cartdata, item])
        console.log(cartdata)
    }

    const removeCart = (id) => {
        const newItems = cartdata.filter((item) => item.id !== id)
        setcartdata(newItems)
    }

    return (
        <>
            <h1>items of the cart : {cartdata.length}</h1>
            {cartdata.map((item, index) => (
                <div key={index}>
                    <h5>{item.title}</h5>
                    <p>{item.category}</p>
                    <p>{item.price}</p>
                    <button className='bg-red-500' onClick={() => removeCart(item.id)}>remove item</button>
                </div>
            ))}
            <div>
                {productData.map((item, index) => (
                    <div key={index} className=''>
                        < img src={item.image} className='w-[100px]' alt={"product ${index}"} />
                        <button className='bg-green-500 ' onClick={() => addtocart(item)}>Add to cart</button>
                    </div>
                ))}
            </div>
        </>
    );
}
export default api;