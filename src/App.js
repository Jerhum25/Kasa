import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageErreur from "./pages/PageErreur";
import Home from "./pages/Home";
import APropos from "./pages/APropos";
import FicheLogement from "./pages/FicheLogement";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apropos" element={<APropos />} />
          <Route path="/fichelogement/:id" element={<FicheLogement />} />
          <Route path="*" element={<PageErreur />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
