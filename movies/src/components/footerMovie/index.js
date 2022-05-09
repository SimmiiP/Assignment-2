import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";

const MovieFooter = (props ) => {
  const foot = props.foot
  return (
    <Paper 
      component="div" 
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        marginBottom: 1.5,
      }}
      >
      

      <Pagination count={10} variant="outlined" component="h3" >

      </Pagination>
      
    </Paper>
  );
};

export default MovieFooter;