import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function HomeContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  let [errorMessageName, seterrorMessageName] = useState("");
  let [errorMessageEmail, seterrorMessageEmail] = useState("");
  let [errorMessage, seterrorMessage] = useState(" ");
  let [messageSuccess, setmessageSuccess] = useState("");

  const sendFormContact = async (e) => {
    const response = await fetch(
      `https://fer-api.coderslab.pl/v1/portfolio/contact`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      }
    );
    response.json().then((msg) => console.log(msg));
  };

  const clearValidator = (inputName, inputEmail, inputMessage) => {
    inputName.classList.remove("invalid__value--input");
    inputEmail.classList.remove("invalid__value--input");
    inputMessage.classList.remove("invalid__value--input");

    seterrorMessage("");
    seterrorMessageName("");
    seterrorMessageEmail("");
    setmessageSuccess("");
  };

  const validator = (e) => {
    e.preventDefault();

    const inputName = document.querySelector("#name");
    const inputEmail = document.querySelector("#email");
    const inputMessage = document.querySelector("#message");

    const emptyValue = "To pole nie może być puste";
    const invalidValueName = "Podane imię jest nieprawidłowe";
    const invalidValueEmail = "Podany email jest nieprawidłowy";
    const invalidValueMessage = "Wiadomość musi mieć conajmniej 120 znaków";
    const messageSuccess = `Wiadomość została wysłana! Wkrótce się skontaktujemy.`;

    const reg = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;
    const regName = /^[A-ZŚŹŻŁĆa-zęłćńóżąźś][A-ZŚŹŻŁĆa-zęłćńóżąźś]+$/;

    clearValidator(inputName, inputEmail, inputMessage);

    if (name === "") {
      seterrorMessageName(emptyValue);
      inputName.classList.add("invalid__value--input");
    } else if (!regName.test(name)) {
      seterrorMessageName(invalidValueName);
      inputName.classList.add("invalid__value--input");
    }
    if (email === "") {
      seterrorMessageEmail(emptyValue);
      inputEmail.classList.add("invalid__value--input");
    } else if (!reg.test(email)) {
      seterrorMessageEmail(invalidValueEmail);
      inputEmail.classList.add("invalid__value--input");
    }

    if (message === "") {
      seterrorMessage(emptyValue);
      inputMessage.classList.add("invalid__value--input");
    }
    if (message.length < 120) {
      seterrorMessage(invalidValueMessage);
      inputMessage.classList.add("invalid__value--input");
    }

    if (
      !inputName.classList.contains("invalid__value--input") &&
      !inputEmail.classList.contains("invalid__value--input") &&
      !inputMessage.classList.contains("invalid__value--input")
    ) {
      setmessageSuccess(messageSuccess);
      sendFormContact();
    }
  };

  return (
    <>
      <section className="sectionContact">
        <div className="sectionContact__background"></div>
        <div className="sectionContact__contact">
          <h3 className="sectionContact__contact--title">
            Skontaktuj się z nami
          </h3>
          <div className="ornament"></div>
          <p className="messageSent">{messageSuccess}</p>
          <form className="sectionContact__contact--form">
            <div className="sectionContact__contact--form--inputs">
              <div className="sectionContact__contact--form--inputs--single">
                <label for="name">Wpisz swoje imię</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="name"
                  className="input"
                ></input>
                <p className="invalid__value">{errorMessageName}</p>
              </div>
              <div className="sectionContact__contact--form--inputs--single">
                <label for="email">Wpisz swój email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="email"
                  className="input"
                ></input>
                <p className="invalid__value">{errorMessageEmail}</p>
              </div>
            </div>
            <label for="message">Wpisz swoją wiadomość</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className=" input textarea"
              rows="8"
              cols="50"
              type="text"
              id="message"
            ></textarea>
            <p className="invalid__value">{errorMessage}</p>
            <button
              onClick={validator}
              className="sectionContact__contact--form--btn"
            >
              Wyślij
            </button>
          </form>
        </div>
        <footer className="footer">
          <p className="footer--copy">Copyright by Coders Lab</p>
          <div className="footer--social">
            <FontAwesomeIcon className="icon-social" icon={faFacebookSquare} />
            <FontAwesomeIcon className="icon-social" icon={faInstagram} />
          </div>
        </footer>
      </section>
    </>
  );
}
