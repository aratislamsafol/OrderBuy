import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BadgeQuestionMark } from 'lucide-react';
import { useCloseDropDown } from "../../hooks/useCloseDropDown";
import { useMergedRefs } from "../../hooks/useMergeRefs";

const HelpDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeRef = useCloseDropDown({ customFunction: () => setIsOpen(false) });
  const containerRef = useMergedRefs(dropdownRef, closeRef);

  return (
    <div className="relative" ref={containerRef}>
      {/* Dropdown toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" cursor-pointer px-3 py-1 text-gray-500 hover:text-[#8000FF]  transition-colors"
      >
       <BadgeQuestionMark /> 
      </button>

      {/* Dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50 overflow-hidden"
          >
            <li>
              <Link
                to="/help-center"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-[#8000FF] transition-colors"
              >
                Help Center
              </Link>
            </li>
            <li>
              <Link
                to="/release-notes"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-[#8000FF] transition-colors"
              >
                Release Notes
              </Link>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HelpDropdown;
