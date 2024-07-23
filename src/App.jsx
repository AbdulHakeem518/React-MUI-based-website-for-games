import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Toaster } from "react-hot-toast";

import * as Pages from "./pages";

import NavbarSection from "./components/NavbarSection";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavbarSection />

      <Routes>
        <Route>
          <Route path="/" element={<Pages.Home />} />
          <Route path="about" element={<Pages.About />} />
          <Route path="news" element={<Pages.News />} />
        </Route>
      </Routes>

      <Footer className="footer hide-blob" />

      <Toaster
        toastOptions={{
          style: {
            background: "#fff",
            color: "#000",
            fontFamily: "  Poppins, sans-serif",
            minWidth: "400px",
          },
        }}
      />
    </BrowserRouter>
  );
}

export default App;
