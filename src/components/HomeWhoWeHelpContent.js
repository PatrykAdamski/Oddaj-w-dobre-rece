import React from "react";

export default function HomeWhoWeHelpContent() {
  return (
    <>
      <p className="homeWhoWeHelpContent__description">
        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
        współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego
        potrzebują.
      </p>
      <div className="homeWhoWeHelpContent__container">
        <div className="homeWhoWeHelpContent__container--singleWrap">
          <div className="homeWhoWeHelpContent__organization">
            <h2 className="homeWhoWeHelpContent__organization--title">
              Fundacja "Dbam o Zdrowie"
            </h2>
            <p className="homeWhoWeHelpContent__organization--description">
              Cel i misja: Poomc osobom znajdującym się w trudnej sytuacji
              życiowej
            </p>
          </div>
          <div className="homeWhoWeHelpContent__organization--items">
            ubrania, jedzenie, sprzęt AGD, meble, zabawki
          </div>
        </div>
      </div>
    </>
  );
}
