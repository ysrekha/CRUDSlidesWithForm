// Define the type for the props expected by the SlideView component
type SlideViewProps = {
    itemCount: number; // The number of items to display or manage
    bgColor: string; // The background color for the SlideView component
  }
  
  // Define the SlideView component
  export default function SlideView({ itemCount, bgColor }: SlideViewProps) {
    return (
      <div 
        style={{ 
          backgroundColor: bgColor, // Set the background color based on the bgColor prop
          flexGrow: 1 // Allow the div to grow and fill the available space
        }}
      >
        <h2>Item Count: {itemCount}</h2> {/* Display the count of items */}
        {/* Render slides or other content here */}
      </div>
    );
  }
  