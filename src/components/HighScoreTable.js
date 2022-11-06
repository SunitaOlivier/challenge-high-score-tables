import React from "react";
import { useState } from "react";
const HighScoresTable = ({ scores }) => {
  const [sort, setSort] = useState("ascending");
  let eachCountry = scores.sort((a, b) => {
    return a.name < b.name ? -1 : 1;
  });
  function sorter() {
    setSort("descending");
    if (sort === "descending") {
      setSort("ascending");
    } else if (sort === "ascending") {
      setSort("descending");
    }
  }

  return (
    <div className="container">
      <h1 className="header">High Scores of each Country</h1>
      <button onClick={sorter}>Sort</button>

      {eachCountry.map(({ name, scores }, x) => {
        return (
          <div key={x} className="main-table">
            <h3 className="country">HIGH SCORES: {name}</h3>
            <ul className="table">
              {scores
                .sort((A, B) => {
                  if (sort === "ascending") {
                    return A.s > B.s ? -1 : 1;
                  } else if (sort === "descending") {
                    return A.s < B.s ? -1 : 1;
                  }
                })
                .map((person, i) => {
                  return (
                    <li key={i} className="results">
                      <span className="name-place">
                        {person.n.toUpperCase()}{" "}
                      </span>
                      <span className="score-place">{person.s}</span>
                    </li>
                  );
                })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default HighScoresTable;
