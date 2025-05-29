import Header from "./components/Header";
import About from "./pages/About";
import Vans from "./pages/Vans";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import VanDetail from "./pages/VanDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/vans" element={<Vans />} />
                <Route path="/vans/:id" element={<VanDetail />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}
export default App;
