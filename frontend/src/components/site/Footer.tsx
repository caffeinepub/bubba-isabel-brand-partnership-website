import { SiFacebook, SiInstagram } from 'react-icons/si';
import { Heart } from 'lucide-react';

// Exact Facebook share URL - do not modify
const FACEBOOK_SHARE_URL = 'https://www.facebook.com/share/1AndNU7trz/?mibextid=wwXIfr';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' ? window.location.hostname : 'bubba-isabel';

  return (
    <footer className="bg-muted/30 border-t py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-foreground mb-2">Bubbas.big.adventure</p>
            <p className="text-sm text-muted-foreground">Professional Pet Content & Brand Partnerships</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/bubbas.big.adventure"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-sage-dark transition-colors"
              aria-label="Instagram"
            >
              <SiInstagram className="w-6 h-6" />
            </a>
            <a
              href={FACEBOOK_SHARE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-sage-dark transition-colors"
              aria-label="Facebook"
            >
              <SiFacebook className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
            <span>© {currentYear} Bubbas.big.adventure. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-sage fill-sage" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(appIdentifier)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage-dark hover:underline font-medium"
              >
                caffeine.ai
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
