import React from "react";
import { Link } from "react-router-dom";
import {
  CalendarDays,
  User,
  MapPin,
  Tag,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { NEWS_DATA } from "../data/news";

/**
 * صفحة الأخبار - عرض جميع أخبار الجمعية مع pagination
 */
function NewsPage() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(NEWS_DATA.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNews = NEWS_DATA.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF8F3] to-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#2D5F3F] to-[#8B4513] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              الأخبار والفعاليات
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              تابع آخر أخبار وفعاليات جمعية الرحمة للتربية والتنمية
            </p>
          </div>
        </div>
      </div>

      {/* News Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {currentNews.map((item) => (
            <Link
              key={item.id}
              to={`/news/${item.id}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <span className="absolute top-4 right-4 bg-gradient-to-r from-[#2D5F3F] to-[#C9A961] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  {item.category}
                </span>

                <div className="absolute bottom-4 right-4 flex items-center text-white text-sm bg-black/40 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <CalendarDays className="ml-2 h-4 w-4" />
                  <span>{item.date}</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-[#2D5F3F] mb-4 leading-tight group-hover:text-[#C9A961] transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed flex-1">
                  {item.description}
                </p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <User className="w-4 h-4 text-[#C9A961]" />
                    <span>{item.author}</span>
                  </div>
                  {item.location && (
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="w-4 h-4 text-[#C9A961]" />
                      <span>{item.location}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4 text-[#C9A961]" />
                    <span>وقت القراءة: {item.readTime}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 mt-auto">
                  <div className="flex items-center justify-between text-[#2D5F3F] font-semibold group-hover:text-[#C9A961] transition-colors">
                    <span>اقرأ التفاصيل</span>
                    <ChevronLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="الصفحة السابقة"
              className="p-2 rounded-lg border-2 border-gray-300 hover:border-[#2D5F3F] hover:bg-[#2D5F3F] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 rounded-lg font-semibold transition-all duration-300 ${
                  currentPage === page
                    ? "bg-gradient-to-r from-[#2D5F3F] to-[#C9A961] text-white shadow-lg"
                    : "border-2 border-gray-300 hover:border-[#2D5F3F] hover:bg-[#2D5F3F] hover:text-white"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="الصفحة التالية"
              className="p-2 rounded-lg border-2 border-gray-300 hover:border-[#2D5F3F] hover:bg-[#2D5F3F] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Page Info */}
        <p className="text-center mt-4 text-gray-600">
          صفحة {currentPage} من {totalPages} - عرض {currentNews.length} من{" "}
          {NEWS_DATA.length} خبر
        </p>
      </div>
    </div>
  );
}

export default NewsPage;
