import { useState, useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { NewsCard } from "@/components/shared/NewsCard";
import { CategoryFilter } from "@/components/shared/CategoryFilter";
import { SearchInput } from "@/components/shared/SearchInput";
import { Pagination } from "@/components/shared/Pagination";
import { newsItems, newsCategories } from "@/data/mockData";
import { t } from "@/lib/i18n";

const ITEMS_PER_PAGE = 6;

export default function News() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredNews = useMemo(() => {
    return newsItems.filter((news) => {
      const matchesCategory = activeCategory === "all" || news.category === activeCategory;
      const matchesSearch = news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        news.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  const paginatedNews = filteredNews.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-page">
          {/* Header */}
          <div className="page-header">
            <h1 className="page-title">{t.news.title}</h1>
            <p className="page-description">{t.news.description}</p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <SearchInput
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder={t.news.search}
              />
            </div>
            <div className="md:flex-shrink-0">
              <CategoryFilter
                categories={newsCategories}
                activeCategory={activeCategory}
                onCategoryChange={handleCategoryChange}
              />
            </div>
          </div>

          {/* News Grid */}
          {paginatedNews.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {paginatedNews.map((news, index) => (
                  <div 
                    key={news.id} 
                    className="animate-slide-up" 
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <NewsCard news={news} />
                  </div>
                ))}
              </div>

              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              )}
            </>
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
