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

function AuthorBadge({ name, role }: { name: string; role: string }) {
  const initials = name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();
  return (
    <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border/50">
      <div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0">
        {initials}
      </div>
      <div className="min-w-0">
        <p className="text-xs font-medium text-foreground truncate">{name}</p>
        <p className="text-xs text-muted-foreground truncate">{role}</p>
      </div>
    </div>
  );
}

export function NewsCard({ news, featured = false }: NewsCardProps) {
  const categoryLabel = newsCategories.find(c => c.id === news.category)?.label || news.category;
  const formattedDate = format(new Date(news.date), "d. MMMM, yyyy", { locale: lv });

  if (featured) {
    return (
      <Link to={`/jaunumi/${news.id}`} className="block group">
        <Card className="card-interactive overflow-hidden border-0 shadow-md h-full">
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
          <CardContent className="p-6 flex flex-col flex-1">
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
              <Calendar className="h-4 w-4" />
              <time dateTime={news.date}>{formattedDate}</time>
              {news.readingTime && (
                <span className="text-muted-foreground/70">· {news.readingTime} min</span>
              )}
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
              {news.title}
            </h3>
            <p className="text-muted-foreground line-clamp-2 mb-1">{news.excerpt}</p>
            <div className="mt-auto">
              <AuthorBadge name={news.author} role={news.authorRole} />
            </div>
          </CardContent>
        </Card>
      </Link>
    );
  }

  return (
    <Link to={`/jaunumi/${news.id}`} className="block group">
      <Card className="card-interactive h-full border-border/50 overflow-hidden">
        {news.image && (
          <div className="aspect-[16/9] overflow-hidden bg-muted">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between gap-2 mb-2">
            <Badge variant="secondary" className="chip-secondary text-xs">
              {categoryLabel}
            </Badge>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <time dateTime={news.date}>{formattedDate}</time>
              {news.readingTime && <span>· {news.readingTime} min</span>}
            </div>
          </div>
          <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2 leading-snug">
            {news.title}
          </h3>
        </CardHeader>
        <CardContent className="pt-0 flex flex-col">
          <p className="text-sm text-muted-foreground line-clamp-2">{news.excerpt}</p>
          <div className="mt-auto">
            <AuthorBadge name={news.author} role={news.authorRole} />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
