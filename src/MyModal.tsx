import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import CreateForm from './CreateForm'; // Import the CreateForm component

// Define the type for the props expected by the MyModal component
interface MyModalProps {
  onSave: (values: { image: string; description: string }) => void; // Callback for saving form data
  onCancel: () => void; // Callback for canceling form input
}

// Define the MyModal component
const MyModal: React.FC<MyModalProps> = ({ onSave, onCancel }) => {
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility
  // State to manage form values with both image and description
  const [formValues, setFormValues] = useState({ image: '', description: '' });

  // Handlers for showing and hiding the modal
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // Handle form save action
  const handleSave = (values: { image: string; description: string }) => {
    setFormValues(values);
    onSave(values);
    handleClose();
  };

  // Handle cancel action
  const handleCancel = () => {
    onCancel();
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create Form
      </Button>

      <Modal show={showModal} onHide={handleClose} className="bottom-modal">
        <Modal.Header closeButton>
          <Modal.Title>Create Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateForm
            onSave={handleSave}
            onCancel={handleCancel}
            formValues={formValues} // Provide formValues with both image and description
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

