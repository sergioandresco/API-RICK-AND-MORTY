import React, { useEffect, useState } from "react";
import Navbar from "./componentes/Navbar";
import Characters from "./componentes/Characters";
import Pagination from "./componentes/Pagination";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const inicialurl = "https://rickandmortyapi.com/api/character";

  const fetchCharacteres = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const onPrevious = () => {
    fetchCharacteres(info.prev);
  };

  const onNext = () => {
    fetchCharacteres(info.next);
  };

  useEffect(() => {
    fetchCharacteres(inicialurl);
  }, []);

  return (
    <>
      <Navbar brand="API RICK AND MORTY" />

      <div className="container mt-5">
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
        <Characters characters={characters} />
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
    </>
  );
}

export default App;
