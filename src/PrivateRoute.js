

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConnection";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const cancelarInscricao = onAuthStateChanged(auth, (usuario) => {
      setUser(usuario);
    });

    return () => cancelarInscricao();
  }, []);

  if (user === undefined) {
    return <p>Carregando...</p>;
  }

  if (!user) {
    return <Navigate to="/sign-in" replace/>;
  }

  return children;
}

export default PrivateRoute;



