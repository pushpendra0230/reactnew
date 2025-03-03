// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Comments = () => {
//     const [comments, setComments] = useState([]);

//     useEffect(() => {
//         axios.get("https://dummyjson.com/comments")
//             .then((response) => {
//                 setComments(response.data.comments);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error("Error fetching comments:", error);
//                 setLoading(false);
//             });
//     }, []);

//     return (
//         <div className="p-10 text-center bg-blue-600">
//             <h1 className="text-2xl font-bold mb-4">the comments of the api :-</h1>
//             <div className="grid grid-cols-1 gap-4 mt-6">
//                 {comments.map((comment) => (
//                     <div key={comment.id} className="border p-4 rounded-lg shadow-lg">
//                         <p className="font-semibold">id: {comment.id}</p>
//                         <p className="font-semibold">body: {comment.body}</p>
//                         <p className="font-semibold">postId: {comment.postId}</p>
//                         <p className="font-semibold">likes: {comment.likes}</p>
//                         <p className="font-semibold">user id: {comment.user.id}</p>
//                         <p className="font-semibold">username: {comment.user.username}</p>
//                         <p className="font-semibold">full name: {comment.user.fullName}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Comments;





// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Comments = () => {
//     const navigate = useNavigate();
//     const [comments, setComments] = useState([]);

//     useEffect(() => {
//         const isLoggedIn = localStorage.getItem("isLoggedIn");

//         if (!isLoggedIn) {
//             navigate("/");
//             return;
//         }

//         axios.get("https://dummyjson.com/comments")
//             .then((response) => {
//                 setComments(response.data.comments);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error("Error fetching comments:", error);
//                 setLoading(false);
//             });
//     }, [navigate]);

//     return (
//         <div className="p-10 text-center bg-blue-600">
//             <h1 className="text-2xl font-bold mb-4">Comments from the API:</h1>
//             <div className="grid grid-cols-1 gap-4 mt-6">
//                 {comments.map((comment) => (
//                     <div key={comment.id} className="border p-4 rounded-lg shadow-lg">
//                         <p className="font-semibold">ID: {comment.id}</p>
//                         <p className="font-semibold">Body: {comment.body}</p>
//                         <p className="font-semibold">Post ID: {comment.postId}</p>
//                         <p className="font-semibold">Likes: {comment.likes}</p>
//                         <p className="font-semibold">User ID: {comment.user.id}</p>
//                         <p className="font-semibold">Username: {comment.user.username}</p>
//                         <p className="font-semibold">Full Name: {comment.user.fullName}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };
// export default Comments;




import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Comments = () => {
    const navigate = useNavigate();
    const [comments, setComments] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");

        if (!isLoggedIn) {
            navigate("/");
            return;
        }

        axios.get("https://dummyjson.com/comments")
            .then((response) => {
                setComments(response.data.comments);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching comments:", error);
                setLoading(false);
            });
    }, [navigate]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredComments = comments.filter((comment) =>
        comment.body.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="p-10 text-center bg-blue-600">
            <h1 className="text-2xl font-bold mb-4">Comments from the API:</h1>

            <input
                type="text"
                placeholder="Search in comments..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="p-2 mb-4 border border-black rounded-lg bg-white"
            />

            <div className="grid grid-cols-1 gap-4 mt-6">
                {filteredComments.map((comment) => (
                    <div key={comment.id} className="border p-4 rounded-lg shadow-lg">
                        <p className="font-semibold">ID: {comment.id}</p>
                        <p className="font-semibold">Body: {comment.body}</p>
                        <p className="font-semibold">Post ID: {comment.postId}</p>
                        <p className="font-semibold">Likes: {comment.likes}</p>
                        <p className="font-semibold">User ID: {comment.user.id}</p>
                        <p className="font-semibold">Username: {comment.user.username}</p>
                        <p className="font-semibold">Full Name: {comment.user.fullName}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Comments;