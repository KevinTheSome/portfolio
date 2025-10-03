import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./assets/index.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </AnimatePresence>
    );
};

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <ThemeProvider>
            <NavBar />
            <App />
        </ThemeProvider>
    </BrowserRouter>,
);
