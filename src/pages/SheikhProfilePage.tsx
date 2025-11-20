import { useParams, Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Youtube,
  Globe,
  BookOpen,
  Calendar,
  MapPin,
  Clock,
  ChevronRight,
} from "lucide-react";
import { SHEIKHS_DATA } from "../data/sheikhs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image5 from "../images/associationImage5.png";


/**
 * صفحة البروفايل الشخصي للشيخ
 * تصميم احترافي وعصري مع تخطيط نظيف وسلس
 */
function SheikhProfilePage() {
  const { id } = useParams<{ id: string }>();
  const sheikh = SHEIKHS_DATA.find((s) => s.id.toString() === id);

  if (!sheikh) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FAF8F3] to-white flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#2D5F3F] mb-4">
            الشيخ غير موجود
          </h1>
          <Link
            to="/sheikhs"
            className="inline-flex items-center gap-2 text-[#8B4513] hover:text-[#6D3410] font-semibold transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
            العودة لقائمة المشايخ
          </Link>
        </div>
      </div>
    );
  }

  const publicLessons = sheikh.lessons.filter((l) => l.type === "public");
  const privateLessons = sheikh.lessons.filter((l) => l.type === "private");

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8F3] via-white to-[#FAF8F3]">
      {/* Hero Header - Modern & Clean */}
      <div className="relative bg-white border-b border-gray-100">
        {/* Background Gradient Accent */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#2D5F3F]/5 via-transparent to-transparent" />

        <div className="container mx-auto px-4 py-16 relative">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-10 items-start">
              {/* صورة الشيخ - Modern Card Style */}
              <div className="flex-shrink-0">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-br from-[#C9A961] to-[#8B4513] rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
                  <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden bg-white shadow-xl">
                    {sheikh.image ? (
                      <img
                        src={sheikh.image}
                        alt={sheikh.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#2D5F3F] to-[#4A5C3A] flex items-center justify-center">
                        <span className="text-6xl text-white font-bold">
                          {sheikh.name[0]}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* معلومات الشيخ - Clean Typography */}
              <div className="flex-1 min-w-0">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#2D5F3F]/10 rounded-full mb-4">
                  <span className="text-[#2D5F3F] font-semibold text-sm">
                    {sheikh.title}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-[#2D5F3F] mb-4 leading-tight">
                  الشيخ {sheikh.name}
                </h1>

                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6 max-w-2xl">
                  {sheikh.bio}
                </p>

                {/* Social Media - Minimal & Clean */}
                {sheikh.socialMedia && (
                  <div className="flex gap-2">
                    {sheikh.socialMedia.facebook && (
                      <a
                        href={sheikh.socialMedia.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-xl bg-gray-100 hover:bg-[#2D5F3F] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300"
                        aria-label="فيسبوك"
                      >
                        <Facebook className="w-5 h-5" />
                      </a>
                    )}
                    {sheikh.socialMedia.twitter && (
                      <a
                        href={sheikh.socialMedia.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-xl bg-gray-100 hover:bg-[#2D5F3F] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300"
                        aria-label="تويتر"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                    {sheikh.socialMedia.youtube && (
                      <a
                        href={sheikh.socialMedia.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-xl bg-gray-100 hover:bg-[#2D5F3F] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300"
                        aria-label="يوتيوب"
                      >
                        <Youtube className="w-5 h-5" />
                      </a>
                    )}
                    {sheikh.socialMedia.website && (
                      <a
                        href={sheikh.socialMedia.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-xl bg-gray-100 hover:bg-[#2D5F3F] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300"
                        aria-label="الموقع الإلكتروني"
                      >
                        <Globe className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section - Modern Layout */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* نبذة عن الشيخ - Full Width Clean Card */}
          {sheikh.fullBio && (
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#2D5F3F]/10 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-[#2D5F3F]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#2D5F3F]">
                  نبذة عن الشيخ
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                {sheikh.fullBio}
              </p>
            </section>
          )}

          {/* الدروس المفتوحة - Islamic Science Course Design */}
          {publicLessons.length > 0 && (
            <section className="relative">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-1.5 h-8 bg-gradient-to-b from-[#2D5F3F] to-[#C9A961] rounded-full" />
                  <h2 className="text-3xl md:text-4xl font-bold text-[#2D5F3F]">
                    الدروس المفتوحة
                  </h2>
                </div>
                <p className="text-gray-600 text-lg mr-6">
                  دروس مفتوحة للجميع، يمكن لأي شخص حضورها
                </p>
              </div>

              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={28}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 1, spaceBetween: 24 },
                  768: { slidesPerView: 2, spaceBetween: 28 },
                  1024: { slidesPerView: 2, spaceBetween: 32 },
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                className="public-lessons-swiper pb-12"
              >
                {publicLessons.map((lesson, index) => (
                  <SwiperSlide key={lesson.id}>
                    <div className="group relative h-full">
                      {/* Main Card */}
                      <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 border-2 border-[#2D5F3F]/10 hover:border-[#2D5F3F]/30 h-full min-h-[500px] flex flex-col">
                        {/* Course Image with Modern Islamic Design */}
                        <div className="relative h-48 overflow-hidden">
                          {/* Background Image */}
                          <img
                            src={`https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=600&h=400&fit=crop&q=80&seed=${index}`}
                            alt={lesson.subject}
                            className="absolute inset-0 w-full h-full object-cover"
                          />

                          {/* Dark overlay for text readability only at bottom */}
                          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />

                          {/* Top Ornament Line */}
                          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#C9A961] via-[#D4AF37] to-[#C9A961] shadow-sm" />


                          {/* Day Badge */}
                          <div className="absolute top-6 left-6 z-10">
                            <div className="relative group/badge">
                              <div className="absolute inset-0 bg-[#C9A961] rounded-2xl blur-lg opacity-50 group-hover/badge:opacity-70 transition-opacity" />
                              <div className="relative px-5 py-2.5 bg-white/95 backdrop-blur-md border-2 border-[#C9A961]/40 rounded-2xl shadow-lg">
                                <div className="flex items-center gap-2">
                                  <Calendar className="w-4 h-4 text-[#2D5F3F]" />
                                  <span className="text-sm font-bold text-[#2D5F3F]">
                                    {lesson.day}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-8 flex flex-col flex-1">
                          {/* Title */}
                          <h3 className="text-2xl font-bold text-[#2D5F3F] leading-tight mb-4 group-hover:text-[#1a5c3a] transition-colors line-clamp-2 min-h-[3.5rem]">
                            {lesson.subject}
                          </h3>

                          {/* Decorative Divider */}
                          <div className="h-px bg-gradient-to-r from-[#C9A961] via-[#C9A961]/50 to-transparent mb-5" />

                          {/* Description */}
                          <p className="text-gray-700 leading-relaxed mb-6 text-base line-clamp-3 min-h-[4.5rem]">
                            {lesson.description || "درس في العلوم الشرعية"}
                          </p>

                          {/* Meta Information */}
                          <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2D5F3F]/10 to-[#2D5F3F]/5 flex items-center justify-center">
                                <Clock className="w-5 h-5 text-[#2D5F3F]" />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-xs text-gray-500 font-medium">
                                  الوقت
                                </span>
                                <span className="text-sm font-bold text-gray-800">
                                  {lesson.time}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2D5F3F]/10 to-[#2D5F3F]/5 flex items-center justify-center">
                                <MapPin className="w-5 h-5 text-[#2D5F3F]" />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-xs text-gray-500 font-medium">
                                  المكان
                                </span>
                                <span className="text-sm font-bold text-gray-800">
                                  {lesson.location}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Bottom Ornament */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C9A961]/40 to-transparent" />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </section>
          )}

          {/* الدروس الخاصة - Islamic Science Course Design */}
          {privateLessons.length > 0 && (
            <section className="relative">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-1.5 h-8 bg-gradient-to-b from-[#8B4513] to-[#C9A961] rounded-full" />
                  <h2 className="text-3xl md:text-4xl font-bold text-[#2D5F3F]">
                    الدروس الخاصة
                  </h2>
                </div>
                <p className="text-gray-600 text-lg mr-6">
                  دروس خاصة لطلبة العلم المتقدمين
                </p>
              </div>

              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={28}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 1, spaceBetween: 24 },
                  768: { slidesPerView: 2, spaceBetween: 28 },
                  1024: { slidesPerView: 2, spaceBetween: 32 },
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5500, disableOnInteraction: false }}
                className="private-lessons-swiper pb-12"
              >
                {privateLessons.map((lesson) => (
                  <SwiperSlide key={lesson.id}>
                    <div className="group relative h-full">
                      {/* Main Card */}
                      <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 border-2 border-[#8B4513]/10 hover:border-[#8B4513]/30 h-full min-h-[500px] flex flex-col">
                        {/* Course Image with Modern Islamic Design */}
                        <div className="relative h-48 overflow-hidden">
                          {/* Background Image */}
                          <img
                            src={Image5}
                            alt={lesson.subject}
                            className="absolute inset-0 w-full h-full object-cover"
                          />

                          {/* Dark overlay for text readability only at bottom */}
                          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />

                          {/* Top Ornament Line */}
                          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#C9A961] via-[#D4AF37] to-[#C9A961] shadow-sm" />

                          {/* Decorative Corner Frames */}

                          {/* Day Badge */}
                          <div className="absolute top-6 left-6 z-10">
                            <div className="relative group/badge">
                              <div className="absolute inset-0 bg-[#C9A961] rounded-2xl blur-lg opacity-50 group-hover/badge:opacity-70 transition-opacity" />
                              <div className="relative px-5 py-2.5 bg-white/95 backdrop-blur-md border-2 border-[#C9A961]/40 rounded-2xl shadow-lg">
                                <div className="flex items-center gap-2">
                                  <Calendar className="w-4 h-4 text-[#8B4513]" />
                                  <span className="text-sm font-bold text-[#8B4513]">
                                    {lesson.day}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-8 flex flex-col flex-1">
                          {/* Title */}
                          <h3 className="text-2xl font-bold text-[#8B4513] leading-tight mb-4 group-hover:text-[#6D3410] transition-colors line-clamp-2 min-h-[3.5rem]">
                            {lesson.subject}
                          </h3>

                          {/* Decorative Divider */}
                          <div className="h-px bg-gradient-to-r from-[#C9A961] via-[#C9A961]/50 to-transparent mb-5" />

                          {/* Description */}
                          <p className="text-gray-700 leading-relaxed mb-6 text-base line-clamp-3 min-h-[4.5rem]">
                            {lesson.description || "درس خاص لطلبة العلم"}
                          </p>

                          {/* Meta Information */}
                          <div className="flex flex-wrap gap-4 mt-auto">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8B4513]/10 to-[#8B4513]/5 flex items-center justify-center">
                                <Clock className="w-5 h-5 text-[#8B4513]" />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-xs text-gray-500 font-medium">
                                  الوقت
                                </span>
                                <span className="text-sm font-bold text-gray-800">
                                  {lesson.time}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8B4513]/10 to-[#8B4513]/5 flex items-center justify-center">
                                <MapPin className="w-5 h-5 text-[#8B4513]" />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-xs text-gray-500 font-medium">
                                  المكان
                                </span>
                                <span className="text-sm font-bold text-gray-800">
                                  {lesson.location}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Bottom Ornament */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C9A961]/40 to-transparent" />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </section>
          )}

          {/* الكتب والمؤلفات - Islamic Book Design */}
          {sheikh.books && sheikh.books.length > 0 && (
            <section className="relative">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-1.5 h-8 bg-gradient-to-b from-[#8B4513] to-[#C9A961] rounded-full" />
                  <h2 className="text-3xl md:text-4xl font-bold text-[#2D5F3F]">
                    الكتب والمؤلفات
                  </h2>
                </div>
                <p className="text-gray-600 text-lg mr-6">
                  مؤلفات وكتب الشيخ في العلوم الشرعية
                </p>
              </div>

              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                breakpoints={{
                  480: { slidesPerView: 2, spaceBetween: 20 },
                  768: { slidesPerView: 2, spaceBetween: 24 },
                  1024: { slidesPerView: 3, spaceBetween: 28 },
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                className="books-swiper pb-12"
              >
                {sheikh.books.map((book, index) => (
                  <SwiperSlide key={index}>
                    <div className="group relative h-full">
                      {/* Book Card - Islamic Science Book Design */}
                      <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-full min-h-[480px] border-2 border-[#8B4513]/10 hover:border-[#C9A961]/40 flex flex-col">
                        {/* Book Cover Section with Fixed Height */}
                        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#8B4513] to-[#6D3410]">
                          {/* Background Image */}
                          <img
                            src={`http://taaseel.com/gallery/prog/11.jpg`}
                            alt={book.title}
                            className="absolute inset-0 w-full h-full object-cover"
                          />


                          {/* Top Gold Line */}
                          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A961] via-[#D4AF37] to-[#C9A961]" />

                          {/* Decorative Corners */}

                          {/* Category Badge */}
                          <div className="absolute top-4 right-4 z-10">
                            <div className="px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full border border-[#C9A961]/50 shadow-lg">
                              <span className="text-xs font-bold text-[#8B4513]">
                                {book.category}
                              </span>
                            </div>
                          </div>

                          
                        </div>

                        {/* Content Section with Flexible Height */}
                        <div className="p-6 flex flex-col flex-1">
                          {/* Book Title */}
                          <h3 className="text-xl font-bold text-[#2D5F3F] leading-tight mb-3 line-clamp-2 min-h-[3.5rem] group-hover:text-[#1a4d2e] transition-colors">
                            {book.title}
                          </h3>

                          {/* Decorative Divider */}
                          <div className="h-px bg-gradient-to-r from-[#C9A961] via-[#C9A961]/50 to-transparent mb-4" />

                          {/* Description */}
                          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2 flex-grow">
                            {book.description}
                          </p>

                          {/* Book Info - Fixed at Bottom */}
                          <div className="flex items-center justify-between gap-3 pt-4 border-t border-gray-100 mt-auto">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-lg bg-[#2D5F3F]/10 flex items-center justify-center">
                                <svg
                                  className="w-4 h-4 text-[#2D5F3F]"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                  />
                                </svg>
                              </div>
                              <div>
                                <div className="text-xs text-gray-500">
                                  عدد الصفحات
                                </div>
                                <div className="text-sm font-bold text-gray-800">
                                  {book.pages}
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-lg bg-[#8B4513]/10 flex items-center justify-center">
                                <Calendar className="w-4 h-4 text-[#8B4513]" />
                              </div>
                              <div>
                                <div className="text-xs text-gray-500">
                                  سنة النشر
                                </div>
                                <div className="text-sm font-bold text-gray-800">
                                  {book.year}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Bottom Gold Line */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C9A961]/60 to-transparent" />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export default SheikhProfilePage;
