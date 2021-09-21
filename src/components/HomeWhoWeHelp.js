import React from "react";
import HomeWhoWeHelpContent from "./HomeWhoWeHelpContent";

export default function HomeWhoWeHelp() {
  return (
    <>
      <section className="sectionWhoWeHelp">
        <div className="sectionWhoWeHelp__container">
          <h2 className="sectionWhoWeHelp__title">Komu pomagamy?</h2>
          <div className="ornament"></div>
          <div className="sectionWhoWeHelp__container--buttons">
            <button className="btn sectionWhoWeHelp--btn">Fundacjom</button>
            <button className="btn sectionWhoWeHelp--btn">
              Organizacją <p>pozarządowym</p>
            </button>
            <button className="btn sectionWhoWeHelp--btn">
              Lokalnym <p>zbiórkom</p>
            </button>
          </div>
          <HomeWhoWeHelpContent />
        </div>
      </section>
    </>
  );
}
