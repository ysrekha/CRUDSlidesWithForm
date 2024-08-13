import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

type CreateFormProps = {
  onSave: (formValues: { image: string }) => void;
  onCancel: () => void;
  formValues: { image: string };
};

export default function CreateForm({
  onSave,
  onCancel,
  formValues
}: CreateFormProps) {
  const [localValues, setLocalValues] = useState(formValues);
  const [imageError, setImageError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLocalValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
    if (name === 'image') {
      setImageError(null); // Clear image error when updating URL
    }
  };

  const handleClear = () => {
    setLocalValues({ image: '' });
    setImageError(null);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (localValues.image) {
      onSave(localValues);
    } else {
      setImageError('Image URL is required.');
    }
  };

  const handleImageLoadError = () => {
    setImageError('Failed to load image. Please check the URL.');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="new-image">Image URL</Form.Label>
        <Form.Control
          id="new-image"
          type="text"
          name="image"
          value={localValues.image}
          onChange={handleChange}
          placeholder="Enter image URL"
        />
      </Form.Group>

      {localValues.image && (
        <div className="mb-3">
          <h5>Image Preview:</h5>
          <img
            src={localValues.image}
            alt="Preview"
            style={{ maxWidth: '100%', maxHeight: '300px' }}
            onError={handleImageLoadError}
          />
          {imageError && <Alert variant="danger">{imageError}</Alert>}
        </div>
      )}

      <div className="d-flex justify-content-end">
        <Button variant="secondary" onClick={handleClear} className="me-2">
          Clear
        </Button>
        <Button variant="secondary" onClick={onCancel} className="me-2">
          Cancel
        </Button>
        <Button type="submit" variant="primary">
          Save
        </Button>
      </div>
    </Form>
  );
}
