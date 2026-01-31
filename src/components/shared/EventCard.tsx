import { Link } from "react-router-dom";
import { MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EventItem } from "@/data/mockData";
import { format } from "date-fns";
import { lv } from "date-fns/locale";
import { t } from "@/lib/i18n";

interface EventCardProps {
  event: EventItem;
  variant?: "default" | "compact";
}

export function EventCard({ event, variant = "default" }: EventCardProps) {
  const eventDate = new Date(event.date);
  const day = format(eventDate, "d");
  const month = format(eventDate, "MMM", { locale: lv }).toUpperCase();
  const fullDate = format(eventDate, "EEEE, d. MMMM", { locale: lv });

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
          </CardContent>
        </Card>
      </Link>
    );
  }

  return (
    <Card className="card-interactive border-border/50 overflow-hidden">
      <CardContent className="p-0">
        <div className="flex flex-col sm:flex-row">
          {/* Date Badge */}
          <div className="sm:w-24 p-4 sm:p-6 bg-primary text-primary-foreground flex sm:flex-col items-center justify-center gap-2 sm:gap-0">
            <span className="text-3xl sm:text-4xl font-bold">{day}</span>
            <span className="text-sm uppercase tracking-wider">{month}</span>
          </div>

          {/* Content */}
          <div className="flex-1 p-4 sm:p-6">
            <p className="text-sm text-muted-foreground mb-1 capitalize">{fullDate}</p>
            <Link to={`/pasakumi/${event.id}`} className="group">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {event.title}
              </h3>
            </Link>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {event.description}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-primary" />
                {event.time}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-primary" />
                {event.location}
              </span>
            </div>
            {event.registrationUrl && (
              <Button size="sm" asChild>
                <Link to={event.registrationUrl}>{t.events.register}</Link>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
