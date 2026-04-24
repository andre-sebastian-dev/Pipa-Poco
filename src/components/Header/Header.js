import "./header.css"
import img from "../../images/icone home 4.png"

import { Link } from "react-router-dom";

function Header(){
    return(
        <header className="header">
            <div className="home">
                <Link to="/"><img src={img}/></Link>
                <h2>{<Link to="/">Pipa Poço</Link>}</h2>
            </div>
            <ul className="menu">
                <li>{<Link to="/pedido">Pedir</Link>}</li>
                <li>{<Link to="/conta"> Conta</Link>}</li>
                <li>{<Link to="/sobre">Sobre</Link>}</li>
            </ul>
            
        </header>
    )
 }

 export default Header;