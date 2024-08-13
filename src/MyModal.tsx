import { Button, Modal } from "react-bootstrap";
import CreateForm from "./CreateForm";
import { useState } from "react";

interface MyModalProps {
  onSave: (values: { image: string }) => void;
  onCancel: () => void;
}

const MyModal: React.FC<MyModalProps> = ({ onSave, onCancel }) => {
  const [showModal, setShowModal] = useState(false);
  const [formValues, setFormValues] = useState({ image: '' });

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleSave = (values: { image: string }) => {
    setFormValues(values);
    onSave(values);
    handleClose();
  };

  const handleCancel = () => {
    onCancel();
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Open Form
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateForm
            onSave={handleSave}
            onCancel={handleCancel}
            formValues={formValues}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyModal;
