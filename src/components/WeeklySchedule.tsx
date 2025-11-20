import { Link } from "react-router-dom";
import { Calendar, MapPin, Clock, Sparkles, ArrowLeft } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { SHEIKHS_DATA } from "../data/sheikhs";

function WeeklySchedule() {
  // جمع الدروس من جميع المشايخ (فقط الدروس المفتوحة للعرض السريع)
  const publicLessons = SHEIKHS_DATA.flatMap((sheikh) =>
    sheikh.lessons
      .filter((lesson) => lesson.type === "public" && lesson.active)
      .map((lesson) => ({
        ...lesson,
        sheikhName: sheikh.name,
        sheikhImage: sheikh.image,
      }))
  ).slice(0, 6); // نعرض فقط 6 دروس في الصفحة الرئيسية

  return (
    <section className="py-20 bg-[#FAF8F3] relative overflow-hidden">
      <div className="islamic-pattern absolute inset-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#2D5F3F]/10 px-6 py-2 rounded-full mb-4">
            <Sparkles className="h-5 w-5 text-[#C9A961]" />
            <span className="text-[#2D5F3F] font-semibold">
              برنامجنا الأسبوعي
            </span>
          </div>

          <h2 className="text-5xl font-bold text-[#2D5F3F] mb-4">
            جدول الدروس الأسبوعي
          </h2>

          <p className="text-[#8B4513] text-xl max-w-2xl mx-auto">
            دروس علمية منتظمة في العلوم الشرعية
          </p>
        </div>

        <div className="mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={false}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-16"
          >
            {publicLessons.map((lesson) => (
              <SwiperSlide key={lesson.id}>
                <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=800&h=400&fit=crop`}
                      alt={lesson.subject}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                    <span className="absolute top-4 right-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                      <Sparkles className="h-4 w-4" />
                      درس مفتوح
                    </span>

                    <div className="absolute bottom-4 right-4 flex items-center gap-3">
                      {lesson.sheikhImage && (
                        <img
                          src={lesson.sheikhImage}
                          alt={lesson.sheikhName}
                          className="w-12 h-12 rounded-full object-cover ring-2 ring-[#C9A961] shadow-lg"
                        />
                      )}
                      <div className="text-white">
                        <p className="text-xs opacity-90">الشيخ</p>
                        <p className="font-bold">{lesson.sheikhName}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2D5F3F] to-[#C9A961] flex items-center justify-center shadow-lg">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">اليوم</p>
                        <h3 className="text-xl font-bold text-[#2D5F3F]">
                          {lesson.day}
                        </h3>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="bg-gradient-to-r from-[#2D5F3F]/5 to-transparent rounded-lg p-3 border-r-4 border-[#C9A961]">
                        <p className="text-xs text-gray-500 mb-1">المادة</p>
                        <p className="text-gray-900 font-bold leading-relaxed">
                          {lesson.subject}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 text-gray-700 bg-gray-50 rounded-lg p-3">
                        <MapPin className="w-5 h-5 text-[#C9A961] flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-gray-500">المكان</p>
                          <p className="font-semibold truncate">
                            {lesson.location}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-gray-700 bg-gray-50 rounded-lg p-3">
                        <Clock className="w-5 h-5 text-[#C9A961] flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-xs text-gray-500">التوقيت</p>
                          <p className="font-semibold" dir="ltr">
                            {lesson.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* زر عرض البرنامج الكامل */}
          <div className="text-center mt-16">
            <Link
              to="/schedule"
              className="group inline-flex items-center gap-2 text-[#2D5F3F] hover:text-[#C9A961] font-semibold text-lg transition-colors duration-300"
            >
              <span>عرض البرنامج الأسبوعي الكامل</span>
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .swiper-pagination-bullet {
          background: #C9A961;
          opacity: 0.5;
          width: 10px;
          height: 10px;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #2D5F3F;
          width: 28px;
          border-radius: 5px;
        }
      `}</style>
    </section>
  );
}

export default WeeklySchedule;
