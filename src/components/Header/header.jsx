import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';
import { useState,useEffect} from 'react';
export default function Cards() {
   const [movies,setMovies]=useState([])
     useEffect(()=>{
         fetch("https://www.omdbapi.com/?s=harry&apikey=d2e9f6cd")
         .then(res=>res.json())
         .then(info=>setMovies(info.Search))
     },[])

  return (

<>
{movies && movies.map((movie)=>(

<Card  sx={{ maxWidth: 345 }}>
<CardMedia 
  sx={{ height: 140 }}
  image={movie.Poster}

/>
<CardContent >
  <Typography gutterBottom variant="h5" component="div">
    {movie.Title}
  </Typography>
  <Typography variant="body2" color="text.secondary">
   {movie.Year}
  </Typography>
</CardContent>
<CardActions>
  <Button size="small"><FavoriteIcon/></Button>
  <Button size="small">Edit</Button>
</CardActions>
</Card>
))
}

</>




  );
}