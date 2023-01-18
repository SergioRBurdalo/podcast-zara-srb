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

import {formatMiliseconds,formatDate} from "../../utils/utils";
import {fetchDetails} from "../../../app/services/services";

import './detail.css'

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
  const baseURL=`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=200`;

  const [detailPodcast, setDetailPodcast] = useState();
  const [feedEpisodes, setFeedEpisodes]= useState();
  
  useEffect(() => {
    fetchDetails({isLoading, baseURL, setDetailPodcast, setFeedEpisodes});
  }, [isLoading, baseURL]);

  console.log('EEEEEEEEE',feedEpisodes);
  console.log('aaaaaaaaaaaaaaaaa',detailPodcast);

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
                {feedEpisodes?.map((row) => (
                  <StyledTableRow  key={row.trackId}>
                    <StyledTableCell component="th" scope="row">
                      <Link underline="none" href={`/podcast/${podcastId}/episode/${row.trackId}`}>{row.trackName}</Link>
                    </StyledTableCell>
                    <StyledTableCell align="right">{formatDate(row.releaseDate)}</StyledTableCell>
                    <StyledTableCell align="right">{formatMiliseconds(row.trackTimeMillis)}</StyledTableCell>
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
