import { useState } from 'react';
import { Maximize2, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { extractDriveFileId, getDriveEmbedUrl } from '@/utils/googleDrive';

interface DriveVideoEmbedProps {
  url: string;
  onExpandClick?: () => void;
}

export function DriveVideoEmbed({ url, onExpandClick }: DriveVideoEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  
  const fileId = extractDriveFileId(url);
  const embedUrl = getDriveEmbedUrl(fileId);

  const handleIframeLoad = () => {
    setIsLoaded(true);
  };

  const handleIframeError = () => {
    setHasError(true);
  };

  return (
    <div className="relative w-full h-full bg-muted group">
      {/* Inline iframe embed */}
      <iframe
        src={embedUrl}
        className="absolute inset-0 w-full h-full"
        title="Video preview"
        allow="autoplay; fullscreen"
        allowFullScreen
        onLoad={handleIframeLoad}
        onError={handleIframeError}
      />
      
      {/* Loading state */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center animate-pulse">
              <Play className="w-6 h-6 text-sage-dark" />
            </div>
            <p className="text-xs text-muted-foreground">Loading video...</p>
          </div>
        </div>
      )}

      {/* Expand button overlay (appears on hover) */}
      {isLoaded && onExpandClick && (
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            onClick={onExpandClick}
            variant="secondary"
            size="icon"
            className="h-8 w-8 shadow-lg"
          >
            <Maximize2 className="w-4 h-4" />
          </Button>
        </div>
      )}

      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted p-6">
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center">
              <Play className="w-6 h-6 text-destructive" />
            </div>
            <p className="text-xs text-muted-foreground">
              Unable to load video preview
            </p>
            {onExpandClick && (
              <Button
                onClick={onExpandClick}
                variant="outline"
                size="sm"
                className="gap-2"
              >
                <Maximize2 className="w-4 h-4" />
                Try Full Screen
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
