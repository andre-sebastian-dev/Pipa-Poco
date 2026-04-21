import { BrowserRouter, Routes, Route } from "react-router-dom";

//  ------Componentes-------
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

//  --------Páginas---------
import Home from "./Pages/Home/Home";
import Pedido from "./Pages/Pedido/Pedido";
import Sobre from "./Pages/Sobre/Sobre";
import Error from "./Pages/Error/Error";
import Conta from "./Pages/Conta/Conta";



function Navegação(){
    return(
        <BrowserRouter>
<Header/>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/pedido" element={<Pedido/>}/>
    <Route path="/sobre" element={<Sobre/>}/>
    <Route path="/conta" element={<Conta/>}/>


    <Route path="/*" element={<Error/>}/>
</Routes>
<Footer/>
</BrowserRouter>
    )
}

export default Navegação;
