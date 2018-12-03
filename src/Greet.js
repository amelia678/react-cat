import React, { Component } from 'react';


function Greet(props) {
    return (
        <div>
        <h1> Hello, {props.children}!!</h1>
            <p>Let's look at pictures of cats </p>
        </div>
    )

}

export default Greet;