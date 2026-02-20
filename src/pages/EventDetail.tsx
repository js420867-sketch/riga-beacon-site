import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, MapPin, Users, ExternalLink } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { eventItems } from "@/data/mockData";
import { format } from "date-fns";
import { lv } from "date-fns/locale";
import { useEffect } from "react";
import { t } from "@/lib/i18n";

export default function EventDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = eventItems.find((e) => e.id === id);

  // If there's a sourceUrl or registrationUrl, redirect to the original page
  useEffect(() => {
    const target = event?.sourceUrl || event?.registrationUrl;
    if (target) {
      window.location.href = target;
    } else if (!event) {
      navigate("/pasakumi", { replace: true });
    }
  }, [event, navigate]);

  if (!event) return null;

  const eventDate = new Date(event.date);
  const fullDate = format(eventDate, "EEEE, d. MMMM yyyy", { locale: lv });

  const spotsPercent =
    event.spotsTotal && event.spotsLeft !== undefined
      ? Math.round(((event.spotsTotal - event.spotsLeft) / event.spotsTotal) * 100)
      : null;

  const redirectTarget = event.sourceUrl || event.registrationUrl;

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-page max-w-3xl">
          {/* Back */}
          <Button variant="ghost" asChild className="mb-6 -ml-2">
            <Link to="/pasakumi">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Atpakaļ uz Pasākumiem
            </Link>
          </Button>

          {/* Loading / redirect notice */}
          <div className="text-center py-20">
            <div className="animate-spin w-10 h-10 border-4 border-primary border-t-transparent rounded-full mx-auto mb-6" />
            <p className="text-lg font-medium mb-2">Novirzām uz pasākuma lapu…</p>
            <p className="text-muted-foreground text-sm mb-6">
              Ja novirzīšana nenotiek automātiski, spied zemāk.
            </p>
            {redirectTarget && (
              <Button asChild>
                <a href={redirectTarget} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Atvērt pasākuma lapu
                </a>
              </Button>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
