import { useState, useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { ResourceCard } from "@/components/shared/ResourceCard";
import { CategoryFilter } from "@/components/shared/CategoryFilter";
import { SearchInput } from "@/components/shared/SearchInput";
import { resourceItems, resourceCategories } from "@/data/mockData";
import { t } from "@/lib/i18n";

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredResources = useMemo(() => {
    return resourceItems.filter((resource) => {
      const matchesCategory = activeCategory === "all" || resource.category === activeCategory;
      const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-page">
          {/* Header */}
          <div className="page-header">
            <h1 className="page-title">{t.resources.title}</h1>
            <p className="page-description">{t.resources.description}</p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 max-w-md">
              <SearchInput
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Meklēt resursus..."
              />
            </div>
            <div className="md:flex-shrink-0">
              <CategoryFilter
                categories={resourceCategories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
            </div>
          </div>

          {/* Resources List */}
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
      </section>
    </Layout>
  );
}
