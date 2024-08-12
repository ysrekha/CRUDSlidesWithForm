/*
At this point, your project must meets these new requirements:

A user can create new items (the new items will all have the same data)
A user can delete items
A user can update at least one property on the items


As well as the requirements from last week:

It has at least 3 React components
It’s displaying the test data
It’s using at least 1 prop

*/


import { useState } from 'react';
import Sidebar from './Sidebar';
import SlideView from './SlideView';
import Toolsbar from './ToolsBar';
import thumbnailImage from './assets/Flower.png';
import LavenderImage from './assets/Lavender.png';
import Roses from './assets/Roses.png';
import Peace from './assets/Peace.png';
import Birthday from './assets/BirthdayFlowers.png';
import MDayFlowers from './assets/Mother\'s Day Flowers.png';
import { Button } from 'react-bootstrap';

export default function App() {
  // Type definition for sidebar items
  type SidebarItem = {
    id: number;
    order: number;
    image: string;
  };

  // State to hold the list of sidebar items with their IDs, orders, and images
  const [sidebarItems, setSidebarItems] = useState<SidebarItem[]>([
    { id: 1, order: 1, image: thumbnailImage },
    { id: 2, order: 2, image: Birthday },
    { id: 3, order: 3, image: LavenderImage },
  ]);

  // State to store the current background color
  const [bgColor, setBgColor] = useState<string>('#ffffff'); // Default to white

  // State to track the next ID and order for new sidebar items
  const [nextId, setNextId] = useState<number>(4);
  const [nextOrder, setNextOrder] = useState<number>(4);

  // New image to use for updates
  const newImage = MDayFlowers;

  // Function to add a new thumbnail to the sidebar
  const addThumbNail = (image: string) => {
    const newItem: SidebarItem = {
      id: nextId, // Use the current nextId for the new item
      order: nextOrder, // Use the current nextOrder for the new item
      image: image, // Pass the image provided as an argument
    };
    // Update the sidebar items with the new item and increment the counters
    setSidebarItems([...sidebarItems, newItem]);
    setNextId(nextId + 1); // Increment the nextId for future additions
    setNextOrder(nextOrder + 1); // Increment the nextOrder for future additions
  };

  // Function to delete a thumbnail from the sidebar
  const deleteThumbNail = (deleteNailId: number) => {
    // Filter out the item with the specified ID
    setSidebarItems(sidebarItems.filter((item) => item.id !== deleteNailId));
  };

  // Function to update the image and ID of a thumbnail
  const updateThumbNail = (updateNailId: number) => {
    const updatedItems = sidebarItems.map(item => {
      if (item.id === updateNailId) {
        // Update the item's image and synchronize the order with the ID
        return {
          ...item,
          image: newImage,
          order: nextOrder,
          id: nextOrder // Synchronize ID with order
        };
      }
      return item; // Return items unchanged if ID does not match
    });
    // Update the sidebar items and increment the nextOrder for future updates
    setSidebarItems(updatedItems);
    setNextOrder(nextOrder + 1); // Increment the nextOrder for future updates
  };
  
  return (
    <div className="d-flex flex-column vh-100 vw-100">
      {/* Render the tools bar and pass a function to update the background color */}
      <Toolsbar onChangeBgColor={(color) => setBgColor(color)} />
      
      <div className="d-flex flex-column flex-grow-0">
        {/* Buttons to add specific thumbnails to the sidebar */}
        <Button className="mt-3" onClick={() => addThumbNail(Roses)}>
          Add Roses for Love
        </Button>
        <Button className="mt-3" onClick={() => addThumbNail(Peace)}>
          Add White Flowers for Peace
        </Button>
      </div>
      
      <div className="d-flex flex-grow-1">
        {/* Render the sidebar with options to delete or update items */}
        <Sidebar sideItems={sidebarItems} onDelete={deleteThumbNail} onEdit={updateThumbNail} />
        {/* Render the slide view with the current number of items and background color */}
        <SlideView itemCount={sidebarItems.length} bgColor={bgColor} />
      </div>
    </div>
  );
}
