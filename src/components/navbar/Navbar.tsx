import logo from "../../assets/orderup_logo.png";
import MenuItems from "./MenuItems";
import SearchInput from "./Search";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm p-2 md:p-3">
      <nav className="flex items-center justify-between">
        {/* left side */}
        <div className="flex items-center gap-4">
            <div>
                <img src={logo} className="w-28 contain-content" alt="company logo" />
            </div>
            <MenuItems/>
        </div>
        {/* right side */}
        <div className="">
            <SearchInput/>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
