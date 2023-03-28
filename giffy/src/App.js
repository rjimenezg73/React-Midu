import React, {useState} from 'react';
import './App.css';

const GIFS = [
  'https://media1.giphy.com/media/EPcvhM28ER9XW/giphy.gif?cid=ecf05e47iijq8c6dxkdr4j2o6xs9b9rdid092nv2zudm8hzi&rid=giphy.gif&ct=g',
  'https://media4.giphy.com/media/pO1H8mAU7geAw/200w.webp?cid=ecf05e4714vu8eopegespxib73qjdnqxya7g8hw2of7at6e2&rid=200w.webp&ct=g',
  'https://media1.giphy.com/media/cnbsOTkEJnq0/200w.webp?cid=ecf05e4714vu8eopegespxib73qjdnqxya7g8hw2of7at6e2&rid=200w.webp&ct=g',
  'https://media4.giphy.com/media/Hs6f36KUBjWww/200w.webp?cid=ecf05e4714vu8eopegespxib73qjdnqxya7g8hw2of7at6e2&rid=200w.webp&ct=g',
  'https://media0.giphy.com/media/EatwJZRUIv41G/giphy.webp?cid=ecf05e4714vu8eopegespxib73qjdnqxya7g8hw2of7at6e2&rid=giphy.webp&ct=g'
];

const DIFFERENT_GIFS = [
  'https://media4.giphy.com/media/tFUdJEX8jNbe8/200w.webp?cid=ecf05e4714vu8eopegespxib73qjdnqxya7g8hw2of7at6e2&rid=200w.webp&ct=g',
  'https://media1.giphy.com/media/YRdZ0UXjWwrn2/200w.webp?cid=ecf05e4714vu8eopegespxib73qjdnqxya7g8hw2of7at6e2&rid=200w.webp&ct=g'
];

function App() {
  const [gifs, setGifs] = useState(GIFS);
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
        </h2>
        {
          gifs.map(singleGif => <img src={singleGif} alt='imagen gif'/>)
        }
        <button onClick={() => setGifs(DIFFERENT_GIFS)}>Cambiar Gifs</button>
      </section>
    </div>
  );
}

export default App;
