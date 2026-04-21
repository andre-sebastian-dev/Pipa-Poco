import "./header.css"

import { Link } from "react-router-dom";

function Header(){
    return(
        <header className="header">
            <div className="home">
                <h2>{<Link to="/"> &lt;- Pé de Pipa</Link>}</h2>
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