import React, { useEffect, useState } from 'react';

import { Searchbox } from './components/Searchbox/Searchbox';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import './home.css'

export function Home(jsonData) {
    const [data, setData] = useState([]);
    let dataSearch= [];
    useEffect(() => {
        setData(jsonData.jsonData.jsonData)
    }, [jsonData]);
const handleSearch = (searchText) => {
    
    dataSearch= [];
    jsonData.jsonData.jsonData?.map(function(ss) {
        if(ss['im:name'].label.toLowerCase().includes(searchText.toLowerCase()) || ss['im:artist'].label.toLowerCase().includes(searchText.toLowerCase())){
            dataSearch.push(ss);
        }
        return dataSearch;
    });
    setData(dataSearch);
};
    
  return (
    <>
    <div>
        <Grid  container spacing={0} justifyContent="flex-end">
            <Grid item xs={1}>
                <span className="blue">{data?.length}</span>
            </Grid>
            <Grid item xs={3}>
                <Searchbox onChange={handleSearch} placeholder="Filter podcasts..." />
            </Grid>
        </Grid>
        <Grid container className='listCard' rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {data && data.map((item) => {
        return(<Grid key={item.id.attributes['im:id']} item xs={3}>
            <Card className='card' sx={{ maxWidth: 250 }}>
            <CardActionArea href={`/podcast/${item.id.attributes['im:id']}`}>
                <CardMedia className='cardMedia'
                component="img"
                height="200"
                width="250"
                src={item['im:image'][2].label}
                />
                <CardContent className='cardContent'>
                <Typography gutterBottom component="div">
                {item['im:name'].label}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {item['im:artist'].label}
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
        </Grid>);
        })}
        </Grid>
    </div>
    </>
  );
}
