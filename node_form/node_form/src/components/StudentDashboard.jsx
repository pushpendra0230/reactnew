import React, { useState } from "react";
import Form from "./Form";
import StudentTable from "./StudentTable";

const StudentDashboard = () => {
    const [editData, setEditData] = useState(null);
    const [refreshFlag, setRefreshFlag] = useState(false);

    const toggleRefresh = () => setRefreshFlag(!refreshFlag);

    return (
        <div className="max-w-5xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Student Dashboard</h1>
            <Form fetchData={toggleRefresh} editData={editData} setEditData={setEditData} />
            <StudentTable setEditData={setEditData} refreshFlag={refreshFlag} />
        </div>
    );
};

export default StudentDashboard;
