
import "./conta.css"
import { auth } from "../../firebaseConnection";
import { signOut } from "firebase/auth";

import { Link } from "react-router-dom";



function Conta(){

    function sairDaConta(){
        signOut(auth)
        .then(()=>{
            alert("Você saiu de usa conta")
        })
        .catch(()=>{
            alert("Falha ao sair")
        })

    }
    return(
        <div>
            <h1>Sua Conta</h1>
            <Link to="/sign-in">Trocar de conta</Link>
            

            <button onClick={sairDaConta}>Sair da conta</button>
        </div>
    )
}

export default Conta;