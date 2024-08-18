import SlideThumbnail from './SlideThumbnail';

// Define the type for a single item in the sidebar
interface SidebarItem {
  id: number;       // Unique identifier for the sidebar item
  order: number;    // Order in which the item appears
  image: string;    // URL or path to the image for the item
  description: string;  // Description of the item
}

// Define the props expected by the Sidebar component
interface SidebarProps {
  sideItems: SidebarItem[];          // Array of sidebar items to be displayed
  onDelete: (id: number) => void;     // Callback function to handle deletion of an item
  onEdit: (id: number, newImage: string, newDescription: string) => void; // Callback function to handle editing the image and description of an item
}

// Define the Sidebar component
export default function Sidebar({ sideItems, onDelete, onEdit }: SidebarProps) {
  return (
    <div className="border-end bg-light p-3 d-flex flex-column vh-100 overflow-auto">
      {/* Map over the array of sidebar items and render a SlideThumbnail for each */}
      {sideItems.map((s) => (
        <SlideThumbnail
          key={s.id}                    // Unique key for each SlideThumbnail component
          slide={s}                     // Pass the entire sidebar item as props
          onDelete={onDelete}           // Pass the onDelete callback function
          onEdit={onEdit}               // Pass the onEdit callback function
        />
      ))}
    </div>
  );
}
