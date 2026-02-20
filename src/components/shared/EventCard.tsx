import { Link } from "react-router-dom";
import { MapPin, Clock, Users, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { EventItem } from "@/data/mockData";
import { format } from "date-fns";
import { lv } from "date-fns/locale";
import { t } from "@/lib/i18n";

interface EventCardProps {
  event: EventItem;
  variant?: "default" | "compact";
}

export function EventCard({ event, variant = "default" }: EventCardProps) {
  const [y, mo, d] = event.date.split("-").map(Number);
  const eventDate = new Date(y, mo - 1, d);
  const day = format(eventDate, "d");
  const month = format(eventDate, "MMM", { locale: lv }).toUpperCase();
  const fullDate = format(eventDate, "EEEE, d. MMMM", { locale: lv });

  const spotsPercent =
    event.spotsTotal && event.spotsLeft !== undefined
      ? Math.round(((event.spotsTotal - event.spotsLeft) / event.spotsTotal) * 100)
      : null;

  if (variant === "compact") {
    return (
      <Link to={`/pasakumi/${event.id}`} className="block group">
        <Card className="card-interactive border-border/50">
          <CardContent className="p-4 flex gap-4">
            <div className="date-badge shrink-0">
              <span className="date-badge-day">{day}</span>
              <span className="date-badge-month">{month}</span>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-1 mb-1">
                {event.title}
              </h3>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {event.time}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  <span className="line-clamp-1">{event.location}</span>
                </span>
              </div>
            </div>
            {event.registrationUrl && (
              <div className="shrink-0 self-center">
                <Button size="sm" variant="outline" asChild onClick={(e) => e.stopPropagation()}>
                  <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
                    {t.events.register}
                  </a>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </Link>
    );
  }

  return (
    <Card className="card-interactive border-border/50 overflow-hidden">
      <CardContent className="p-0">
        <div className="flex flex-col sm:flex-row">
          {/* Left: date + optional image */}
          <div className="sm:w-56 shrink-0 flex flex-col">
            {/* Date badge */}
            <div className="p-4 sm:p-5 bg-primary text-primary-foreground flex sm:flex-col items-center justify-center gap-2 sm:gap-0 sm:min-h-[5rem]">
              <span className="text-3xl sm:text-4xl font-bold leading-none">{day}</span>
              <span className="text-sm uppercase tracking-wider sm:mt-1">{month}</span>
            </div>
            {/* Image */}
            {event.image && (
              <div className="hidden sm:block flex-1 overflow-hidden bg-muted min-h-[8rem]">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 p-4 sm:p-6">
            <div className="flex items-start justify-between gap-3 mb-2">
              <p className="text-sm text-muted-foreground capitalize">{fullDate}</p>
              {event.status === "open" && (
                <Badge className="shrink-0 bg-success/10 text-success border-0 text-xs">
                  {t.events.registrationOpen}
                </Badge>
              )}
              {event.status === "upcoming" && (
                <Badge variant="secondary" className="shrink-0 text-xs">
                  Drīzumā
                </Badge>
              )}
            </div>

            <Link to={`/pasakumi/${event.id}`} className="group">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors leading-snug">
                {event.title}
              </h3>
            </Link>

            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{event.description}</p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-primary shrink-0" />
                {event.time}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                {event.location}
              </span>
              {event.spotsLeft !== undefined && event.spotsTotal && (
                <span className="flex items-center gap-1.5">
                  <Users className="h-4 w-4 text-primary shrink-0" />
                  {event.spotsLeft} {t.events.spotsLeft}
                </span>
              )}
            </div>

            {/* Spots progress bar */}
            {spotsPercent !== null && (
              <div className="mb-4">
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all"
                    style={{ width: `${spotsPercent}%` }}
                  />
                </div>
              </div>
            )}

            <div className="flex gap-2 flex-wrap">
              {event.registrationUrl && event.status === "open" && (
                <Button size="sm" asChild>
                  <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                    {t.events.register}
                  </a>
                </Button>
              )}
              <Button size="sm" variant="outline" asChild>
                <Link to={`/pasakumi/${event.id}`}>{t.events.learnMore}</Link>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
