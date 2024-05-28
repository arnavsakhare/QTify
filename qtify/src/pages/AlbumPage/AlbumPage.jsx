import React from 'react';
import { useParams } from 'react-router-dom';


function AlbumPage() {
    const albumId = useParams();

    
  return (
    <div>{albumId}</div>
  )
}

export default AlbumPage