import React from "react";

export default function Logout() {
  return (
    <>
      <section className="sectionLogout">
        <h2 className="sectionLogout__title">
          Wylogowanie nastąpiło pomyślnie!
        </h2>
        <div className="ornament"></div>
        <button className="btn sectionLogin--btn">Strona główna</button>
      </section>
    </>
  );
}
