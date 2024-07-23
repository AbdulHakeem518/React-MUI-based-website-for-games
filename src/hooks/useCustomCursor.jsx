import { useEffect, useRef } from "react";
import "../styles/cursor.css";

const useCustomCursor = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    const cursor = document.createElement("div");
    cursor.classList.add("blob");
    element.appendChild(cursor);

    const handleMouseMove = (e) => {
      cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
    };

    const handleMouseEnter = () => {
      cursor.style.position = "none";
      cursor.style.display = "none";
    };

    const handleMouseLeave = () => {
      cursor.style.position = "fixed";
      cursor.style.display = "block";
    };

    element.addEventListener("mousemove", handleMouseMove);

    const hiddenElements = document.querySelectorAll(".hide-blob");
    hiddenElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeChild(cursor);

      hiddenElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return elementRef;
};

export default useCustomCursor;
