import { SectionShell } from './SectionShell';
import { PortfolioItemCard } from '../portfolio/PortfolioItemCard';
import { siteContent } from '@/content/siteContent';

export function PortfolioSection() {
  const { categories } = siteContent.portfolio;

  return (
    <SectionShell
      id="portfolio"
      title="Featured Content"
      subtitle="High-performing pet content across health, wellness, and lifestyle"
    >
      <div className="space-y-16">
        {categories.map((category) => (
          <div key={category.id}>
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">
              {category.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, index) => (
                <PortfolioItemCard key={`${category.id}-${index}`} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
