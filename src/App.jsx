import React, { useState, useEffect } from 'react';
import Joke from './Joke';

function App() {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true); // Jauns stāvokļa mainīgais

  useEffect(() => {
    async function fetchJokes() {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/jokes');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jokesFromAPI = await response.json();
        setJokes(jokesFromAPI); // Saglabā jokus stāvokļa mainīgajā
        setLoading(false); // Dati ir saņemti, pārslēdz loading uz false
      } catch (error) {
        console.error('Error fetching jokes:', error);
        setLoading(false); // Pat kļūdas gadījumā pārslēdz loading uz false
      }
    }

    fetchJokes(); // Izsauc asinhrono funkciju
  }, []); // Tukšs masīvs nodrošina, ka useEffect izpildās tikai vienreiz

  return (
    <>
      <h1>Joki</h1>
      {loading ? (
        <p>Lādējas...</p> // Parāda, kamēr dati tiek ielādēti
      ) : (
        jokes.map((joke) => (
          <Joke key={joke.id} {...joke} /> // Izmanto izkliedes operatoru {...joke}
        ))
      )}
    </>
  );
}

export default App;