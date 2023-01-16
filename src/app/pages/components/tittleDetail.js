import React from 'react';
import { useParams } from 'react-router-dom';

import {Grid,Box,Typography, CardMedia,Divider,Link } from '@mui/material';


import './tittleDetail.css'

export function TittleDetail({jsonData}) {

  const { podcastId } = useParams();
  const item = jsonData?.find(ss=> ss.id.attributes['im:id'] === podcastId ); 

  return (
      <Grid item xs={3}>
      <Box boxShadow={2} mb={2}component="div" sx={{borderRadius:'5px',p:2,width:'80%',border: '1px solid silver' }}>
      <Link underline="none" href={`/podcast/${item?.id.attributes['im:id']}`}>
        <CardMedia className='cardMedia'
          component="img"
          height="200"
          width="250"
          src={item?.['im:image'][2].label}
          href={`/podcast/${item?.id.attributes['im:id']}`}
        />
        </Link>
        <Divider mt={2} className='divider' light />
        <Typography sx={{marginTop:"20px", fontWeight: 'bold', fontSize:'0.9em' }}>
          < Link sx={{color:"black"}} underline="none" href={`/podcast/${item?.id.attributes['im:id']}`}>
            {item?.['im:name'].label}
          </Link>
        </Typography>
        <Typography sx={{ fontSize:'0.8em' }}>by {item?.['im:artist'].label}</Typography>
        <Divider mt={2} className='divider' light />
        <Typography sx={{marginTop:"20px", fontWeight: 'bold', fontSize:'0.8em' }}>Description:</Typography>
        <Typography sx={{ fontSize:'0.7em' }}>{item?.summary.label}</Typography>
      </Box>
      </Grid>
  );
}
