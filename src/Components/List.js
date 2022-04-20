import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import EditUser from "./EditUser";

const List = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const item = props.userData;
  const handleDelete = (e) => {
    e.preventDefault();
    props.delete(item.id);
  };
  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <button onClick={handleShow}>Edit</button>
      <button onClick={handleDelete}>Delete</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUser data={props.userData} edit={props.edit} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default List;
