import React, { useState } from "react";
import StudentTable from "./StudentTable";
import StudentForm from "./StudentForm";

const StudentPage = () => {
    const [editData, setEditData] = useState(null);
    const [refreshKey, setRefreshKey] = useState(0);

    const triggerRefresh = () => setRefreshKey(prev => prev + 1);

    return (
        <div className="p-4 max-w-2xl mx-auto">
            <StudentForm editData={editData}
            setEditData={setEditData}
            fetchData={triggerRefresh} />
            <StudentTable setEditData={setEditData}
            fetchData={triggerRefresh} 
            key={refreshKey} />
        </div>
    );
};

export default StudentPage;
