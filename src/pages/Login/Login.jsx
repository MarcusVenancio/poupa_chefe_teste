import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { Title } from "../../components/Title/Title";
import { useTheme } from "../../context/ThemeContext";

import * as requests from "../../services/requests";
import * as storage from "../../utils/storage";

import "./index.scss";

export const Login = ({ setAuth }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { theme } = useTheme();

  let history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();

    var data = new FormData();
    data.append("grant_type", "password");
    data.append("username", username);
    data.append("password", password);
    data.append("scope", "web");

    requests
      .login(data)
      .then((res) => {
        console.log(res);
        storage.setItemStorage(storage.TOKEN_KEY, res.data.access_token);
        setAuth(storage.getTokenFromStorage());
        history.push("/suppliers");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={`login ${theme}`}>
      <div className="container">
        <Title title="Login" />
        <div className="login__content">
          <form className="login__form" onSubmit={(e) => handleLogin(e)}>
            <TextField
              required
              fullWidth
              margin="normal"
              id="username"
              label="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <TextField
              required
              fullWidth
              type="password"
              margin="normal"
              id="password"
              label="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Button variant="contained" color="primary" type="submit">
              Entrar
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
