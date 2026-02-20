import { MapPin, Clock, Users, GraduationCap, CheckCircle, XCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { trainingItems } from "@/data/mockData";
import { t } from "@/lib/i18n";
import { format } from "date-fns";
import { lv } from "date-fns/locale";

export default function Training() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-page">
          {/* Header */}
          <div className="page-header">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <Badge className="chip-primary border-0">Pedagogiem</Badge>
            </div>
            <h1 className="page-title">{t.training.title}</h1>
            <p className="page-description">{t.training.description}</p>
          </div>

          {/* Training list */}
          <div className="space-y-6">
            {trainingItems.map((item, index) => {
              const startDate = new Date(item.date);
              const formattedDate = format(startDate, "d. MMMM, yyyy", { locale: lv });
              const formattedEndDate = item.endDate
                ? format(new Date(item.endDate), "d. MMMM, yyyy", { locale: lv })
                : null;
              const spotsPercent = Math.round(((item.spotsTotal - item.spotsLeft) / item.spotsTotal) * 100);
              const isOpen = item.status === "open";

              return (
                <Card
                  key={item.id}
                  className="card-interactive border-border/50 animate-slide-up overflow-hidden"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      {/* Date column */}
                      <div className="md:w-36 shrink-0 p-5 md:p-6 bg-primary/5 border-b md:border-b-0 md:border-r border-border/50 flex md:flex-col items-center md:items-start gap-3 md:gap-1">
                        <div className="text-3xl font-bold text-primary">
                          {format(startDate, "d")}
                        </div>
                        <div className="text-sm text-muted-foreground capitalize">
                          {format(startDate, "MMMM", { locale: lv })}
                        </div>
                        <div className="text-sm text-muted-foreground">{format(startDate, "yyyy")}</div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-5 md:p-6">
                        <div className="flex flex-wrap items-start gap-2 mb-3">
                          <h2 className="text-lg font-bold flex-1 min-w-0">{item.title}</h2>
                          <Badge
                            className={isOpen
                              ? "bg-success/10 text-success border-0 shrink-0"
                              : "bg-muted text-muted-foreground border-0 shrink-0"
                            }
                          >
                            {isOpen ? (
                              <><CheckCircle className="h-3 w-3 mr-1" />{t.training.statusOpen}</>
                            ) : (
                              <><XCircle className="h-3 w-3 mr-1" />{t.training.statusClosed}</>
                            )}
                          </Badge>
                        </div>

                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{item.description}</p>

                        {/* Meta */}
                        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground mb-4">
                          <span className="flex items-center gap-1.5">
                            <Clock className="h-4 w-4 text-primary shrink-0" />
                            {formattedDate}{formattedEndDate ? ` – ${formattedEndDate}` : ""}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="h-4 w-4 text-primary shrink-0" />
                            {item.time}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className="h-4 w-4 text-primary shrink-0" />
                            {item.location}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Users className="h-4 w-4 text-primary shrink-0" />
                            {item.spotsLeft > 0
                              ? `${item.spotsLeft} ${t.training.spotsLeft}`
                              : t.training.spotsNone}
                          </span>
                        </div>

                        {/* Spots bar */}
                        <div className="mb-4">
                          <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                            <span>{t.training.organizer}: {item.organizer}</span>
                            {item.programCode && <span>{item.programCode}</span>}
                          </div>
                          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-primary rounded-full transition-all"
                              style={{ width: `${spotsPercent}%` }}
                            />
                          </div>
                          <div className="flex justify-between text-xs text-muted-foreground mt-1">
                            <span>{spotsPercent}% aizpildīts</span>
                            <span>{item.spotsTotal} vietas kopā</span>
                          </div>
                        </div>

                        {/* Action */}
                        {isOpen && item.registrationUrl ? (
                          <Button asChild>
                            <a href={item.registrationUrl} target="_blank" rel="noopener noreferrer">
                              {t.training.register}
                            </a>
                          </Button>
                        ) : (
                          <Button disabled variant="outline">
                            {t.training.statusClosed}
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
