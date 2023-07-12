import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Joke from './components/Joke';

function App() {
  const [joke, setJoke] = useState({ setup: '', punchline: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [punchLineButtonState, setPunchLineButtonState] = useState(false);

  const handlePunchLineClick = () => {
    setPunchLineButtonState(!punchLineButtonState);
  };

  const getNewJoke = () => {
    setLoading(true);
    setPunchLineButtonState(false);
    fetchJoke();
  };

  const fetchJoke = async () => {
    try {
      const response = await axios.get(
        'https://official-joke-api.appspot.com/random_joke'
      );
      setJoke(response.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div>
      <Header getNewJoke={getNewJoke} />
      <Joke
        joke={joke}
        loading={loading}
        error={error}
        handlePunchLineClick={handlePunchLineClick}
        punchLineButtonState={punchLineButtonState}
      />
    </div>
  );
}

export default App;
