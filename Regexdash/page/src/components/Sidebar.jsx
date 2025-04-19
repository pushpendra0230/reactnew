// import React from "react";

// const icons = {
//   dashboard: "https://img.icons8.com/?size=24&id=aVHe2jHuORcA&format=png",
//   timetable: "https://img.icons8.com/?size=50&id=3524&format=png",
//   calendar: "https://img.icons8.com/?size=50&id=23&format=png",
//   notify: "https://img.icons8.com/?size=80&id=42302&format=png",
//   attendance: "https://img.icons8.com/?size=50&id=50896&format=png",
//   queries: "https://img.icons8.com/?size=50&id=10568&format=png",
//   leaves: "https://img.icons8.com/?size=50&id=3525&format=png",
//   create: "https://img.icons8.com/?size=50&id=6697&format=png",
//   admissions: "https://img.icons8.com/?size=80&id=68661&format=png",
//   students: "https://img.icons8.com/?size=64&id=48800&format=png",
//   courses: "https://img.icons8.com/?size=80&id=77452&format=png",
//   batches: "https://img.icons8.com/?size=80&id=42380&format=png",
//   teachers: "https://img.icons8.com/?size=80&id=42437&format=png",
// };

// const menuItems = [
//   "dashboard",
//   "timetable",
//   "calendar",
//   "notify",
//   "attendance",
//   "queries",
//   "leaves",
//   "create",
//   "admissions",
//   "students",
//   "courses",
//   "batches",
//   "teachers",
// ];

// const Sidebar = () => {
//   return (
//     <div className="bg-gray-100 w-54 p-4 rounded-lg">
//       <ul className="space-y-2">
//         {menuItems.map((item, index) => (
//           <li
//             key={index}
//             className="rrounded-md bg-blue-200 transition-all duration-300 hover:bg-blue-900 hover:scale-105 hover:shadow-lg"
//           >
//             <a
//               href="#"
//               className="flex items-center p-2 text-black transition-colors duration-300 hover:text-white"
//             >
//               <img src={icons[item]} alt={item} className="w-6 h-6" />
//               <span className="ml-2 capitalize">{item}</span>
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

// normal sidebar without responsive

// import React, { useState } from "react";

// const icons = {
//   dashboard: "https://img.icons8.com/?size=24&id=aVHe2jHuORcA&format=png",
//   timetable: "https://img.icons8.com/?size=50&id=3524&format=png",
//   calendar: "https://img.icons8.com/?size=50&id=23&format=png",
//   notify: "https://img.icons8.com/?size=80&id=42302&format=png",
//   attendance: "https://img.icons8.com/?size=50&id=50896&format=png",
//   queries: "https://img.icons8.com/?size=50&id=10568&format=png",
//   leaves: "https://img.icons8.com/?size=50&id=3525&format=png",
//   create: "https://img.icons8.com/?size=50&id=6697&format=png",
//   admissions: "https://img.icons8.com/?size=80&id=68661&format=png",
//   students: "https://img.icons8.com/?size=64&id=48800&format=png",
//   courses: "https://img.icons8.com/?size=80&id=77452&format=png",
//   batches: "https://img.icons8.com/?size=80&id=42380&format=png",
//   teachers: "https://img.icons8.com/?size=80&id=42437&format=png",
// };

// const menuItems = [
//   "dashboard",
//   "timetable",
//   "calendar",
//   "notify",
//   "attendance",
//   "queries",
//   "leaves",
//   "create",
//   "admissions",
//   "students",
//   "courses",
//   "batches",
//   "teachers",
// ];

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="bg-blue-500 text-white p-2 rounded-md md:hidden mt-4"
//       >
//         <span className="block w-6 h-0.5 bg-white mb-1"></span>
//         <span className="block w-6 h-0.5 bg-white mb-1"></span>
//         <span className="block w-6 h-0.5 bg-white"></span>
//       </button>
//       <div
//         className={`bg-gray-100 w-54 p-4 rounded-lg transition-transform duration-300 ${
//           isOpen ? "block" : "hidden"
//         } md:block`}
//       >
//         <ul className="space-y-2">
//           {menuItems.map((item, index) => (
//             <li
//               key={index}
//               className="rounded-md bg-blue-200 transition-all duration-300 hover:bg-blue-900 hover:scale-105 hover:shadow-lg"
//             >
//               <a
//                 href="#"
//                 className="flex items-center p-2 text-black transition-colors duration-300 hover:text-white"
//               >
//                 <img src={icons[item]} alt={item} className="w-6 h-6" />
//                 <span className="ml-2 capitalize">{item}</span>
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

// responsive sidebar with menu bar sidebar on mobile mode and with sidebar on desktop mode

import React from "react";

const icons = {
  dashboard: "https://img.icons8.com/?size=24&id=aVHe2jHuORcA&format=png",
  timetable: "https://img.icons8.com/?size=50&id=3524&format=png",
  calendar: "https://img.icons8.com/?size=50&id=23&format=png",
  notify: "https://img.icons8.com/?size=80&id=42302&format=png",
  attendance: "https://img.icons8.com/?size=50&id=50896&format=png",
  queries: "https://img.icons8.com/?size=50&id=10568&format=png",
  leaves: "https://img.icons8.com/?size=50&id=3525&format=png",
  create: "https://img.icons8.com/?size=50&id=6697&format=png",
  admissions: "https://img.icons8.com/?size=80&id=68661&format=png",
  students: "https://img.icons8.com/?size=64&id=48800&format=png",
  courses: "https://img.icons8.com/?size=80&id=77452&format=png",
  batches: "https://img.icons8.com/?size=80&id=42380&format=png",
  teachers: "https://img.icons8.com/?size=80&id=42437&format=png",
};

const menuItems = [
  "dashboard",
  "timetable",
  "calendar",
  "notify",
  "attendance",
  "queries",
  "leaves",
  "create",
  "admissions",
  "students",
  "courses",
  "batches",
  "teachers",
];

const Sidebar = () => {
  return (
    <div className="hidden md:block bg-gray-100 w-54 p-4 rounded-lg">
      <ul className="space-y-2">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="rounded-md bg-blue-200 transition-all duration-300 hover:bg-blue-900 hover:scale-105 hover:shadow-lg"
          >
            <a
              href="#"
              className="flex items-center p-2 text-black transition-colors duration-300 hover:text-white"
            >
              <img src={icons[item]} alt={item} className="w-6 h-6" />
              <span className="ml-2 capitalize">{item}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

// // responsive sidebar withaout sidebar on mobile mode and with sidebar on desktop mode