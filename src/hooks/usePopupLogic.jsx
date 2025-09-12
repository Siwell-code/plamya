import { useState, useCallback, useRef, useEffect } from 'react';

export const usePopupLogic = () => {
  const [firstMenuPosition, setFirstMenuPosition] = useState({ top: 0, left: 0 });
  const hoverTimeoutRef = useRef(null);

  const calculatePopupPosition = useCallback((element) => {
    if (!element) {
      return { top: 0, left: 0 };
    }

    try {
      const rect = element.getBoundingClientRect();
      return {
        top: rect.top + window.scrollY - 110,
        left: rect.right + -10
      };
    } catch (error) {
      console.error('Error calculating position:', error);
      return { top: 0, left: -10 };
    }
  }, []);

  const handlePopupEnter = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  }, []);

  const handlePopupLeave = useCallback((closeAllMenus) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    hoverTimeoutRef.current = setTimeout(() => {
      if (closeAllMenus) {
        closeAllMenus();
      }
    }, 300);
  }, []);

  // Очистка при размонтировании
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  return {
    firstMenuPosition,
    setFirstMenuPosition,
    calculatePopupPosition,
    handlePopupEnter,
    handlePopupLeave
  };
};