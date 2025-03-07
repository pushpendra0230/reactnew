// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { LazyLoadImage } from "react-lazy-load-image-component";

// const App = () => {
//   const [products, setProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [sortOrder, setSortOrder] = useState("");

//   useEffect(() => {
//     axios.get("https://dummyjson.com/products")
//       .then((response) => {
//         setProducts(response.data.products);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//         setLoading(false);
//       });
//   }, []);

//   const sortedProducts = () => {
//     let filtered = products.filter((product) =>
//       product.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     if (sortOrder === "asc") {
//       return [...filtered].sort((a, b) => a.price - b.price);
//     } else if (sortOrder === "desc") {
//       return [...filtered].sort((a, b) => b.price - a.price);
//     }
//     return filtered;
//   };

//   return (
//     <div style={{ padding: "20px", textAlign: "center" }}>
//       <h1>Lazy Loaded Product Gallery</h1>

//       <input
//         type="text"
//         placeholder="Search"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         style={{
//           padding: "10px",
//           width: "50%",
//           marginBottom: "20px",
//           fontSize: "16px",
//           border: "1px solid #ddd",
//           borderRadius: "5px"
//         }}
//       />
//       <br />
//       <button onClick={() => setSortOrder("asc")} className="bg-blue-600 mb-4 px-4 py-2 rounded-lg mr-2">Low to High</button>
//       <button onClick={() => setSortOrder("desc")} className="bg-green-600 mb-4 px-4 py-2 rounded-lg">High to Low</button>

//       {loading ? (
//         <p>Loading products...</p>
//       ) : (
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
//           {sortedProducts().length > 0 ? (
//             sortedProducts().map((product) => (
//               <div key={product.id} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "8px" }}>
//                 <LazyLoadImage
//                   src={product.thumbnail}
//                   alt={product.title}
//                   height="150px"
//                   width="150px"
//                   style={{ borderRadius: "8px" }}
//                 />
//                 <p>{product.title}</p>
//                 <p>${product.price}</p>
//               </div>
//             ))
//           ) : (
//             <p>No products found</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };
// export default App;




// import React, { useEffect, useState, Suspense } from "react";
// import axios from "axios";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import { Link, useNavigate } from "react-router-dom";

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [sortOrder, setSortOrder] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get("https://dummyjson.com/products")
//       .then((response) => {
//         setProducts(response.data.products);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//         setLoading(false);
//       });
//   }, []);

//   const sortedProducts = () => {
//     let filtered = products.filter((product) =>
//       product.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     if (sortOrder === "asc") {
//       return [...filtered].sort((a, b) => a.price - b.price);
//     } else if (sortOrder === "desc") {
//       return [...filtered].sort((a, b) => b.price - a.price);
//     }
//     return filtered;
//   };

//   return (
//     <>
//       <div className="p-6 text-center">
//         <h1 className="text-2xl font-bold mb-4">Lazy Loaded Product Gallery</h1>

//         <input
//           type="text"
//           placeholder="Search"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="px-4 py-2 w-1/2 mb-4 text-lg border border-gray-300 rounded-lg"
//         />
//         <br />
//         <button
//           onClick={() => setSortOrder("asc")}
//           className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-2 hover:bg-blue-800"
//         >
//           Low to High
//         </button>
//         <button
//           onClick={() => setSortOrder("desc")}
//           className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-800"
//         >
//           High to Low
//         </button>

//         {loading ? (
//           <p className="mt-4 text-lg">Loading products...</p>
//         )
//           : (
//             <div className="grid grid-cols-3 gap-6 mt-6">
//               {sortedProducts().length > 0 ? (
//                 sortedProducts().map((product) => (
//                   <div key={product.id} className="border p-4 rounded-lg shadow-md">
//                     <LazyLoadImage
//                       src={product.thumbnail}
//                       alt={product.title}
//                       height="150px"
//                       width="150px"
//                       className="rounded-lg mx-auto"
//                     />
//                     <p className="mt-2 font-semibold">{product.title}</p>
//                     <p className="mt-2 font-semibold">{product.description}</p>
//                     <p className="text-gray-700">${product.category}</p>
//                     <p className="text-gray-700">${product.price}</p>
//                     <p className="text-gray-700">${product.discountPercentage}</p>
//                     <p className="text-gray-700">${product.rating}</p>
//                     <p className="text-gray-700">${product.stock}</p>
//                   </div>
//                 ))
//               ) : (
//                 <p className="mt-4 text-lg text-red-600">No products found</p>
//               )}
//             </div>
//           )}
//       </div>
//     </>
//   );
// };

// export default Products;





























import React, { useEffect, useState, Suspense } from "react";
import axios from "axios";
import moment from "moment";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, useNavigate } from "react-router-dom";
import AgeCalculator from "./AgeCalculator";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  const sortedProducts = () => {
    let filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortOrder === "asc") {
      return [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      return [...filtered].sort((a, b) => b.price - a.price);
    }
    return filtered;
  };

  return (
    <>
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Lazy Loaded Product Gallery</h1>

        <AgeCalculator />

        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 w-1/2 mb-4 text-lg border border-gray-300 rounded-lg mt-4"
        />
        <br />
        <button
          onClick={() => setSortOrder("asc")}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-2 hover:bg-blue-800"
        >
          Low to High
        </button>
        <button
          onClick={() => setSortOrder("desc")}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-800"
        >
          High to Low
        </button>

        {loading ? (
          <p className="mt-4 text-lg">Loading products...</p>
        )
          : (
            <div className="grid grid-cols-3 gap-6 mt-6">
              {sortedProducts().length > 0 ? (
                sortedProducts().map((product) => (
                  <div key={product.id} className="border p-4 rounded-lg shadow-md">
                    <LazyLoadImage
                      src={product.thumbnail}
                      alt={product.title}
                      height="150px"
                      width="150px"
                      className="rounded-lg mx-auto"
                    />
                    <p className="mt-2 font-semibold">{product.title}</p>
                    <p className="mt-2 font-semibold">{product.description}</p>
                    <p className="text-gray-700">${product.category}</p>
                    <p className="text-gray-700">${product.price}</p>
                    <p className="text-gray-700">${product.discountPercentage}% Off</p>
                    <p className="text-gray-700">Rating: {product.rating}</p>
                    <p className="text-gray-700">Stock: {product.stock}</p>
                    <p className="text-gray-700 text-sm mt-2 font-medium">
                      {moment().format("MMMM Do YYYY, h:mm:ss a")}
                    </p>
                    <p className="text-gray-700 text-sm mt-2 font-medium">
                      {moment().format("dddd")}
                    </p>
                    <p className="text-gray-700 text-sm mt-2 font-medium">
                      {moment().format()}
                    </p>
                  </div>
                ))
              ) : (
                <p className="mt-4 text-lg text-red-600">No products found</p>
              )}
            </div>
          )}
      </div>
    </>
  );
};

export default Products;
