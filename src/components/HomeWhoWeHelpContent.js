import React from "react";

export default function HomeWhoWeHelpContent(props) {
  const { name, purpose, stuff } = props;

  return (
    <>
      <div className="homeWhoWeHelpContent__container">
        <div className="homeWhoWeHelpContent__container--singleWrap">
          <div className="homeWhoWeHelpContent__organization">
            <h2 className="homeWhoWeHelpContent__organization--title">
              {name}
            </h2>
            <p className="homeWhoWeHelpContent__organization--description">
              {purpose}
            </p>
          </div>
          <div className="homeWhoWeHelpContent__organization--items">
            {stuff}
          </div>
        </div>
      </div>
    </>
  );
}
