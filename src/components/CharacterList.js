import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";
import { Grid, Button } from "@material-ui/core";

export default function CharacterList(props) {

  const [characters, setCharacters] = useState([])
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then((response) => {
        setCharacters(response.data.results);
        console.log(response);
      })
      .catch(error => {
        console.log('We have a problem Houston!', error)
      })
  }, []);

  return (
    <section className="character-list">
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="flex-start"
      >
        <Link to="/"><Button variant="outlined" color="primary">Home</Button></Link>
        <Link to="/search"><Button variant="outlined" color="primary">Search</Button></Link>
      </Grid>

      <br />
      <br />

      {characters.map(character => (
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="flex-start"
        >
          <CharacterCard
            key={character.id}
            name={character.name}
            species={character.species}
            status={character.status}
            imageURL={character.image}
            gender={character.gender}
          />
        </Grid>
      ))}
    </section>
  );
}
