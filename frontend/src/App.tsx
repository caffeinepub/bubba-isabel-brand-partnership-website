import { SiteNav } from './components/site/SiteNav';
import { HeroSection } from './components/site/sections/HeroSection';
import { PortfolioSection } from './components/site/sections/PortfolioSection';
import { AboutSection } from './components/site/sections/AboutSection';
import { MediaKitSection } from './components/site/sections/MediaKitSection';
import { PricingSection } from './components/site/sections/PricingSection';
import { ContactSection } from './components/site/sections/ContactSection';
import { Footer } from './components/site/Footer';
import { useTabNavigation, TabId } from './hooks/useTabNavigation';
import { useViewMode } from './hooks/useViewMode';

function App() {
  const { activeTab } = useTabNavigation();
  const { viewMode } = useViewMode();

  const renderSection = (tabId: TabId) => {
    switch (tabId) {
      case 'home':
        return <HeroSection />;
      case 'about':
        return <AboutSection />;
      case 'media-kit':
        return <MediaKitSection />;
      case 'pricing':
        return <PricingSection />;
      case 'contact':
        return <ContactSection />;
      case 'portfolio':
        return <PortfolioSection />;
      default:
        return <HeroSection />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <div className={`view-mode-wrapper ${viewMode !== 'auto' ? `view-mode-${viewMode}` : ''}`}>
        <main className="pt-20">
          {renderSection(activeTab)}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
