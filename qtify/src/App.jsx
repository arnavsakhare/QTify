import React, {useState, useEffect} from "react";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { fetchNewAlbums, fetchSongs, fetchTopAlbums } from "./api/api";


function App() {

  const [data, setData] = useState({});

  const generateData = (key, func) => {
    func()
      .then((data) => {
        setData((prev) => ({
          ...prev,
          [key]: data
        }));
      });
  };

  useEffect(() => {
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
    generateData("songs", fetchSongs);
  }, []);

  const {topAlbums = [], newAlbums = [], songs = []} = data;

  return (
    <>
      <StyledEngineProvider injectFirst>
        <Navbar />
        <Outlet context={{data: {topAlbums, newAlbums, songs}}}/>
      </StyledEngineProvider>
    </>
  )
}

export default App
