import React from "react";
import { useParams} from "react-router";




function User() {
    const {userId} = useParams();
    return (
        <>
            <h1 className="text-center text-3xl m-6">User: {userId}</h1>
        </>
    )
}

export default User;