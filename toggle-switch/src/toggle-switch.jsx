import React, { useState } from 'react';

export default function ToggleSwitch() {
  const [isActive, setIsActive] = useState(false);

  function handleClick(event) {
    if (isActive) {
      setIsActive(false);
    } else setIsActive(true);
  }

  let classString = 'outer';
  if (isActive) {
    classString = 'outer on';
  }

  return (
    <div className="border">
      <div className={classString}>
        <div className="inner" onClick={handleClick}></div>
      </div>
    </div>
  );

}
