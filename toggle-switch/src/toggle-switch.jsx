import React, { useState } from 'react';

export default function ToggleSwitch() {
  const [isActive, setIsActive] = useState(false);

  function handleClick(event) {
    isActive ? setIsActive(false) : setIsActive(true);
  }

  return (
    <div className="border">
      <div className={`inner-border ${isActive ? 'on' : ''}`}>
        <div className="circle" onClick={handleClick}></div>
      </div>
    </div>
  );
}
