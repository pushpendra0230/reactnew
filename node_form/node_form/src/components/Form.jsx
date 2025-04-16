import React, { useEffect, useState } from "react";
import axios from "axios";

const Form = ({ fetchData, editData, setEditData }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });

    useEffect(() => {
        if (editData) {
            setFormData(editData);
        }
    }, [editData]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editData) {
                await axios.patch("http://localhost:6001/updateRecord", formData);
                setEditData(null);
            } else {
                await axios.post("http://localhost:6001/createRecord", formData);
            }
            setFormData({ name: "", email: "", phone: "", address: "" });
            fetchData();
        } catch (err) {
            console.error("Submit error:", err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border p-2 rounded w-full"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border p-2 rounded w-full"
                    required
                />
                <input
                    type="number"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border p-2 rounded w-full"
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    className="border p-2 rounded w-full"
                    required
                />
            </div>
            <button
                type="submit"
                className="mt-4 bg-blue-600 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded"
            >
                {editData ? "Update" : "Submit"}
            </button>
        </form>
    );
};

export default Form;