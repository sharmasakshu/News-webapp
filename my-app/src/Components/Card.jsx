import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
// import { Link } from 'react-router-dom';
// import {Link} from '@mui/material';

export default function MultiActionAreaCard(props) {
  const isoDateString = props.date;
const isoDate = new Date(isoDateString);
const formattedDate = isoDate.toLocaleDateString();

// const src=(props.image==null)?"https://t3.ftcdn.net/jpg/02/35/35/40/240_F_235354051_yz3envzxnH9dulycguP6l4Bh3Xx0BPZ0.jpg":props.image;
// const image=props.urlToImage;
// const src=noimage:props.urlToImage;
// isoDate.toLocaleTimeString();

// console.log(formattedDate); // Output: "1/1/2022 12:00:00 PM"
const src="https://t3.ftcdn.net/jpg/02/35/35/40/240_F_235354051_yz3envzxnH9dulycguP6l4Bh3Xx0BPZ0.jpg";
  return (
   
    <Card sx={{ maxWidth: 380 }} >
   {/* <Link href={props.url} sx={{textDecorationLine:"none"}}> */}
      <CardActionArea  component="a"
            href={props.url}>
        <CardMedia
          component="img"
          height="240"
          image={props.image|| src}
          alt="green iguana"
        />
        <CardContent>        
          <Typography gutterBottom variant="h5" component="div" >
            {props.title}
          </Typography>
          <Typography gutterBottom variant="p" component="div" color="primary">
            {formattedDate}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    
      <CardActions >
        <Button size="small" color="primary" component="a"
            href={props.url}>
          Read More
        </Button>     
      </CardActions>
      {/* </Link> */}
    </Card>
   
  );
}