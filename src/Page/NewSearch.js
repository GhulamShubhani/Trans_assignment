import React, { useState } from "react";
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
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CheckboxesTags from "../Component/CheckBox";
import main from "../assets/newSearch.png";
import TopImage from "../Component/TopImage";
import { useNavigate } from "react-router-dom";
import DatePickerComp from "../Component/DatePickerComp";

const NewSearch = () => {

  const navigate = useNavigate();
  const handleClickDiscard = () => {
    navigate("/");
  };

  const handleClickSubmit = () => {
    navigate("/new-client");
  };

  return (
    <>
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

        <Grid
          container
          sx={{ maxWidth: "900px", display: "flex", justifyContent: "center" }}
        >
          <Grid item xs={12} sm={4.1} sx={{ mb: 2, mr: { sm: 4, md: 4 } }}>
            <Typography>From</Typography>
          </Grid>
          <Grid item xs={12} sm={4.1} sx={{ mb: 2, ml: { sm: 4, md: 4 } }}>
            <Typography>To</Typography>
          </Grid>
          <Grid item xs={12} sm={4.1} sx={{ mb: 2, mr: { sm: 4, md: 4 } }}>
            <DatePickerComp />
          </Grid>
          <Grid item xs={12} sm={4.1} sx={{ mb: 2, ml: { sm: 4, md: 4 } }}>
            <DatePickerComp />
          </Grid>

          <Grid item xs={12} sm={4.1} sx={{ mb: 2, mr: { sm: 4, md: 4 } }}>
            <TextField select fullWidth label="Client name" style={{backgroundColor:"#fff"}}>
              <MenuItem value="client1">Client 1</MenuItem>
              <MenuItem value="client2">Client 2</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} sm={4.1} sx={{ mb: 2, ml: { sm: 4, md: 4 } }}>
            <TextField select fullWidth label="Source language" style={{backgroundColor:"#fff"}}>
              <MenuItem value="source1">Language 1</MenuItem>
              <MenuItem value="source2">Language 2</MenuItem>
            </TextField>
          </Grid>

          <Grid
            item
            xs={12}
            sm={4.1}
            sx={{ borderRadius: "50px", mb: 2, mr: { sm: 4, md: 4 } }}
          >
            <TextField fullWidth label="Keyword search" style={{backgroundColor:"#fff"}}/>
          </Grid>

          <Grid item xs={12} sm={4.1} sx={{ mb: 2, ml: { sm: 4, md: 4 } }}>
            <TextField select fullWidth label="Domain" style={{backgroundColor:"#fff"}}>
              <MenuItem value="domin1">Domain 1</MenuItem>
              <MenuItem value="domain2">Domain 2</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={4.1} sx={{ mb: 2, mr: { sm: 4, md: 4 } }}>
            <TextField select fullWidth label="Project status" style={{backgroundColor:"#fff"}}>
              <MenuItem value="status1">Status 1</MenuItem>
              <MenuItem value="status2">Status 2</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} sm={4.1} sx={{ mb: 2, ml: { sm: 4, md: 4 } }}>
            <CheckboxesTags name={"Target language"} style={{backgroundColor:"#fff"}} />
          </Grid>

          <Grid item xs={12} sm={4.1} sx={{ mb: 2, mr: { sm: 4, md: 4 } }}>
            <TextField select fullWidth label="Handled by" style={{backgroundColor:"#fff"}}>
              <MenuItem value="handler1">Handler 1</MenuItem>
              <MenuItem value="handler2">Handler 2</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} sm={4.1} sx={{ mb: 2, ml: { sm: 4, md: 4 } }}>
            <CheckboxesTags name={"Project priority"} style={{backgroundColor:"#fff"}} />
          </Grid>

          <Grid item xs={12} sm={4.1} sx={{ mb: 2, mr: { sm: 4, md: 4 } }}>
            <TextField select fullWidth label="Volume" style={{backgroundColor:"#fff"}}>
              <MenuItem value="status1">Status 1</MenuItem>
              <MenuItem value="status2">Status 2</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} sm={4.1} sx={{ mb: 2, ml: { sm: 4, md: 4 } }}>
           
          </Grid>

          <Grid
            item
            xs={12}
            gap={4}
            sx={{ display: "flex", justifyContent: "center", mt: 4, mb: 2 }}
          >
           
            <Button
              variant="contained"
              onClick={handleClickSubmit}
              sx={{ backgroundColor: "#0A74DA", ml: { sm: 2, md: 1 } }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default NewSearch;
