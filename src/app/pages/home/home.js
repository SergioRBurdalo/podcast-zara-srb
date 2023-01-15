import React, { useEffect, useState } from 'react';

import { useLoading } from '../../../app/context/LoadingContext';
// import { PodcastItem } from '../../models/podcastItem';
// import { getAllPodcasts } from '../../services/podcastService';
import { Searchbox } from './components/Searchbox/Searchbox';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import './home.css'

export function Home() {
//   const [podcasts, setPodcasts] = useState();
  const [count, setCount] = useState(123);
//   const { setIsLoading } = useLoading();

//   useEffect(() => {
//     setIsLoading(true);

//     getAllPodcasts()
//       .then((podcastsResponse) => {
//         setPodcasts(podcastsResponse.podcasts);
//         setCount(podcastsResponse.count);
//       })
//       .catch((error) => {
//         // eslint-disable-next-line no-console
//         console.error('Something went wrong:', error);
//       })
//       .finally(() => setIsLoading(false));
//   }, [setIsLoading]);

//   const handleSearch = (searchText) => {
//     getAllPodcasts(searchText).then((podcastsResponse) => {
//       setPodcasts(podcastsResponse.podcasts);
//       setCount(podcastsResponse.count);
//     });
//   };

  return (
    <>
    <div>
    <Grid  container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item direction={"row-reverse"} xs={7}>
        </Grid>
            <Grid item direction={"row-reverse"} xs={1}>
                <span className="blue">{" 100 "}</span>
                </Grid>
                <Grid item direction={"row-reverse"} xs={1}>
                <Searchbox /*onChange={handleSearch}*/ placeholder="Filter podcasts..." />
            </Grid>
        </Grid>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
            <Card className='card' sx={{ maxWidth: 250 }}>
            <CardActionArea>
                <CardMedia className='cardMedia'
                component="img"
                height="200"
                width="250"
                src="https://www.tiendanimal.es/articulos/wp-content/uploads/2018/01/Las-iguanas-en-la-naturaleza-1-1200x900.jpg"
                alt="green iguana"
                />
                <CardContent className='cardContent'>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
        </Grid>
        
        </Grid>
    </div>
    </>
  );
}
