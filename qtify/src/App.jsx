import React, {useState, useEffect} from "react";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";


function App() {
  
  return (
    <>
      <StyledEngineProvider injectFirst>
        <Navbar />
        <Outlet />
      </StyledEngineProvider>
    </>
  )
}

export default App
