import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Welcome from "../pages/welcome";
import Login from "../pages/login";
import Register from "../pages/register";
import About from "../pages/about";
import Profile from "../pages/profile";
import ProtectedRoute from "../components/layout/protectedRoute";
import NewRecordPage from "../pages/newRecord";

export default function SetRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route element={<ProtectedRoute />}>
                    <Route path="/home" element={<Home/>}/>
                        <Route path="/home/new" element={<NewRecordPage/>}></Route>
                    <Route path="/profile" element={<Profile/>} />
                </Route>
                <Route path="/about" element={<About/>} ></Route>
            </Routes>
        </BrowserRouter>
    );
}
