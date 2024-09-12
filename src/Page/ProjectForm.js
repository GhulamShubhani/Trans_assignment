

import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  MenuItem,

} from "@mui/material";

import CheckboxesTags from "../Component/CheckBox";
import main from "../assets/main.png";
import TopImage from "../Component/TopImage";
import { useNavigate } from "react-router-dom";
import DatePickerComp from "../Component/DatePickerComp";

const ProjectForm = () => {

  const navigate= useNavigate()
const handleClickDiscard = ()=>{
  navigate("/",)
}

const handleClickSubmit = ()=>{
  navigate("/project-page",)
}

  return (
    <Box
      sx={{
        minHeight: "100vh",
        // background: "linear-gradient(to bottom, #e0e7ff, #f8fafc)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <TopImage img={main} />
      <Typography variant="h6" sx={{ mb: 4 }}>
        Add Details
      </Typography>

      <Grid
        container
        // spacing={5}
        sx={{ maxWidth: "900px", display: "flex", justifyContent: "center" }}
      >
        <Grid item xs={12} sm={4.1} sx={{mb:2,mr:{sm:4,md:4}}}>
          <TextField select fullWidth label="Company" sx={{backgroundColor:"#fff"}}>
            <MenuItem value="company1">Company 1</MenuItem>
            <MenuItem value="company2">Company 2</MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={12} sm={4.1} sx={{mb:2,ml:{sm:4,md:4}}}>
          <TextField select fullWidth label="Source language" sx={{backgroundColor:"#fff"}}>
            <MenuItem value="source1">Language 1</MenuItem>
            <MenuItem value="source2">Language 2</MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={12} sm={4.1} sx={{mb:2,mr:{sm:4,md:4}}}>
         <DatePickerComp />
        </Grid>

        <Grid item xs={12} sm={4.1} sx={{mb:2,ml:{sm:4,md:4}}}>
          <CheckboxesTags name={"Target language"} />
        </Grid>
        <Grid item xs={12} sm={4.1} sx={{mb:2,mr:{sm:4,md:4}}}>
          <TextField select fullWidth label="Client" sx={{backgroundColor:"#fff"}}>
            <MenuItem value="client1">Client 1</MenuItem>
            <MenuItem value="client2">Client 2</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4.1} sx={{mb:2,ml:{sm:4,md:4}}}>
          <CheckboxesTags name={"Number of resources needed"} />
        </Grid>
        <Grid item xs={12} sm={4.1} sx={{ borderRadius: "50px",mb:2,mr:{sm:4,md:4} }}>
          <TextField fullWidth label="Subject Email" sx={{backgroundColor:"#fff"}} />
        </Grid>
        <Grid item xs={12} sm={4.1} sx={{mb:2,ml:{sm:4,md:4}}}>
          <CheckboxesTags name={"Project priority"} />
        </Grid>
        <Grid item xs={12} sm={4.1} sx={{mb:2,mr:{sm:4,md:4}}}>
          <TextField select fullWidth label="Project status" sx={{backgroundColor:"#fff"}}>
            <MenuItem value="status1">Status 1</MenuItem>
            <MenuItem value="status2">Status 2</MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={12} sm={4.1} sx={{mb:2,ml:{sm:4,md:4}}}>
          <CheckboxesTags name={"Project priority"} />
        </Grid>
        <Grid item xs={12} sm={4.1} sx={{mb:2,mr:{sm:4,md:4}}}>
          <TextField select fullWidth label="Handled by" sx={{backgroundColor:"#fff"}}>
            <MenuItem value="handler1">Handler 1</MenuItem>
            <MenuItem value="handler2">Handler 2</MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={12} sm={4.1} sx={{mb:2,ml:{sm:4,md:4}}}>
          <TextField fullWidth label="Project estimated value" sx={{backgroundColor:"#fff"}} />
        </Grid>

        <Grid item xs={12} sm={4.1} sx={{mb:2,mr:{sm:4,md:4}}}>
          <TextField fullWidth label="Stage" multiline rows={4} sx={{backgroundColor:"#fff"}}/>
        </Grid>

        <Grid item xs={12} sm={4.1} sx={{mb:2,ml:{sm:4,md:4}}}>
          <TextField
            fullWidth
            label="Project final value (if confirmed by client)"
            sx={{backgroundColor:"#fff"}}
          />
        </Grid>

        <Grid
          item
          xs={12}
          gap={4}
          sx={{ display: "flex", justifyContent: "center",mt:4,mb:2 }}
        >
          <Button variant="contained" onClick={handleClickDiscard} sx={{ backgroundColor: "#0A74DA",mr:{sm:2,md:1} }}>
            Discard
          </Button>
          <Button variant="contained" onClick={handleClickSubmit} sx={{ backgroundColor: "#0A74DA",ml:{sm:2,md:1} }}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectForm;
