// Define the type for the props expected by the SlideView component
type SlideViewProps = {
  itemCount: number;   // The number of items to display or manage
  bgColor: string;     // The background color for the SlideView component
  fontStyle: string;   // The font style for the text displayed in the SlideView component
}

// Define the SlideView component
export default function SlideView({ itemCount, bgColor, fontStyle }: SlideViewProps) {
  return (
    <div 
      style={{ 
        backgroundColor: bgColor, // Set the background color based on the bgColor prop
        fontFamily: fontStyle,    // Set the font style based on the fontStyle prop
        flexGrow: 1               // Allow the div to grow and fill the available space
      }}
    >
      {/* Display the count of items */}
      <h2>Item Count: {itemCount}</h2>
      {/* Render slides or other content here */}
    </div>
  );
}
