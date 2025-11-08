import { AlarmClock, House, MessageCircleMore, Briefcase  } from "lucide-react";
import type { JSX } from "react";

export const IconMapper:Record<string, JSX.Element> = {
    Home: <House />,
    JobOrder: <Briefcase />,
    Message: <MessageCircleMore />,
    Notification: <AlarmClock />
};