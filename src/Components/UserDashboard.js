import React, { useEffect, useState } from "react";

function UserDashboard () {
    const [ items, setItem ] = useState([]);

    useEffect(()=>{
        
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