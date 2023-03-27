import React, {useState} from 'react';
import './App.css';

function App() {
  const [gifs, setGifs] = useState(['https://media1.giphy.com/media/EPcvhM28ER9XW/giphy.gif?cid=ecf05e47iijq8c6dxkdr4j2o6xs9b9rdid092nv2zudm8hzi&rid=giphy.gif&ct=g']);
  /* 
  O puede ser:
  const state = useState([]);
  const value = state[0];
  const updateValue = state[1];
  */

  return (
    <div className="App">
      <section className="App-content">
        <h2>
          <p>G i f s</p>
          <img src={gifs} />
        </h2>
      </section>
    </div>
  );
}

export default App;
