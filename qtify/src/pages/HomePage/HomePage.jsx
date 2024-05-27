import React from 'react'
import Hero from '../../components/Hero/Hero'
import { useOutletContext } from 'react-router-dom'
import SongCard from '../../components/Card/Card';

function HomePage() {

  const {data} = useOutletContext();
  // const {topAlbum, }

  return (
    <>
        <Hero />
        <SongCard />

    </>
  )
}

export default HomePage