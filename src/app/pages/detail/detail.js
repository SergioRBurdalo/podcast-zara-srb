import React from 'react';
import Link from '@mui/material/Link';
import {Grid,Box,Button,Typography, CardMedia,Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import {TittleDetail} from "../components/tittleDetail"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export function Detail() { 

  return (
    <Grid container mt={5} ml={5} className='detailContainer'>
      <TittleDetail/>
      <Grid item xs={9}>
        <Box boxShadow={2} component="div" sx={{borderRadius:'5px',p:1, width:'80%',border: '1px solid silver', fontSize:'1.2em' }}>
          <b>Episodes: 66</b>
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
                {rows.map((row) => (
                  <StyledTableRow  key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      <Link underline="none" href="/podcast/1/episode/1">{row.name}</Link>
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.calories}</StyledTableCell>
                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
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
