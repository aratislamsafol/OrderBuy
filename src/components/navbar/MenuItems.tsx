import { Link, useLocation } from "react-router-dom";
import { menuItems } from "./menu.config";

const MenuItems = () => {
  const { pathname } = useLocation();

  return (
    <ul className="flex items-center gap-5">
      {menuItems.map((item) => {
        const isActive = pathname === item.path;
        return (
          <li key={item.id}>
            <Link
              to={item.path}
              className={`flex items-center gap-1 py-1 text-sm md:text-base transition-colors ${
                isActive
                  ? "text-[#000FF] font-semibold"
                  : "text-gray-700 hover:text-[#8000FF]"
              }`}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MenuItems;
