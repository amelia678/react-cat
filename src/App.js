import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Greet';
import Cat from './Cat';


let catList = [
  "stacey",
  "sardine",
  "oolong"
]

let renderedCats = catList.map(cat =>
  <div>
    <Cat name={cat}></Cat>
  </div>
  );

class App extends Component {
  constructor(props) {
    super(props)
      this.state= null;
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
      <Greet
        url="https://www.buzzfeed.com/expresident/best-cat-pictures"
        linkText="click here"
        ></Greet>
        {renderedCats}
        
      </div>
    );
  }
}

export default App;
