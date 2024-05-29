import { Box, Button, Stack, Typography } from '@mui/material';
import React, {useEffect, useState} from 'react'
import SongCard from '../Card/Card';
import Carousel from '../Carousel/Carousel';
import Filters from '../Filters/Filters';

function Section({data, title, genreFunc, type}) {

    const [carouselToggle, SetCarouselToggle] = useState(true);
    const [filters, setFilters] = useState([{key: "all", label: "All"}]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        if(genreFunc) {
            genreFunc().then((res) => {
                const {data} = res;
                setFilters([...filters, ...data]);
            });
        }
    }, []);

    const handleToggle = () => {
        SetCarouselToggle((prev) => !prev);
    };

    const showFilters = filters.length > 1;
    const cardsToRender = data.filter((ele) => showFilters && selectedIndex !== 0 ? ele.genre.key === filters[selectedIndex].key : ele );

  return (
    <Box display="flex" flexDirection="column" rowGap={1}>

        <Stack direction="row" justifyContent="space-between">
            <Typography variant="h6">{title}</Typography>

            {type === "album" && (
                <Button 
                    sx={{textTransform: 'none', fontWeight: "600"}}  
                    size="large" 
                    color="success" 
                    type='text' 
                    onClick={handleToggle}
                >
                    {!carouselToggle ? "Collapse" : "Show all"}
                </Button>
            )}

        </Stack>

        {showFilters && (
            <Filters 
                filters={filters}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
            />
        )}


        <Box>
            {!carouselToggle ? (

                <Box display="flex" flexWrap='wrap' columnGap={6} rowGap={3}>
                    {cardsToRender.map((ele, idx) => (
                        <SongCard key={idx} data={ele} type={type}/>
                    ))}
                </Box>

            ) : (
                <Carousel 
                    data={cardsToRender} 
                    renderComponent={(ele) => <SongCard data={ele} type={type}/> }
                />
            )}
        </Box>

    </Box>
  )
}

export default Section