// Define the type for the props expected by the ToolbarButton component
type ToolbarButtonProps = {
    icon: string; // URL or path to the icon image to be displayed on the button
    onClick: () => void; // Function to call when the button is clicked
  };
  
  // Define the ToolbarButton component
  export default function ToolbarButton({ icon, onClick }: ToolbarButtonProps) {
    return (
      <button
        className="btn btn-outline-secondary me-2" // Bootstrap styling for the button
        onClick={onClick} // Set the onClick handler to the passed in function
      >
        <img 
          src={icon} // Set the source of the image to the passed in icon URL
          style={{ width: "2.5rem", height: "2.5rem" }} // Inline styles for the image size
          alt="toolbar icon" // Accessibility: Provide an alternative text for the image
        />
      </button>
    );
  }
  