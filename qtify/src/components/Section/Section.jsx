import { Box, Button, Stack, Typography } from '@mui/material';
import React, {useState} from 'react'
import SongCard from '../Card/Card';
import Carousel from '../Carousel/Carousel';

function Section({data, title, GenreFunc, type}) {

    const [carouselToggle, SetCarouselToggle] = useState(true);

    const handleToggle = () => {
        SetCarouselToggle((prev) => !prev);
    };

  return (
    <Box display="flex" flexDirection="column" rowGap={1}>

        <Stack direction="row" justifyContent="space-between">
            <Typography variant="h6">{title}</Typography>

            <Button 
                sx={{textTransform: 'none', fontWeight: "600"}}  
                size="large" 
                color="success" 
                type='text' 
                onClick={handleToggle}
            >
                {!carouselToggle ? "Collapse" : "Show all"}
            </Button>

        </Stack>


        <Box>
            {!carouselToggle ? (

                <Box display="flex" flexWrap='wrap' columnGap={6} rowGap={3}>
                    {data.map((ele, idx) => (
                        <SongCard key={idx} data={ele} type={type}/>
                    ))}
                </Box>

            ) : (
                <Carousel 
                    data={data} 
                    renderComponent={(ele) => <SongCard data={ele} type={type}/> }
                />
            )}
        </Box>

    </Box>
  )
}

export default Section