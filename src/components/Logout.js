import React from "react";
import { Link } from "react-router-dom";

export default function Logout() {
  return (
    <>
      <section className="sectionLogout">
        <h2 className="sectionLogout__title">
          Wylogowanie nastąpiło pomyślnie!
        </h2>
        <div className="ornament"></div>
        <Link to="/" className=" link btn sectionLogin--btn">
          Strona główna
        </Link>
      </section>
    </>
  );
}
