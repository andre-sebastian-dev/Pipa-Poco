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
import Cadastro from "./Pages/Cadastro/Cadastro";
import SignIn from "./Pages/Sign-in/Sign-in";



function Navegação(){
    return(
        <BrowserRouter>
<Header/>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/pedido" element={<Pedido/>}/>
    <Route path="/sobre" element={<Sobre/>}/>
    <Route path="/conta" element={<Conta/>}/>
    <Route path="/cadastro" element={<Cadastro/>}/>
    <Route path="/sign-in" element={<SignIn/>}/> 


    <Route path="*" element={<Error/>}/>
</Routes>
<Footer/>
</BrowserRouter>
    )
}

export default Navegação;
