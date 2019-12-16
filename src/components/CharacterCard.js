import React from "react";
import { Card, makeStyles, CardActionArea, CardContent, CardMedia, Typography } from "@material-ui/core";

const useStyle = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140
  },
})


export default function CharacterCard({ name, imageURL, species, status, gender }) {
  const classes = useStyle();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={name}
          height="140"
          image={imageURL}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
            <Typography variant="body2" color="textSecondary" component="p">
              Species: {species}
              <br />
              Status: {status}
              <br />
              Gender: {gender}
            </Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
