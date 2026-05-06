import "./resetPassword.css";

import { auth } from "../../firebaseConnection";
import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";

function ResetPassword(){
  const [email, setEmail] = useState("");

  async function handleReset(e){
    e.preventDefault();

    if(!email){
      alert("Digite um email");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email, {
        url: "http://localhost:3000/change-password",
        handleCodeInApp: true
      });

      alert("Email de recuperação enviado!");
      setEmail("");

    } catch (error) {
      alert("Erro ao enviar email");
    }
  }

  return(
    <form onSubmit={handleReset}>
      <h1>Recuperação de senha</h1>

      <label>Digite seu email</label>
      <input
        type="email"
        placeholder="Seu email..."
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
      />

      <button type="submit">
        Enviar email
      </button>
    </form>
  );
}

export default ResetPassword;