import { Button } from "@headlessui/react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import profileImg from "../../../public/userImage.jpg";
import {
  User,
  MessageSquare,
  ClipboardList,
  HelpCircle,
  CreditCard,
  Settings,
  Lock,
  LogOut,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCloseDropDown } from "../../hooks/useCloseDropDown";
// import useAuthStore from '../../store/useAuthStore';

const dropVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
    rotateX: -30,
    transformOrigin: "top center",
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
      mass: 0.8,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    rotateX: -20,
    transition: { duration: 0.25 },
  },
};

const UserProfileDropdown = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const containerRef = useCloseDropDown({ customFunction: () => setProfileOpen(false) });
  // const logout = useAuthStore(state=>state.logout);
  // Click outside handler

  return (
    // when path is dashboard used md:bg-gray-100 p-2 px-3
    <div className="h-full relative" ref={containerRef}>
      {/* when path is dashboard used  flex gap-2 items-center  */}
      <Button
        className="cursor-pointer"
        onClick={() => setProfileOpen(!profileOpen)}
      >
        <img
          src={profileImg}
          className="w-10 rounded-full"
          alt="profile Image"
        />
        {/* when using dashboard */}
        {/* <div className="md:flex flex-col items-center hidden">
          <p>User Name</p>
          <p className="text-sm">Position</p>
        </div> */}
      </Button>
      <div className="absolute right-0 top-full mt-1 z-50 origin-top">
        <AnimatePresence>
          {profileOpen && (
            <motion.div
              variants={dropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-48 bg-white text-sm border border-gray-200 shadow-xl rounded-xl p-1 origin-top"
            >
              <p className="px-3 py-2 text-gray-500 text-sm font-medium">
                Welcome{" "}
                <span className="text-gray-800 font-semibold">Anna!</span>
              </p>

              <Link
                to="profile/show"
                className="w-full flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-gray-100 text-gray-700"
              >
                <User size={16} /> Profile
              </Link>
              <button className="w-full flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-gray-100 text-gray-700">
                <MessageSquare size={16} /> Messages
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-gray-100 text-gray-700">
                <ClipboardList size={16} /> Taskboard
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-gray-100 text-gray-700">
                <HelpCircle size={16} /> Help
              </button>

              <hr className="my-2" />

              <div className="w-full flex items-center justify-between px-3 py-1 text-gray-700">
                <div className="flex items-center gap-2 cursor-pointer">
                  <CreditCard size={16} /> <span>Balance:</span>
                </div>
                <span className="font-semibold">$5971.67</span>
              </div>

              <button className="w-full flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-gray-100 text-gray-700">
                <Settings size={16} /> Settings
                <span className="ml-auto text-xs bg-green-100 text-green-600 font-semibold px-2 py-0.5 rounded-full">
                  New
                </span>
              </button>

              <button className="w-full flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-gray-100 text-gray-700">
                <Lock size={16} /> Lock screen
              </button>

              <hr className="my-2" />
              {/* onClick={logout} */}
              <button className="w-full flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-gray-100 text-red-500">
                <LogOut size={16} /> Logout
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default UserProfileDropdown;
