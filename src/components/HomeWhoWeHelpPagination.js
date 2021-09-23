import React from "react";

export default function HomeWhoWeHelpPagination({
  foundationsPerPage,
  totalFoundations,
  paginate,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalFoundations / foundationsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((pageNumber) => (
        <div
          onClick={() => paginate(pageNumber)}
          key={pageNumber}
          className="pagination__item"
        >
          {pageNumber}
        </div>
      ))}
    </div>
  );
}
