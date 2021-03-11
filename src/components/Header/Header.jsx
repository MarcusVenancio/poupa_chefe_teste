import React from "react";
import { IconButton, Switch } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useHistory } from "react-router";
import { useTheme } from "../../context/ThemeContext";

import * as storage from "../../utils/storage";

import "./index.scss";

export const Header = ({ setAuth }) => {
  const { theme, setTheme } = useTheme();

  const handleLogOut = () => {
    storage.removeItemFromStorage(storage.TOKEN_KEY);
    setAuth(storage.getTokenFromStorage());
  };
  
  const handleSetTheme = (e) => {
    if(theme !== "") {
      setTheme("")
      storage.removeItemFromStorage(storage.THEME_KEY);
    } else {
      setTheme("darkmode")
      storage.setItemStorage(storage.THEME_KEY, "darkmode");
    }
  };

  return (
    <header className={`header ${theme}`}>
      <div className="container">
        <div className="header__switch-theme">
          <Switch
            name="checkedA"
            checked={theme !== ""}
            onChange={(e) => handleSetTheme(e)}
            />
            <span>Trocar tema</span>
        </div>
        <div className="header__logout">
          <IconButton onClick={() => handleLogOut()}>
            <ExitToAppIcon />
          </IconButton>
          <span>Sair</span>
        </div>
      </div>
    </header>
  );
};
