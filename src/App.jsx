import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

import Login from "./components/Login";
import ProductoForm from "./components/ProductoForm";
import ProductoBuscar from "./components/ProductoBuscar";
import ProductoAcciones from "./components/ProductoAcciones";
import ProductoLista from "./components/ProductoLista";

import "./App.css";

function App() {
  const [usuario, setUsuario] = useState(auth.currentUser);

  const cerrarSesion = async () => {
    try {
      await signOut(auth);
      setUsuario(null);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  const iniciarSesion = (user) => {
    setUsuario(user);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Productos</h1>

        {usuario && (
          <div className="usuario-info">
            <span>{usuario.email}</span>

            <button onClick={cerrarSesion}>
              Cerrar sesión
            </button>
          </div>
        )}
      </header>

      <main>
        {!usuario ? (
          <Login onLogin={iniciarSesion} />
        ) : (
          <>
            <ProductoForm />

            <ProductoBuscar />

            <ProductoAcciones />

            <ProductoLista />
          </>
        )}
      </main>
    </div>
  );
}

export default App;