
import SlideThumbnail from './SlideThumbnail';

type SidebarProps = {
  sideItems: { // Array of sidebar items
    id: number;
    order: number;
    image: string;
  }[];
  onDelete: (id: number) => void; // Function to call when an item needs to be deleted
  onEdit: (id: number) => void;   // Function to call when an item needs to be edited
};

export default function Sidebar({ sideItems, onDelete, onEdit }: SidebarProps) {
  return (
    <div className="border-end bg-light p-3 d-flex flex-column vh-100 overflow-auto">
      {sideItems.map((s) => (
        <SlideThumbnail
          key={s.id}
          slide={s}
          onDelete={onDelete}
          onEdit={() => onEdit(s.id)} // Pass only the id here
        />
      ))}
    </div>
  );
}
