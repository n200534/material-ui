import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

function Feed() {
    return (
        <Box
           
            flex={4}
            p={2}
        >
            <Card sx={{
                margin:5
            }} >
      <CardHeader
        avatar={
          <Avatar sx={{ backgroundcolor: "red" }} aria-label="recipe">
            A
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Akshay Amavarapu"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="20%"
        image='https://wallpapercave.com/wp/wp2032581.jpg'
        alt="KING KOHLI "
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          GOAT.. the king of all time
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
      </CardActions>
     
    </Card>
            
        </Box>
    )
}

export default Feed