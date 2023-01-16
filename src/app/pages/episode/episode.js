import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {Grid,Box } from '@mui/material';
import {TittleDetail} from "../components/tittleDetail"

import './episode.css'

var XMLParser = require('react-xml-parser');


export function Episode({isLoading, jsonData}) { 

  const { podcastId, episodeId } = useParams();
  const baseURL=`https://itunes.apple.com/lookup?id=${podcastId}`;

  axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
  const [detailPodcast, setDetailPodcast] = useState();
  const [feedEpisodes, setFeedEpisodes]= useState();
  const episodes = [];
  
  
  useEffect(() => {
    isLoading(true);
    axios.get(`https://cors-anywhere.herokuapp.com/${baseURL}`).then((response) => {
      isLoading(false);  
      setDetailPodcast(response.data.results[0])
    });
  }, [baseURL]);

  useEffect(() => {
    if(detailPodcast){
      isLoading(true);
    axios.get(`https://cors-anywhere.herokuapp.com/${detailPodcast?.feedUrl}`).then((response) => {
      isLoading(false);  
      var xml = new XMLParser().parseFromString(response.data);

      if(xml.children[0].children[0].children.length > 0){
        setFeedEpisodes(xml.children[0].children[0].children);
      }else if(xml.children.length > 1){
        setFeedEpisodes(xml.children);
      }else{
        setFeedEpisodes(xml.children[0].children);
      }
   });}
  }, [detailPodcast]);

  // const episode= feedEpisodes[episodeId];

  feedEpisodes?.map((ss)=>{ 
    if(ss.name === "item")
    {
      episodes.push(ss);
    }
    
    return 0;
  });

  return (
    <Grid container mt={5} ml={5} className='detailContainer'>
      <TittleDetail jsonData={jsonData}/>
      <Grid item xs={9}>
        <Box boxShadow={2} component="div" sx={{borderRadius:'5px',p:1, width:'80%',border: '1px solid silver' }}>
          <h3>{episodes[episodeId-1]?.children.find(ss=>ss.name ==="title").value}</h3>
          <div dangerouslySetInnerHTML={{ __html:episodes[episodeId-1]?.children?.find(ss => ss.name ==="description").value}} />

          {/* {episodes[episodeId-1]?.children?.find(ss=>ss.name ==="description").value} */}
          <audio className="audioEpisode" src="https://dts.podtrac.com/redirect.mp3/dovetail.prxu.org/_/93/7325af52-0d09-43b5-9e38-6aae1437d0c3/SongExploder245_SonLux.mp3" controls="controls"  preload="none">
          </audio>
        </Box>
      </Grid>
    </Grid>
  );
}
