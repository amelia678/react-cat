import React, {Component} from 'react';

const catUrl = 'https://www.thesprucepets.com/thmb/2TIdFyJXH1bjDfCP0Ca5m7emZY8=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/step_4-disease-59b9b6a9d963ac0011faca31-59bae508396e5a0010365c5b.jpg'


class Cat extends Component {
    render() {
        return (
        <div>    
        <img src={catUrl} />
        </div>
        )
    }

}
// function catMagik(e) {
//     e.target.setAttribute('src', catUrl)
// }

// function Cat(props) {
//     return (
//         <img src={props.imgurl} onClick={catMagik} />
//     )
// }

export default Cat;