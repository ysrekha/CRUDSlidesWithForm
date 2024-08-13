

type SlideThumbnailProps = {
  slide: {
    id: number;
    order: number;
    image: string;
  };
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
};

export default function SlideThumbnail({ slide, onDelete, onEdit }: SlideThumbnailProps) {
  return (
    <div className="thumbnail-container position-relative">
      <img
        src={slide.image}
        alt={`Slide ${slide.order}`}
        style={{ width: '9.5rem', height: '10.5rem' }}
        aria-hidden="true"
      />
      <div className="order-number">{slide.order}</div>
      
      <button
        className="btn btn-danger position-absolute top-0 end-0 m-2"
        onClick={() => onDelete(slide.id)} // Pass only the id here
        aria-label={`Delete slide ${slide.order}`}
      >
        ×
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
        }}
        onClick={() => onEdit(slide.id)} // Pass only the id here
        aria-label={`Edit slide ${slide.order}`}
      >
        Edit
      </button>
    </div>
  );
}
