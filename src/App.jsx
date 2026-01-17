import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotels from "./pages/hotels/Hotels";
import Hotel from "./pages/hotel/Hotel";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/hotels/:id" element={<Hotel />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}