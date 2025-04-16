import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "./components/Form";

const App = () => {
    const [students, setStudents] = useState([]);
    const [editData, setEditData] = useState(null);

    const fetchData = async () => {
        try {
            const res = await axios.get("http://localhost:6001/getAll");
            setStudents(res.data);
        } catch (err) {
            console.error("Fetch error:", err);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:6001/remove/${id}`);
            fetchData();
        } catch (err) {
            console.error("Delete error:", err);
        }
    };

    const handleEdit = (student) => {
        setEditData(student);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
                    Student Form
                </h1>

                {/* Form Section */}
                <div className="bg-white p-4 rounded-md shadow mb-10">
                    <Form fetchData={fetchData} editData={editData} setEditData={setEditData} />
                </div>

                {/* Student List Section */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">All Students</h2>

                <div className="grid gap-4">
                    {students.map((student) => (
                        <div
                            key={student._id}
                            className="bg-white border border-black rounded-md p-8"
                        >
                            <div className="mb-2">
                                <p className="text-sm"><strong>Name:</strong> {student.name}</p>
                                <p className="text-sm"><strong>Email:</strong> {student.email}</p>
                                <p className="text-sm"><strong>Phone:</strong> {student.phone}</p>
                                <p className="text-sm"><strong>Address:</strong> {student.address}</p>
                            </div>
                            <div className="flex gap-2 mt-4">
                                <button
                                    onClick={() => handleEdit(student)}
                                    className="bg-yellow-400 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                                >
                                    Update
                                </button>
                                <button
                                    onClick={() => handleDelete(student._id)}
                                    className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );





    // return (
    //     <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-500 p-6">
    //         <div className="max-w-5xl mx-auto">
    //             <h1 className="text-4xl font-bold text-center text-white mb-8 drop-shadow">
    //                 🎓 Student Registration
    //             </h1>

    //             {/* Form Section */}
    //             <div className="bg-white p-6 rounded-2xl shadow-lg">
    //                 <Form fetchData={fetchData} editData={editData} setEditData={setEditData} />
    //             </div>

    //             {/* Student List Section */}
    //             <div className="mt-12">
    //                 <h2 className="text-3xl font-semibold text-white mb-6">📋 All Students</h2>

    //                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    //                     {students.map((student) => (
    //                         <div
    //                             key={student._id}
    //                             className="bg-white border-l-4 border-indigo-500 shadow-lg rounded-xl p-5 hover:shadow-xl transition-all duration-300"
    //                         >
    //                             <div className="mb-4">
    //                                 <p className="text-lg font-semibold text-gray-700">
    //                                     👤 {student.name}
    //                                 </p>
    //                                 <p className="text-gray-600">📧 {student.email}</p>
    //                                 <p className="text-gray-600">📞 {student.phone}</p>
    //                                 <p className="text-gray-600">🏠 {student.address}</p>
    //                             </div>
    //                             <div className="flex gap-3 justify-end">
    //                                 <button
    //                                     onClick={() => handleEdit(student)}
    //                                     className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-1 rounded-lg font-medium shadow"
    //                                 >
    //                                     ✏️ Edit
    //                                 </button>
    //                                 <button
    //                                     onClick={() => handleDelete(student._id)}
    //                                     className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg font-medium shadow"
    //                                 >
    //                                     🗑️ Delete
    //                                 </button>
    //                             </div>
    //                         </div>
    //                     ))}
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );

};

export default App;