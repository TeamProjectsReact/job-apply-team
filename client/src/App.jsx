import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import 'aos/dist/aos.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage /> } />       
      </Routes>
    </BrowserRouter>
  )
}

export default App
