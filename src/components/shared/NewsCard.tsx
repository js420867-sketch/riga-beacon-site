import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NewsItem, newsCategories } from "@/data/mockData";
import { format } from "date-fns";
import { lv } from "date-fns/locale";

interface NewsCardProps {
  news: NewsItem;
  featured?: boolean;
}

export function NewsCard({ news, featured = false }: NewsCardProps) {
  const categoryLabel = newsCategories.find(c => c.id === news.category)?.label || news.category;
  const formattedDate = format(new Date(news.date), "d. MMMM, yyyy", { locale: lv });

  if (featured) {
    return (
      <Link to={`/jaunumi/${news.id}`} className="block group">
        <Card className="card-interactive overflow-hidden border-0 shadow-md">
          <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 to-accent relative overflow-hidden">
            {news.image ? (
              <img src={news.image} alt="" className="w-full h-full object-cover" />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full hero-gradient opacity-20" />
              </div>
            )}
            <Badge className="absolute top-4 left-4 chip-primary border-0">
              {categoryLabel}
            </Badge>
          </div>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
              <Calendar className="h-4 w-4" />
              <time dateTime={news.date}>{formattedDate}</time>
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
              {news.title}
            </h3>
            <p className="text-muted-foreground line-clamp-2">{news.excerpt}</p>
          </CardContent>
        </Card>
      </Link>
    );
  }

  return (
    <Link to={`/jaunumi/${news.id}`} className="block group">
      <Card className="card-interactive h-full border-border/50">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between gap-2 mb-2">
            <Badge variant="secondary" className="chip-secondary text-xs">
              {categoryLabel}
            </Badge>
            <time dateTime={news.date} className="text-xs text-muted-foreground">
              {formattedDate}
            </time>
          </div>
          <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2 leading-snug">
            {news.title}
          </h3>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-sm text-muted-foreground line-clamp-2">{news.excerpt}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
