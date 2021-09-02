import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function HomeContact() {
  return (
    <>
      <section className="sectionContact">
        <div className="sectionContact__background"></div>
        <div className="sectionContact__contact">
          <h3 className="sectionContact__contact--title">
            Skontaktuj się z nami
          </h3>
          <div className="ornament"></div>
          <form className="sectionContact__contact--form">
            <div className="sectionContact__contact--form--inputs">
              <div className="sectionContact__contact--form--inputs--single">
                <label for="name">Wpisz swoje imię</label>
                <input type="text" id="name" className="input"></input>
              </div>
              <div className="sectionContact__contact--form--inputs--single">
                <label for="email">Wpisz swój email</label>
                <input type="email" id="email" className="input"></input>
              </div>
            </div>
            <label for="message">Wpisz swoją wiadomość</label>
            <textarea
              className=" input textarea"
              rows="8"
              cols="50"
              type="text"
              id="message"
            ></textarea>
            <button className="sectionContact__contact--form--btn">
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
