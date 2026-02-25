import { SectionShell } from './SectionShell';
import { Card, CardContent } from '@/components/ui/card';
import { siteContent } from '@/content/siteContent';

export function AboutSection() {
  const { paragraphs, collaborations } = siteContent.about;

  return (
    <SectionShell
      id="about"
      title="About Us"
      subtitle="Creating authentic pet content that connects with audiences"
      className="bg-muted/30"
    >
      <div className="max-w-4xl mx-auto">
        {/* Photo Section */}
        <div className="mb-12 flex justify-center">
          <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/assets/IMG_2945-1.jpeg"
              alt="Bubba and Isabel"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-6 mb-12">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-lg text-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <Card className="bg-card">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              Past Collaborations & Notable Projects
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {collaborations.map((brand) => (
                <div
                  key={brand}
                  className="flex items-center justify-center p-4 rounded-lg bg-muted/50 text-center"
                >
                  <span className="text-sm font-medium text-foreground">{brand}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionShell>
  );
}
