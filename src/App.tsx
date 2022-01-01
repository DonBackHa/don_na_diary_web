import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import MyPage from "./pages/MyPage";
import Home from './pages/Home'

function App() {
    return (
        <div className={'App'}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="/Home"/>}/>
                    <Route path={"/Home"} element={<Home/>}/>
                    <Route path={"/MyPage"} element={<MyPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
