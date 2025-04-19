import React, { useState, useEffect } from "react";
import axios from "axios";

const StudentForm = ({ editData, setEditData, fetchData }) => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });

    useEffect(() => {
        if (editData) {
            setForm(editData);
        } else {
            setForm({ name: "", email: "", phone: "", address: "" });
        }
    }, [editData]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let token = localStorage.getItem("token");

        try {
            if (editData) {
                await axios.patch(`http://localhost:6001/students/updateRecord/${editData._id}`, form, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            } else {
                await axios.post("http://localhost:6001/students/create", form, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            }

            setEditData(null);
            fetchData();
            setForm({ name: "", email: "", phone: "", address: "" });
        } catch (error) {
            console.error("Submit error:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="border p-2 w-full" required />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="border p-2 w-full" required />
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="border p-2 w-full" required />
            <input name="address" value={form.address} onChange={handleChange} placeholder="Address" className="border p-2 w-full" required />
            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
                {editData ? "Update Student" : "Add Student"}
            </button>
        </form>
    );
};

export default StudentForm;
