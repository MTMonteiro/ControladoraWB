import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

import Logo from "./redeOnCorp1.jpeg";

function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  let history = useHistory();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const usuario = {
      login: login,
      senha: senha,
    };


    if (usuario.login === "admin" && "admin")  {
        history.push('/admin/dashboard')

    }
  }

  return (
    <div className="login-wrapper">
      <div className="login-content">
        <img src={Logo} alt="logoRedeOn" />

        <form onSubmit={onSubmitHandler}>
          <label htmlFor="login">Usuário:</label>
          <input
            id="login"
            type="text"
            placeholder="Usuário"
            name="login"
            value={login}
            onChange={(event) => setLogin(event.target.value)}
            required
          />

          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            placeholder="•••••"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
            required
          />

          <button type="submit">Logar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
