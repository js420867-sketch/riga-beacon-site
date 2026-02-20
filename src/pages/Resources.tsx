import { useState, useMemo } from "react";
import { Download } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ResourceCard } from "@/components/shared/ResourceCard";
import { SearchInput } from "@/components/shared/SearchInput";
import { resourceItems, resourceCategories } from "@/data/mockData";
import { t } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredResources = useMemo(() => {
    return resourceItems.filter((resource) => {
      const matchesCategory = activeCategory === "all" || resource.category === activeCategory;
      const matchesSearch =
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  // Count per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: resourceItems.length };
    resourceItems.forEach(r => {
      counts[r.category] = (counts[r.category] || 0) + 1;
    });
    return counts;
  }, []);

  const featuredResource = resourceItems[0];

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-page">
          {/* Header */}
          <div className="page-header">
            <h1 className="page-title">{t.resources.title}</h1>
            <p className="page-description">{t.resources.description}</p>
          </div>

          {/* Featured resource */}
          <Card className="mb-10 border-primary/20 bg-primary/5 overflow-hidden">
            <CardContent className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Download className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <Badge className="mb-2 chip-primary border-0">{t.resources.featured}</Badge>
                <h2 className="text-xl font-bold mb-2">{featuredResource.title}</h2>
                <p className="text-muted-foreground mb-4">{featuredResource.description}</p>
                <div className="flex gap-3">
                  <Button asChild>
                    <a href={featuredResource.downloadUrl}>
                      <Download className="h-4 w-4 mr-2" />
                      {t.resources.download}
                    </a>
                  </Button>
                  <span className="text-sm text-muted-foreground self-center">
                    {featuredResource.fileType} · {featuredResource.fileSize}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="lg:w-56 shrink-0">
              <div className="sticky top-24">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Kategorijas</p>
                <nav className="space-y-1">
                  {resourceCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={cn(
                        "w-full flex items-center justify-between px-3 py-2.5 rounded-md text-sm transition-colors text-left",
                        activeCategory === cat.id
                          ? "bg-primary text-primary-foreground font-medium"
                          : "text-foreground hover:bg-muted"
                      )}
                    >
                      <span>{cat.label}</span>
                      <span className={cn(
                        "text-xs rounded-full px-1.5 py-0.5",
                        activeCategory === cat.id
                          ? "bg-primary-foreground/20 text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      )}>
                        {categoryCounts[cat.id] || 0}
                      </span>
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 min-w-0">
              <div className="mb-6">
                <SearchInput
                  value={searchQuery}
                  onChange={setSearchQuery}
                  placeholder="Meklēt materiālus..."
                />
              </div>

              {filteredResources.length > 0 ? (
                <div className="space-y-4">
                  {filteredResources.map((resource, index) => (
                    <div
                      key={resource.id}
                      className="animate-slide-up"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <ResourceCard resource={resource} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <p className="text-lg">{t.common.noResults}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
