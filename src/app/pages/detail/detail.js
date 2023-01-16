import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Link from '@mui/material/Link';
import {Grid,Box} from '@mui/material';
import { styled } from '@mui/material/styles';
import {TittleDetail} from "../components/tittleDetail"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import {checkNotUndefined,formatDate} from "../../utils/utils"

import './detail.css'

var XMLParser = require('react-xml-parser');

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    
  },
}));

export function Detail({isLoading,jsonData}) { 
  
  
  const { podcastId } = useParams();
  const baseURL=`https://itunes.apple.com/lookup?id=${podcastId}`;

  axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
  const [detailPodcast, setDetailPodcast] = useState();
  const [feedEpisodes, setFeedEpisodes]= useState();
  let cont = 1;
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
        <Box boxShadow={2} component="div" sx={{borderRadius:'5px',p:1, width:'80%',border: '1px solid silver', fontSize:'1.2em' }}>
          <b>Episodes: {detailPodcast?.trackCount}</b>
        </Box>
        <Box boxShadow={2} mt={2} component="div" sx={{borderRadius:'5px',p:1, width:'80%',border: '1px solid silver' }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell sx={{ fontWeight: 'bold' }}>Tittle</StyledTableCell>
                  <StyledTableCell sx={{ fontWeight: 'bold' }} align="right">Date</StyledTableCell>
                  <StyledTableCell sx={{ fontWeight: 'bold' }} align="right">Duration</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {episodes.map((row) => (
                  <StyledTableRow  key={row.children.find(ss=>ss.name ==="title").value}>
                    <StyledTableCell component="th" scope="row">
                      <Link underline="none" href={`/podcast/${podcastId}/episode/${cont++}`}>{row.children.find(ss=>ss.name ==="title").value}</Link>
                    </StyledTableCell>
                    <StyledTableCell align="right">{formatDate(checkNotUndefined(row.children.find(ss=>ss.name ==="pubDate")))}</StyledTableCell>
                    <StyledTableCell align="right">{checkNotUndefined(row.children.find(ss=>ss.name ==="itunes:duration"))}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Grid>
    </Grid>
  );
}
