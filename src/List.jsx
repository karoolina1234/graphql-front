// src/CharacterList.js
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "./service";
import { useEffect, useState } from "react";

const CharacterList = () => {
  const [list, setList] = useState([]);

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page: 1 },
  });

  useEffect(() => {
    if (data) {
      setList([data]);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Personagens de Rick and Morty</h2>
      <ul>
        {data.characters.results.map((character) => (
          <li key={character.id}>
            <h3>{character.name}</h3>
            <p>Espécie: {character.species}</p>
            <p>Gênero: {character.gender}</p>
            <img src={character.image} alt={character.name} width="100" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
