// import React from "react";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
// import Dashboard from "./components/Dashboard";

// const App = () => {
//   const handleSearch = (searchTerm) => {
//     console.log("Searching for:", searchTerm);
//   };

//   const user = {
//     avatar: "https://img.icons8.com/?size=80&id=fJnJTvYXh9lo&format=png",
//     name: "Prachi",
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Navbar onSearch={handleSearch} user={user} />
//       <div className="flex">
//         <Sidebar />
//         <div className="flex-1 p-4">
//           <Dashboard />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
// import Dashboard from "./components/Dashboard";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";

// const App = () => {
//   const handleSearch = (searchTerm) => {
//     console.log("Searching for:", searchTerm);
//   };

//   const user = {
//     avatar: "https://img.icons8.com/?size=80&id=fJnJTvYXh9lo&format=png",
//     name: "Prachi",
//   };

//   const [date, setDate] = useState(new Date());

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Navbar onSearch={handleSearch} user={user} />
//       <div className="flex">
//         <Sidebar />
//         <div className="flex-1 p-4">
//           <Dashboard />
//           <div className="mt-6 bg-white p-4 shadow-md rounded-lg">
//             <h2 className="text-lg font-semibold mb-2">Select a Date</h2>
//             <Calendar onChange={setDate} value={date} />
//             <p className="mt-2 text-gray-600">
//               Selected Date: {date.toDateString()}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
// import Dashboard from "./components/Dashboard";

// const App = () => {
//   const handleSearch = (searchTerm) => {
//     console.log("Searching for:", searchTerm);
//   };

//   const user = {
//     avatar: "https://img.icons8.com/?size=80&id=fJnJTvYXh9lo&format=png",
//     name: "Prachi",
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Navbar onSearch={handleSearch} user={user} />
//       <div className="flex">
//         <Sidebar />
//         <div className="flex-1 p-4">
//           <Dashboard />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
// import Dashboard from "./components/Dashboard";
// import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from "recharts";

// const data = [
//   { name: "Jan", students: 400, fees: 240 },
//   { name: "Feb", students: 300, fees: 139 },
//   { name: "Mar", students: 200, fees: 980 },
//   { name: "Apr", students: 278, fees: 390 },
//   { name: "May", students: 189, fees: 480 },
//   { name: "Jun", students: 239, fees: 380 },
//   { name: "Jul", students: 349, fees: 430 },
// ];

// const pieData = [
//   { name: "Java", value: 400 },
//   { name: "Python", value: 300 },
//   { name: "C++", value: 300 },
//   { name: "MERN", value: 200 },
// ];

// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// const App = () => {
//   const handleSearch = (searchTerm) => {
//     console.log("Searching for:", searchTerm);
//   };

//   const user = {
//     avatar: "https://img.icons8.com/?size=80&id=fJnJTvYXh9lo&format=png",
//     name: "Prachi",
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Navbar onSearch={handleSearch} user={user} />
//       <div className="flex">
//         <Sidebar />
//         <div className="flex-1 p-4">
//           <Dashboard />

//           {/* Line Chart */}
//           <div className="bg-white p-4 rounded-lg shadow-md mt-6">
//             <h2 className="text-xl font-medium mb-2">Students & Fees Over Months</h2>
//             <ResponsiveContainer width="100%" height={300}>
//               <LineChart data={data}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="students" stroke="#8884d8" />
//                 <Line type="monotone" dataKey="fees" stroke="#82ca9d" />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>

//           {/* Bar Chart */}
//           <div className="bg-white p-4 rounded-lg shadow-md mt-6">
//             <h2 className="text-xl font-medium mb-2">Fees Collection</h2>
//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart data={data}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Bar dataKey="fees" fill="#8884d8" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>

//           {/* Pie Chart */}
//           <div className="bg-white p-4 rounded-lg shadow-md mt-6">
//             <h2 className="text-xl font-medium mb-2">Course Enrollment</h2>
//             <ResponsiveContainer width="100%" height={300}>
//               <PieChart>
//                 <Pie data={pieData} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
//                   {pieData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//               </PieChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
// import Dashboard from "./components/Dashboard";

// const App = () => {
//   const handleSearch = (searchTerm) => {
//     console.log("Searching for:", searchTerm);
//   };

//   const user = {
//     avatar: "https://img.icons8.com/?size=80&id=fJnJTvYXh9lo&format=png",
//     name: "Prachi",
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Navbar onSearch={handleSearch} user={user} />
//       <div className="flex">
//         <Sidebar />
//         <div className="flex-1 p-4">
//           <Dashboard />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

// ===================================================================================

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSearch = (searchTerm) => {
    console.log("Searching for:", searchTerm);
  };

  const user = {
    avatar: "https://img.icons8.com/?size=80&id=fJnJTvYXh9lo&format=png",
    name: "Prachi",
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar onSearch={handleSearch} user={user} />

      <div className="flex flex-1">
        {/* Sidebar: Hidden on small screens, can be toggled */}
        <div className={`md:block ${isSidebarOpen ? "block" : "hidden"} w-54`}>
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default App;
