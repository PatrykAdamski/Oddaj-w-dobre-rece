import React from "react";
import iconTshirt from "../assets/Icon-1.png";
import iconBag from "../assets/Icon-2.png";
import iconLoupe from "../assets/Icon-3.png";
import iconArrows from "../assets/Icon-4.png";

export default function HomeSimpleSteps() {
  return (
    <>
      <section className="sectionSimpleSteps">
        <div className="sectionSimpleSteps__rowUp">
          <h3 className="sectionSimpleSteps__rowUp--title">
            Wystarczą 4 proste kroki
          </h3>
          <div className="ornament" />
        </div>
        <div className="sectionSimpleSteps__rowMiddle">
          <div className="sectionSimpleSteps__wrapRowMiddle">
            <div className="sectionSimpleSteps__element">
              <img src={iconTshirt} alt="T-shirt"></img>
              <h4 className="sectionSimpleSteps__element--title">
                Wybierz rzeczy
              </h4>
              <p className="sectionSimpleSteps__element--description">
                ubrania, zabawki, sprzęt i inne
              </p>
            </div>
            <div className="sectionSimpleSteps__element">
              <img src={iconBag} alt="Bag"></img>
              <h4 className="sectionSimpleSteps__element--title">Spakuj je</h4>
              <p className="sectionSimpleSteps__element--description">
                skorzystaj z worków na śmieci
              </p>
            </div>
            <div className="sectionSimpleSteps__element">
              <img src={iconLoupe} alt="Loupe"></img>
              <h4 className="sectionSimpleSteps__element--title">
                Zdecyduj komu chcesz pomóc
              </h4>
              <p className="sectionSimpleSteps__element--description">
                wybierz zaufane miejsce
              </p>
            </div>
            <div className="sectionSimpleSteps__element">
              <img src={iconArrows} alt="Arrows"></img>
              <h4 className="sectionSimpleSteps__element--title">
                Zamów kuriera
              </h4>
              <p className="sectionSimpleSteps__element--description">
                kurier przyjedzie w dogodnym terminie
              </p>
            </div>
          </div>
        </div>
        <div className="sectionSimpleSteps__rowDown">
          <button className="btn sectionSimpleSteps__rowDown--btn">
            <p>Oddaj</p>Rzeczy
          </button>
        </div>
      </section>
    </>
  );
}
