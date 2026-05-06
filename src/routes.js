import { BrowserRouter, Routes, Route } from "react-router-dom";


//  ------Componentes-------
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

//  --------Páginas---------
import Cadastro from "./Pages/Cadastro/Cadastro";
import Conta from "./Pages/Conta/Conta";
import ChangePassword from "./Pages/Change-Password/ChangePassword";
import Error from "./Pages/Error/Error";
import Home from "./Pages/Home/Home";
import Pedido from "./Pages/Pedido/Pedido";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import SignIn from "./Pages/Sign-in/Sign-in";
import Sobre from "./Pages/Sobre/Sobre";


//  -----rota privada------
import PrivateRoute from "./PrivateRoute";

//  ---navegação do site---
function Navegação(){
    return(
        <BrowserRouter>
<Header/>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cadastro" element={<Cadastro/>}/>
    <Route path="/conta" element={<Conta/>}/>
    <Route path="/change-password" element={<ChangePassword/>}/>
    <Route path="/pedido" element={<PrivateRoute><Pedido/></PrivateRoute>}/>
    <Route path="/reset-password" element={<ResetPassword/>}/>
    <Route path="/sign-in" element={<SignIn/>}/> 
    <Route path="/sobre" element={<Sobre/>}/>
    

    <Route path="*" element={<Error/>}/>
</Routes>
<Footer/>
</BrowserRouter>
    )
}

export default Navegação;
