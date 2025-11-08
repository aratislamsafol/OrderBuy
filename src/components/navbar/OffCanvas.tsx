import { motion, AnimatePresence } from "framer-motion";
import { X, User, CirclePoundSterling } from "lucide-react";
import { useOffCanvasStore } from "../../store/OffCanvasStore";
import SearchInput from "./Search";
import MenuItems from "./MenuItems";
import HelpDropdown from "./HelpDropdown";

const OffCanvas = () => {
  const { isOpen, toggle, close } = useOffCanvasStore();

  return (
    <>
      <button
        onClick={toggle}
        className="cursor-pointer lg:hidden p-2 rounded hover:bg-gray-100 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              onClick={close}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Drawer */}
            <motion.aside
              className="fixed top-0 right-0 h-full w-6/8 sm:w-72 bg-white z-50 shadow-xl p-4 flex flex-col overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 125, damping: 22 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Quick Menu</h2>
                <button
                  onClick={close}
                  className="cursor-pointer text-gray-500 hover:text-gray-800"
                >
                  <X />
                </button>
              </div>

              <div className="flex flex-col gap-3 text-gray-700">
                <MenuItems />
                <button
                  className="cursor-pointer flex items-center gap-3 rounded-lg px-3 py-2 
             transition-colors hover:bg-gray-100 text-gray-700 hover:text-[#8000FF]"
                >
                  <User /> <span>Profile</span>
                </button>
               <HelpDropdown/>
                <div className="cursor-pointer flex items-center justify-between border border-[#8000FF] rounded-lg px-3 py-2">
                  <div className="flex items-center gap-3">
                    <CirclePoundSterling /> <span>Balance</span>
                  </div>
                  <span className="font-semibold text-[#8000FF]">$5971.67</span>
                </div>
                 <div className="mt-1">
                 <SearchInput />
               </div>
              </div>

              <div className="mt-auto pt-20">
                <p className="text-sm text-gray-500 text-center">
                  © 2025 OrderUp
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default OffCanvas;
