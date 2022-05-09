import React, { useEffect, useState }  from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {getMovieCredits} from "../../api/tmdb-api";
import { Link } from "react-router-dom";

export default function MovieCredits({ movie }) {
  const [credits, setCredits] = useState([]);
console.log(movie)
  useEffect(() => {
    getMovieCredits(movie.id).then((credits) => {
      setCredits(credits.cast);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 550}} aria-label="credits table">
        <TableHead>
          <TableRow>
            <TableCell >Name</TableCell>
            <TableCell align="center">Character</TableCell>
            <TableCell align="right">Read More </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {credits.map((r) => (
            <TableRow key={r.id}>
              <TableCell component="th" scope="row">
                {r.name}
              </TableCell>
              <TableCell >{r.character}</TableCell>
              <TableCell >
                 <Link
                  to={`/credits/${r.id}`}
                  state={{
                      credit: r,
                      movie: movie,
                  }}
                >
                  Full Credits
                </Link>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}