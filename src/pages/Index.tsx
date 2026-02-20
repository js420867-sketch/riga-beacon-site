import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Calendar, BookOpen, Award, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layout } from "@/components/layout/Layout";
import { NewsCard } from "@/components/shared/NewsCard";
import { EventCard } from "@/components/shared/EventCard";
import { newsItems, eventItems, quickLinks } from "@/data/mockData";
import { t } from "@/lib/i18n";
import heroBg from "@/assets/hero-bg.jpg";

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

const parseDate = (s: string) => {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d);
};

const formatDate = (dateStr: string) => {
  const d = parseDate(dateStr);
  return d.toLocaleDateString("lv-LV", { day: "numeric", month: "long" });
};

export default function Index() {
  const methodicalNews = newsItems.filter(n => n.newsType === "methodical").slice(0, 3);
  const generalNews = newsItems.filter(n => n.newsType === "general").slice(0, 3);
  const upcomingEvents = eventItems.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section — kombinācija: fona attēls + teksts + tuvākie pasākumi */}
      <section className="relative min-h-[520px] md:min-h-[620px] flex flex-col justify-end overflow-hidden">
        {/* Background image */}
        <img
          src={heroBg}
          alt="Rīgas bērnu interešu izglītība"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80" />

        {/* Hero text */}
        <div className="relative container-page pb-8 pt-24 md:pt-32 animate-fade-in">
          <div className="max-w-2xl mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-white drop-shadow-lg">
              {t.home.hero.title}
            </h1>
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-6 drop-shadow">
              {t.home.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
                <Link to="/kontakti">{t.home.hero.cta}</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/60 text-white hover:bg-white/15 backdrop-blur-sm" asChild>
                <Link to="/pasakumi">{t.home.hero.ctaSecondary}</Link>
              </Button>
            </div>
          </div>

          {/* Upcoming events strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pb-6">
            {upcomingEvents.map((event, i) => (
              <Link
                key={event.id}
                to={`/pasakumi/${event.id}`}
                className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all animate-slide-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start gap-3">
                  {event.image && (
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-14 h-14 rounded-lg object-cover shrink-0"
                    />
                  )}
                  <div className="min-w-0">
                    <Badge variant="secondary" className="mb-1 text-xs bg-primary/80 text-white border-0">
                      {formatDate(event.date)}
                    </Badge>
                    <p className="text-white text-sm font-medium leading-snug line-clamp-2 group-hover:text-primary-foreground transition-colors">
                      {event.title}
                    </p>
                    <div className="flex items-center gap-1 mt-1 text-white/70 text-xs">
                      <Clock className="h-3 w-3 shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-1 text-white/70 text-xs">
                      <MapPin className="h-3 w-3 shrink-0" />
                      <span className="truncate">{event.location.split(",")[0]}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
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
