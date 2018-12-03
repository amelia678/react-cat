import React, { Component } from 'react';


function Greet(props) {
    return (
        <div>
        <h1> Hello, Cat-Luver!!</h1>
            <p>Let's look at pictures of cats </p>
            <p>For more amazing pictures 
                <a href={props.url}>{props.linkText}</a>
            </p>
        </div>
    )

}

export default Greet;