import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BadgeQuestionMark, ChevronDown } from "lucide-react";
import { useCloseDropDown } from "../../hooks/useCloseDropDown";
import { useMergedRefs } from "../../hooks/useMergeRefs";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";
import clsx from "clsx";

const HelpDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeRef = useCloseDropDown({ customFunction: () => setIsOpen(false) });
  const containerRef = useMergedRefs(dropdownRef, closeRef);
  const { pathname } = useLocation();

  return (
    <>
      {/* ---------- Desktop Version ---------- */}
      <div className="relative hidden lg:block" ref={containerRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer px-3 py-1 text-gray-500 hover:text-[#8000FF] transition-colors"
        >
          <BadgeQuestionMark />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50 overflow-hidden"
            >
              {[
                { label: "Help Center", path: "/help-center" },
                { label: "Release Notes", path: "/release-notes" },
              ].map((item) => {
                const isActive = pathname === item.path;
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-2 transition-colors ${
                        isActive
                          ? "text-[#000FF] font-semibold bg-green-50"
                          : "text-gray-700 hover:bg-green-50 hover:text-[#8000FF]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>

      {/* ---------- Mobile Accordion Version ---------- */}
      <div className="block lg:hidden w-full">
        <Disclosure>
          {({ open }) => (
            <div className="rounded-lg overflow-hidden">
              <DisclosureButton className="cursor-pointer w-full flex items-center justify-between px-4 py-2 text-gray-600 hover:bg-[#F3F4F6] hover:text-[#8000FF] transition-colors data-[state=open]:text-[#8000FF] ">
                <div className="flex items-center gap-2">
                  <BadgeQuestionMark size="20" />
                  <span className={clsx("text-base")}>Help</span>
                </div>
                <motion.div
                  animate={{ rotate: open ? 180 : 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </DisclosureButton>

              <Transition
                show={open}
                enter="transition-all duration-300 ease-out"
                enterFrom="opacity-0 max-h-0"
                enterTo="opacity-100 max-h-40"
                leave="transition-all duration-250 ease-in"
                leaveFrom="opacity-100 max-h-40"
                leaveTo="opacity-0 max-h-0"
              >
                <DisclosurePanel static>
                  <div className="flex flex-col pl-10 pr-3 pb-2 gap-1 text-gray-700">
                    {[
                      { label: "Help Center", path: "/help-center" },
                      { label: "Release Notes", path: "/release-notes" },
                    ].map((item) => {
                      const isActive = pathname === item.path;
                      return (
                        <motion.div
                          key={item.path}
                          whileTap={{
                            scale: 0.98,
                            backgroundColor: "rgba(132,0,255,0.08)",
                          }}
                          transition={{ duration: 0.15 }}
                          className={`rounded-md overflow-hidden`}
                        >
                          <Link
                            to={item.path}
                            className={`block px-2 py-2 transition-colors ${
                              isActive
                                ? "bg-green-50 text-[#000FF] font-semibold"
                                : "text-gray-700 hover:bg-green-50 hover:text-[#8000FF]"
                            }`}
                          >
                            {item.label}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </DisclosurePanel>
              </Transition>
            </div>
          )}
        </Disclosure>
      </div>
    </>
  );
};

export default HelpDropdown;
