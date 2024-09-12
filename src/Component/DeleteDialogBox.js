import React from 'react';
import { Dialog, DialogContent, DialogTitle, IconButton, TextField, Button, Grid, Typography, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import warning from "../assets/warning.webp"

const DeleteCustomDialog = ({ open, handleClose }) => {
  return (
    <Dialog 
      open={open} 
      onClose={handleClose} 
      PaperProps={{ 
        style: { 
          borderRadius: '12px',
          width:"400px",
          // padding: '20px', 
          // background: '#fff',
          boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.2)'
        } 
      }}
    >
      <Box sx={{ position: 'relative', background: '#fff', padding: '10px', borderRadius: '12px' }}>
        <DialogTitle sx={{ paddingX: 3, paddingTop:3,}}>
          <Typography variant="h4" sx={{ color: '#333', textAlign: 'center', marginBottom: '0px' }}>
            Are you sure you want to delete?
          </Typography>
        </DialogTitle>

        <IconButton 
          aria-label="close" 
          onClick={handleClose} 
          sx={{
            fontSize:"40px",
            position: 'absolute',
            right: '-60px',
            top: '-20px',
            color: '#fff',
            // background: '#FF1744',
            '&:hover': {
              background: '#D50000',
            }
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent>
         
          <Box sx={{display:"flex", justifyContent:"center",height:"50px"}}>
            <img src={warning} />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center',gap:3, marginTop: '20px' }}>
           
            <Button 
              variant="contained" 
              sx={{
                backgroundColor: '#1E88E5',
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#1565C0',
                }
              }}
            >
              Yes
            </Button>
            <Button 
              variant="contained" 
              sx={{
                backgroundColor: '#1E88E5',
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#1565C0',
                }
              }}
            >
              No
            </Button>
          </Box>
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default DeleteCustomDialog;
