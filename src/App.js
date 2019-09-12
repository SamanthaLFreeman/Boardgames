import React, { Component } from 'react';
import './App.css';

class App extends Component {
  componentDidMount() {
    fetch('https://www.boardgameatlas.com/api/search?order_by=popularity&ascending=false&client_id=SB1VGnDv7M')
      .then(response => response.json())
      .then(data => console.log(data.games))
      .catch(error => console.log(error))
  }
  
  render() {
    return(
      <div></div>
    )
  }

}

export default App;
