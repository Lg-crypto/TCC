import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Welcome from "../pages/welcome";
import Login from "../pages/login";
import Register from "../pages/register";
import About from "../pages/about";
import Profile from "../pages/profile";


export default function SetRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/about" element={<About/>} ></Route>
                <Route path="/profile" element={<Profile/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}