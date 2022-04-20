import logo from "./logo.svg";
import React, { useState } from "react";
import ClassComponent from "./Components/ClassComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import FunctionalComponent from "./Components/FunctionalComponent";
import Viewperson from "./Components/ViewPerson";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [person, setPerson] = useState([
    {
      name: "Doris",
      description: "Doris is a good",
      id: uuidv4(),
    },
    {
      name: "Joel",
      description: "Joel is a good",
      id: uuidv4(),
    },
  ]);

  console.log(person);

  const addPerson = (user, description) => {
    const newPerson = {
      name: user,
      description: description,
      id: uuidv4(),
    };

    setPerson([...person, newPerson]);
  };

  const eyes = "Very big eyes";

  const deleteUser = (id) => {
    setPerson(person.filter((user) => user.id !== id));
  };

  const editUser = (id, edit) => {
    setPerson(person.map((user) => (user.id === id ? edit : user)));
  };

  return (
    <div className="App">
      <FunctionalComponent eyesType={eyes} addUser={addPerson} />
      <Viewperson
        users={person}
        deletePerson={deleteUser}
        editPerson={editUser}
      />
    </div>
  );
}

export default App;
