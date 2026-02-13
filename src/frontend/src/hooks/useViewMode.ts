import { useState, useEffect } from 'react';

export type ViewMode = 'auto' | 'mobile' | 'desktop';

const VIEW_MODE_KEY = 'site-view-mode';

export function useViewMode() {
  const getInitialMode = (): ViewMode => {
    const stored = localStorage.getItem(VIEW_MODE_KEY);
    return (stored === 'mobile' || stored === 'desktop' || stored === 'auto') ? stored : 'auto';
  };

  const [viewMode, setViewMode] = useState<ViewMode>(getInitialMode);

  useEffect(() => {
    localStorage.setItem(VIEW_MODE_KEY, viewMode);
    
    // Apply view mode to document root for CSS targeting
    document.documentElement.setAttribute('data-view-mode', viewMode);
  }, [viewMode]);

  return {
    viewMode,
    setViewMode,
  };
}
