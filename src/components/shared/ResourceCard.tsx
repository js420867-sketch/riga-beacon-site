import { Download, FileText, Video, Presentation } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ResourceItem, resourceCategories } from "@/data/mockData";
import { format } from "date-fns";
import { lv } from "date-fns/locale";
import { t } from "@/lib/i18n";

interface ResourceCardProps {
  resource: ResourceItem;
}

const fileIcons: Record<string, typeof FileText> = {
  PDF: FileText,
  MP4: Video,
  PPTX: Presentation,
};

export function ResourceCard({ resource }: ResourceCardProps) {
  const Icon = fileIcons[resource.fileType] || FileText;
  const categoryLabel = resourceCategories.find(c => c.id === resource.category)?.label || resource.category;
  const formattedDate = format(new Date(resource.date), "d. MMMM, yyyy", { locale: lv });

  return (
    <Card className="card-interactive border-border/50">
      <CardContent className="p-4 sm:p-6">
        <div className="flex gap-4">
          {/* Icon */}
          <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <Icon className="h-6 w-6 text-primary" />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="font-semibold line-clamp-1">{resource.title}</h3>
              <Badge variant="outline" className="shrink-0 text-xs">
                {resource.fileType}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
              {resource.description}
            </p>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <Badge variant="secondary" className="text-xs">
                  {categoryLabel}
                </Badge>
                <span>{resource.fileSize}</span>
                <time dateTime={resource.date}>{formattedDate}</time>
              </div>
              <Button size="sm" variant="outline" asChild>
                <a href={resource.downloadUrl} download>
                  <Download className="h-4 w-4 mr-2" />
                  {t.resources.download}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
