import SlideThumbnail from './SlideThumbnail';

// Define the type for the props expected by the Sidebar component
type SidebarProps = {
  sideItems: { // Array of sidebar items
    id: number; // Unique identifier for each item
    order: number; // Order of the item in the list
    image: string; // URL or path to the image associated with the item
  }[];
  onDelete: (id: number) => void; // Function to call when an item needs to be deleted, expects the item's ID
  onEdit: (id: number) => void; // Function to call when an item needs to be edited, expects the item's ID
};

// Define the Sidebar component
export default function Sidebar({ sideItems, onDelete, onEdit }: SidebarProps) {
  return (
    <div className="border-end bg-light p-3 d-flex flex-column vh-100 overflow-auto">
      {/* Map through the sidebar items and render a SlideThumbnail for each */}
      {sideItems.map((s) => (
        <SlideThumbnail
          key={s.id} // Use the item's ID as the key for React's reconciliation
          slide={s} // Pass the entire sidebar item to SlideThumbnail
          onDelete={onDelete} // Pass the onDelete function as a prop
          onEdit={() => onEdit(s.id)} // Call the onEdit function with the item's ID when edit action is triggered
        />
      ))}
    </div>
  );
}
