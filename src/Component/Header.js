import { Box, Typography } from "@mui/material";
import React from "react";
import logo from "../assets/file.png";
import { useNavigate } from "react-router-dom";

const Header = ({ isName = false, name }) => {
  const navigate= useNavigate()
  const handleClick = ()=>{
    navigate('/')
  }
  return (
    <>
      <Box
        sx={{
          width: "500px",
          ml: "5%",
          mt: "5%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "120px",cursor:"pointer" }} onClick={handleClick}>
          <img src={logo} style={{ width: "100%" }} alt="logo" />
        </Box>
        {isName && (
          <>
           

            <Box sx={{ ml: 2, borderLeft: "1px solid #AFC3FE" }}>
              <Typography variant="h4" sx={{ pl: 2 }}>
                {name}
              </Typography>
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default Header;
