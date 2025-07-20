import React from 'react';
import { createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import About from "./views";
import Contact from "./views/Contact";
import Home from "./views/Home";

createRoot(document.getElementById("Root"));
root.render(

<BrowserRouter>

<Routes>

    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} /> 
    <Route path="/contact" element={<Contact />} />
</Routes>
</BrowserRouter>
);