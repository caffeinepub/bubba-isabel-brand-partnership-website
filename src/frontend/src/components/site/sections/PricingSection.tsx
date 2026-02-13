import { SectionShell } from './SectionShell';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { siteContent } from '@/content/siteContent';

export function PricingSection() {
  const { influencer, ugc, customNote } = siteContent.pricing;

  return (
    <SectionShell
      id="pricing"
      title="Pricing & Packages"
      subtitle="Transparent pricing for influencer content and UGC"
      className="bg-muted/30"
    >
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Influencer Content */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{influencer.title}</CardTitle>
            <CardDescription className="text-base">{influencer.subtitle}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              {influencer.items.map((item) => (
                <div key={item.name} className="flex justify-between items-center py-2">
                  <span className="text-foreground font-medium">{item.name}</span>
                  <span className="text-sage-dark font-semibold">{item.price}</span>
                </div>
              ))}
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold text-foreground mb-3">Add-Ons:</h4>
              <div className="space-y-2">
                {influencer.addOns.map((addon) => (
                  <div key={addon.name} className="flex justify-between items-center py-1">
                    <span className="text-muted-foreground">{addon.name}</span>
                    <span className="text-foreground font-medium">{addon.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground italic">{influencer.note}</p>
            </div>
          </CardContent>
        </Card>

        {/* UGC Content */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{ugc.title}</CardTitle>
            {ugc.subtitle && <CardDescription className="text-base">{ugc.subtitle}</CardDescription>}
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              {ugc.items.map((item) => (
                <div key={item.name} className="flex justify-between items-start py-2 gap-4">
                  <span className="text-foreground font-medium flex-1">{item.name}</span>
                  <span className="text-sage-dark font-semibold whitespace-nowrap">{item.price}</span>
                </div>
              ))}
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold text-foreground mb-3">Add-Ons / Optional Services:</h4>
              <div className="space-y-2">
                {ugc.addOns.map((addon) => (
                  <div key={addon.name} className="flex justify-between items-center py-1">
                    <span className="text-muted-foreground">{addon.name}</span>
                    <span className="text-foreground font-medium">{addon.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground italic">{ugc.note}</p>
            </div>
          </CardContent>
        </Card>

        {/* Custom Note */}
        <div className="text-center">
          <p className="text-muted-foreground italic">{customNote}</p>
        </div>
      </div>
    </SectionShell>
  );
}
