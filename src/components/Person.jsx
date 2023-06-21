import React from "react";

const Person = () => {
  var lastname = "Montiel";
  const name = "Dairo";
  const getFullName = () => `${name} ${lastname}`;

  function handShake() {
    return "hello bro";
  }

  return (
    <section>
      <h2>Hello from Person component</h2>
      <h4>{getFullName()}</h4>
      <p>{handShake()}</p>
    </section>
  );
};

export default Person;
