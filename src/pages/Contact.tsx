import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { t } from "@/lib/i18n";
import { teamMembers } from "@/data/mockData";

const contactInfo = [
  {
    icon: MapPin,
    label: t.contact.info.address,
    value: "Kaļķu iela 12, Rīga, LV-1050",
    href: "https://maps.google.com/?q=Kaļķu+iela+12+Rīga",
  },
  {
    icon: Phone,
    label: t.contact.info.phone,
    value: "+371 67 012 345",
    href: "tel:+37167012345",
  },
  {
    icon: Mail,
    label: t.contact.info.email,
    value: "info@rimc.lv",
    href: "mailto:info@rimc.lv",
  },
  {
    icon: Clock,
    label: t.contact.info.hours,
    value: "P-Pk: 8:30-17:00, S: 10:00-14:00",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Ziņojums nosūtīts!",
      description: t.contact.form.success,
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Layout>
      {/* About intro */}
      <section className="py-12 bg-muted/20 border-b border-border">
        <div className="container-page max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">{t.contact.aboutTitle}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">{t.contact.aboutDescription}</p>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 border-b border-border">
        <div className="container-page">
          <h2 className="text-2xl font-bold mb-6">{t.contact.team}</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {teamMembers.map((member) => {
              const initials = member.name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();
              return (
                <Card key={member.id} className="border-border/50 overflow-hidden">
                  {/* Photo */}
                  <div className="aspect-[3/2] bg-muted overflow-hidden">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-primary/10">
                        <span className="text-2xl font-bold text-primary">{initials}</span>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <p className="font-semibold text-sm leading-snug">{member.name}</p>
                    <p className="text-xs text-primary mt-0.5 mb-2 leading-snug">{member.role}</p>
                    <div className="space-y-1">
                      <a href={`mailto:${member.email}`} className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors truncate">
                        <Mail className="h-3 w-3 shrink-0" />
                        <span className="truncate">{member.email}</span>
                      </a>
                      <a href={`tel:${member.phone}`} className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                        <Phone className="h-3 w-3 shrink-0" />
                        {member.phone}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact form & info */}
      <section className="section-padding">
        <div className="container-page">
          <div className="page-header">
            <h2 className="page-title">{t.contact.title}</h2>
            <p className="page-description">{t.contact.description}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <Card className="border-border/50 animate-slide-up">
              <CardHeader>
                <CardTitle>Nosūtiet mums ziņojumu</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t.contact.form.name} *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        aria-required="true"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t.contact.form.email} *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        aria-required="true"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">{t.contact.form.subject} *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      aria-required="true"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">{t.contact.form.message} *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      aria-required="true"
                    />
                  </div>
                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                    {isSubmitting ? (
                      t.common.loading
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        {t.contact.form.submit}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6 animate-slide-up stagger-2">
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-border/50">
                    <CardContent className="p-4 flex gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="font-medium hover:text-primary transition-colors"
                            target={info.href.startsWith("http") ? "_blank" : undefined}
                            rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-medium">{info.value}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Card className="border-border/50 overflow-hidden">
                <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                  <div className="text-center p-6">
                    <MapPin className="h-12 w-12 text-primary/30 mx-auto mb-4" />
                    <p className="text-muted-foreground mb-2">Kaļķu iela 12, Rīga</p>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href="https://maps.google.com/?q=Kaļķu+iela+12+Rīga"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Atvērt kartē
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
