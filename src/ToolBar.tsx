import { useState } from 'react';
import ToolbarButton from './ToolbarButton'; // Import the ToolbarButton component for toolbar buttons
import icon1 from './assets/Color.png'; // Import the icon for color change
import icon4 from './assets/FontFamily.png'; // Import the icon for font family change
import icon3 from './assets/Emoji.png'; // Import the icon for emoji or additional features
import { Button, Modal } from 'react-bootstrap'; // Import Modal and Button components from react-bootstrap

// Define the type for the props expected by the Toolbar component
type ToolbarProps = {
  onChangeBgColor: (color: string) => void; // Function to handle background color changes
  onChangeFontStyle: (style: string) => void; // Function to handle font style changes
};

// Define the Toolbar component
export default function Toolbar({ onChangeBgColor, onChangeFontStyle }: ToolbarProps) {
  // State for managing the visibility of modals
  const [showColorModal, setShowColorModal] = useState(false); // State to control the color change modal
  const [showFontModal, setShowFontModal] = useState(false);  // State to control the font style modal

  // Handlers to show and hide color modal
  const handleColorModalClose = () => setShowColorModal(false); // Close color modal
  const handleColorModalShow = () => setShowColorModal(true);  // Show color modal

  // Handlers to show and hide font modal
  const handleFontModalClose = () => setShowFontModal(false); // Close font modal
  const handleFontModalShow = () => setShowFontModal(true);  // Show font modal

  return (
    <div className="bg-light p-3 border-bottom">
      {/* Toolbar Buttons */}
      <ToolbarButton
        icon={icon1} // Icon for color change
        onClick={handleColorModalShow} // Show color modal when clicked
      />
      <ToolbarButton
        icon={icon4} // Icon for font family change
        onClick={handleFontModalShow} // Show font modal when clicked
      />
      <ToolbarButton
        icon={icon3} // Icon for emoji or additional features
        onClick={() => onChangeBgColor('yellow')} // Change background color to yellow (example action)
      />

      {/* Color Change Modal */}
      <Modal show={showColorModal} onHide={handleColorModalClose} className="bottom-modal">
        <Modal.Header closeButton>
          <Modal.Title>Change Background Color</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Buttons to select different background colors */}
          <Button className="btn 4me" onClick={() => onChangeBgColor('#ff6347')}>Tomato Red</Button>
          <Button className="btn 4me" onClick={() => onChangeBgColor('#4682b4')}>Steel Blue</Button>
          <Button className="btn 4me" onClick={() => onChangeBgColor('#32cd32')}>Lime Green</Button>
        </Modal.Body>
        <Modal.Footer>
          {/* Buttons to close the modal */}
          <Button className="btn 2me" type="button" variant="secondary" onClick={handleColorModalClose}>Close</Button>
          <Button className="btn 2me" variant="primary" onClick={handleColorModalClose}>Save Changes</Button>
        </Modal.Footer>
      </Modal>

      {/* Font Style Modal */}
      <Modal show={showFontModal} onHide={handleFontModalClose} className="bottom-modal">
        <Modal.Header closeButton>
          <Modal.Title>Change Font Style</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Buttons to select different font styles */}
          <Button className="btn 4me" onClick={() => onChangeFontStyle('Cooper Black')}>Cooper Black</Button>
          <Button className="btn 4me" onClick={() => onChangeFontStyle('Signa')}>Signa</Button>
          <Button className="btn 4me" onClick={() => onChangeFontStyle('Arial')}>Arial</Button> {/* Example font style */}
        </Modal.Body>
        <Modal.Footer>
          {/* Buttons to close the modal */}
          <Button className="btn 2me" type="button" variant="secondary" onClick={handleFontModalClose}>Close</Button>
          <Button className="btn 2me" variant="primary" onClick={handleFontModalClose}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
