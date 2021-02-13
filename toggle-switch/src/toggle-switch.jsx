import React, { useState } from 'react';

export default function ToggleSwitch(props) {
  const [isActive, setIsActive] = useState(false);

  function handleClick(event) {
    isActive ? setIsActive(false) : setIsActive(true);
    // props.onChange(isActive);
  }

  return (
    <div className="border">
      <div className={`inner-border ${isActive ? 'on' : 'off'}`}>
        <div className="circle" onClick={handleClick}></div>
      </div>
    </div>
  );
}
