import React from "react";
import { Helmet } from "react-helmet";
import { Box, CssBaseline } from "@mui/material";
import Header from "./Header";

const Layout = ({ children,isName=false,name='' }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <style>
          {`body {
            background: linear-gradient(to bottom, #eef4ff, #f5f5f5);

          }`}
        </style>
      </Helmet>
      <CssBaseline />
      <Header isName={isName} name={name} />
      <Box sx={{px:2,}}>
        {children}
      </Box>
    </>
  );
};

export default Layout;
