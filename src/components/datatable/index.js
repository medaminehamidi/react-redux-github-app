import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@material-ui/core';
import Text from '../home/text.json'
const DataList = ({ card }) => {

  return (
    <TableContainer component={Paper}>
    <Table  aria-label="simple table">
      <TableHead>
        <TableRow>
  <TableCell>{Text.picture}</TableCell>
          <TableCell align="right">{Text.name}</TableCell>
          <TableCell align="right">{Text.location}</TableCell>
          <TableCell align="right">{Text.id}</TableCell>
          <TableCell align="right">{Text.login}</TableCell>
          <TableCell align="right">{Text.company}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {card.map(row => (
          <TableRow key={row.name}>
            <TableCell component="th" scope="row">
            <img alt={row.avatar_url} src={row.avatar_url} />
            </TableCell>
            <TableCell align="right">{row.name}</TableCell>
            <TableCell align="right">{row.location}</TableCell>
            <TableCell align="right">{row.id}</TableCell>
            <TableCell align="right">{row.login}</TableCell>
            <TableCell align="right">{row.company}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
} 

export default DataList