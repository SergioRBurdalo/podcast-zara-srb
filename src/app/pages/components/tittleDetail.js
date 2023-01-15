import React from 'react';
import {Grid,Box,Typography, CardMedia,Divider,Link } from '@mui/material';


import './tittleDetail.css'

export function TittleDetail() { 

  return (
      <Grid item xs={3}>
      <Box boxShadow={2} mb={2}component="div" sx={{borderRadius:'5px',p:2,width:'80%',border: '1px solid silver' }}>
      <Link underline="none" href="/podcast/1">
        <CardMedia className='cardMedia'
          component="img"
          height="200"
          width="250"
          src="https://www.tiendanimal.es/articulos/wp-content/uploads/2018/01/Las-iguanas-en-la-naturaleza-1-1200x900.jpg"
          alt="green iguana"
          href="/podcast/1"
        />
        </Link>
        <Divider mt={2} className='divider' light />
        <Typography sx={{marginTop:"20px", fontWeight: 'bold', fontSize:'0.9em' }}>
          < Link sx={{color:"black"}} underline="none" href="/podcast/1">Song Explorer</Link>
        </Typography>
        <Typography sx={{ fontSize:'0.8em' }}>by Song Explorer</Typography>
        <Divider mt={2} className='divider' light />
        <Typography sx={{marginTop:"20px", fontWeight: 'bold', fontSize:'0.8em' }}>Description:</Typography>
        <Typography sx={{ fontSize:'0.7em' }}>by Song Explorerby Song Explorerby Song Explorerby Song Explorerby Song Explorerby Song Explorerby Song Explorer</Typography>
      </Box>
      </Grid>
  );
}
