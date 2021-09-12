import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Shop() {
    var myHeaders = new Headers();
        myHeaders.append("Authorization", "{{authorization}}");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    useEffect(() => {
        fetchItems();
    }, [])
    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.theapinetwork.com/store/get', requestOptions);

        const items = await data.json();

        setItems(items.data);
    }

    return (
        <div>
            <>
                {
                    items.map(item => (
                        <h1 key={item.itemId}> 
                            <Link to={`/shop/${item.itemId}`} > {item.item.name} </Link>
                        </h1>
                    ))
                }
            </>
        </div>
    )
}

export default Shop