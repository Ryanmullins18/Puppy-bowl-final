import { useState } from 'react'
import './App.css'
import React from 'react';
import Players from './components/Players';
//import SinglePlayer from './components/SinglePlayer';
import AddPlayer from './components/AddPlayer';
import { BrowserRouter } from 'react-router-dom';
import SinglePlayer from './components/SinglePlayer';
import { Routes, Route } from "react-router-dom";

function App() {
return (
  <div>
  <AddPlayer />

  <Routes>
        <Route path='/' element={<Players/>} />
        <Route path='/players/:id' element={<SinglePlayer />}/>
    </Routes>
</div>
);
}

export default App
