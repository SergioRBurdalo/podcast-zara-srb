import React from 'react';
import Link from '@mui/material/Link';
import {Grid,Box,Button,Typography, CardMedia,Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import {TittleDetail} from "../components/tittleDetail"

import './episode.css'


export function Episode() { 

  return (
    <Grid container mt={5} ml={5} className='detailContainer'>
      <TittleDetail/>
      <Grid item xs={9}>
        <Box boxShadow={2} component="div" sx={{borderRadius:'5px',p:1, width:'80%',border: '1px solid silver' }}>
          <h3>Wilco -Magnetiuzed</h3>
          <Typography>
            Algo muy largo de descripcion test Algo muy largo de descripcion test Algo muy largo de descripcion test Algo muy largo de descripcion test Algo muy largo de descripcion test
          </Typography>
          <audio class="audioEpisode" src="../music/woman.mp3" controls="controls"  preload="none">
          </audio>
        </Box>
      </Grid>
    </Grid>
  );
}
