// Define the type for the props expected by the SlideThumbnail component
type SlideThumbnailProps = {
    slide: { // The slide object containing details of the slide
      id: number; // Unique identifier for the slide
      order: number; // The order of the slide in the list
      image: string; // URL or path to the image for the slide
    };
    onDelete: (id: number) => void; // Function to call when the slide needs to be deleted, expects the slide's ID
    onEdit: (id: number) => void; // Function to call when the slide needs to be edited, expects the slide's ID
  };
  
  // Define the SlideThumbnail component
  export default function SlideThumbnail({ slide, onDelete, onEdit }: SlideThumbnailProps) {
    return (
      <div 
        className="thumbnail-container position-relative" 
        aria-labelledby={`slide-${slide.id}`} // Accessibility: Associate the slide with its ID
      >
        <img 
          src={slide.image} // Set the image source for the slide
          alt={`Slide ${slide.order}`} // Accessibility: Provide an alternative text describing the slide
          style={{ width: '9.5rem', height: '10.5rem' }} // Inline styles for image size
          aria-hidden="true" // Accessibility: Hide the image from screen readers
        />
        <div className="order-number">{slide.order}</div> {/* Display the slide's order number */}
        
        <button
          className="btn btn-danger position-absolute top-0 end-0 m-2" // Styling for the delete button
          onClick={() => onDelete(slide.id)} // Call onDelete with the slide's ID when clicked
          aria-label={`Delete slide ${slide.order}`} // Accessibility: Provide a label for screen readers
        >
          × {/* The delete button shows a multiplication sign */}
        </button>
        
        <button
          style={{
            top: '0',
            left: '0',
            borderRadius: '0',
            padding: '0.5rem 2.5rem',
            fontSize: '1rem',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            cursor: 'pointer'
          }} // Inline styles for the edit button
          onClick={() => onEdit(slide.id)} // Call onEdit with the slide's ID when clicked
          aria-label={`Edit slide ${slide.order}`} // Accessibility: Provide a label for screen readers
        >
          Edit {/* The edit button displays the text "Edit" */}
        </button>
      </div>
    );
  }
  