import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import StarRateIcon from "@mui/icons-material/StarRate";

const AddToRatedIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToRated = (e) => {
    e.preventDefault();
    context.addToRated(movie);
  };
  return (
    <IconButton aria-label="add to rated" onClick={handleAddToRated}>
      <StarRateIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToRatedIcon;