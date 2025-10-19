import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"], .hoverable');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    document.addEventListener('mousemove', updatePosition);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50 transition-all duration-100 ease-out"
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className={`w-4 h-4 rounded-full transition-all duration-200 ${
          isHovering
            ? 'bg-primary/60 scale-150 blur-sm'
            : 'bg-primary/40 scale-100'
        }`}
      />
      <div
        className={`absolute inset-0 rounded-full transition-all duration-300 ${
          isHovering
            ? 'bg-primary/20 scale-300 blur-md'
            : 'bg-primary/10 scale-200 blur-sm'
        }`}
      />
    </div>
  );
}


