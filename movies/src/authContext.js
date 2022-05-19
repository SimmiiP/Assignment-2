import React, { useState, createContext } from "react";
import { login, signup, favourites, rated } from "./api/movies-api";

export const AuthContext = createContext(null);

const AuthContextProvider = (props) => {
  const existingToken = localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState(existingToken);
  const [userName, setUserName] = useState("");
  const [addfavourites, setFavourites] = useState("");
  const [addrated, setRated] = useState("");

  //Function to put JWT token in local storage.
  const setToken = (data) => {
    localStorage.setItem("token", data);
    setAuthToken(data);
  };

  const authenticate = async (username, password) => {
    const result = await login(username, password);
    if (result.token) {
      setToken(result.token)
      setIsAuthenticated(true);
      setUserName(username);
    }
  };

  const register = async (username, password) => {
    const result = await signup(username, password);
    console.log(result.code);
    return (result.code == 201) ? true : false;
  };


  const addFavourite = async (addfavourites) => {
    const result = await favourites(addfavourites);
    if (result.token) {
      setToken(result.token)
      setFavourites(true);
    }
  };

  const addRated = async (addrated) => {
    const result = await rated(addrated);
    if (result.token) {
      setToken(result.token)
      setRated(true);
    }
  };

  const signout = () => {
    setTimeout(() => setIsAuthenticated(false), 100);
  };



  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        register,
        signout,
        userName,
        addFavourite,
        addRated,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;