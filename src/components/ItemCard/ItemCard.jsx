import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function ItemCard(props) {
  const { title, img, author, editorial, subtitle } = props;
  return (
    <Card variant="outlined" sx={{ maxWidth: 300 }}>
      <CardMedia component="img" height="340" image={img} alt="" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="subtitle2">
          {subtitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {editorial}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {author}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/book/${props.id}`}>
          <Button variant="outlined" size="large">
            BUY
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
