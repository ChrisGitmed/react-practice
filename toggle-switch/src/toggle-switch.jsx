import React, { useState } from 'react';

export default function ToggleSwitch(props) {
  const [isActive, setIsActive] = useState(false);

  function handleClick(event) {
    props.onChange(!isActive);
    isActive ? setIsActive(false) : setIsActive(true);
  }

  return (
    <div className="border">
      <div className={`inner-border ${isActive ? 'on' : 'off'}`}>
        <div className="circle" onClick={handleClick}></div>
      </div>
    </div>
  );
}
