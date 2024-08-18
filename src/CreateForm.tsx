import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

// Define the props expected by the CreateForm component
interface CreateFormProps {
  onSave: (values: { image: string; description: string }) => void; // Callback for saving form data
  onCancel: () => void; // Callback for canceling form input
  formValues?: { image: string; description: string }; // Optional form values for editing
}

// Define the CreateForm component
export default function CreateForm({ onSave, onCancel, formValues }: CreateFormProps) {
  // Local state for managing form input
  const [image, setImage] = useState(formValues?.image || ''); // Initialize with existing or empty string
  const [description, setDescription] = useState(formValues?.description || ''); // Initialize with existing or empty string

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ image, description }); // Call the onSave callback with form data
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formImage">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Save
      </Button>
      <Button variant="secondary" onClick={onCancel} className="ms-2">
        Cancel
      </Button>
    </Form>
  );
}
