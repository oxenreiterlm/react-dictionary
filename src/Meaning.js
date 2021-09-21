import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h4 className="partOfSpeech">{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="definition">
              {definition.definition}
              <br />
              <em className="example">{definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
