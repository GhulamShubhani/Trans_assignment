import React from 'react';
import { Grid, Box, TextField, Button, Typography } from '@mui/material';

const SearchResults = () => {
  return (
    <Box
      sx={{
        // background: 'linear-gradient(to bottom, #eef4ff, #f5f5f5)',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
      }}
    >
      <Box
        sx={{
          backgroundColor: 'white',
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          width: '80%',
          maxWidth: 900,
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Search Results
        </Typography>

        <Grid container spacing={4}>
          {/* From Section */}
          <Grid item xs={6}>
            <Typography variant="h6" gutterBottom>
              From
            </Typography>

            <TextField
              label="Date"
              value="12/09/2024"
              variant="outlined"
              fullWidth
              disabled
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Client name"
              value="Micheal Smith"
              variant="outlined"
              fullWidth
              disabled
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Keyword search"
              value="Lorem Ipsum"
              variant="outlined"
              fullWidth
              disabled
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Project status"
              value="In Progress"
              variant="outlined"
              fullWidth
              disabled
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Handled by"
              value="Lorem Ipsum"
              variant="outlined"
              fullWidth
              disabled
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Volume"
              value="Lorem Ipsum"
              variant="outlined"
              fullWidth
              disabled
              sx={{ marginBottom: 2 }}
            />
          </Grid>

          {/* To Section */}
          <Grid item xs={6}>
            <Typography variant="h6" gutterBottom>
              To
            </Typography>

            <TextField
              label="Date"
              value="12/09/2024"
              variant="outlined"
              fullWidth
              disabled
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Source language"
              value="English"
              variant="outlined"
              fullWidth
              disabled
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Domain"
              value="Lorem Ipsum"
              variant="outlined"
              fullWidth
              disabled
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Target language"
              value="French, German"
              variant="outlined"
              fullWidth
              disabled
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Priority"
              value="Option1, option2"
              variant="outlined"
              fullWidth
              disabled
              sx={{ marginBottom: 2 }}
            />
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'end', marginTop: 4 }}>
          <Button variant="outlined" sx={{ width: 100 }}>
            Edit
          </Button>
          
        </Box>
      </Box>
    </Box>
  );
};

export default SearchResults;
