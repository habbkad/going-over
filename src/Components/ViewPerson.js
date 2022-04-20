import React from "react";
import List from "./List";

const Viewperson = (props) => {
  return (
    <div>
      {props.users.map((item) => {
        return (
          <div key={item.id}>
            <List
              userData={item}
              delete={props.deletePerson}
              edit={props.editPerson}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Viewperson;
