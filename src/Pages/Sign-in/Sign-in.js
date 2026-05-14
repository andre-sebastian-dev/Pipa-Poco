import "./sign-in.css"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { auth } from "../../firebaseConnection";
import { signInWithEmailAndPassword,
         signOut
 } from "firebase/auth";

function SignIn(){
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState('');
  const [loginSenha, setLoginSenha] = useState('');
  


  // Login do site
async function fazerLogin(){
  try {
    const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginSenha);
    
    const user = userCredential.user

    console.log("login feito com sucesso", user);

    await user.reload();

    if(!user.emailVerified){

      alert("Verifique seu email para fazer o login")

      await signOut(auth);
      return;
    }

    alert("Login realizado com secesso.")
    
    navigate("/pedido");

  } catch (error) {
    if(error.code === "auth/wrong-password"){
      alert("Senha Errada") 
    } else if(error.code === "auth/user-not-found"){
      alert("Usuário não encontrado")
    } else if(error.code === "auth/invalid-email"){
      alert("Email inválido")
    }
  }
}
    return(
        <article className="container">
        <section className="seção-sign">
            <form className="form-sign">
            <h1>Faça seu login</h1>
            
             <label>Digite seu Email</label>
                    <input 
                        type="email"
                        autoComplete="email"
                        placeholder="Seu email..."
                        value={loginEmail}
                        onChange={(e)=> setLoginEmail(e.target.value)}
                     ></input>

                    <label>Digite sua Senha</label>
                    <input 
                        type="password" 
                        autoComplete="current-password"
                        placeholder="Sua senha..."
                        value={loginSenha}
                        onChange={(e)=> setLoginSenha(e.target.value)}
                    ></input>

                    <p>Esqueceu sua Senha? <Link to="/reset-password">Crie uma nova</Link></p>

                    <div className="buttons">
                       
                       <Link className="cad-button" to="/cadastro">Criar conta</Link>
                       <p className="ou">ou</p>
                       <button type="button" className="log-button" onClick={fazerLogin}>fazer Login</button>
                       
                    </div>

                    
                </form>


        </section>
        </article>
    )
}

export default SignIn;
