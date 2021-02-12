import React, { useState } from 'react';

export default function ToggleSwitch() {
  const [isActive, setIsActive] = useState(false);

  function handleClick(event) {
    isActive ? setIsActive(false) : setIsActive(true);
  }

  let classString = 'inner-border';
  if (isActive) {
    classString = 'inner-border on';
  }

  return (
    <div className="border">
      <div className={classString}>
        <div className="circle" onClick={handleClick}></div>
      </div>
    </div>
  );

}
