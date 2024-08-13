import ToolbarButton from './ToolbarButton'; // Import the ToolbarButton component
import icon1 from './assets/Color.png'; // Import the icon for color change
import icon4 from './assets/FontFamily.png'; // Import the icon for font family change
import icon3 from './assets/Emoji.png'; // Import the icon for emoji or additional features

// Define the type for the props expected by the Toolsbar component
type ToolbarProps = {
  onChangeBgColor: (color: string) => void; // Function to handle background color changes
};

// Define the Toolsbar component
export default function Toolbar({ onChangeBgColor }: ToolbarProps) {
  return (
    <div className="bg-light p-3 border-bottom"> {/* Container styling for the tools bar */}
      {/* Button to change background color to tomato red */}
      <ToolbarButton
        icon={icon1} // Set the icon for this button
        onClick={() => onChangeBgColor('#ff6347')} // Change background color to tomato red when clicked
      />
      {/* Button to change background color to steel blue */}
      <ToolbarButton
        icon={icon4} // Set the icon for this button
        onClick={() => onChangeBgColor('#4682b4')} // Change background color to steel blue when clicked
      />
      {/* Button to change background color to lime green */}
      <ToolbarButton
        icon={icon3} // Set the icon for this button
        onClick={() => onChangeBgColor('#32cd32')} // Change background color to lime green when clicked
      />
    </div>
  );
}
