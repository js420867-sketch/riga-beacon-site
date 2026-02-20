import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { t } from "@/lib/i18n";
import logo from "@/assets/logo.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background mt-auto">
      <div className="container-page py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4 hover:opacity-80 transition-opacity">
              <img
                src={logo}
                alt="Rīgas Interešu izglītības metodiskais centrs"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Rīgas Interešu izglītības metodiskais centrs — atbalsts pedagogiem, 
              skolēniem un vecākiem interešu izglītības jomā.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Ātrās saites</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/jaunumi" className="text-background/70 hover:text-background transition-colors text-sm">
                  {t.nav.news}
                </Link>
              </li>
              <li>
                <Link to="/pasakumi" className="text-background/70 hover:text-background transition-colors text-sm">
                  {t.nav.events}
                </Link>
              </li>
              <li>
                <Link to="/talakizglitiba" className="text-background/70 hover:text-background transition-colors text-sm">
                  {t.nav.training}
                </Link>
              </li>
              <li>
                <Link to="/materiali" className="text-background/70 hover:text-background transition-colors text-sm">
                  {t.nav.materials}
                </Link>
              </li>
              <li>
                <Link to="/kontakti" className="text-background/70 hover:text-background transition-colors text-sm">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Kontaktinformācija</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span className="text-background/70">Kaļķu iela 12, Rīga, LV-1050</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href="tel:+37167012345" className="text-background/70 hover:text-background transition-colors">
                  +371 67 012 345
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href="mailto:info@rimc.lv" className="text-background/70 hover:text-background transition-colors">
                  info@rimc.lv
                </a>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Darba laiks</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li className="flex justify-between">
                <span>Pirmdiena - Piektdiena</span>
                <span>8:30 - 17:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sestdiena</span>
                <span>10:00 - 14:00</span>
              </li>
              <li className="flex justify-between">
                <span>Svētdiena</span>
                <span>Slēgts</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
          <p>© {currentYear} Rīgas Interešu izglītības metodiskais centrs. {t.footer.rights}.</p>
          <div className="flex gap-6">
            <Link to="/privatums" className="hover:text-background transition-colors">
              {t.footer.privacy}
            </Link>
            <Link to="/pieejamiba" className="hover:text-background transition-colors">
              {t.footer.accessibility}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
