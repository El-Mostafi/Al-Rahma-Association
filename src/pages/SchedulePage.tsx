import { Link } from "react-router-dom";
import { Calendar, MapPin, Clock, BookOpen, Sparkles } from "lucide-react";
import { SHEIKHS_DATA } from "../data/sheikhs";

/**
 * صفحة البرنامج الأسبوعي - عرض الجدول الزمني لجميع المشايخ
 */
function SchedulePage() {
  // جمع جميع الدروس من كل المشايخ مع معلومات الشيخ
  const allLessons = SHEIKHS_DATA.flatMap((sheikh) =>
    sheikh.lessons.map((lesson) => ({
      ...lesson,
      sheikhId: sheikh.id,
      sheikhName: sheikh.name,
      sheikhImage: sheikh.image,
      sheikhTitle: sheikh.title,
    }))
  );

  // ترتيب الدروس حسب اليوم
  const daysOrder = [
    "الأحد",
    "الإثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
    "السبت",
  ];

  const lessonsByDay = daysOrder.map((day) => ({
    day,
    lessons: allLessons.filter((lesson) => lesson.day === day && lesson.active),
  }));

  // صور افتراضية للدروس حسب الموضوع
  const getLessonImage = (subject: string) => {
    if (subject.includes("صحيح البخاري") || subject.includes("الحديث"))
      return "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=400&h=300&fit=crop";
    if (
      subject.includes("القرآن") ||
      subject.includes("التفسير") ||
      subject.includes("تحفيظ")
    )
      return "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=400&h=300&fit=crop";
    if (subject.includes("الفقه"))
      return "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=300&fit=crop";
    if (subject.includes("العقيدة") || subject.includes("التوحيد"))
      return "https://images.unsplash.com/photo-1585909695284-32d2985ac9c0?w=400&h=300&fit=crop";
    if (subject.includes("التجويد"))
      return "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=400&h=300&fit=crop";
    return "https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?w=400&h=300&fit=crop";
  };

  return (
    <div className="bg-[#FAF8F3] min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#2D5F3F] to-[#4A5C3A] text-white py-16 relative overflow-hidden">
        <div className="islamic-pattern absolute inset-0 opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4">
              <span className="text-[#C9A961] font-bold text-sm tracking-wider uppercase">
                برنامجنا الأسبوعي
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              جدول الدروس الأسبوعي
            </h1>
            <p className="text-xl text-gray-200">
              جميع الدروس والمحاضرات المقامة في جمعية الرحمة
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Schedule by Day */}
          <div className="space-y-12">
            {lessonsByDay.map((dayData) => (
              <div key={dayData.day}>
                {dayData.lessons.length > 0 && (
                  <div className="relative">
                    {/* Day Header */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className="flex items-center gap-3 bg-gradient-to-r from-[#2D5F3F] to-[#4A5C3A] text-white px-8 py-4 rounded-2xl shadow-lg">
                        <Calendar className="w-7 h-7" />
                        <h2 className="text-3xl font-bold">{dayData.day}</h2>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-[#C9A961] to-transparent"></div>
                    </div>

                    {/* Lessons Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {dayData.lessons.map((lesson) => (
                        <div
                          key={lesson.id}
                          className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                        >
                          {/* Lesson Image */}
                          <div className="relative h-48 overflow-hidden">
                            <img
                              src={getLessonImage(lesson.subject)}
                              alt={lesson.subject}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                            {/* Type Badge */}
                            <div className="absolute top-4 right-4">
                              <span
                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-md ${
                                  lesson.type === "public"
                                    ? "bg-emerald-500/90 text-white"
                                    : "bg-amber-500/90 text-white"
                                }`}
                              >
                                <Sparkles className="w-3 h-3" />
                                {lesson.type === "public"
                                  ? "مفتوح للجميع"
                                  : "خاص"}
                              </span>
                            </div>

                            {/* Sheikh Info Overlay */}
                            <Link
                              to={`/sheikhs/${lesson.sheikhId}`}
                              className="absolute bottom-3 left-3 right-3 flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-xl p-3 transition-all duration-300 group-hover:bg-white"
                            >
                              <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#C9A961] flex-shrink-0">
                                {lesson.sheikhImage ? (
                                  <img
                                    src={lesson.sheikhImage}
                                    alt={lesson.sheikhName}
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <div className="w-full h-full bg-gradient-to-br from-[#2D5F3F] to-[#4A5C3A] flex items-center justify-center text-white font-bold">
                                    {lesson.sheikhName[0]}
                                  </div>
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-bold text-[#2D5F3F] truncate">
                                  {lesson.sheikhName}
                                </p>
                                <p className="text-xs text-gray-600 truncate">
                                  {lesson.sheikhTitle}
                                </p>
                              </div>
                            </Link>
                          </div>

                          {/* Content */}
                          <div className="p-6">
                            <h3 className="text-xl font-bold text-[#2D5F3F] mb-3 leading-tight group-hover:text-[#C9A961] transition-colors">
                              {lesson.subject}
                            </h3>

                            {lesson.description && (
                              <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                                {lesson.description}
                              </p>
                            )}

                            {/* Details */}
                            <div className="space-y-2.5">
                              <div className="flex items-center gap-2.5 text-sm">
                                <div className="w-8 h-8 rounded-lg bg-[#2D5F3F]/10 flex items-center justify-center flex-shrink-0">
                                  <Clock className="w-4 h-4 text-[#2D5F3F]" />
                                </div>
                                <span className="text-gray-700 font-medium">
                                  {lesson.time}
                                </span>
                              </div>
                              <div className="flex items-center gap-2.5 text-sm">
                                <div className="w-8 h-8 rounded-lg bg-[#8B4513]/10 flex items-center justify-center flex-shrink-0">
                                  <MapPin className="w-4 h-4 text-[#8B4513]" />
                                </div>
                                <span className="text-gray-700 font-medium">
                                  {lesson.location}
                                </span>
                              </div>
                            </div>

                            {/* Hover Action */}
                            <div className="mt-4 pt-4 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <Link
                                to={`/sheikhs/${lesson.sheikhId}`}
                                className="flex items-center justify-center gap-2 text-[#2D5F3F] hover:text-[#C9A961] font-semibold text-sm transition-colors"
                              >
                                <BookOpen className="w-4 h-4" />
                                <span>المزيد عن الشيخ</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* View Sheikhs Button */}
          <div className="text-center mt-12">
            <Link
              to="/sheikhs"
              className="inline-block bg-[#2D5F3F] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1F4229] transition-colors shadow-lg"
            >
              عرض جميع المشايخ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchedulePage;
