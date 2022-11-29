import React, { useState } from 'react';
import './styles/XY.css';

export default function AppXY() {
  const [position, setPosition] = useState({ x: 0, y: 200 });

  return (
    <div
      className="container"
      onPointerMove={(e) => {
        console.log(e.clientX, e.clientY);
        setPosition((prev) => ({ ...prev, x: e.clientX }));
      }}
    >
      <div
        className="pointer"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      />
    </div>
  );
}
