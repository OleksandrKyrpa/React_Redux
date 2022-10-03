import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./app.less"
import Card from "./card/Card";
import Main from "./main/Main";

const App = () => {
   
    const dispatch = useDispatch()

    return (
       <BrowserRouter>
        <div className="container">
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/card" element={<Card/>} />
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />
            </Routes>
        </div>
       </BrowserRouter>
    )
}

export default App;
