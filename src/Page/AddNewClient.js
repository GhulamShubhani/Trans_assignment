import React, { useState } from 'react'
import {
    Box,
    Grid,
    TextField,
    Typography,
    Button,
    MenuItem,
    InputAdornment,
    IconButton,
  } from "@mui/material";
import TopImage from '../Component/TopImage'
import newClient from "../assets/new-client2.png"
import MyTable from '../Component/TableComponent';
import CustomTable from '../Component/TableComponent';
import BasicTable from '../Component/TableComponent';
import EditClientDialog from '../Component/DialogBox';
import CustomDialog from '../Component/DialogBox';
import DeleteCustomDialog from '../Component/DeleteDialogBox';
import { useNavigate } from 'react-router-dom';
// import newClient from "../assets/new-client1.png"

const AddNewClient = () => {
const navigate= useNavigate()
const [open, setOpen] = useState(false);

const handleClickOpen = () => {
    setOpen(true);
};

const handleClose = () => {
    setOpen(false);
};
const [deleteBoxopen, setDeleteBoxOpen] = useState(false);

const handleClickDeleteBoxOpen = () => {
    setDeleteBoxOpen(true);
};

const handleDeleteBoxClose = () => {
    setDeleteBoxOpen(false);
};

const handleClick = ()=>{
  navigate("/project-page",)
}

const handleClickDiscard = ()=>{
  navigate("/",)
}


  return (
    <>
     <Box
      sx={{
        // minHeight: "100vh",
        // background: "linear-gradient(to bottom, #e0e7ff, #f8fafc)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // padding: "20px",
      }}
    >
    <TopImage img={newClient} />
    <Typography variant="h6" sx={{ mb: 4 }}>
        Add Details
      </Typography>
      <Grid
        container
        sx={{ maxWidth: "900px", display: "flex", justifyContent: "center" }}
      >
        <Grid item xs={12} sm={4.1} sx={{mb:2,mr:{sm:4,md:4}}}>
          <TextField select fullWidth label="Company"sx={{backgroundColor:"#fff"}}>
            <MenuItem value="company1">Company 1</MenuItem>
            <MenuItem value="company2">Company 2</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4.1} sx={{ borderRadius: "50px", mb:2,ml:{sm:4,md:4}}}>
          <TextField fullWidth label="Agent name"sx={{backgroundColor:"#fff"}} />
        </Grid>
        <Grid item xs={12} sm={4.1} sx={{ borderRadius: "50px", mb:2,mr:{sm:4,md:4} }}>
          <TextField fullWidth label="Client email" sx={{backgroundColor:"#fff"}}/>
        </Grid>
        <Grid item xs={12} sm={4.1} sx={{ borderRadius: "50px",mb:2,ml:{sm:4,md:4} }}>
          <TextField fullWidth label="Agent email" sx={{backgroundColor:"#fff"}}/>
        </Grid>
        <Grid item xs={12} sm={4.1} sx={{ borderRadius: "50px",mb:2,mr:{sm:4,md:4} }}>
          <TextField fullWidth label="Client website "sx={{backgroundColor:"#fff"}} />
        </Grid>
        <Grid item xs={12} sm={4.1} sx={{ borderRadius: "50px",mb:2,ml:{sm:4,md:4} }}>
          <TextField fullWidth label="Agent phone number" sx={{backgroundColor:"#fff"}}/>
        </Grid>
        <Grid
          item
          xs={12}
          sm={8.2} 
          sx={{ display: "flex", justifyContent: "end",ml:8 }}
        >
          <Button variant="outlined" >
            Add
          </Button>
        </Grid>
        <Grid item xs={12} sm={9.2} sx={{ borderRadius: "50px",my:2, }}>
        <BasicTable handleClickOpen={handleClickOpen} handleClickDeleteBoxOpen={handleClickDeleteBoxOpen} />
        </Grid>

        <Grid
          item
          xs={12}
          gap={4}
          sx={{ display: "flex", justifyContent: "center" ,mt:3,mb:2}}
        >
          <Button variant="contained" onClick={handleClickDiscard} sx={{ backgroundColor: "#0A74DA",mr:{sm:1,md:1} }}>
            Discard
          </Button>
          <Button variant="contained" onClick={handleClick} sx={{ backgroundColor: "#0A74DA",ml:{sm:1,md:1} }}>
            Submit
          </Button>
        </Grid>
        
      </Grid>

      <CustomDialog open={open} handleClose={handleClose} />
      <DeleteCustomDialog open={deleteBoxopen} handleClose={handleDeleteBoxClose} />

    </Box>
    </>
  )
}

export default AddNewClient