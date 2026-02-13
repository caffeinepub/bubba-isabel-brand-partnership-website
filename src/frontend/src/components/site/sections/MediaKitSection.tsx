import { SectionShell } from './SectionShell';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Instagram, MapPin } from 'lucide-react';
import { siteContent } from '@/content/siteContent';

export function MediaKitSection() {
  const { handle, type, quickStats, demographics, platforms, servicesSummary, noteworthyProjects, contact } =
    siteContent.mediaKit;

  return (
    <SectionShell id="media-kit" title="Media Kit" subtitle="Professional stats and audience insights">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header Info */}
        <div className="text-center space-y-2">
          <p className="text-2xl font-semibold text-sage-dark">{handle}</p>
          <p className="text-lg text-muted-foreground">{type}</p>
        </div>

        {/* Quick Stats */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-sage-dark">{quickStats.followers}</p>
                <p className="text-sm text-muted-foreground mt-1">Followers</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-sage-dark">{quickStats.engagementRate}</p>
                <p className="text-sm text-muted-foreground mt-1">Engagement Rate</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-sage-dark">{quickStats.currentReach}</p>
                <p className="text-sm text-muted-foreground mt-1">Current Reach</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Audience Demographics */}
        <Card>
          <CardHeader>
            <CardTitle>Audience Demographics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">{demographics.women}</p>
                <p className="text-sm text-muted-foreground mt-1">Women</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">{demographics.unitedStates}</p>
                <p className="text-sm text-muted-foreground mt-1">United States</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">{demographics.age25to34}</p>
                <p className="text-sm text-muted-foreground mt-1">Aged 25–34</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">{demographics.petsAndLifestyle}</p>
                <p className="text-sm text-muted-foreground mt-1">Pets & Lifestyle</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Platforms & Services */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Platforms</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {platforms.map((platform) => (
                  <li key={platform} className="text-foreground">
                    • {platform}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Services & Rates</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{servicesSummary}</p>
            </CardContent>
          </Card>
        </div>

        {/* Noteworthy Projects */}
        <Card>
          <CardHeader>
            <CardTitle>Noteworthy Projects / Past Collaborations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {noteworthyProjects.map((project) => (
                <div key={project} className="p-3 rounded-md bg-muted/50 text-center text-sm font-medium">
                  {project}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <Card>
          <CardHeader>
            <CardTitle>Contact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 text-foreground hover:text-sage-dark transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{contact.email}</span>
              </a>
              <a
                href="https://instagram.com/bubbas.big.adventure"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-sage-dark transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>{contact.instagram}</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span>{contact.location}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionShell>
  );
}
