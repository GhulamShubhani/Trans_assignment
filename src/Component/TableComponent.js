import * as React from 'react';
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function createData(name, email, phone) {
  return { name, email, phone };
}

const rows = [
  createData('Ghulam', '', ''),
  createData('Shubhani', '', ''),
  createData('Saul', '', ''),
  createData('Maria', '', ''),
];

export default function BasicTable({handleClickOpen,handleClickDeleteBoxOpen}) {
    
  return (
    <Box
      sx={{
        display: 'flex',
        // flexDirection: 'column',
        alignItems: 'center',
        // gap: 2,
        mt: 4,
      }}
    >
      <TableContainer component={Paper} sx={{ width: '100%', border:"1px solid blue" }}>
        <Table  aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Buttons outside the table */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // gap: 1.8,
        mt: {sm:8,md:8},
      }}>

      {rows.map((row, index) => (
        <Box key={index} sx={{ display: 'flex', justifyContent: 'center',alignItems:"center", mb:2,ml:{sm:1} }}>
          <IconButton sx={{ color: '#0A74DA' }} onClick={handleClickOpen}>
            <EditIcon />
            <Typography variant='body2'>
            Edit
            </Typography>
          </IconButton>
          <IconButton sx={{ color: '#0A74DA' }} onClick={handleClickDeleteBoxOpen}>
            <DeleteIcon />
            <Typography variant='body2'>
            Delete
            </Typography>
          </IconButton>
        </Box>
      ))}
      </Box>
    </Box>
  );
}
