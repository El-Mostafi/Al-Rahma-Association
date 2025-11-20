import { Link } from "react-router-dom";
import { BookOpen, Calendar } from "lucide-react";
import { SHEIKHS_DATA } from "../data/sheikhs";

/**
 * صفحة قائمة المشايخ - عرض جميع المشايخ في الجمعية
 */
function SheikhsPage() {
  return (
    <div className="bg-[#FAF8F3]">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#2D5F3F] to-[#4A5C3A] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              دعاة ومشايخ الجمعية
            </h1>
            <p className="text-xl text-gray-200">
              نخبة من الدعاة والمشايخ الأفاضل الذين يشرفون على برامج الجمعية
              العلمية والتربوية
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {SHEIKHS_DATA.map((sheikh) => (
              <div
                key={sheikh.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="md:flex">
                  {/* صورة الشيخ */}
                  <div className="md:w-1/3 relative">
                    {sheikh.image ? (
                      <img
                        src={sheikh.image}
                        alt={sheikh.name}
                        className="w-full h-full object-cover min-h-[300px]"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#2D5F3F] to-[#4A5C3A] flex items-center justify-center min-h-[300px]">
                        <span className="text-6xl text-white">
                          {sheikh.name[0]}
                        </span>
                      </div>
                    )}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-[#C9A961] text-white rounded-full text-xs font-semibold">
                        {sheikh.lessons.length} دروس
                      </span>
                    </div>
                  </div>

                  {/* معلومات الشيخ */}
                  <div className="md:w-2/3 p-6">
                    <div className="mb-3">
                      <span className="text-sm text-[#8B4513] font-semibold">
                        {sheikh.title}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-[#2D5F3F] mb-3">
                      الشيخ {sheikh.name}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                      {sheikh.bio}
                    </p>

                    {/* إحصائيات سريعة */}
                    <div className="flex gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-1 text-gray-600">
                        <Calendar className="w-4 h-4 text-[#8B4513]" />
                        <span>
                          {
                            sheikh.lessons.filter((l) => l.type === "public")
                              .length
                          }{" "}
                          دروس مفتوحة
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <BookOpen className="w-4 h-4 text-[#C9A961]" />
                        <span>
                          {
                            sheikh.lessons.filter((l) => l.type === "private")
                              .length
                          }{" "}
                          دروس خاصة
                        </span>
                      </div>
                    </div>

                    {/* زر عرض البروفايل */}
                    <Link
                      to={`/sheikhs/${sheikh.id}`}
                      className="inline-block bg-[#2D5F3F] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#1F4229] transition-colors"
                    >
                      عرض البروفايل الكامل
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SheikhsPage;
