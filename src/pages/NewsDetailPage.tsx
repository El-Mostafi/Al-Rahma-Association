import { useParams, Link } from "react-router-dom";
import {
  CalendarDays,
  User,
  MapPin,
  Clock,
  Tag,
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
} from "lucide-react";
import { NEWS_DATA, NewsItem } from "../data/news";

/**
 * صفحة تفاصيل الخبر
 */
function NewsDetailPage() {
  const { id } = useParams<{ id: string }>();
  const newsItem = NEWS_DATA.find((item: NewsItem) => item.id === Number(id));

  if (!newsItem) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#FAF8F3] to-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#2D5F3F] mb-4">
            الخبر غير موجود
          </h1>
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-[#2D5F3F] hover:text-[#C9A961] font-semibold transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>العودة إلى الأخبار</span>
          </Link>
        </div>
      </div>
    );
  }

  const relatedNews = NEWS_DATA.filter(
    (item: NewsItem) =>
      item.category === newsItem.category && item.id !== newsItem.id
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF8F3] to-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-[#2D5F3F] transition-colors">
              الرئيسية
            </Link>
            <span>/</span>
            <Link to="/news" className="hover:text-[#2D5F3F] transition-colors">
              الأخبار
            </Link>
            <span>/</span>
            <span className="text-[#2D5F3F] font-semibold">
              {newsItem.title}
            </span>
          </div>
        </div>
      </div>

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Article Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2D5F3F] to-[#C9A961] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Tag className="w-4 h-4" />
            {newsItem.category}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#2D5F3F] mb-6 leading-tight">
            {newsItem.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <CalendarDays className="w-5 h-5 text-[#C9A961]" />
              <span>{newsItem.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-[#C9A961]" />
              <span>{newsItem.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#C9A961]" />
              <span>{newsItem.readTime}</span>
            </div>
            {newsItem.location && (
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#C9A961]" />
                <span>{newsItem.location}</span>
              </div>
            )}
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-4 pb-6 border-b border-gray-200">
            <span className="text-gray-600 font-semibold">مشاركة:</span>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300">
              <Facebook className="w-4 h-4" />
              <span className="text-sm">فيسبوك</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors duration-300">
              <Twitter className="w-4 h-4" />
              <span className="text-sm">تويتر</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-300">
              <Share2 className="w-4 h-4" />
              <span className="text-sm">نسخ الرابط</span>
            </button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-[500px] rounded-2xl overflow-hidden mb-12 shadow-2xl">
          <img
            src={newsItem.image}
            alt={newsItem.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-gradient-to-r from-[#2D5F3F]/5 to-transparent border-r-4 border-[#C9A961] p-6 rounded-lg mb-8">
            <p className="text-xl text-gray-700 leading-relaxed font-semibold">
              {newsItem.description}
            </p>
          </div>

          <div className="text-gray-700 leading-relaxed space-y-6 text-lg">
            {newsItem.fullContent
              .split("\n")
              .map((paragraph: string, index: number) => (
                <p key={index} className="leading-loose">
                  {paragraph}
                </p>
              ))}
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-[#2D5F3F] hover:text-[#C9A961] font-semibold text-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>العودة إلى جميع الأخبار</span>
          </Link>
        </div>

        {/* Related News */}
        {relatedNews.length > 0 && (
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-[#2D5F3F] mb-8">
              أخبار ذات صلة
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedNews.map((item: NewsItem) => (
                <Link
                  key={item.id}
                  to={`/news/${item.id}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-3 right-3 flex items-center text-white text-xs bg-black/40 backdrop-blur-sm px-2 py-1 rounded">
                      <CalendarDays className="ml-1 h-3 w-3" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-[#2D5F3F] mb-2 leading-tight group-hover:text-[#C9A961] transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}

export default NewsDetailPage;
