import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { DriveVideoEmbed } from './DriveVideoEmbed';
import { PortfolioVideoOverlay } from './PortfolioVideoOverlay';
import { extractDriveFileId, getDriveEmbedUrl } from '@/utils/googleDrive';

interface PortfolioItem {
  type: 'video' | 'image';
  url: string;
  description: string;
}

interface PortfolioItemCardProps {
  item: PortfolioItem;
}

export function PortfolioItemCard({ item }: PortfolioItemCardProps) {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleExpandClick = () => {
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

  const fileId = item.type === 'video' ? extractDriveFileId(item.url) : '';
  const embedUrl = item.type === 'video' ? getDriveEmbedUrl(fileId) : '';

  return (
    <>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <CardContent className="p-0">
          <div className="aspect-[9/16] bg-muted relative">
            {item.type === 'video' && (
              <DriveVideoEmbed 
                url={item.url} 
                onExpandClick={handleExpandClick}
              />
            )}
          </div>
          <div className="p-4">
            <p className="text-sm text-muted-foreground text-center">{item.description}</p>
          </div>
        </CardContent>
      </Card>

      {/* Overlay for expanded video view */}
      {showOverlay && item.type === 'video' && (
        <PortfolioVideoOverlay
          embedUrl={embedUrl}
          onClose={handleCloseOverlay}
          description={item.description}
        />
      )}
    </>
  );
}
