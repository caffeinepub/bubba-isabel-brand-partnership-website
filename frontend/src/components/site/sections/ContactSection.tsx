import { SectionShell } from './SectionShell';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Instagram, MapPin } from 'lucide-react';
import { siteContent } from '@/content/siteContent';

export function ContactSection() {
  const { cta, email, instagram, instagramUrl, location } = siteContent.contact;

  return (
    <SectionShell id="contact" title={cta} subtitle="Ready to create authentic content together?">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardContent className="p-8 space-y-6">
            <div className="text-center space-y-4">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <a href={`mailto:${email}`}>
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </a>
              </Button>
            </div>

            <div className="space-y-4 pt-4">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 text-foreground hover:text-sage-dark transition-colors justify-center"
              >
                <Mail className="w-5 h-5" />
                <span className="text-lg">{email}</span>
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-sage-dark transition-colors justify-center"
              >
                <Instagram className="w-5 h-5" />
                <span className="text-lg">{instagram}</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground justify-center">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">{location}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionShell>
  );
}
