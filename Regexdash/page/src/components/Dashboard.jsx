import React from "react";
import CalendarComponent from "./CalendarComponent";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  ArcElement,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const Dashboard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row md:space-x-6">
      <div className="md:w-2/3">
        <div className="bg-gray-100 rounded-lg shadow-md p-6 pt-20 relative mb-6">
          <div className="absolute top-8 flex space-x-2">
            <div className="bg-blue-200 text-gray-100 px-3 py-1 text-sm font-semibold rounded-lg transition-transform transform hover:scale-115 hover:shadow-lg cursor-pointer">
              Daily
            </div>
            <div className="bg-gray-900 text-white px-3 py-1 text-sm font-semibold rounded-lg transition-transform transform hover:scale-115 hover:shadow-lg cursor-pointer">
              Weekly
            </div>
            <div className="bg-blue-200 text-gray-100 px-3 py-1 text-sm font-semibold rounded-lg transition-transform transform hover:scale-115 hover:shadow-lg cursor-pointer">
              Monthly
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-bold">
            {/* First Chart - Total Visits (Green) */}
            <div className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer">
              <SummaryCard title="Total Visits" value="325" change="+18.34%" />
              <LineChart
                borderColor="green"
                backgroundColor="rgba(0, 128, 0, 0.2)"
                chartType="totalVisits"
              />
            </div>

            {/* Second Chart - Fees Collection (Red) */}
            <div className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer">
              <SummaryCard
                title="Fees Collection"
                value="14%"
                change="-7.69%"
              />
              <LineChart
                borderColor="red"
                backgroundColor="rgba(255, 0, 0, 0.2)"
                chartType="feesCollection"
              />
            </div>

            {/* Third Chart - Students Present (Green) */}
            <div className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer">
              <SummaryCard
                title="Students Present"
                value="176"
                change="+2.56%"
              />
              <LineChart
                borderColor="green"
                backgroundColor="rgba(0, 128, 0, 0.2)"
                chartType="studentsPresent"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AttendanceChart />
          <FeeCollectionChart />
        </div>
        <div className="mt-6">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer">
            <div className="absolute top-8 flex space-x-2 right-8">
              <div className="bg-black text-gray-100 px-3 py-1 text-sm font-semibold rounded-lg transition-transform transform hover:scale-115 hover:shadow-lg cursor-pointer">
                Daily
              </div>
              <div className="bg-blue-200 text-white px-3 py-1 text-sm font-semibold rounded-lg transition-transform transform hover:scale-115 hover:shadow-lg cursor-pointer">
                Weekly
              </div>
              <div className="bg-blue-200 text-gray-100 px-3 py-1 text-sm font-semibold rounded-lg transition-transform transform hover:scale-115 hover:shadow-lg cursor-pointer">
                Monthly
              </div>
            </div>
            <EnquiriesChart />
          </div>
        </div>
      </div>
      <div className="md:w-1/3">
        <ToDoList />
        <Calendar />
      </div>
    </div>
  );
};

const AttendanceChart = () => (
  <div className="bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer">
    <AttendanceGraph />
  </div>
);

const FeeCollectionChart = () => (
  <div className="bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer">
    <FeeCollectionGraph />
  </div>
);

const SummaryCard = ({ title, value, change }) => (
  <div className="p-4 relative">
    <div className="absolute top-0 left-2 text-gray-400 px-2 py-4 text-xs font-semibold">
      Statistics
    </div>
    <h3 className="text-lg font-medium mb-2 mt-4">{title}</h3>
    <div className="text-2xl font-bold">{value}</div>
    <div
      className={`text-sm ${
        change.startsWith("+") ? "text-green-500" : "text-red-500"
      }`}
    >
      {change}
    </div>
    <LineChart />
  </div>
);

const AttendanceGraph = () => {
  const data = {
    labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT"],
    datasets: [
      {
        label: "Present",
        data: [55, 72, 58, 90, 0, 0], // Example data for Present
        backgroundColor: "rgba(0, 255, 128, 0.5)", // Green color for Present
        borderColor: "rgba(0, 255, 128, 1)",
        borderWidth: 1,
      },
      {
        label: "Absent",
        data: [35, 28, 40, 10, 0, 0], // Example data for Absent
        backgroundColor: "rgba(255, 99, 132, 0.5)", // Pink color for Absent
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          usePointStyle: true,
          boxWidth: 8,
        },
      },
    },
    scales: {
      x: { grid: { display: false } },
      y: {
        grid: { color: "rgba(0, 0, 0, 0.1)" },
        beginAtZero: true,
        max: 100, // Set max percentage
        ticks: {
          callback: function (value) {
            return value + "%"; // Show percentages on Y-axis
          },
        },
      },
    },
  };
  return (
    <div className="bg-gray-100 rounded-lg p-30">
      <div className="h-32 bg-gray-100 flex items-center justify-center">
        <div className="bg-white shadow-md rounded-lg p-4 relative transition-transform transform hover:scale-105 hover:shadow-lg">
          <div className="absolute top-0 left-8 text-gray-500 text-sm font-semibold">
            Statistics
          </div>
          <div className="absolute flex space-x-2 right-2">
            <div className="bg-black text-gray-100 px-2 py-1 text-sm font-semibold rounded-lg transition-transform transform hover:scale-115 hover:shadow-lg cursor-pointer">
              Daily
            </div>
            <div className="bg-blue-200 text-white px-2 py-1 text-sm font-semibold rounded-lg transition-transform transform hover:scale-115 hover:shadow-lg cursor-pointer">
              Weekly
            </div>
            <div className="bg-blue-200 text-gray-100 px-2 py-1 text-sm font-semibold rounded-lg transition-transform transform hover:scale-115 hover:shadow-lg cursor-pointer">
              Monthly
            </div>
          </div>
          <h3 className="text-lg font-bold mb-4 ml-4">Attendance</h3>
          <div className="flex justify-between px-4">
            <div className="flex items-center">
              <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
              <span className="text-sm text-gray-600">Present</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-red-400 rounded-full mr-2"></span>
              <span className="text-sm text-gray-600">Absent</span>
            </div>
          </div>
          <div className="h-64 mt-2 px-4">
            <Bar data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeeCollectionGraph = () => {
  const data = {
    labels: ["Collected", "Pending"],
    datasets: [
      {
        data: [85.6, 14.4], // Example values from the image
        backgroundColor: ["#00FF80", "#FF6384"], // Green for collected, pink for pending
        borderColor: ["#00FF80", "#FF6384"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          usePointStyle: true,
          boxWidth: 8,
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.raw.toFixed(1)}%`,
        },
      },
    },
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 relative transition-transform transform hover:scale-105 hover:shadow-lg">
      <div className="absolute top-1 left-8 text-gray-500 text-sm font-semibold">
        Statistics
      </div>
      <h3 className="text-lg font-bold mb-4 ml-4">Fee Collection</h3>
      <div className="flex justify-end px-4">
        <span className="text-xs font-medium text-gray-600 px-2 py-1 rounded-full border border-gray-300">
          <span className="w-2 h-2 inline-block bg-green-400 rounded-full mr-1"></span>
          Collected
        </span>
        <span className="text-xs font-medium text-gray-600 px-2 py-1 rounded-full border border-gray-300 ml-2">
          <span className="w-2 h-2 inline-block bg-red-400 rounded-full mr-1"></span>
          Pending
        </span>
      </div>
      <div className="h-64 mt-2 px-4">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

const EnquiriesChart = () => {
  const data = {
    labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT"],
    datasets: [
      {
        label: "Online",
        data: [70, 100, 55, 68],
        backgroundColor: "#1E40AF",
        borderRadius: 5,
        barThickness: 30,
      },
      {
        label: "Offline",
        data: [35, 28, 40, 12],
        backgroundColor: "#0F172A",
        borderRadius: 5,
        barThickness: 30,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: { usePointStyle: true, boxWidth: 8 },
      },
    },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: "rgba(0, 0, 0, 0.1)" }, beginAtZero: true },
    },
  };
  return (
    <div className="bg-white rounded-lg shadow-md p-2 mt-16">
      <div className="absolute top-6 left-7 text-gray-400 px-2 py-4 text-xs font-semibold">
        Statistics
      </div>
      <h2 className="text-xl font-medium mb-4">Enquiries</h2>
      <div className="h-64">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

const LineChart = ({ borderColor, backgroundColor, chartType }) => {
  // Different datasets based on the chart type
  const chartData = {
    totalVisits: [20, 30, 70, 30, 60, 70],
    feesCollection: [15, 25, 60, 45, 62, 15],
    studentsPresent: [15, 25, 20, 35, 30, 50],
  };

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Trend",
        data: chartData[chartType], // Use different data for each chart
        borderColor: borderColor,
        backgroundColor: backgroundColor,
        pointBackgroundColor: borderColor,
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: borderColor,
        pointHoverBorderColor: "#000",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      x: { display: false },
      y: { display: false },
    },
  };

  return <Line data={data} options={options} />;
};

const ToDoList = () => (
  <div className="bg-white rounded-lg shadow-md p-4 mb-6">
    <h2 className="text-xl font-medium mb-4">
      To Do List
      <button className="ml-2">
        <img
          src="https://cdn-icons-png.flaticon.com/128/10337/10337579.png"
          className="w-6 h-6 inline ml-60"
        />
      </button>
    </h2>
    <ul>
      <li className="py-2 border-b border-gray-200">
        <input type="checkbox" className="mr-2" /> Collect Due Fees
        <br />
        <span className="text-gray-500 text-sm block">
          02:00PM Monday, 10-02-2025
        </span>
      </li>
      <li className="py-2 border-b border-gray-200">
        <input type="checkbox" className="mr-2" /> Make a New Java Batch
        <br />
        <span className="text-gray-500 text-sm block">
          02:00PM Monday, 10-02-2025
        </span>
      </li>
      <li className="py-2 border-b border-gray-200">
        <input type="checkbox" className="mr-2" /> Create Another Room in
        Building 2
        <br />
        <span className="text-gray-500 text-sm block">
          02:00PM Monday, 10-02-2025
        </span>
      </li>
      <li className="py-2 border-b border-gray-200">
        <input type="checkbox" className="mr-2" /> Respond to Kajal Mam's Query
        <br />
        <span className="text-gray-500 text-sm block">
          02:00PM Monday, 10-02-2025
        </span>
      </li>
      <li className="py-2 border-b border-gray-200">
        <input type="checkbox" className="mr-2" /> Make a GD for Java Batch - U
        <br />
        <span className="text-gray-500 text-sm block">
          02:00PM Monday, 10-02-2025
        </span>
      </li>
    </ul>
  </div>
);
const Calendar = () => {
  return (
    <div className="flex items-center justify-center h-auto">
      <CalendarComponent />
    </div>
  );
};
export default Dashboard;

// =================================================================================================

// normal responsive dashboard

// ====================================================================================================

// import React, { useState } from "react";

// const Dashboard = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="bg-white min-h-screen p-4 md:p-6">
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-xl font-bold">Dashboard</h1>
//         <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
//           <span className="text-xl">&#9776;</span>
//         </button>
//       </div>

//       <div className="flex flex-col md:flex-row md:space-x-6">
//         {/* Left Side - Main Content */}
//         <div className="md:w-2/3">
//           <div className="bg-gray-100 rounded-lg shadow-md p-6 relative mb-6">
//             <div className="absolute top-4 flex space-x-2">
//               {["Daily", "Weekly", "Monthly"].map((label, index) => (
//                 <div
//                   key={index}
//                   className="bg-blue-500 text-white px-3 py-1 text-sm font-semibold rounded-lg cursor-pointer hover:scale-105 hover:shadow-lg"
//                 >
//                   {label}
//                 </div>
//               ))}
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 font-bold mt-12">
//               <SummaryCard title="Total Visits" value="325" change="+18.34%" />
//               <SummaryCard
//                 title="Fees Collection"
//                 value="14%"
//                 change="-7.69%"
//               />
//               <SummaryCard
//                 title="Students Present"
//                 value="176"
//                 change="+2.56%"
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <Chart title="Attendance" type="bar" />
//             <Chart title="Fee Collection" type="pie" />
//           </div>

//           <div className="mt-6">
//             <EnquiriesChart />
//           </div>
//         </div>

//         {/* Right Side - ToDo List & Calendar */}
//         <div
//           className={`md:w-1/3 transition-all duration-300 ${
//             menuOpen ? "block" : "hidden"
//           } md:block`}
//         >
//           <ToDoList />
//           <Calendar />
//         </div>
//       </div>
//     </div>
//   );
// };

// const SummaryCard = ({ title, value, change }) => (
//   <div className="bg-white p-4 rounded-lg shadow-md hover:scale-105 hover:shadow-xl cursor-pointer">
//     <h3 className="text-lg font-medium mb-2">{title}</h3>
//     <div className="text-2xl font-bold">{value}</div>
//     <div
//       className={`text-sm ${
//         change.startsWith("+") ? "text-green-500" : "text-red-500"
//       }`}
//     >
//       {change}
//     </div>
//   </div>
// );

// const Chart = ({ title, type }) => (
//   <div className="bg-gray-100 rounded-lg p-4">
//     <h3 className="text-lg font-medium mb-2">{title}</h3>
//     <div className="h-32 bg-gray-300 flex items-center justify-center">
//       {type === "bar" ? "📊 Bar Chart" : "🥧 Pie Chart"}
//     </div>
//   </div>
// );

// const EnquiriesChart = () => (
//   <div className="bg-white rounded-lg shadow-md p-6">
//     <h2 className="text-xl font-medium mb-4">Enquiries</h2>
//     <div className="h-40 bg-gray-200 flex items-center justify-center">
//       📈 Chart Placeholder
//     </div>
//   </div>
// );

// const ToDoList = () => (
//   <div className="bg-white rounded-lg shadow-md p-4 mb-6">
//     <h2 className="text-xl font-medium mb-4">To Do List</h2>
//     <ul>
//       {[
//         "Collect Due Fees",
//         "Make a New Java Batch",
//         "Create Another Room",
//         "Respond to Queries",
//         "Arrange GD Session",
//       ].map((task, index) => (
//         <li
//           key={index}
//           className="py-2 border-b border-gray-200 flex justify-between items-center"
//         >
//           <input type="checkbox" className="mr-2" /> {task}
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// const Calendar = () => {
//   const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
//   const days = Array.from({ length: 30 }, (_, i) => i + 1);

//   return (
//     <div className="bg-white rounded-lg shadow-md p-4">
//       <h2 className="text-xl font-semibold mb-4 text-center">February 2025</h2>
//       <div className="grid grid-cols-7 text-gray-400 text-center font-medium">
//         {daysOfWeek.map((day) => (
//           <div key={day} className="py-2">
//             {day}
//           </div>
//         ))}
//       </div>
//       <div className="grid grid-cols-7 text-center font-bold">
//         {days.map((day) => (
//           <div
//             key={day}
//             className={`py-3 rounded-full ${
//               day === 10 ? "bg-blue-900 text-white" : ""
//             }`}
//           >
//             {day}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// proper responsive dashboard

// // ===========================================================
// import React from "react";
// import CalendarComponent from "./CalendarComponent";
// import { Line, Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

// const Dashboard = () => {
//   return (
//     <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row md:space-x-6">
//       <div className="md:w-2/3">
//         <div className="bg-gray-100 rounded-lg shadow-md p-6 pt-20 relative mb-6">
//           <div className="absolute top-8 flex space-x-2">
//             <div className="bg-blue-200 text-gray-100 px-3 py-1 text-sm font-semibold rounded-lg transition-transform transform hover:scale-115 hover:shadow-lg cursor-pointer">
//               Daily
//             </div>
//             <div className="bg-gray-900 text-white px-3 py-1 text-sm font-semibold rounded-lg transition-transform transform hover:scale-115 hover:shadow-lg cursor-pointer">
//               Weekly
//             </div>
//             <div className="bg-blue-200 text-gray-100 px-3 py-1 text-sm font-semibold rounded-lg transition-transform transform hover:scale-115 hover:shadow-lg cursor-pointer">
//               Monthly
//             </div>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-bold">
//             {/* First Chart - Total Visits (Green) */}
//             <div className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer">
//               <SummaryCard title="Total Visits" value="325" change="+18.34%" />
//               <LineChart
//                 borderColor="green"
//                 backgroundColor="rgba(0, 128, 0, 0.2)"
//                 chartType="totalVisits"
//               />
//             </div>

//             {/* Second Chart - Fees Collection (Red) */}
//             <div className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer">
//               <SummaryCard
//                 title="Fees Collection"
//                 value="14%"
//                 change="-7.69%"
//               />
//               <LineChart
//                 borderColor="red"
//                 backgroundColor="rgba(255, 0, 0, 0.2)"
//                 chartType="feesCollection"
//               />
//             </div>

//             {/* Third Chart - Students Present (Green) */}
//             <div className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer">
//               <SummaryCard
//                 title="Students Present"
//                 value="176"
//                 change="+2.56%"
//               />
//               <LineChart
//                 borderColor="green"
//                 backgroundColor="rgba(0, 128, 0, 0.2)"
//                 chartType="studentsPresent"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div className="bg-gray-100 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer">
//             <Chart title="Attendance" type="bar" />
//           </div>
//           <div className="bg-gray-100 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer">
//             <Chart title="Fee Collection" type="pie" />
//           </div>
//         </div>
//         <div className="mt-6">
//           <div className="bg-gray-100 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer">
//             <div className="absolute top-8 flex space-x-2 right-8">
//               <div className="bg-black text-gray-100 px-3 py-1 text-sm font-semibold rounded-lg transition-transform transform hover:scale-115 hover:shadow-lg cursor-pointer">
//                 Daily
//               </div>
//               <div className="bg-blue-200 text-white px-3 py-1 text-sm font-semibold rounded-lg transition-transform transform hover:scale-115 hover:shadow-lg cursor-pointer">
//                 Weekly
//               </div>
//               <div className="bg-blue-200 text-gray-100 px-3 py-1 text-sm font-semibold rounded-lg transition-transform transform hover:scale-115 hover:shadow-lg cursor-pointer">
//                 Monthly
//               </div>
//             </div>
//             <EnquiriesChart />
//           </div>
//         </div>
//       </div>
//       <div className="md:w-1/3">
//         <ToDoList />
//         <Calendar />
//       </div>
//     </div>
//   );
// };

// const SummaryCard = ({ title, value, change }) => (
//   <div className="p-4 relative">
//     <div className="absolute top-0 left-2 text-gray-400 px-2 py-4 text-xs font-semibold">
//       Statistics
//     </div>
//     <h3 className="text-lg font-medium mb-2 mt-4">{title}</h3>
//     <div className="text-2xl font-bold">{value}</div>
//     <div
//       className={`text-sm ${
//         change.startsWith("+") ? "text-green-500" : "text-red-500"
//       }`}
//     >
//       {change}
//     </div>
//     <LineChart />
//   </div>
// );

// const Chart = ({ title, type }) => (
//   <div className="bg-gray-100 rounded-lg p-4 relative">
//     <div className="absolute top-0 left-2 text-gray-400 px-2 py-4 text-xs font-semibold">
//       Statistics
//     </div>
//     <h3 className="text-lg font-medium mb-2 mt-4">{title}</h3>
//     <div className="h-32 bg-gray-300 flex items-center justify-center">
//       {type === "bar" && <div className="bg-blue-500 h-2/3 w-1/4"></div>}
//       {type === "pie" && (
//         <div className="rounded-full bg-red-500 w-2/3 h-2/3"></div>
//       )}
//     </div>
//   </div>
// );
// ===================================================================================================

// import React from "react";
// import CalendarComponent from "./CalendarComponent";
// import { Line, Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const Dashboard = () => {
//   return (
//     <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row md:space-x-6">
//       <div className="md:w-2/3">
//         <div className="bg-gray-100 rounded-lg shadow-md p-6 pt-20 relative mb-6">
//           <div className="absolute top-8 flex space-x-2">
//             <div className="bg-blue-200 text-gray-100 px-3 py-1 text-sm font-semibold rounded-lg cursor-pointer">Daily</div>
//             <div className="bg-gray-900 text-white px-3 py-1 text-sm font-semibold rounded-lg cursor-pointer">Weekly</div>
//             <div className="bg-blue-200 text-gray-100 px-3 py-1 text-sm font-semibold rounded-lg cursor-pointer">Monthly</div>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-bold">
//             <SummaryCard title="Total Visits" value="325" change="+18.34%" />
//             <SummaryCard title="Fees Collection" value="14%" change="-7.69%" />
//             <SummaryCard title="Students Present" value="176" change="+2.56%" />
//           </div>
//         </div>

//         {/* Attendance and Fee Collection Charts */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <AttendanceChart />
//           <FeeCollectionChart />
//         </div>
//       </div>
//       <div className="md:w-1/3">
//         {/* Placeholder Components (Ensure they are defined elsewhere) */}
//         <ToDoList />
//         <Calendar />
//       </div>
//     </div>
//   );
// };

// // Summary Card Component
// const SummaryCard = ({ title, value, change }) => (
//   <div className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer">
//     <h3 className="text-lg font-medium mb-2">{title}</h3>
//     <div className="text-2xl font-bold">{value}</div>
//     <div className={`text-sm ${change.startsWith("+") ? "text-green-500" : "text-red-500"}`}>{change}</div>
//   </div>
// );

// // Attendance Chart Component
// const AttendanceChart = () => (
//   <div className="bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer">
//     <h3 className="text-lg font-medium mb-2">Attendance</h3>
//     <div className="h-32 bg-gray-300 flex items-center justify-center">
//       <div className="bg-blue-500 h-2/3 w-1/4"></div>
//     </div>
//   </div>
// );

// // Fee Collection Chart Component
// const FeeCollectionChart = () => (
//   <div className="bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer">
//     <h3 className="text-lg font-medium mb-2">Fee Collection</h3>
//     <div className="h-32 bg-gray-300 flex items-center justify-center">
//       <div className="rounded-full bg-red-500 w-2/3 h-2/3"></div>
//     </div>
//   </div>
// );
// =======================================================================================

// const Chart = () => {
//   const data = {
//     labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT"],
//     datasets: [
//       {
//         label: "Present",
//         data: [50, 70, 55, 85, 0, 0], // Example data for Present
//         backgroundColor: "rgba(0, 255, 128, 0.5)", // Green color for Present
//         borderColor: "rgba(0, 255, 128, 1)",
//         borderWidth: 1,
//       },
//       {
//         label: "Absent",
//         data: [30, 25, 35, 10, 0, 0], // Example data for Absent
//         backgroundColor: "rgba(255, 99, 132, 0.5)", // Pink color for Absent
//         borderColor: "rgba(255, 99, 132, 1)",
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         display: true,
//         position: "top",
//         labels: {
//           usePointStyle: true,
//           boxWidth: 8,
//         },
//       },
//     },
//     scales: {
//       x: { grid: { display: false } },
//       y: {
//         grid: { color: "rgba(0, 0, 0, 0.1)" },
//         beginAtZero: true,
//         max: 100, // Set max percentage
//         ticks: {
//           callback: function (value) {
//             return value + "%"; // Show percentages on Y-axis
//           },
//         },
//       },
//     },
//   };

//   return (
//     <div className="bg-white shadow-md rounded-lg p-4 relative">
//       <div className="absolute top-2 left-4 text-gray-500 text-sm font-semibold">
//         Statistics
//       </div>
//       <h3 className="text-lg font-bold mb-4 ml-4">Attendance</h3>
//       <div className="flex justify-between px-4">
//         <div className="flex items-center">
//           <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
//           <span className="text-sm text-gray-600">Present</span>
//         </div>
//         <div className="flex items-center">
//           <span className="w-3 h-3 bg-red-400 rounded-full mr-2"></span>
//           <span className="text-sm text-gray-600">Absent</span>
//         </div>
//       </div>
//       <div className="h-64 mt-2 px-4">
//         <Bar data={data} options={options} />
//       </div>
//       <div className="flex justify-end space-x-2 px-4 mt-4">
//         <button className="px-3 py-1 bg-black text-white rounded-md text-xs font-medium">
//           Daily
//         </button>
//         <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded-md text-xs font-medium">
//           Weekly
//         </button>
//         <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded-md text-xs font-medium">
//           Monthly
//         </button>
//       </div>
//     </div>
//   );
// };

// =====================================================================================

// import React from "react";
// import CalendarComponent from "./CalendarComponent";
// import { Line, Bar, Doughnut } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
// } from "chart.js";

// ChartJS.register(
//   LineElement,
//   CategoryScale,
//   ArcElement,
//   LinearScale,
//   PointElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const Dashboard = () => {
//   return (
//     <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row md:space-x-6 w-full">
//       {/* Left Side - Charts Section */}
//       <div className="md:w-2/3 w-full">
//         <div className="bg-gray-100 rounded-lg shadow-md p-6 relative mb-6">
//           {/* Time Filter Options */}
//           <div className="absolute top-4 flex space-x-2">
//             {["Daily", "Weekly", "Monthly"].map((option, index) => (
//               <div
//                 key={index}
//                 className={`px-3 py-1 text-sm font-semibold rounded-lg transition-transform transform hover:scale-110 hover:shadow-lg cursor-pointer ${
//                   option === "Weekly"
//                     ? "bg-gray-900 text-white"
//                     : "bg-blue-200 text-gray-100"
//                 }`}
//               >
//                 {option}
//               </div>
//             ))}
//           </div>

//           {/* Charts Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
//             <ChartCard title="Total Visits" value="325" change="+18.34%" />
//             <ChartCard title="Fees Collection" value="14%" change="-7.69%" />
//             <ChartCard title="Students Present" value="176" change="+2.56%" />
//           </div>
//         </div>

//         {/* Attendance & Fees Collection Charts */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <AttendanceChart />
//           <FeeCollectionChart />
//         </div>

//         {/* Enquiries Chart */}
//         <div className="mt-6">
//           <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:scale-105 transition-transform">
//             <div className="absolute top-4 right-4 flex space-x-2">
//               {["Daily", "Weekly", "Monthly"].map((option, index) => (
//                 <div
//                   key={index}
//                   className={`px-3 py-1 text-sm font-semibold rounded-lg transition-transform transform hover:scale-110 hover:shadow-lg cursor-pointer ${
//                     option === "Daily"
//                       ? "bg-black text-gray-100"
//                       : "bg-blue-200 text-gray-100"
//                   }`}
//                 >
//                   {option}
//                 </div>
//               ))}
//             </div>
//             <EnquiriesChart />
//           </div>
//         </div>
//       </div>

//       {/* Right Side - Calendar & To-Do List */}
//       <div className="md:w-1/3 w-full flex flex-col space-y-6 mt-6 md:mt-0">
//         <ToDoList />
//         <CalendarComponent />
//       </div>
//     </div>
//   );
// };

// const ChartCard = ({ title, value, change }) => (
//   <div className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer">
//     <h3 className="text-lg font-semibold">{title}</h3>
//     <p className="text-gray-700 text-xl font-bold">{value}</p>
//     <p className={`text-sm font-semibold ${change.includes("-") ? "text-red-500" : "text-green-500"}`}>
//       {change}
//     </p>
//   </div>
// );

// const AttendanceChart = () => (
//   <div className="bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer">
//     <AttendanceGraph />
//   </div>
// );

// const FeeCollectionChart = () => (
//   <div className="bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer">
//     <FeeCollectionGraph />
//   </div>
// );

// const SummaryCard = ({ title, value, change }) => (
//   <div className="p-4 relative">
//     <div className="absolute top-0 left-2 text-gray-400 px-2 py-4 text-xs font-semibold">
//       Statistics
//     </div>
//     <h3 className="text-lg font-medium mb-2 mt-4">{title}</h3>
//     <div className="text-2xl font-bold">{value}</div>
//     <div
//       className={`text-sm ${
//         change.startsWith("+") ? "text-green-500" : "text-red-500"
//       }`}
//     >
//       {change}
//     </div>
//     <LineChart />
//   </div>
// );

// const AttendanceGraph = () => {
//   const data = {
//     labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT"],
//     datasets: [
//       {
//         label: "Present",
//         data: [55, 72, 58, 90, 0, 0], // Example data for Present
//         backgroundColor: "rgba(0, 255, 128, 0.5)", // Green color for Present
//         borderColor: "rgba(0, 255, 128, 1)",
//         borderWidth: 1,
//       },
//       {
//         label: "Absent",
//         data: [35, 28, 40, 10, 0, 0], // Example data for Absent
//         backgroundColor: "rgba(255, 99, 132, 0.5)", // Pink color for Absent
//         borderColor: "rgba(255, 99, 132, 1)",
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         display: true,
//         position: "top",
//         labels: {
//           usePointStyle: true,
//           boxWidth: 8,
//         },
//       },
//     },
//     scales: {
//       x: { grid: { display: false } },
//       y: {
//         grid: { color: "rgba(0, 0, 0, 0.1)" },
//         beginAtZero: true,
//         max: 100, // Set max percentage
//         ticks: {
//           callback: function (value) {
//             return value + "%"; // Show percentages on Y-axis
//           },
//         },
//       },
//     },
//   };
//   return (
//     <div className="bg-gray-100 rounded-lg p-30">
//       <div className="h-32 bg-gray-100 flex items-center justify-center">
//         <div className="bg-white shadow-md rounded-lg p-4 relative transition-transform transform hover:scale-105 hover:shadow-lg">
//           <div className="absolute top-0 left-8 text-gray-500 text-sm font-semibold">
//             Statistics
//           </div>
//           <div className="absolute flex space-x-2 right-2">
//             <div className="bg-black text-gray-100 px-2 py-1 text-sm font-semibold rounded-lg transition-transform transform hover:scale-115 hover:shadow-lg cursor-pointer">
//               Daily
//             </div>
//             <div className="bg-blue-200 text-white px-2 py-1 text-sm font-semibold rounded-lg transition-transform transform hover:scale-115 hover:shadow-lg cursor-pointer">
//               Weekly
//             </div>
//             <div className="bg-blue-200 text-gray-100 px-2 py-1 text-sm font-semibold rounded-lg transition-transform transform hover:scale-115 hover:shadow-lg cursor-pointer">
//               Monthly
//             </div>
//           </div>
//           <h3 className="text-lg font-bold mb-4 ml-4">Attendance</h3>
//           <div className="flex justify-between px-4">
//             <div className="flex items-center">
//               <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
//               <span className="text-sm text-gray-600">Present</span>
//             </div>
//             <div className="flex items-center">
//               <span className="w-3 h-3 bg-red-400 rounded-full mr-2"></span>
//               <span className="text-sm text-gray-600">Absent</span>
//             </div>
//           </div>
//           <div className="h-64 mt-2 px-4">
//             <Bar data={data} options={options} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const FeeCollectionGraph = () => {
//   const data = {
//     labels: ["Collected", "Pending"],
//     datasets: [
//       {
//         data: [85.6, 14.4],
//         backgroundColor: ["#00FF80", "#FF6384"],
//         borderColor: ["#00FF80", "#FF6384"],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         display: true,
//         position: "top",
//         labels: { usePointStyle: true, boxWidth: 8 },
//       },
//       tooltip: {
//         callbacks: {
//           label: (tooltipItem) => `${tooltipItem.raw.toFixed(1)}%`,
//         },
//       },
//     },
//   };

//   return (
//     <div className="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-lg">
//       <div className="absolute top-1 left-8 text-gray-500 text-sm font-semibold">Statistics</div>
//       <h3 className="text-lg font-bold mb-4 ml-4">Fee Collection</h3>
//       <div className="h-64 mt-2 px-4">
//         <Doughnut data={data} options={options} />
//       </div>
//     </div>
//   );
// };

// const EnquiriesChart = () => {
//   const data = {
//     labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT"],
//     datasets: [
//       { label: "Online", data: [70, 100, 55, 68], backgroundColor: "#1E40AF", barThickness: 30 },
//       { label: "Offline", data: [35, 28, 40, 12], backgroundColor: "#0F172A", barThickness: 30 },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: { display: true, position: "top", labels: { usePointStyle: true, boxWidth: 8 } },
//     },
//     scales: {
//       x: { grid: { display: false } },
//       y: { grid: { color: "rgba(0, 0, 0, 0.1)" }, beginAtZero: true },
//     },
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-md p-2 mt-16">
//       <h2 className="text-xl font-medium mb-4">Enquiries</h2>
//       <div className="h-64">
//         <Bar data={data} options={options} />
//       </div>
//     </div>
//   );
// };

// const LineChart = ({ borderColor, backgroundColor, chartType }) => {
//   const chartData = {
//     totalVisits: [20, 30, 70, 30, 60, 70],
//     feesCollection: [15, 25, 60, 45, 62, 15],
//     studentsPresent: [15, 25, 20, 35, 30, 50],
//   };

//   const data = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//     datasets: [
//       {
//         label: "Trend",
//         data: chartData[chartType],
//         borderColor,
//         backgroundColor,
//         tension: 0.4,
//       },
//     ],
//   };

//   const options = { responsive: true, plugins: { legend: { display: false } }, scales: { x: { display: false }, y: { display: false } } };

//   return <Line data={data} options={options} />;
// };

// const ToDoList = () => (
//   <div className="bg-white rounded-lg shadow-md p-4 mb-6">
//     <h2 className="text-xl font-medium mb-4">To Do List</h2>
//     <ul>
//       {["Collect Due Fees", "Make a New Java Batch", "Create Another Room in Building 2", "Respond to Kajal Mam's Query", "Make a GD for Java Batch - U"].map((task, index) => (
//         <li key={index} className="py-2 border-b border-gray-200">
//           <input type="checkbox" className="mr-2" /> {task}
//           <br />
//           <span className="text-gray-500 text-sm block">02:00PM Monday, 10-02-2025</span>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// const Calendar = () => (
//   <div className="flex items-center justify-center h-auto">
//     <CalendarComponent />
//   </div>
// );
// };
// export default Dashboard;
