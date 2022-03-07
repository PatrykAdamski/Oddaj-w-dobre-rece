import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "../reduxStore/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import fire from "../services/firebase";
import Home from "./Home";
import Login from "./Login";
import Logup from "./Logup";
import Logout from "./Logout";
import FormHandOverStuff from "./FormHandOverStuff";
import Navigation from "./Navigation";
import NavigationSignUp from "./NavigationSignUp";

function App() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const clearInputs = () => {
    setEmail("");
    setPassword("");
    setRepeatPassword("");
  };

  const clearErrors = () => {
    setPasswordError("");
    setEmailError("");
  };

  const validatorLogin = () => {
    const inputEmail = document.querySelector("#email");
    const inputPassword = document.querySelector("#password");
    const reg = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;

    clearErrors();
    inputEmail.classList.remove("invalid__value--input");
    inputPassword.classList.remove("invalid__value--input");

    if (email === "") {
      setEmailError("To pole nie może być puste");
      inputEmail.classList.add("invalid__value--input");
    } else if (!reg.test(email)) {
      setEmailError("Podany email jest nieprawidłowy");
      inputEmail.classList.add("invalid__value--input");
    }
    if (password.length < 6) {
      setPasswordError("Podane hasło jest za krótkie");
      inputPassword.classList.add("invalid__value--input");
    }
    if (
      !inputEmail.classList.contains("invalid__value--input") &&
      !inputPassword.classList.contains("invalid__value--input")
    ) {
      handleLogin();
    }
  };

  const validatorLogup = () => {
    const inputEmail = document.querySelector("#email");
    const inputPassword = document.querySelector("#password");
    const inputRepeatPassword = document.querySelector("#repeatPassword");
    const reg = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;

    clearErrors();
    inputEmail.classList.remove("invalid__value--input");
    inputPassword.classList.remove("invalid__value--input");
    inputRepeatPassword.classList.remove("invalid__value--input");

    if (email === "") {
      setEmailError("To pole nie może być puste");
      inputEmail.classList.add("invalid__value--input");
    } else if (!reg.test(email)) {
      setEmailError("Podany email jest nieprawidłowy");
      inputEmail.classList.add("invalid__value--input");
    }
    if (password !== repeatPassword) {
      setPasswordError("Podane hasła muszą być takie same");
      inputPassword.classList.add("invalid__value--input");
    } else if (password.length < 6) {
      setPasswordError("Podane hasło jest za krótkie");
      inputPassword.classList.add("invalid__value--input");
    }
    if (
      !inputEmail.classList.contains("invalid__value--input") &&
      !inputPassword.classList.contains("invalid__value--input") &&
      !inputRepeatPassword.classList.contains("invalid__value--input")
    ) {
      handleSignUp();
    }
  };

  const handleLogin = () => {
    const inputEmail = document.querySelector("#email");
    const inputPassword = document.querySelector("#password");
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
            setEmailError("Podany email jest nieprawidłowy!");
            inputEmail.classList.add("invalid__value--input");
            break;
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError("Taki użytkownik nie istnieje!");
            inputEmail.classList.add("invalid__value--input");
            break;
          case "auth/wrong-password":
            setPasswordError("Podane hasło jest nieprawidłowe!");
            inputPassword.classList.add("invalid__value--input");
            break;
        }
      });
  };

  const handleSignUp = () => {
    const inputEmail = document.querySelector("#email");
    const inputPassword = document.querySelector("#password");
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
            setEmailError("Taki użytkownik już istnieje");
            inputEmail.classList.add("invalid__value--input");
            break;
          case "auth/invalid-email":
            setEmailError("Podany email jest nieprawidłowy");
            inputEmail.classList.add("invalid__value--input");
            break;
          case "auth/weak-password":
            setPasswordError("Hasło jest za słabe");
            inputPassword.classList.add("invalid__value--input");
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div className="nav__container">
          <NavigationSignUp
            user={user}
            handleLogout={handleLogout}
          ></NavigationSignUp>
          <Navigation></Navigation>
        </div>
        <Switch>
          <Route exact path="/">
            <Home user={user} />
          </Route>
          <Route path="/FormHandOverStuff">
            <FormHandOverStuff user={user} handleLogout={handleLogout} />
          </Route>
          <Route path="/Login">
            <Login
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              emailError={emailError}
              passwordError={passwordError}
              clearErrors={clearErrors}
              clearInputs={clearInputs}
              validatorLogin={validatorLogin}
            />
          </Route>
          <Route path="/Logup">
            <Logup
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              validatorLogup={validatorLogup}
              emailError={emailError}
              passwordError={passwordError}
              clearErrors={clearErrors}
              clearInputs={clearInputs}
              repeatPassword={repeatPassword}
              setRepeatPassword={setRepeatPassword}
            />
          </Route>
          <Route path="/Logout">
            <Logout />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
