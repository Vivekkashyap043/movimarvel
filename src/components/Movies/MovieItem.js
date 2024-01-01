import React from 'react'
import { Card, CardActions, CardContent, Typography, Box } from '@mui/material'
import {Button} from '@mui/material';

function MovieItem({title, releaseDate, posterUrl, id}) {
  return (
    <Card sx={{ margin: 3, width: 250, height: 450, borderRadius: 5, ":hover":{
        boxShadow: "10px 10px 20px #ccc" }
     }}>
        <Box height="68%">
        <img src={posterUrl} alt={title} style={{width:"100%", height:"100%"}}/>
        </Box>
    
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {new Date(releaseDate).toDateString()}
      </Typography>
    </CardContent>
    <CardActions>
      <Button sx={{margin:"auto"}} size="small">Book</Button>
    </CardActions>
  </Card>
  )
}
export default MovieItem
