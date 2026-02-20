import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Calendar, BookOpen, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { NewsCard } from "@/components/shared/NewsCard";
import { EventCard } from "@/components/shared/EventCard";
import { newsItems, eventItems, quickLinks } from "@/data/mockData";
import { t } from "@/lib/i18n";

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Calendar,
  BookOpen,
  Award,
};

const stats = [
  { value: "5000+", label: "Skolēni" },
  { value: "120+", label: "Programmas" },
  { value: "50+", label: "Pasākumi gadā" },
  { value: "25+", label: "Gadi pieredzes" },
];

export default function Index() {
  const methodicalNews = newsItems.filter(n => n.newsType === "methodical").slice(0, 3);
  const generalNews = newsItems.filter(n => n.newsType === "general").slice(0, 3);
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
                <Link to="/kontakti">{t.home.hero.cta}</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/pasakumi">{t.home.hero.ctaSecondary}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-10 bg-muted/30">
        <div className="container-page">
          <h2 className="text-lg font-semibold text-muted-foreground mb-5">{t.home.quickLinks.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => {
              const Icon = iconMap[link.icon] || BookOpen;
              return (
                <Link
                  key={link.id}
                  to={link.href}
                  className="group animate-slide-up"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <Card className="card-interactive h-full border-border/50 hover:border-primary/30">
                    <CardContent className="p-5 flex flex-col items-start gap-3">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm group-hover:text-primary transition-colors leading-snug">{link.title}</p>
                        <p className="text-xs text-muted-foreground mt-1 leading-snug">{link.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10">
        <div className="container-page">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodical News Section */}
      <section className="section-padding bg-muted/20">
        <div className="container-page">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">{t.home.sections.latestNews}</h2>
              <p className="text-muted-foreground mt-1 text-sm">Aktualitātes pedagogiem un metodiķiem</p>
            </div>
            <Button variant="ghost" asChild className="group shrink-0">
              <Link to="/jaunumi">
                {t.home.sections.viewAll}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {methodicalNews.map((news, index) => (
              <div key={news.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <NewsCard news={news} featured={index === 0} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General News Section */}
      <section className="section-padding">
        <div className="container-page">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">{t.home.sections.generalNews}</h2>
              <p className="text-muted-foreground mt-1 text-sm">Konkursi, pasākumi un projekti skolēniem</p>
            </div>
            <Button variant="ghost" asChild className="group shrink-0">
              <Link to="/jaunumi">
                {t.home.sections.viewAll}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {generalNews.map((news, index) => (
              <div key={news.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <NewsCard news={news} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="section-padding bg-muted/20">
        <div className="container-page">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">{t.home.sections.upcomingEvents}</h2>
            <Button variant="ghost" asChild className="group shrink-0">
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
