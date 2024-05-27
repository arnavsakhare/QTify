import React from 'react'
import { Link } from 'react-router-dom';
import { Card, Tooltip, CardMedia, CardContent, Chip, Box, Typography } from '@mui/material';

 const title = "Worthless Explanation";
 const follows = 3194;
 const image =  "https://images.pexels.com/photos/56890/fir-tannenzweig-pine-cones-needles-56890.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800";
 const slug =  "worthless-explanation";

function SongCard() {
  // const getCard = () => {
    
    return (
        <Tooltip title="ABC" placement='top' arrow>

            <Box sx={{width: "159px", height: "232px"}}>
              <Link to={slug} style={{textDecoration: "none"}}>

                <Card sx={{borderRadius: "10px", padding: "0px"}}>
                  <CardMedia component="img" image={image} height="170px"/>
                  <CardContent sx={{height: "35px", padding: "0px",position: "relative", '&:last-child': {paddingBottom: "0px"}}}>
                    <Chip label={`${follows} Follows`} sx={{position: "absolute", top:"6px", left:"8px", gap: "1px", height:"23px", fontSize: "10px", borderRadius: "10px", bgcolor: 'var(--color-black)', color: 'var(--color-white)'}}/>
                  </CardContent>
                </Card>
                <Typography sx={{fontSize: "14px", fontWeight: "400", color: 'var(--color-white)', marginTop: "6px"}}>{title}
                </Typography>

              </Link>
            </Box>

        </Tooltip>
    )
  // }

  // return getCard;
}

export default SongCard