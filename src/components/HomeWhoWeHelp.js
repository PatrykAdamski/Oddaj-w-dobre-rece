import React, { useState, useEffect } from "react";
import fire from "../services/firebase";
import HomeWhoWeHelpContent from "./HomeWhoWeHelpContent";
import HomeWhoWeHelpPagination from "./HomeWhoWeHelpPagination";

export default function HomeWhoWeHelp() {
  const [clickedButton, setclickedButton] = useState("foundations");
  const [foundations, setFoundations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [foundationsPerPage] = useState(3);

  const indexOfLastFoundation = currentPage * foundationsPerPage;
  const indexOfFirstFoundation = indexOfLastFoundation - foundationsPerPage;
  const currentFoundations = foundations.slice(
    indexOfFirstFoundation,
    indexOfLastFoundation
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setCurrentPage(1);
    fire
      .firestore()
      .collection(clickedButton)
      .onSnapshot((snapshot) => {
        const newFoundation = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFoundations(newFoundation);
      });
  }, [clickedButton]);

  return (
    <>
      <section className="sectionWhoWeHelp">
        <div className="sectionWhoWeHelp__container">
          <h2 className="sectionWhoWeHelp__title">Komu pomagamy?</h2>
          <div className="ornament"></div>
          <div className="sectionWhoWeHelp__container--buttons">
            <button
              id="foundations"
              onClick={(e) => {
                setclickedButton("foundations");
              }}
              className="btn sectionWhoWeHelp--btn"
            >
              Fundacjom
            </button>
            <button
              id="organizations"
              onClick={(e) => {
                setclickedButton("organizations");
              }}
              className="btn sectionWhoWeHelp--btn"
            >
              Organizacją <p>pozarządowym</p>
            </button>
            <button
              id="local"
              onClick={(e) => {
                setclickedButton("local");
              }}
              className="btn sectionWhoWeHelp--btn"
            >
              Lokalnym <p>zbiórkom</p>
            </button>
          </div>
          <p className="homeWhoWeHelpContent__description">
            W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
            współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
            czego potrzebują.
          </p>
          {currentFoundations.map((foundation) => (
            <HomeWhoWeHelpContent
              key={foundation.id}
              name={foundation.name}
              purpose={foundation.purpose}
              stuff={foundation.stuff}
            />
          ))}
          <HomeWhoWeHelpPagination
            foundationsPerPage={foundationsPerPage}
            totalFoundations={foundations.length}
            paginate={paginate}
          />
        </div>
      </section>
    </>
  );
}
