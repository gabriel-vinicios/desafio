
import { useState, useEffect } from 'react';

function App() {
  const [joke, setJoke] = useState({})

  useEffect(() => {
    async function getFilmes() {

      const response = await fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json()).then((data) => setJoke(data))
      
      return response
    }

    getFilmes()
  }, [])
  return (
    <div className=" mb-2 bg-dark text-white w-100 h-100">
      <p>{joke.value}</p>
    </div>
  );
}

export default App;
