import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Grid,Box } from '@mui/material';
import {TittleDetail} from "../components/tittleDetail"

import {fetchEpisode} from "../../../app/services/services";

import './episode.css'



export function Episode({isLoading, jsonData}) { 

  const { podcastId, episodeId } = useParams();
  const baseURL=`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=200`;

  const [feedEpisodes, setFeedEpisodes]= useState();
  
  useEffect(() => {
    fetchEpisode({isLoading, baseURL, setFeedEpisodes, episodeId});
  }, [isLoading, baseURL, episodeId]);

  return (
    <Grid container mt={5} ml={5} className='detailContainer'>
      <TittleDetail jsonData={jsonData}/>
      <Grid item xs={9}>
        <Box boxShadow={2} component="div" sx={{borderRadius:'5px',p:1, width:'80%',border: '1px solid silver' }}>
          <h3>{feedEpisodes?.trackName}</h3>
          <div dangerouslySetInnerHTML={{ __html:feedEpisodes?.description}} />

          <audio className="audioEpisode" src={feedEpisodes?.episodeUrl} controls="controls"  preload="none">
          </audio>
        </Box>
      </Grid>
    </Grid>
  );
}
