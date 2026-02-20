import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock, ExternalLink, Tag } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { newsItems, newsCategories } from "@/data/mockData";
import { format } from "date-fns";
import { lv } from "date-fns/locale";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function NewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const news = newsItems.find((n) => n.id === id);

  useEffect(() => {
    if (!news) {
      navigate("/jaunumi", { replace: true });
    }
  }, [news, navigate]);

  if (!news) return null;

  const parseDate = (s: string) => {
    const [y, m, d] = s.split("-").map(Number);
    return new Date(y, m - 1, d);
  };

  const categoryLabel = newsCategories.find((c) => c.id === news.category)?.label || news.category;
  const formattedDate = format(parseDate(news.date), "d. MMMM yyyy", { locale: lv });

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-page max-w-4xl">
          {/* Back */}
          <Button variant="ghost" asChild className="mb-6 -ml-2">
            <Link to="/jaunumi">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Atpakaļ uz Jaunumiem
            </Link>
          </Button>

          <div className="grid lg:grid-cols-[1fr_280px] gap-8 items-start">
            {/* Main content */}
            <article>
              {/* Image */}
              {news.image && (
                <div className="rounded-xl overflow-hidden mb-6 aspect-[16/7] bg-muted">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Category */}
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">{categoryLabel}</Badge>
                {news.newsType === "methodical" && (
                  <Badge className="bg-primary/10 text-primary border-0">
                    Metodiskajam darbam
                  </Badge>
                )}
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl font-bold mb-4 leading-snug">
                {news.title}
              </h1>

              {/* Meta row */}
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground mb-6 pb-6 border-b border-border/50">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-primary shrink-0" />
                  {formattedDate}
                </span>
                <span className="flex items-center gap-1.5">
                  <User className="h-4 w-4 text-primary shrink-0" />
                  {news.author}
                </span>
                {news.readingTime && (
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-primary shrink-0" />
                    {news.readingTime} min lasīšana
                  </span>
                )}
              </div>

              {/* Full content */}
              {news.fullContent ? (
                <div className="prose prose-sm max-w-none text-foreground [&_strong]:text-foreground [&_h2]:text-foreground [&_h3]:text-foreground [&_h4]:text-foreground [&_h5]:text-foreground [&_blockquote]:border-l-primary [&_blockquote]:text-muted-foreground [&_blockquote]:bg-muted/50 [&_blockquote]:rounded-r-md [&_blockquote]:py-1 [&_blockquote]:pr-4 [&_a]:text-primary [&_a:hover]:underline">
                  <ReactMarkdown>{news.fullContent}</ReactMarkdown>
                </div>
              ) : (
                <p className="text-muted-foreground leading-relaxed">{news.content}</p>
              )}

              {/* Source link */}
              {news.sourceUrl && (
                <div className="mt-8 pt-6 border-t border-border/50">
                  <p className="text-sm text-muted-foreground mb-2">Oriģinālā lapa:</p>
                  <a
                    href={news.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    intereses.lv
                  </a>
                </div>
              )}
            </article>

            {/* Sidebar */}
            <div className="space-y-4">
              {/* Author card */}
              <Card>
                <CardContent className="p-5 space-y-3">
                  <h3 className="font-semibold text-base">Par autoru</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <User className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">{news.author}</p>
                        <p className="text-muted-foreground text-xs">{news.authorRole}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Calendar className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-muted-foreground text-xs mb-0.5">Publicēts</p>
                        <p className="font-medium">{formattedDate}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Tag className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-muted-foreground text-xs mb-0.5">Kategorija</p>
                        <p className="font-medium">{categoryLabel}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Related news */}
              <Card>
                <CardContent className="p-5">
                  <h3 className="font-semibold text-base mb-3">Citi jaunumi</h3>
                  <div className="space-y-3">
                    {newsItems
                      .filter((n) => n.id !== news.id && n.category === news.category)
                      .slice(0, 3)
                      .map((related) => (
                        <Link
                          key={related.id}
                          to={`/jaunumi/${related.id}`}
                          className="block group"
                        >
                          <p className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                            {related.title}
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {format(parseDate(related.date), "d. MMM yyyy", { locale: lv })}
                          </p>
                        </Link>
                      ))}
                    {newsItems.filter((n) => n.id !== news.id && n.category === news.category).length === 0 && (
                      newsItems
                        .filter((n) => n.id !== news.id)
                        .slice(0, 3)
                        .map((related) => (
                          <Link
                            key={related.id}
                            to={`/jaunumi/${related.id}`}
                            className="block group"
                          >
                            <p className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                              {related.title}
                            </p>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              {format(parseDate(related.date), "d. MMM yyyy", { locale: lv })}
                            </p>
                          </Link>
                        ))
                    )}
                  </div>
                </CardContent>
              </Card>

              <Button variant="outline" className="w-full" asChild>
                <Link to="/jaunumi">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Visi jaunumi
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
