import React, { useState, useEffect } from 'react';

function Item({match}) {

    const imgStyle = {
        border: '2px solid red'
    };
    var myHeaders = new Headers();
        myHeaders.append("Authorization", "{{authorization}}");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    useEffect(() => {
        fetchItem();
    }, [])
    const [item, setItem] = useState({
        images: {}
    });

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.ID}`, requestOptions);

        const item = await fetchItem.json();

        setItem(item.data.item);

        console.log(item.data.item)
    }

    return (
        <div>
            <h1> Name : {item.name} </h1>
            <img style={imgStyle} src={item.images.background} alt="" />
        </div>
    )
}

export default Item