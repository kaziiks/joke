import React from 'react';
import './Joke.css'; // Stilu datne

function Joke({ type, setup, punchline }) {
  return (
    <div className="joke">
      <h3 className="joke-type">{type}</h3>
      <p className="joke-setup">{setup}</p>
      <p className="joke-punchline">{punchline}</p>
    </div>
  );
}

export default Joke;