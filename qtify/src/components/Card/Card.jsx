import React from 'react'
import { Link } from 'react-router-dom';
import { Card, Tooltip, CardMedia, CardContent, Chip, Box, Typography } from '@mui/material';


function SongCard({data, type}) {

  const getCard = (type) => {

    switch (type) {
      case "album" :{
        const {image, title, songs, slug, follows} = data;

        return (
          <Tooltip title={`${songs.length} songs`} placement='top' arrow>
  
              <Box sx={{width: "159px", height: "232px"}}>
                <Link to={`/album/${slug}`} style={{textDecoration: "none"}}>
  
                  <Card sx={{borderRadius: "10px", padding: "0px"}}>
                    <CardMedia component="img" image={image} height="170px"/>
                    <CardContent 
                      sx={{
                        height: "35px", 
                        padding: "0px",
                        position: "relative", 
                        '&:last-child': {paddingBottom: "0px"}
                      }}
                    >
                      <Chip 
                        label={`${follows} Follows`} 
                        sx={{
                          position: "absolute", 
                          top:"6px", 
                          left:"8px", 
                          gap: "1px", 
                          height:"23px", 
                          fontSize: "10px", 
                          borderRadius: "10px", 
                          bgcolor: 'var(--color-black)', 
                          color: 'var(--color-white)'}}
                      />
                    </CardContent>
                  </Card>
                  <Typography 
                    sx={{
                      fontSize: "14px", 
                      fontWeight: "400", 
                      color: 'var(--color-white)', 
                      marginTop: "6px"
                    }}
                  >
                    {title}
                  </Typography>
  
                </Link>
              </Box>
  
          </Tooltip>
        )
      }

      case "song" : {
        const {title, likes, image} = data;

        return (
          
              <Box sx={{width: "159px", height: "232px"}}>
                <Link  style={{textDecoration: "none"}}>
  
                  <Card sx={{borderRadius: "10px", padding: "0px"}}>
                    <CardMedia component="img" image={image} height="170px"/>
                    <CardContent 
                      sx={{
                        height: "35px", 
                        padding: "0px",
                        position: "relative", 
                        '&:last-child': {paddingBottom: "0px"}
                      }}
                    >
                      <Chip 
                        label={`${likes} Likes`} 
                        sx={{
                          position: "absolute", 
                          top:"6px", 
                          left:"8px", 
                          gap: "1px", 
                          height:"23px", 
                          fontSize: "10px", 
                          borderRadius: "10px", 
                          bgcolor: 'var(--color-black)', 
                          color: 'var(--color-white)'}}
                      />
                    </CardContent>
                  </Card>
                  <Typography 
                    sx={{
                      fontSize: "14px", 
                      fontWeight: "400", 
                      color: 'var(--color-white)', 
                      marginTop: "6px"
                    }}
                  >
                    {title}
                  </Typography>
  
                </Link>
              </Box>
  
        )
      }
    }
    
  }

  return getCard(type);
}

export default SongCard