import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "pages/NotFound";
import About from "pages/About";
import LandingPage from "pages/LandingPage";
import SignUp from "pages/SignUp";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />}>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="signup" element={<SignUp />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}
