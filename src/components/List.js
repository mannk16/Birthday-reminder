import React from "react";
import "./List.css";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <div className="data-container">
            <img src={person.image} alt="image of a person" />
            <section className="data-content">
              <p className="name-person">{person.name}</p>
              <p className="name-age">{person.age} years</p>
            </section>
          </div>
        );
      })}
    </>
  );
};

export default List;
