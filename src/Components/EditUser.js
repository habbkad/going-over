import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Edituser = (props) => {
  const [name, setName] = useState(props.data.name);
  const [description, setDescription] = useState(props.data.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: name,
      description: description,
    };
    props.edit(props.data.id, user);
    setName("");
    setDescription("");
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="type"
            placeholder="desc"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Edituser;
