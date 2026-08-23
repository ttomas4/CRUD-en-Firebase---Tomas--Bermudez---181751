import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const iniciarSesion = async (event) => {
    event.preventDefault();

    setError("");

    try {
      const resultado = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      onLogin(resultado.user);
    } catch (error) {
      console.error(error);
      setError("Correo o contraseña incorrectos.");
    }
  };

  return (
    <section className="login">
      <h2>Iniciar sesión</h2>

      <form onSubmit={iniciarSesion}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />

        <button type="submit">
          Iniciar sesión
        </button>
      </form>

      {error && <p className="error">{error}</p>}
    </section>
  );
}

export default Login;