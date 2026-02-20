import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, MapPin, Users, ExternalLink, Mail, Building2, AlertCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { eventItems } from "@/data/mockData";
import { format, isPast } from "date-fns";
import { lv } from "date-fns/locale";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function EventDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = eventItems.find((e) => e.id === id);

  useEffect(() => {
    if (!event) {
      navigate("/pasakumi", { replace: true });
    }
  }, [event, navigate]);

  if (!event) return null;

  const eventDate = new Date(event.date);
  const endDate = event.endDate ? new Date(event.endDate) : null;
  const fullDate = format(eventDate, "EEEE, d. MMMM yyyy", { locale: lv });
  const fullEndDate = endDate ? format(endDate, "d. MMMM yyyy", { locale: lv }) : null;

  const spotsPercent =
    event.spotsTotal && event.spotsLeft !== undefined
      ? Math.round(((event.spotsTotal - event.spotsLeft) / event.spotsTotal) * 100)
      : null;

  const isFull = event.spotsLeft === 0;
  const registrationPast = event.registrationDeadline
    ? isPast(new Date(event.registrationDeadline))
    : false;

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-page max-w-4xl">
          {/* Back */}
          <Button variant="ghost" asChild className="mb-6 -ml-2">
            <Link to="/pasakumi">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Atpakaļ uz Pasākumiem
            </Link>
          </Button>

          <div className="grid lg:grid-cols-[1fr_300px] gap-8 items-start">
            {/* Main content */}
            <div>
              {/* Image */}
              {event.image && (
                <div className="rounded-xl overflow-hidden mb-6 aspect-[16/7] bg-muted">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Category + status */}
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="capitalize">
                  {event.category === "competitions" ? "Konkurss" : "Apmācība"}
                </Badge>
                {event.status === "open" && !isFull && (
                  <Badge className="bg-success/10 text-success border-0">
                    Reģistrācija atvērta
                  </Badge>
                )}
                {isFull && (
                  <Badge className="bg-destructive/10 text-destructive border-0">
                    Grupa nokomplektēta
                  </Badge>
                )}
                {event.status === "upcoming" && (
                  <Badge variant="secondary">Drīzumā</Badge>
                )}
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl font-bold mb-4 leading-snug">
                {event.title}
              </h1>

              {/* Quick meta */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground mb-6 pb-6 border-b border-border/50">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary shrink-0" />
                  <span className="capitalize">{fullDate}{fullEndDate ? ` — ${fullEndDate}` : ""}</span>
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary shrink-0" />
                  {event.time}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary shrink-0" />
                  {event.location}
                </span>
                {event.spotsLeft !== undefined && event.spotsTotal && (
                  <span className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary shrink-0" />
                    {event.spotsLeft} vietas no {event.spotsTotal}
                  </span>
                )}
              </div>

              {/* Spots progress */}
              {spotsPercent !== null && (
                <div className="mb-6">
                  <div className="flex justify-between text-xs text-muted-foreground mb-1">
                    <span>Piepildītība</span>
                    <span>{spotsPercent}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all"
                      style={{ width: `${spotsPercent}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Full content or description */}
              {event.fullContent ? (
                <div className="prose prose-sm max-w-none text-foreground [&_strong]:text-foreground [&_h2]:text-foreground [&_h3]:text-foreground [&_blockquote]:border-l-primary [&_blockquote]:text-muted-foreground [&_blockquote]:bg-muted/50 [&_blockquote]:rounded-r-md [&_blockquote]:py-1 [&_blockquote]:pr-4">
                  <ReactMarkdown>{event.fullContent}</ReactMarkdown>
                </div>
              ) : (
                <p className="text-muted-foreground leading-relaxed">{event.description}</p>
              )}

              {/* Source link */}
              {event.sourceUrl && (
                <div className="mt-8 pt-6 border-t border-border/50">
                  <p className="text-sm text-muted-foreground mb-2">Oriģinālā lapa:</p>
                  <a
                    href={event.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    intereses.lv
                  </a>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              {/* Registration card */}
              <Card>
                <CardContent className="p-5 space-y-4">
                  <h3 className="font-semibold text-base">Pieteikšanās</h3>

                  {isFull && (
                    <div className="flex items-start gap-2 text-sm text-destructive bg-destructive/10 rounded-md p-3">
                      <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                      <span>Grupa nokomplektēta. Pieteikšanās slēgta.</span>
                    </div>
                  )}

                  {registrationPast && !isFull && (
                    <div className="flex items-start gap-2 text-sm text-muted-foreground bg-muted rounded-md p-3">
                      <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                      <span>Pieteikšanās termiņš beidzies.</span>
                    </div>
                  )}

                  {event.registrationDeadline && (
                    <div className="text-sm">
                      <span className="text-muted-foreground">Pieteikties līdz: </span>
                      <span className="font-medium">
                        {format(new Date(event.registrationDeadline), "d. MMMM yyyy", { locale: lv })}
                      </span>
                    </div>
                  )}

                  {event.registrationUrl && !isFull && (
                    <Button className="w-full" asChild>
                      <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Pieteikties
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>

              {/* Details card */}
              <Card>
                <CardContent className="p-5 space-y-3">
                  <h3 className="font-semibold text-base">Informācija</h3>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <Calendar className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-muted-foreground text-xs mb-0.5">Datums</p>
                        <p className="font-medium capitalize">{fullDate}</p>
                        {fullEndDate && (
                          <p className="text-muted-foreground text-xs">līdz {fullEndDate}</p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-muted-foreground text-xs mb-0.5">Laiks</p>
                        <p className="font-medium">{event.time}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-muted-foreground text-xs mb-0.5">Norises vieta</p>
                        <p className="font-medium">{event.location}</p>
                      </div>
                    </div>

                    {event.organizer && (
                      <div className="flex items-start gap-2">
                        <Building2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="text-muted-foreground text-xs mb-0.5">Organizētājs</p>
                          <p className="font-medium">{event.organizer}</p>
                        </div>
                      </div>
                    )}

                    {event.contactName && (
                      <div className="flex items-start gap-2">
                        <Mail className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="text-muted-foreground text-xs mb-0.5">Atbildīgais</p>
                          <p className="font-medium">{event.contactName}</p>
                          {event.contactEmail && (
                            <a
                              href={`mailto:${event.contactEmail}`}
                              className="text-primary hover:underline text-xs"
                            >
                              {event.contactEmail}
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Map button */}
              {event.location && event.location !== "Tiešsaistē" && event.location !== "Tiešsaistē (MS Teams)" && (
                <Button variant="outline" className="w-full" asChild>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(event.location)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    Atvērt kartē
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
