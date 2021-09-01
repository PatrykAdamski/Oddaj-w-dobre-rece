import React from "react";

export default function HomeThreeColumns() {
  return (
    <>
      <section className="sectionThreeColumns">
        <div className="sectionThreeColumns__column">
          <p className="sectionThreeColumns__column--number">10</p>
          <h2 className="sectionThreeColumns__column--title">
            Oddanych worków
          </h2>
          <p className="sectionThreeColumns__column--description">
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </p>
        </div>
        <div className="sectionThreeColumns__column">
          <p className="sectionThreeColumns__column--number">5</p>
          <h2 className="sectionThreeColumns__column--title">
            Wspartych organizacji
          </h2>
          <p className="sectionThreeColumns__column--description">
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </p>
        </div>
        <div className="sectionThreeColumns__column">
          <p className="sectionThreeColumns__column--number">7</p>
          <h2 className="sectionThreeColumns__column--title">
            Zorganizowanych zbiórek
          </h2>
          <p className="sectionThreeColumns__column--description">
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </p>
        </div>
      </section>
    </>
  );
}
