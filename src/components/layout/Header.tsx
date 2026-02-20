import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { t } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: t.nav.home },
  { href: "/jaunumi", label: t.nav.news },
  { href: "/pasakumi", label: t.nav.events },
  { href: "/talakizglitiba", label: t.nav.training },
  { href: "/materiali", label: t.nav.materials },
  { href: "/kontakti", label: t.nav.contact },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <a href="#main-content" className="skip-link">
        Pāriet uz saturu
      </a>
      
      <div className="container-page">
        <nav className="flex items-center justify-between h-16 md:h-20" aria-label="Galvenā navigācija">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 text-primary font-bold text-lg md:text-xl hover:opacity-90 transition-opacity"
            aria-label="RIMC - Sākumlapa"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg hero-gradient flex items-center justify-center text-primary-foreground font-bold text-sm md:text-base">
              RIMC
            </div>
            <span className="hidden sm:block">Rīgas IIMC</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  location.pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/80 hover:text-foreground hover:bg-muted"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Search and Mobile Menu */}
          <div className="flex items-center gap-2">
            {/* Search Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label={searchOpen ? "Aizvērt meklēšanu" : "Atvērt meklēšanu"}
              aria-expanded={searchOpen}
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Aizvērt izvēlni" : "Atvērt izvēlni"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>

        {/* Search Bar */}
        {searchOpen && (
          <div className="pb-4 animate-slide-up">
            <form role="search" className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder={t.nav.search + "..."}
                className="pl-10 w-full"
                aria-label="Meklēt vietnē"
                autoFocus
              />
            </form>
          </div>
        )}

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 animate-slide-up">
            <div className="flex flex-col gap-1" role="menu">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  role="menuitem"
                  className={cn(
                    "px-4 py-3 rounded-md text-base font-medium transition-colors",
                    location.pathname === item.href
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/80 hover:text-foreground hover:bg-muted"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
