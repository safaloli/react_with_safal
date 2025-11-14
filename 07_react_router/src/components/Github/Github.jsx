import React, {useState, useEffect } from "react";  


function Github () {

    const [data, setData] = useState({})

    useEffect(() => {
        fetch('https://api.github.com/users/safaloli')
        .then(res => res.json())
        .then(res => {
            setData(res)
            console.log(res.following)
        })
    }, [])
    return (
        <>
            <div className="w-full p-6 flex flex-col items-center">
                <img src={data.avatar_url} alt="profile" className="h-30 w-30 rounded-full shadow-xl flex justify-center items-center mb-4" />
                <h1 className="text-2xl font-bold m-2">Github Followers: {data.followers}</h1>
                <h1 className="text-2xl font-bold m-2">Github Following: {data.following}</h1>
            </div>
        </>
    )
}

export default Github