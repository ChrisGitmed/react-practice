import React, { useState } from 'react';
import ToggleSwitch from './toggle-switch';

export default function PageContainer() {
  const [darkMode, setDarkMode] = useState(false);

  function handleChange(change) {
    setDarkMode(change);
  }

  return (
    <div className={`page-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <ToggleSwitch onChange={handleChange}/>
    </div>
  );
}
