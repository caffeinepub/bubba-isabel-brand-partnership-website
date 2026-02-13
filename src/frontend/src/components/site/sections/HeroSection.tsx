import { Button } from '@/components/ui/button';
import { siteContent } from '@/content/siteContent';
import { useTabNavigation } from '@/hooks/useTabNavigation';

export function HeroSection() {
  const { headline, subhead, supportingLine } = siteContent.hero;
  const { navigateToTab } = useTabNavigation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background - Placeholder gradient until image is provided */}
      <div className="absolute inset-0 bg-gradient-to-br from-sage-light via-tan-light to-background -z-10" />
      
      {/* Content */}
      <div className="container mx-auto px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
            {headline}
          </h1>
          <p className="text-xl md:text-2xl text-sage-dark font-medium mb-4">
            {subhead}
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            {supportingLine}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => navigateToTab('media-kit')}
              className="text-base px-8"
            >
              View Media Kit
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigateToTab('contact')}
              className="text-base px-8"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
