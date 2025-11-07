import { useEffect, useRef } from "react";

export const useCloseDropDown = ({customFunction}:{customFunction: () => void }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(()=> {
        const handleClickOutside = (event: MouseEvent) => {
            if(containerRef.current && !containerRef.current.contains(event.target as Node)) {
                customFunction();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        };
    },[customFunction]);
    return containerRef;
}