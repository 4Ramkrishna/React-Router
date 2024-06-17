import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    // optimized
    const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch("https://api.github.com/users/ashishps1")
    //     .then(res => res.json())
    //     .then(res => setData(res))
    // }, [])

    return (
        <>
            <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
                Gihub Followers: { data?.followers }
                <img src={data?.avatar_url} alt="Git Picture" width={300} /> 
            </div>
        </>
    )
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/ashishps1')
    return response.json()
}

export default Github