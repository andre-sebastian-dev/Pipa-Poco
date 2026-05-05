
import "./conta.css"
import { auth } from "../../firebaseConnection";
import { signOut, onAuthStateChanged } from "firebase/auth";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";



function Conta(){

    const [user, setUser] = useState(undefined)

    useEffect(()=>{
        const cancelarInscricao = onAuthStateChanged(auth,(usuario) =>{
            setUser(usuario);
        });
        return() => cancelarInscricao();

    },[])

    if(user === undefined){
        return(
            <p>Caregando...</p>
        )
    }
    if(user === null){
        return(
        <div>
            <p>Você não está logado</p>
            <Link to="/sign-in"> Fazer login</Link>
        </div>
        
        )
    }

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
            <p>Bem vindo {user.displayName}</p>
            <p>Email: {user.email}</p>
            <Link to="/sign-in">Trocar de conta</Link>
            <button onClick={sairDaConta}>Sair da conta</button>
        </div>
    )
}

export default Conta;