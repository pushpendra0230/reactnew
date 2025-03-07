// import React, { useState } from "react";
// import moment from "moment";

// const AgeCalculator = () => {
//     const [birthDate, setBirthDate] = useState("");
//     const [age, setAge] = useState(null);

//     const handleCalculateAge = () => {
//         if (!birthDate) return;
//         const today = moment();
//         const birthMoment = moment(birthDate);
//         const calculatedAge = today.diff(birthMoment, "years");
//         setAge(calculatedAge);
//     };

//     return (
//         <div className="p-4 text-center">
//             <input
//                 type="date"
//                 value={birthDate}
//                 onChange={(e) => setBirthDate(e.target.value)}
//                 className="px-4 py-2 mb-2 border border-gray-300 rounded-lg"
//             />
//             <button
//                 onClick={handleCalculateAge}
//                 className="bg-blue-600 text-white px-8 py-2 rounded-lg mt-2 hover:bg-blue-800"
//             >
//                 Calculate Age
//             </button>
//             {age !== null && (
//                 <p className="mt-4 text-lg font-semibold">Your Age: {age} years</p>
//             )}
//         </div>
//     );
// };

// export default AgeCalculator;

















// import React, { useState } from "react";
// import moment from "moment";

// const AgeCalculator = () => {
//     const [birthDate, setBirthDate] = useState("");
//     const [age, setAge] = useState();

//     const calculateAge = () => {
//         if (birthDate) setAge(moment().diff(moment(birthDate), "years"));
//     };

//     return (
//         <div className="text-center">
//             <input type="date"
//                 value={birthDate}
//                 onChange={(e) => setBirthDate(e.target.value)}
//             />
//             <button onClick={calculateAge}>Calculate Age</button>
//             {age !== null && <p>Your Age: {age} years</p>}
//         </div>
//     );
// };
// export default AgeCalculator;





// import React, { useState } from "react";
// import moment from "moment";

// const AgeCalculator = () => {
//     const [birthDate, setBirthDate] = useState("");
//     const [age, setAge] = useState(null);
//     const [months, setMonths] = useState(null);
//     const [days, setDays] = useState(null);
//     const [hours, setHours] = useState(null);
//     const [minutes, setMinutes] = useState(null);

//     const calculateAge = () => {
//         if (birthDate) {
//             const today = moment();
//             const dob = moment(birthDate);

//             console.log(">>>>>>> dob >>>>>>>", dob.format("YYYY-MM-DD"));

//             const years = today.diff(dob, "years");
//             console.log(">>>>>>> years >>>>>>>", years);
//             dob.add(years, "years");

//             const months = today.diff(dob, "months");
//             console.log(">>>>>>> months >>>>>>>", months);
//             dob.add(months, "months");

//             const days = today.diff(dob, "days");
//             console.log(">>>>>>> days >>>>>>>", days);
//             dob.add(days, "days");

//             const hours = today.diff(dob, "hours");
//             console.log(">>>>>>> hours >>>>>>>", hours);
//             dob.add(hours, "hours");

//             const minutes = today.diff(dob, "minutes");
//             console.log(">>>>>>> minutes >>>>>>>", minutes);

//             setAge(years);
//             setMonths(months);
//             setDays(days);
//             setHours(hours);
//             setMinutes(minutes);
//         }
//     };

//     return (
//         <div className="text-center">
//             <input
//                 type="date"
//                 value={birthDate}
//                 onChange={(e) => setBirthDate(e.target.value)}
//             />
//             <button onClick={calculateAge}>Calculate Age</button>
//             {age !== null && (
//                 <div>
//                     <p>Your Age:</p>
//                     <ul>
//                         <li>{age} years</li>
//                         <li>{months} months</li>
//                         <li>{days} days</li>
//                         <li>{hours} hours</li>
//                         <li>{minutes} minutes</li>
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AgeCalculator;







import React, { useState } from "react";
import moment from "moment";

const AgeCalculator = () => {
    const [birthDate, setBirthDate] = useState("");
    const [age, setAge] = useState(null);

    const calculateAge = () => {
        if (birthDate) {
            console.log("birthDate", birthDate);

            const dobYear = moment(birthDate).format("YYYY");
            console.log("dobYear", dobYear);

            const todayYear = moment().format("YYYY");
            console.log("todayYear", todayYear);

            const age = todayYear - dobYear;
            console.log("age", age);

            setAge(age);

            console.log("Month", moment().format("MM") - moment(birthDate).format("MM"));
            console.log("Day", moment().format("DD") - moment(birthDate).format("DD"));
        }
    };

    return (
        <div className="text-center">
            <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
            />
            <button onClick={calculateAge}>Calculate Age</button>
            {age !== null && (
                <div>
                    <p>Your Age: {age} years</p>
                </div>
            )}
        </div>
    );
};

export default AgeCalculator;
