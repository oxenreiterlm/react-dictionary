import React from "react";
import Meaning from "./Meaning.js";

export default function Results(props) {
  function Origin() {
    if (props.results.origin) {
      return <div>Origin: {props.results.origin}</div>;
    } else {
      return null;
    }
  }
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2 className="searchedWord">{props.results.word}</h2>
          <div className="Phonetic">
            <a
              href={props.results.phonetics[0].audio}
              target="_blank"
              rel="noreferrer"
            >
              Listen
            </a>{" "}
            /{props.results.phonetics[0].text}/
          </div>
          <Origin />
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
