import React from 'react';
import { Dialog, DialogContent, DialogTitle, IconButton, TextField, Button, Grid, Typography, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const CustomDialog = ({ open, handleClose }) => {
  return (
    <Dialog 
      open={open} 
      onClose={handleClose} 
      PaperProps={{ 
        style: { 
          borderRadius: '12px',
          // padding: '20px', 
          // background: '#fff',
          boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.2)'
        } 
      }}
    >
      <Box sx={{ position: 'relative', background: '#fff', padding: '10px', borderRadius: '12px' }}>
        <DialogTitle sx={{ padding: 0 }}>
          <Typography variant="h6" sx={{ color: '#333', textAlign: 'center', marginBottom: '0px' }}>
            Edit client details
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
          <Grid container spacing={2} sx={{display:"flex",alignItems:"center"}}>
            <Grid item xs={4} >
              <Typography variant="body1">Company</Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                select
                variant="outlined"
                fullWidth
                SelectProps={{
                  native: true,
                }}
                InputProps={{
                  style: { background: '#FFF6E5', borderRadius: '8px' }
                }}
              >
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
              </TextField>
            </Grid>

            <Grid item xs={4} sx={{display:"flex",alignItems:"center"}}>
              <Typography variant="body1">Client Name</Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                variant="outlined"
                fullWidth
                defaultValue="George Smith"
                InputProps={{
                  style: { background: '#FFF6E5', borderRadius: '8px' }
                }}
              />
            </Grid>

            <Grid item xs={4} sx={{display:"flex",alignItems:"center"}}>
              <Typography variant="body1">Client Website</Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                variant="outlined"
                fullWidth
                defaultValue="abcwebsite.com"
                InputProps={{
                  style: { background: '#FFF6E5', borderRadius: '8px' }
                }}
              />
            </Grid>

            <Grid item xs={4} sx={{display:"flex",alignItems:"center"}}>
              <Typography variant="body1">Agent Name</Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                variant="outlined"
                fullWidth
                defaultValue="James"
                InputProps={{
                  style: { background: '#FFF6E5', borderRadius: '8px' }
                }}
              />
            </Grid>

            <Grid item xs={4} sx={{display:"flex",alignItems:"center"}}>
              <Typography variant="body1">Agent Email</Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                variant="outlined"
                fullWidth
                defaultValue="James123@gmail.com"
                InputProps={{
                  style: { background: '#FFF6E5', borderRadius: '8px' }
                }}
              />
            </Grid>

            <Grid item xs={4} sx={{display:"flex",alignItems:"center"}}>
              <Typography variant="body1">Agent Phone Number</Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                variant="outlined"
                fullWidth
                defaultValue="1234567890"
                InputProps={{
                  style: { background: '#FFF6E5', borderRadius: '8px' }
                }}
              />
            </Grid>
          </Grid>

          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Button 
              variant="contained" 
              onClick={handleClose} 
              sx={{
                backgroundColor: '#C4C4C4',
                color: '#000',
                marginRight: '10px',
                '&:hover': {
                  backgroundColor: '#A3A3A3',
                }
              }}
            >
              Cancel
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
              Update
            </Button>
          </Box>
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default CustomDialog;
