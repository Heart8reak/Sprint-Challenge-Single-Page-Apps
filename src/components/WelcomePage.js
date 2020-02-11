import React from "react";
import { Link } from "react-router-dom";
import { Grid, Button } from "@material-ui/core";
import "../index.css";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>


        <div className="header-style">
          <img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
        </div>

        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="flex-start"
        >
          <Link to="/characters"><Button variant="outlined" color="primary">Characters</Button></Link>
          <Link to="/characters"><Button variant="outlined" color="primary">Search</Button></Link>

        </Grid>


      </header>
    </section>
  );
}
