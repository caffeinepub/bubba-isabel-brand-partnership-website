import { X, Maximize2 } from 'lucide-react';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface PortfolioVideoOverlayProps {
  embedUrl: string;
  onClose: () => void;
  description?: string;
}

export function PortfolioVideoOverlay({ embedUrl, onClose, description }: PortfolioVideoOverlayProps) {
  // Lock scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with close button */}
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <Maximize2 className="w-5 h-5" />
            <span className="text-sm font-medium">Video Player</span>
          </div>
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Video container */}
        <div className="relative w-full bg-black rounded-lg overflow-hidden shadow-2xl">
          <div className="aspect-[9/16] md:aspect-video">
            <iframe
              src={embedUrl}
              className="w-full h-full"
              title="Video player"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
        </div>

        {/* Description */}
        {description && (
          <p className="text-white/80 text-sm text-center px-4">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
