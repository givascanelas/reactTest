import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Badge from "./pages/Badge";
import Perfil from "./pages/Perfil";
import Game from "./pages/Game";

function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/sobre" element={<Sobre />}/>
          <Route path="/contato" element={<Contato />}/>
          <Route path="/badge" element={<Badge />}/>
          <Route path="/game" element={<Game />}/>
          <Route path="/perfil" element={<Perfil />}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App