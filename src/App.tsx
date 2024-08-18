import { useState } from 'react';
import Sidebar from './Sidebar'; // Import the Sidebar component
import SlideView from './SlideView'; // Import the SlideView component

import MyModal from './MyModal'; // Import the MyModal component
import BDayFlowers from './assets/BirthdayFlowers.png'; // Import image assets
import Lavender from './assets/Lavender.png';
import Peace from './assets/Peace.png';
import Toolbar from './ToolBar';

export default function App() {

  // Define a type for items in the sidebar
  type SidebarItem = {
    id: number; // Unique identifier for each item
    order: number; // Order for item sorting
    image: string; // URL or path to the item's image
    description: string; // Description of the item
  };

  // State for managing sidebar items
  const [sidebarItems, setSidebarItems] = useState<SidebarItem[]>([
    { id: 1, order: 1, image: BDayFlowers, description: 'Birthday Flowers' }, // Initial sidebar items
    { id: 2, order: 2, image: Lavender, description: 'Lavender' },
    { id: 3, order: 3, image: Peace, description: 'Peace' },
  ]);

  // State for background color and font style
  const [bgColor, setBgColor] = useState<string>('#ffffff'); // Default background color
  const [fontStyle, setFontStyle] = useState<string>('Verdana'); // Default font style

  // State for managing the next ID and order values for sidebar items
  const [nextId, setNextId] = useState<number>(4); // ID to use for the next new item
  const [nextOrder, setNextOrder] = useState<number>(4); // Order to use for the next new item

  // Function to add a new thumbnail to the sidebar
  const addThumbNail = (image: string, description: string) => {
    const newItem: SidebarItem = {
      id: nextId,
      order: nextOrder,
      image,
      description,
    };
    // Update state with new item and increment ID and order
    setSidebarItems(prevItems => [...prevItems, newItem]);
    setNextId(prevId => prevId + 1);
    setNextOrder(prevOrder => prevOrder + 1);
  };

  // Function to delete a thumbnail from the sidebar
  const deleteThumbNail = (deleteNailId: number) => {
    // Filter out the item with the specified ID
    setSidebarItems(prevItems => prevItems.filter(item => item.id !== deleteNailId));
  };

  // Function to update an existing thumbnail in the sidebar
  const updateThumbNail = (updateNailId: number, newImage: string, newDescription: string) => {
    setSidebarItems(prevItems => 
      prevItems.map(item =>
        item.id === updateNailId
          ? { ...item, image: newImage, description: newDescription }
          : item
      )
    );
  };

  // Handle save action from the modal
  const handleSave = (values: { id?: number; image: string; description: string }) => {
    if (values.id) {
      // If an ID is provided, update the existing thumbnail
      updateThumbNail(values.id, values.image, values.description);
    } else {
      // Otherwise, add a new thumbnail
      addThumbNail(values.image, values.description);
    }
  };

  // Handle cancel action from the modal
  const handleCancel = () => {
    // Implement any additional logic needed on cancel
  };

  return (
    <div className="d-flex flex-column vh-100 vw-100">
      {/* Toolbar with functions to change background color and font style */}
      <Toolbar onChangeBgColor={setBgColor} onChangeFontStyle={setFontStyle} />

      <div className="d-flex flex-column flex-grow-0">
        {/* Modal for adding and managing sidebar items */}
        <MyModal onSave={handleSave} onCancel={handleCancel} />
      </div>

      <div className="d-flex flex-grow-1">
        {/* Sidebar with items and functions for editing and deleting */}
        <Sidebar
          sideItems={sidebarItems}
          onDelete={deleteThumbNail}
          onEdit={(id, newImage, newDescription) => updateThumbNail(id, newImage, newDescription)}
        />
        {/* Slide view displaying the number of items and applying styles */}
        <SlideView itemCount={sidebarItems.length} bgColor={bgColor} fontStyle={fontStyle} />
      </div>
    </div>
  );
}
