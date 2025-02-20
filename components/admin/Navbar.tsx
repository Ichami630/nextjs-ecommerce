import { AlignJustify } from "lucide-react";

const Navbar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <button className="lg:hidden" onClick={toggleSidebar}>
        <span className="material-icons"><AlignJustify size={20} /></span> {/* Hamburger icon */}
      </button>
      <div className="text-xl font-semibold text-primary">Admin Dashboard</div>
      {/* <div className="flex items-center space-x-4">
        <span className="material-icons">notifications</span>
        <span className="material-icons">account_circle</span>
      </div> */}
    </header>
  );
};

export default Navbar;
