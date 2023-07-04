import React from 'react';
import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/LoginPage/Login';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Homepage/>}/>
                <Route exact path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
