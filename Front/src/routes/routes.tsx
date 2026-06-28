import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Welcome from "../pages/welcome";
import Login from "../pages/login";
import Register from "../pages/register";
import About from "../pages/about";


export default function SetRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/about" element={<About/>} ></Route>
            </Routes>
        </BrowserRouter>
    );
}