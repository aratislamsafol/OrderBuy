import { House, Briefcase, MessageSquare, Bell } from "lucide-react";

export const menuItems = [
  { id: 1, label: "Home", path: "/", icon: <House size="20"/> },
  { id: 2, label: "Job Order", path: "/jobOrder", icon: <Briefcase size="20"/> },
  { id: 3, label: "Message", path: "/message", icon: <MessageSquare size="20"/> },
  { id: 4, label: "Notification", path: "/notification", icon: <Bell size="20"/> },
];
