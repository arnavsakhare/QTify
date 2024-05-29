import React from 'react';
import { useParams } from 'react-router-dom';


function AlbumPage() {
    const {albumId} = useParams();


  return (
    <div>Album : {albumId}</div>
  )
}

export default AlbumPage