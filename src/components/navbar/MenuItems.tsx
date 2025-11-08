import { Link, useLocation } from "react-router-dom";
import { menuItems } from "./menu.config";

const MenuItems = () => {
  const { pathname } = useLocation();

  return (
    <ul className="flex flex-col lg:flex-row lf:items-center gap-2 lg:gap-5 px-4 lg:px-0">
      {menuItems.map((item) => {
        const isActive = pathname === item.path;
        return (
          <li key={item.id}>
            <Link
              to={item.path}
              className={`hover:bg-gray-100 py-2 lg:py:1 lg:hover:bg-transparent flex items-center gap-2 text-base lg:text-base transition-colors ${
                isActive
                  ? "text-[#000FF] font-semibold"
                  : "text-gray-700 hover:text-[#8000FF]"
              }`}
            >
              <p className="lg:hidden">{item.icon}</p> {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MenuItems;
