import "./App.css";
// import { BotonContador } from "./components/BotonContador/BotonContador";
import { Header } from "./components/Header/Header";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Promises } from "./components/Promises/Promises";
// import { Map } from "./components/Map/Map";
// import { Simpsons } from "./components/Simpsons/Simpsons";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />        
        <Routes>
          <Route path="/" element={ <ItemListContainer/> }/>
          <Route path="/categoria/:idCategoria" element={ <ItemListContainer/> }/>
          <Route path="/item/:idItem" element={ <ItemDetailContainer/> }/>
          <Route path="*" element={ <h2> Sitio en contrucción </h2> }/>
        </Routes>      
      </BrowserRouter>

      {/* <ItemListContainer/>
        <ItemDetailContainer/> */}

      {/* <BotonContador stock={10} inicial={1}/> */}

      {/* <Promises/> */}

      {/* <Map/> */}

      {/* <Simpsons/> */}

    </div>
  );
}

export default App;
