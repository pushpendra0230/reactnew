// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const StudentTable = ({ setEditData }) => {
//     const [students, setStudents] = useState([]);

//     const fetchData = async () => {
//         let token = localStorage.getItem('token')
//         console.log(token)
//         try {
//             const response = await axios.get("http://localhost:6001/students/getAll", {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }
//             });
//             setStudents(response.data);
//         } catch (error) {
//             console.error("Error fetching student data", error);
//         }
//     };

//     const handleDelete = async (id) => {
//         try {
//             await axios.delete(`http://localhost:6001/students/remove/${id}`);
//             fetchData();
//         } catch (error) {
//             console.error("Delete error:", error);
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);

//     return (
//         <div className="mt-6">
//             <h2 className="text-xl font-bold mb-4">Student Records</h2>
//             <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
//                 <thead>
//                     <tr className="bg-gray-200 text-left">
//                         <th className="py-2 px-4">Name</th>
//                         <th className="py-2 px-4">Email</th>
//                         <th className="py-2 px-4">Phone</th>
//                         <th className="py-2 px-4">Address</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {students.map((student) => (
//                         <tr key={student._id} className="border-t">
//                             <td className="py-2 px-4">{student.name}</td>
//                             <td className="py-2 px-4">{student.email}</td>
//                             <td className="py-2 px-4">{student.phone}</td>
//                             <td className="py-2 px-4">{student.address}</td>
//                             <td className="py-2 px-4">
//                                 <button
//                                     onClick={() => setEditData(student)}
//                                     className="bg-yellow-500 hover:bg-yellow-700 text-white px-3 py-1 rounded mr-2"
//                                 >
//                                     Edit
//                                 </button>
//                                 <button
//                                     onClick={() => handleDelete(student._id)}
//                                     className="bg-red-600 hover:bg-red-800 text-white px-3 py-1 rounded"
//                                 >
//                                     Delete
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default StudentTable;





import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentTable = ({ setEditData, fetchData }) => {
    const [students, setStudents] = useState([]);

    const fetchStudentData = async () => {
        let token = localStorage.getItem('token');
        try {
            const response = await axios.get("http://localhost:6001/students/getAll", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(response)
            setStudents(response.data);
        } catch (error) {
            
            console.error("Error fetching student data", error);
        }
    };

    const handleDelete = async (id) => {
        let token = localStorage.getItem("token");
        try {
            await axios.delete(`http://localhost:6001/students/remove/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            fetchStudentData();
            if (fetchData) fetchData();
        } catch (error) {
            console.error("Delete error:", error);
        }
    };

    useEffect(() => {
        fetchStudentData();
    }, []);

    return (
        <div className="mt-6">
            <h2 className="text-xl font-bold mb-4">Student Records</h2>
            <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
                <thead>
                    <tr className="bg-gray-200 text-left">
                        <th className="py-2 px-4">Name</th>
                        <th className="py-2 px-4">Email</th>
                        <th className="py-2 px-4">Phone</th>
                        <th className="py-2 px-4">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student._id} className="border-t">
                            <td className="py-2 px-4">{student.name}</td>
                            <td className="py-2 px-4">{student.email}</td>
                            <td className="py-2 px-4">{student.phone}</td>
                            <td className="py-2 px-4">{student.address}</td>
                            <td className="py-2 px-4">
                                <button
                                    onClick={() => setEditData(student)}
                                    className="bg-yellow-500 hover:bg-yellow-700 text-white px-3 py-1 rounded mr-2"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(student._id)}
                                    className="bg-red-600 hover:bg-red-800 text-white px-3 py-1 rounded"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentTable;
