// import React, { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";

// const CalendarComponent = () => {
//   const [date, setDate] = useState(new Date());

//   return (
//     <div className="mt-6 bg-white p-4 shadow-md rounded-lg">
//       <h2 className="text-lg font-semibold mb-2">Select a Date</h2>
//       <Calendar onChange={setDate} value={date} />
//       <p className="mt-2 text-gray-600">Selected Date: {date.toDateString()}</p>
//     </div>
//   );
// };

// export default CalendarComponent;

// ======================================================================================
// Calendar withaout responsive design
// ======================================================================================

import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="mt-6 bg-white p-4 shadow-md rounded-lg w-full max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-3 text-center">Select a Date</h2>

      {/* Calendar Wrapper for Responsive Layout */}
      <div className="flex justify-center">
        <Calendar
          onChange={setDate}
          value={date}
          className="w-full max-w-xs sm:max-w-sm md:max-w-md"
        />
      </div>

      <p className="mt-3 text-gray-600 text-center">
        Selected Date:{" "}
        <span className="font-medium">{date.toDateString()}</span>
      </p>
    </div>
  );
};

export default CalendarComponent;

// ======================================================================================
// Calendar with responsive design
// ======================================================================================
