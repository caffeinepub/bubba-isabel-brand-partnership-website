import { Monitor, Smartphone, Maximize } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useViewMode, ViewMode } from '@/hooks/useViewMode';

export function ViewModeControl() {
  const { viewMode, setViewMode } = useViewMode();

  const viewModeLabels: Record<ViewMode, string> = {
    auto: 'Auto',
    mobile: 'Mobile',
    desktop: 'Desktop',
  };

  const viewModeIcons: Record<ViewMode, React.ReactNode> = {
    auto: <Maximize className="h-4 w-4" />,
    mobile: <Smartphone className="h-4 w-4" />,
    desktop: <Monitor className="h-4 w-4" />,
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-muted-foreground hidden sm:inline">View:</span>
      <Select value={viewMode} onValueChange={(value) => setViewMode(value as ViewMode)}>
        <SelectTrigger className="w-[130px] h-9">
          <div className="flex items-center gap-2">
            {viewModeIcons[viewMode]}
            <SelectValue />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="auto">
            <div className="flex items-center gap-2">
              <Maximize className="h-4 w-4" />
              <span>Auto</span>
            </div>
          </SelectItem>
          <SelectItem value="mobile">
            <div className="flex items-center gap-2">
              <Smartphone className="h-4 w-4" />
              <span>Mobile</span>
            </div>
          </SelectItem>
          <SelectItem value="desktop">
            <div className="flex items-center gap-2">
              <Monitor className="h-4 w-4" />
              <span>Desktop</span>
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
