import React, { useEffect, useState } from 'react'
import './Header.css';
import { AppBar, Box, Toolbar, Autocomplete, TextField, Tabs, Tab } from '@mui/material'
import logo from '../images/moviemarvel.png'
import { getAllMovies } from '../api-helpers/api-helpers';
import { Link } from 'react-router-dom';

function Header() {

  const [value, setvalue] = useState(0);
  const [movies, setMovies] = useState([]);

  useEffect(() =>{
    getAllMovies()
    .then((data) => setMovies(data.movies))
    .catch((data) => console.log(data))
  }, [ ]);

  return (
    <AppBar position='sticky' className='bg-dark'>
      <Toolbar>
        <Box width={'20%'}>
          <img src={logo} alt="" />
        </Box>
        <Box width={'35%'} margin={'auto'}>
          <Autocomplete
            id="free-solo-demo"
            style={{background:"white", borderRadius:"5px", color:"white"}}
            freeSolo
            options={movies && movies.map((option) => option.title)}
            renderInput={(params) => <TextField  {...params} placeholder="Search Movies" />}
          />
        </Box>
        <Box display={'flex'}>
          <Tabs value={value} textColor='white' onChange={(e, val)=>setvalue(val)}>
            <Tab label="Movies" LinkComponent={Link}  to="/movies" />
            <Tab label="Admin" LinkComponent={Link}  to="/admin" />
            <Tab label="Auth" LinkComponent={Link}  to="/auth" />
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
