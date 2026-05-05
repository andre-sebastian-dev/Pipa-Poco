import "./header.css"
import img from "../../images/icone home 4.png"

import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConnection";

function Header(){

  const navigate = useNavigate();

  function handlePedir(e){
  console.log("clicou no pedir");
  console.log("currentUser:", auth.currentUser);

  e.preventDefault();

  if(!auth.currentUser){
    navigate("/sign-in");
    return;
  }

  navigate("/pedido");
}

  return(
    <header className="header">
      <div className="home">
        <Link to="/"><img src={img} alt="ícone de Home"/></Link>
        <h2><Link to="/">Pipa Poço</Link></h2>
      </div>

      <ul className="menu">
        <li>
          <button onClick={handlePedir}>Pedir</button>
        </li>
        <li><Link to="/conta">Conta</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
      </ul>
      
    </header>
  )
}

export default Header;