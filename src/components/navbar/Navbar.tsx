import logo from "../../assets/orderup_logo.png";
import HelpDropdown from "./HelpDropdown";
import MenuItems from "./MenuItems";
import SearchInput from "./Search";
import UserProfileDropdown from "../common/UserProfileDropdown";
import OffCanvas from "./OffCanvas";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-gray-200 shadow-sm p-2 md:p-3">
      <nav className="flex items-center justify-between">
        {/* left side */}
        <div className="flex items-center gap-4">
            <div>
                <img src={logo} className="w-25 md:w-28 contain-content" alt="company logo" />
            </div>
            <div className="hidden lg:flex">
                <MenuItems/>
            </div>
        </div>
        {/* right side */}
        <div className="hidden lg:flex gap-2 items-center">
            <SearchInput/>
            <HelpDropdown/>
            <UserProfileDropdown/>
        </div>
        {/* mobile bar offCanvas */}
        <div className="lg:hidden">
          <OffCanvas />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
