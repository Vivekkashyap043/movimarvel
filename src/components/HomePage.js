import { Box, Button, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import MovieItem from './Movies/MovieItem'
import { Link } from 'react-router-dom'
import { getAllMovies } from '../api-helpers/api-helpers'

function HomePage() {

  const [movies, setMovies] = useState([]);
  
  useEffect(() =>{
    getAllMovies()
    .then((data) => setMovies(data.movies))
    .catch((data) => console.log(data))
  }, [ ]);
  console.log(movies);
  return (
    <Box  width={"100%"} height="100%" margin="auto"  marginTop={2}>
      <Box margin={"auto"} width="80%" height={"53vh"} padding={2}>
        <img src="https://www.oneindia.com/img/2023/12/salaar-review2-1703184699.jpg" 
        alt="Salar" style={{width:"100%", height:"100%"}}/>
      </Box>
      <Box padding={5} margin={"auto"}>
        <Typography variant='h4' textAlign={"center"}>Latest Releases</Typography>
      </Box>
      <Box margin={"auto"} display={"flex"} width={"80%"} justifyContent={"center"} alignItems={"center"} flexWrap={"wrap"}>
        {movies && movies.slice(0,4).map((movie, index) => (
          <MovieItem  key={index}  id={movie.id} title={movie.title} posterUrl={movie.posterUrl} releaseDate={movie.releaseDate}/>
        ))}
      </Box>
      <Box display="flex" padding={5} margin={"auto"}>
        <Button variant='outlined' sx={{margin:"auto", color:"#2b2d42"}} LinkComponent={Link} to="/movies">
          View All Movies
        </Button>
      </Box>
    </Box>
  )
}

export default HomePage
