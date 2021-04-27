import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "./helpers/axiosWithAuth";

function UserDashboard () {
    const [ items, setItem ] = useState([]);
    const [request, setRequest] = useState([])

    useEffect(()=> {
        axiosWithAuth()
        .get()
        .then(res=>{
            setRequest(res.data)
        })
        .catch(err=> {
            console.log(err.response)
        })
    }, [])
    return(
        <div>
        <header>
            <h1>Your Items</h1>
            <input
                placeholder="Search"
            />
            <button>Search</button>
        </header>
        <nav>
            <ul>
                <li>Item</li>
                <li>Request</li>
                <li>Rent Again</li>
            </ul>
        </nav>

        </div>
    )
}

export default UserDashboard;