import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, ExternalLink, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { newsItems, newsCategories } from "@/data/mockData";
import { format } from "date-fns";
import { lv } from "date-fns/locale";
import { useEffect } from "react";

export default function NewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const news = newsItems.find((n) => n.id === id);

  // If there's a sourceUrl, redirect immediately to the original page
  useEffect(() => {
    if (news?.sourceUrl) {
      window.location.href = news.sourceUrl;
    } else if (!news) {
      navigate("/jaunumi", { replace: true });
    }
  }, [news, navigate]);

  if (!news) return null;

  // Show a brief loading/redirect screen while redirecting
  const categoryLabel = newsCategories.find((c) => c.id === news.category)?.label || news.category;
  const formattedDate = format(new Date(news.date), "d. MMMM, yyyy", { locale: lv });

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-page max-w-3xl">
          {/* Back */}
          <Button variant="ghost" asChild className="mb-6 -ml-2">
            <Link to="/jaunumi">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Atpakaļ uz Jaunumiem
            </Link>
          </Button>

          {/* Loading / redirect notice */}
          <div className="text-center py-20">
            <div className="animate-spin w-10 h-10 border-4 border-primary border-t-transparent rounded-full mx-auto mb-6" />
            <p className="text-lg font-medium mb-2">Novirzām uz pilno rakstu…</p>
            <p className="text-muted-foreground text-sm mb-6">
              Ja novirzīšana nenotiek automātiski, spied zemāk.
            </p>
            {news.sourceUrl && (
              <Button asChild>
                <a href={news.sourceUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Atvērt oriģinālo rakstu
                </a>
              </Button>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
