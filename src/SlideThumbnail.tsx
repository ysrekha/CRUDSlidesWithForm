import { Button } from 'react-bootstrap';

// Define the type for props expected by the SlideThumbnail component
type SlideThumbnailProps = {
  slide: {
    id: number;        // Unique identifier for the slide
    order: number;     // Order in which the slide appears
    image: string;     // URL or path to the image for the slide
    description: string;  // Description of the image
  };
  onDelete: (id: number) => void;     // Callback function to handle deletion of the slide
  onEdit: (id: number, newImage: string, newDescription: string) => void; // Callback function to handle editing the slide's image and description
};

// Define the SlideThumbnail component
export default function SlideThumbnail({ slide, onDelete, onEdit }: SlideThumbnailProps) {
  // Handle the editing of the slide image and description
  const handleEdit = () => {
    const newImage = prompt("Enter new image URL:", slide.image);
    const newDescription = prompt("Enter new description:", slide.description);
    if (newImage && newDescription) { // Check for non-null values
      onEdit(slide.id, newImage, newDescription);
    }
  };
  

  return (
    <div className="mb-3">
      <div className="d-flex align-items-center">
        <img
          src={slide.image}
          alt={slide.description}
          style={{ maxWidth: '100px', maxHeight: '100px', marginRight: '10px' }}
        />
        <div>
          <h6>{slide.description}</h6>
          <Button variant="warning" onClick={handleEdit}>
            Edit
          </Button>
          <Button variant="danger" onClick={() => onDelete(slide.id)} className="ms-2">
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
