import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../service";
import { useEffect, useState } from "react";
import { CircularProgress, Grid2, Typography } from "@mui/material";
import CharacterCard from "../components/Card";
const CharacterList = () => {
  const [list, setList] = useState([]);

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page: 1 },
  });

  useEffect(() => {
    if (data) {
      setList(data.characters.results);
    }
  }, [data]);

  if (loading) return <CircularProgress />; // Indicador de loading do Material-UI
  if (error)
    return (
      <Typography variant="body1">Erro ao carregar personagens</Typography>
    );

  return (
    <div>
      <Typography variant="h2" gutterBottom>
        Personagens de Rick and Morty
      </Typography>
      <Grid2 container spacing={2}>
        {list.map((character) => (
          <Grid2 key={character.id} item xs={12} sm={6} md={4} lg={3}>
            <CharacterCard character={character} />
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
};

export default CharacterList;
