import React from "react";
import signature from "../assets/Signature.svg";

export default function HomeAboutUs() {
  return (
    <>
      <section className="sectionAboutUs">
        <div className="sectionAboutUs__aboutUs">
          <div className="sectionAboutUs__aboutUs--wrap">
            <h3 className="sectionAboutUs__aboutUs--title">O nas</h3>
            <div className="ornament"></div>
            <p className="sectionAboutUs__aboutUs--description">
              Nori grape silver beet broccoli kombu beet greens fava bean potato
              quandong celery. Bunya nuts black-eyed pea prairie turnip leek
              lentil turnip greens parsnip.
            </p>
          </div>
          <div className="sectionAboutUs__aboutUs--signature">
            <img src={signature} alt="Signature"></img>
          </div>
        </div>

        <div className="sectionAboutUs__imagePeople"></div>
      </section>
    </>
  );
}
