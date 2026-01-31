import { Target, Heart, Users, Lightbulb } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { teamMembers } from "@/data/mockData";
import { t } from "@/lib/i18n";

const values = [
  {
    icon: Target,
    title: "Kvalitāte",
    description: "Mēs cenšamies nodrošināt augstākās kvalitātes izglītības programmas un metodisko atbalstu.",
  },
  {
    icon: Heart,
    title: "Atbalsts",
    description: "Mēs esam šeit, lai atbalstītu pedagogus, skolēnus un vecākus viņu izglītības ceļojumā.",
  },
  {
    icon: Users,
    title: "Sadarbība",
    description: "Mēs veicinām sadarbību starp izglītības iestādēm, pedagogiem un ģimenēm.",
  },
  {
    icon: Lightbulb,
    title: "Inovācijas",
    description: "Mēs pastāvīgi meklējam jaunas un efektīvas metodes interešu izglītībā.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-16 md:py-24">
        <div className="container-page">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {t.about.title}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              Rīgas Interešu izglītības metodiskais centrs ir vadošā institūcija 
              interešu izglītības jomā Rīgā, kas nodrošina metodisko atbalstu un 
              koordinē darbību starp izglītības iestādēm.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">{t.about.mission}</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Mūsu misija ir veicināt kvalitatīvas interešu izglītības pieejamību 
                  visiem Rīgas bērniem un jauniešiem, nodrošinot profesionālu metodisko 
                  atbalstu pedagogiem un koordinējot interešu izglītības programmu attīstību.
                </p>
                <p>
                  Mēs strādājam, lai interešu izglītība būtu pievilcīga, mūsdienīga un 
                  atbilstoša katra bērna vajadzībām un interesēm, veicinot viņu talantu 
                  un spēju attīstību.
                </p>
              </div>
            </div>
            <div className="animate-slide-up stagger-2">
              <Card className="bg-muted/50 border-0">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">{t.about.history}</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-4">
                      <span className="text-primary font-bold shrink-0">1998</span>
                      <span className="text-muted-foreground">Centra dibināšana</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-primary font-bold shrink-0">2005</span>
                      <span className="text-muted-foreground">Metodiskā tīkla izveide</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-primary font-bold shrink-0">2015</span>
                      <span className="text-muted-foreground">Starptautisko projektu uzsākšana</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-primary font-bold shrink-0">2020</span>
                      <span className="text-muted-foreground">Digitālās platformas ieviešana</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-page">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">{t.about.values}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-sm text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-page">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">{t.about.team}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card 
                key={member.id} 
                className="card-interactive border-border/50 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
