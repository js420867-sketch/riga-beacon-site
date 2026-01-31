import { Link } from "react-router-dom";
import { ArrowRight, Users, BookOpen, Calendar, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { NewsCard } from "@/components/shared/NewsCard";
import { EventCard } from "@/components/shared/EventCard";
import { newsItems, eventItems } from "@/data/mockData";
import { t } from "@/lib/i18n";

const stats = [
  { icon: Users, value: "5000+", label: "Skolēni" },
  { icon: BookOpen, value: "120+", label: "Programmas" },
  { icon: Calendar, value: "50+", label: "Pasākumi gadā" },
  { icon: Award, value: "25+", label: "Gadi pieredzes" },
];

export default function Index() {
  const latestNews = newsItems.slice(0, 4);
  const upcomingEvents = eventItems.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-16 md:py-24 lg:py-32">
        <div className="container-page">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {t.home.hero.title}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 leading-relaxed">
              {t.home.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/par-mums">{t.home.hero.cta}</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/pasakumi">{t.home.hero.ctaSecondary}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="container-page">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-sm text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="section-padding">
        <div className="container-page">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">{t.home.sections.latestNews}</h2>
            <Button variant="ghost" asChild className="group">
              <Link to="/jaunumi">
                {t.home.sections.viewAll}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestNews.map((news, index) => (
              <div key={news.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <NewsCard news={news} featured={index === 0} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-page">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">{t.home.sections.upcomingEvents}</h2>
            <Button variant="ghost" asChild className="group">
              <Link to="/pasakumi">
                {t.home.sections.viewAll}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <div key={event.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <EventCard event={event} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-page">
          <Card className="hero-gradient text-primary-foreground border-0">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Vai vēlaties uzzināt vairāk?
              </h2>
              <p className="text-lg mb-6 text-primary-foreground/90 max-w-2xl mx-auto">
                Sazinieties ar mums, lai uzzinātu par mūsu programmām, pasākumiem vai sadarbības iespējām.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/kontakti">Sazināties ar mums</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
