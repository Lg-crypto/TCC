import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import About from "../pages/about";
import NewRecordPage from "../pages/newRecord";
import ProtectedRoute from "../components/layout/protectedRoute";
import Account from "../pages/profile/account";
import Settings from "../pages/profile/settings";


export default function SetRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Welcome/>} /> */}
                <Route path="/" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route element={<ProtectedRoute />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/home/new" element={<NewRecordPage />} />
                    <Route path="/profile/" element={<Account />} />
                    <Route path="/profile/settings" element={<Settings/>} />
                </Route>
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}
