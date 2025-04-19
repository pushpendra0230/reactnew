// import React from "react";

// const Navbar = ({ onSearch, user }) => {
//   return (
//     <nav className="bg-white rounded-lg flex flex-wrap items-center justify-between w-full px-4 py-2 md:px-6">
//       <div className="flex items-center space-x-4">
//         <img
//           src="https://www.regexsoftware.com/wp-content/uploads/2020/05/noname-1.png"
//           alt="REGEX Logo"
//           className="h-12 w-28 sm:h-16 sm:w-36"
//         />

//         {/* Search Bar */}
//         <div className="relative flex items-center w-full sm:w-auto max-w-xs md:max-w-sm">
//           <input
//             type="text"
//             placeholder="Search"
//             className="border border-gray-300 rounded-md px-10 py-2 w-full sm:w-60 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             onChange={(e) => onSearch(e.target.value)}
//           />
//           <button className="absolute right-2 text-blue-500 text-sm pointer-events-none">
//             Ctrl+F
//           </button>
//         </div>

//         {/* Icons */}
//         <div className="flex space-x-2">
//           <button className="w-8 h-8">
//             <img
//               src="https://cdn-icons-png.flaticon.com/128/3478/3478775.png"
//               alt="icon"
//               className="w-8 h-8"
//             />
//           </button>
//           <button className="w-8 h-8">
//             <img
//               src="https://img.icons8.com/?size=50&id=11668&format=png"
//               alt="icon"
//               className="w-8 h-8"
//             />
//           </button>
//         </div>
//       </div>

//       {/* User Section */}
//       <div className="flex items-center mt-2 sm:mt-0 space-x-2">
//         <img
//           src={user.avatar}
//           alt={`${user.name}'s avatar`}
//           className="rounded-full h-8 w-8"
//         />
//         <span className="text-sm md:text-base">{user.name} &gt;</span>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// ===============================================================================================

// navbar withaout menu button and responsive design

// ===============================================================================================

import React, { useState } from "react";

const Navbar = ({ onSearch, user }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white rounded-lg flex flex-wrap items-center justify-between px-4 py-3 md:px-6">
      {/* Left Section: logo aor search */}
      <div className="flex items-center w-full md:w-auto justify-between">
        {/* Navbar ka logo */}
        <img
          src="https://www.regexsoftware.com/wp-content/uploads/2020/05/noname-1.png"
          alt="REGEX Logo"
          className="h-12 w-28 sm:h-14 sm:w-36"
        />

        {/* Mobile ke liye menu button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img
            src="https://img.icons8.com/ios-glyphs/30/menu--v1.png"
            alt="menu"
            className="h-8 w-8"
          />
        </button>
      </div>

      {/* Center Section: Search Bar (Hidden in Mobile Menu button) */}
      <div
        className={`w-full md:flex md:w-auto items-center justify-center ${
          menuOpen ? "block mt-3" : "hidden"
        } md:flex`}
      >
        <div className="relative flex items-center w-full sm:w-72 max-w-xs md:max-w-sm">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-md px-10 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => onSearch(e.target.value)}
          />
          <button className="absolute right-2 text-blue-500 text-sm pointer-events-none">
            Ctrl+F
          </button>
        </div>
      </div>

      {/* Right Section: Icons and User ki Profile */}
      <div
        className={`w-full md:flex md:w-auto items-center justify-end space-x-3 ${
          menuOpen ? "flex mt-3" : "hidden"
        } md:flex`}
      >
        {/* Icons */}
        <div className="flex space-x-3">
          <button className="w-8 h-8">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3478/3478775.png"
              alt="icon"
              className="w-8 h-8"
            />
          </button>
          <button className="w-8 h-8">
            <img
              src="https://img.icons8.com/?size=50&id=11668&format=png"
              alt="icon"
              className="w-8 h-8"
            />
          </button>
        </div>

        {/* User Profile */}
        <div className="flex items-center space-x-2">
          <img
            src={user.avatar}
            alt={`${user.name}'s avatar`}
            className="rounded-full h-8 w-8"
          />
          <span className="text-sm md:text-base">{user.name} &gt;</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// ===============================================================================================
// proper navbar with Menu button with proper responsive design
