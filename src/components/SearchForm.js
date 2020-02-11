import React, { useState, useEffect } from "react";
import { TextField, Grid, Button } from "@material-ui/core";
import Axios from "axios";
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";

export default function SearchForm(props) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    Axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        const characters = response.data.results.filter(char => char.name.toLowerCase()
          .includes(search.toLowerCase())
        );
        setData(characters);
      })

  }, [search]);

  const HandleChange = event => {
    setSearch(event.target.value)
  };

  return (
    <section className="search-form">

      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="flex-start"
      >
        <TextField
          id="name"
          label="Search Characters"
          type="search"
          margin="normal"
          variant="outlined"
          value={search}
          onChange={HandleChange}
        />
        <Link
          to="/"
        ><Button variant="outlined" color="primary">Home</Button></Link>
      </Grid>
      <br />
      <br />

      {data.map((char => {
        return (
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="flex-start"
          >
            <CharacterCard
              key={char.id}
              name={char.name}
              species={char.species}
              status={char.status}
              imageURL={char.image}
              gender={char.gender}
            />
          </Grid>
        )
      })
      )}
    </section>
  );
}
