/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Typography } from "@mui/material";

const CharacterCard = ({ character }) => {
  return (
    <div
      sx={{
        maxWidth: 300,
        margin: "auto",
        borderRadius: 16,
        boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 12px 20px rgba(0,0,0,0.4)",
        },
      }}
    >
      <img
        src={character.image}
        alt={character.name}
        style={{
          width: "100%",
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        }}
      />
      <div
        sx={{
          padding: "16px",
          backgroundColor: "#ffffff",
          borderBottomLeftRadius: 16,
          borderBottomRightRadius: 16,
          position: "relative",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {character.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Espécie: {character.species}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Gênero: {character.gender}
        </Typography>
      </div>
    </div>
  );
};

export default CharacterCard;
