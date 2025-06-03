
import React, { useEffect, useState } from 'react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  timestamp: number;
}

const CursorSparkle = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    let sparkleId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const newSparkle: Sparkle = {
        id: sparkleId++,
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now()
      };

      setSparkles(prev => [...prev, newSparkle]);

      // Remove sparkles after 1 second
      setTimeout(() => {
        setSparkles(prev => prev.filter(sparkle => sparkle.id !== newSparkle.id));
      }, 1000);
    };

    // Throttle the mouse move event
    let throttleTimer: NodeJS.Timeout | null = null;
    const throttledMouseMove = (e: MouseEvent) => {
      if (throttleTimer === null) {
        throttleTimer = setTimeout(() => {
          handleMouseMove(e);
          throttleTimer = null;
        }, 50);
      }
    };

    document.addEventListener('mousemove', throttledMouseMove);

    return () => {
      document.removeEventListener('mousemove', throttledMouseMove);
      if (throttleTimer) clearTimeout(throttleTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute w-2 h-2 bg-orange-400 rounded-full animate-ping"
          style={{
            left: sparkle.x - 4,
            top: sparkle.y - 4,
            animationDuration: '1s',
            animationFillMode: 'forwards'
          }}
        >
          <div className="absolute inset-0 bg-orange-500 rounded-full animate-pulse" />
        </div>
      ))}
    </div>
  );
};

export default CursorSparkle;
