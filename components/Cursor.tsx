"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function Cursor() {
  const cursorDot = useRef<HTMLDivElement>(null);
  const cursorOutline = useRef<HTMLDivElement>(null);
  
  // Using refs to prevent re-renders on every mouse move
  const mouse = useRef({ x: 0, y: 0 });
  const previousMouse = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = {
        x: e.clientX,
        y: e.clientY
      };
      
      // Instantly move the inner dot for perfect 1:1 precision
      if (cursorDot.current) {
        cursorDot.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      // Find closest interactive element
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [role="button"], input, textarea, select');
      
      if (interactive) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    const handleMouseLeaveWindow = () => setIsVisible(false);
    const handleMouseEnterWindow = () => setIsVisible(true);

    // Animation Loop for the trailing outline using linear interpolation (lerp)
    let animationFrameId: number;
    
    const render = () => {
      // Significantly increased lerp for snappier performance (0.4 instead of 0.15)
      previousMouse.current.x += (mouse.current.x - previousMouse.current.x) * 0.4;
      previousMouse.current.y += (mouse.current.y - previousMouse.current.y) * 0.4;
      
      if (cursorOutline.current) {
        cursorOutline.current.style.transform = `translate3d(${previousMouse.current.x}px, ${previousMouse.current.y}px, 0) translate(-50%, -50%)`;
      }
      
      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.addEventListener("mouseenter", handleMouseEnterWindow);
    
    // Start loop
    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);
      cancelAnimationFrame(animationFrameId);
    };
  }, [pathname]); // Re-attach when pathname changes just to be safe

  if (!isVisible) return null;

  return (
    <>
      {/* Precision Dot - Viewport Fixed */}
      <div 
        ref={cursorDot}
        className="pointer-events-none fixed top-0 left-0 w-2 h-2 bg-white rounded-full z-[10000] hidden lg:block mix-blend-difference"
        style={{ willChange: 'transform' }}
      ></div>
      
      {/* Trailing Outline - Viewport Fixed */}
      <div 
        ref={cursorOutline}
        className={`pointer-events-none fixed top-0 left-0 rounded-full border border-white z-[9999] hidden lg:block mix-blend-difference transition-[width,height,background-color,border-color,opacity] duration-150 ${
          isHovering 
            ? 'w-16 h-16 bg-white/[0.1] border-transparent' 
            : 'w-8 h-8 bg-transparent'
        }`}
        style={{ willChange: 'transform' }}
      ></div>
    </>
  );
}
