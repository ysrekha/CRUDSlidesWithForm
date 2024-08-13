// import { useState } from 'react';
// import Sidebar from './Sidebar';
// import SlideView from './SlideView';
// import Toolbar from './ToolBar';
// import MyModal from './MyModal'; // Import the modal component
// import BDayFlowers from './assets/BirthdayFlowers.png'
// import Lavender from './assets/Lavender.png'
// import Peace from './assets/Peace.png'
// // import mdayflowers from './assets/Mother's Day Flowers.png'

import { useState } from 'react';
import Sidebar from './Sidebar';
import SlideView from './SlideView';
import Toolbar from './ToolBar';
import MyModal from './MyModal';
import BDayFlowers from './assets/BirthdayFlowers.png';
import Lavender from './assets/Lavender.png';
import Peace from './assets/Peace.png';

export default function App() {
  type SidebarItem = {
    id: number;
    order: number;
    image: string;
  };

  const [sidebarItems, setSidebarItems] = useState<SidebarItem[]>([
    { id: 1, order: 1, image: BDayFlowers },
    { id: 2, order: 2, image: Lavender },
    { id: 3, order: 3, image: Peace },
  ]);

  const [bgColor, setBgColor] = useState<string>('#ffffff');
  const [nextId, setNextId] = useState<number>(4);
  const [nextOrder, setNextOrder] = useState<number>(4);

  const addThumbNail = (image: string) => {
    const newItem: SidebarItem = {
      id: nextId,
      order: nextOrder,
      image,
    };
    setSidebarItems(prevItems => [...prevItems, newItem]);
    setNextId(prevId => prevId + 1);
    setNextOrder(prevOrder => prevOrder + 1);
  };

  const deleteThumbNail = (deleteNailId: number) => {
    setSidebarItems(prevItems => prevItems.filter(item => item.id !== deleteNailId));
  };

  const updateThumbNail = (updateNailId: number, newImage: string) => {
    setSidebarItems(prevItems =>
      prevItems.map(item =>
        item.id === updateNailId
          ? { ...item, image: newImage, order: nextOrder }
          : item
      )
    );
    setNextOrder(prevOrder => prevOrder + 1);
  };

  const handleSave = (values: { image: string }) => {
    addThumbNail(values.image);
  };

  const handleCancel = () => {
    // Handle cancel action here if needed
  };

  return (
    <div className="d-flex flex-column vh-100 vw-100">
      <Toolbar onChangeBgColor={setBgColor} />

      <div className="d-flex flex-column flex-grow-0">
        <MyModal onSave={handleSave} onCancel={handleCancel} />
      </div>

      <div className="d-flex flex-grow-1">
        <Sidebar
          sideItems={sidebarItems}
          onDelete={deleteThumbNail}
          onEdit={(id) => updateThumbNail(id, "src/assets/Mother's Day Flowers.png")}
        />
        <SlideView itemCount={sidebarItems.length} bgColor={bgColor} />
      </div>
    </div>
  );
}
