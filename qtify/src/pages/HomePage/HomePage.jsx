import React from 'react'
import Hero from '../../components/Hero/Hero'
import { useOutletContext } from 'react-router-dom'
import Section from '../../components/Section/Section';
import { Box } from '@mui/material';

function HomePage() {

  const {data} = useOutletContext();
  const {topAlbums, newAlbums, songs} = data;

  return (
    <>
        <Hero />
        <Box display="flex" flexDirection="column" rowGap={5} mx={5} >
          <Section data={topAlbums} type={"album"} title={"Top Albums"}/>
          <Section data={newAlbums} type={"album"} title={"New Albums"}/>
        </Box>

    </>
  )
}

export default HomePage