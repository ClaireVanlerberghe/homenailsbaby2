import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />

      </Routes>
    <Footer />
  </BrowserRouter>
);
