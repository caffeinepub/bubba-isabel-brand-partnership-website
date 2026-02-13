import { useState, useEffect } from 'react';

export type TabId = 'home' | 'about' | 'media-kit' | 'pricing' | 'contact' | 'portfolio';

const ALLOWED_TABS: TabId[] = ['home', 'about', 'media-kit', 'pricing', 'contact', 'portfolio'];

export function useTabNavigation() {
  const getInitialTab = (): TabId => {
    const hash = window.location.hash.slice(1) as TabId;
    return ALLOWED_TABS.includes(hash) ? hash : 'home';
  };

  const [activeTab, setActiveTab] = useState<TabId>(getInitialTab);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) as TabId;
      if (ALLOWED_TABS.includes(hash)) {
        setActiveTab(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToTab = (tab: TabId) => {
    window.location.hash = tab;
    setActiveTab(tab);
  };

  return {
    activeTab,
    navigateToTab,
    allowedTabs: ALLOWED_TABS,
  };
}
