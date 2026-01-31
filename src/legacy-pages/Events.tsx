import { useState } from "react";
import { CalendarDays, List } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { EventCard } from "@/components/shared/EventCard";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { eventItems } from "@/data/mockData";
import { t } from "@/lib/i18n";
import { format, isSameDay } from "date-fns";
import { lv } from "date-fns/locale";

type ViewMode = "list" | "calendar";

export default function Events() {
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  // Get dates that have events for calendar highlighting
  const eventDates = eventItems.map(event => new Date(event.date));

  // Filter events by selected date if in calendar view
  const displayedEvents = selectedDate
    ? eventItems.filter(event => isSameDay(new Date(event.date), selectedDate))
    : eventItems;

  const hasEventsOnDate = (date: Date) => {
    return eventDates.some(eventDate => isSameDay(eventDate, date));
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-page">
          {/* Header */}
          <div className="page-header">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="page-title">{t.events.title}</h1>
                <p className="page-description">{t.events.description}</p>
              </div>

              {/* View Toggle */}
              <div className="flex gap-2 p-1 bg-muted rounded-lg">
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  aria-pressed={viewMode === "list"}
                >
                  <List className="h-4 w-4 mr-2" />
                  {t.events.viewList}
                </Button>
                <Button
                  variant={viewMode === "calendar" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("calendar")}
                  aria-pressed={viewMode === "calendar"}
                >
                  <CalendarDays className="h-4 w-4 mr-2" />
                  {t.events.viewCalendar}
                </Button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={viewMode === "calendar" ? "grid lg:grid-cols-[auto_1fr] gap-8" : ""}>
            {/* Calendar */}
            {viewMode === "calendar" && (
              <Card className="p-4 h-fit">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  locale={lv}
                  className="rounded-md"
                  modifiers={{
                    hasEvent: (date) => hasEventsOnDate(date),
                  }}
                  modifiersStyles={{
                    hasEvent: {
                      fontWeight: "bold",
                      backgroundColor: "hsl(var(--primary) / 0.1)",
                      color: "hsl(var(--primary))",
                    },
                  }}
                />
                {selectedDate && (
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-sm text-muted-foreground mb-2">Izvēlētais datums:</p>
                    <p className="font-medium">
                      {format(selectedDate, "EEEE, d. MMMM yyyy", { locale: lv })}
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedDate(undefined)}
                      className="mt-2"
                    >
                      Rādīt visus
                    </Button>
                  </div>
                )}
              </Card>
            )}

            {/* Events List */}
            <div className="space-y-4">
              {displayedEvents.length > 0 ? (
                displayedEvents.map((event, index) => (
                  <div
                    key={event.id}
                    className="animate-slide-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <EventCard event={event} variant={viewMode === "calendar" ? "compact" : "default"} />
                  </div>
                ))
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <CalendarDays className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">{t.events.noEvents}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
