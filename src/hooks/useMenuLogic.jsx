import { useState, useRef, useCallback } from 'react';

export const useMenuLogic = () => {
  const [selectedPath, setSelectedPath] = useState([]);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);

  const closeAllMenus = useCallback(() => {
    setSelectedPath([]);
    setMobileSubmenu(null);
  }, []);

  return {
    selectedPath,
    setSelectedPath,
    mobileSubmenu,
    setMobileSubmenu,
    closeAllMenus
  };
};