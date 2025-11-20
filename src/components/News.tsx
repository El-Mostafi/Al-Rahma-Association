import { ArrowLeft, CalendarDays, Sparkles } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

interface NewsItem {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  category: string;
}

function News() {
  const news: NewsItem[] = [
    {
      id: 1,
      title: "الدورة العلمية السنوية في شرح صحيح البخاري",
      description:
        "يسر جمعية الرحمة أن تعلن عن انطلاق الدورة العلمية السنوية في شرح صحيح البخاري بإشراف فضيلة الشيخ موسى الدخيلة",
      date: "15 ربيع الأول 1446",
      image:
        "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=800&h=600&fit=crop",
      category: "دورات علمية",
    },
    {
      id: 2,
      title: "مشروع كفالة الأيتام - المرحلة الثانية",
      description:
        "بفضل الله وبتوفيقه، نعلن عن إطلاق المرحلة الثانية من مشروع كفالة الأيتام لدعم 50 يتيمًا إضافيًا",
      date: "10 ربيع الأول 1446",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop",
      category: "مشاريع اجتماعية",
    },
    {
      id: 3,
      title: "برنامج تحفيظ القرآن الكريم للأطفال",
      description:
        "انطلاق التسجيل في برنامج تحفيظ القرآن الكريم للأطفال من سن 6 إلى 14 سنة بمقر الجمعية",
      date: "5 ربيع الأول 1446",
      image:
        "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=800&h=600&fit=crop",
      category: "برامج تربوية",
    },
    {
      id: 4,
      title: "محاضرة عن السيرة النبوية",
      description:
        "محاضرة قيمة عن السيرة النبوية العطرة وأثرها في بناء الشخصية المسلمة",
      date: "1 ربيع الأول 1446",
      image:
        "https://images.unsplash.com/photo-1585909695284-32d2985ac9c0?w=800&h=600&fit=crop",
      category: "محاضرات",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#FAF8F3] to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&h=1080&fit=crop')] opacity-5 bg-cover bg-center" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#2D5F3F]/10 px-6 py-2 rounded-full mb-4">
            <Sparkles className="h-5 w-5 text-[#C9A961]" />
            <span className="text-[#2D5F3F] font-semibold">أحدث الأخبار</span>
          </div>
          <h2 className="text-5xl font-bold text-[#2D5F3F] mb-4">
            آخر الأخبار والفعاليات
          </h2>
          <p className="text-[#8B4513] text-xl max-w-2xl mx-auto">
            تابع جديد أنشطة وفعاليات جمعية الرحمة
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={800}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-16"
        >
          {news.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  <span className="absolute top-4 right-4 bg-gradient-to-r from-[#2D5F3F] to-[#C9A961] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    {item.category}
                  </span>

                  <div className="absolute bottom-4 right-4 flex items-center text-white text-sm bg-black/40 backdrop-blur-sm px-3 py-2 rounded-lg">
                    <CalendarDays className="ml-2 h-4 w-4" />
                    <span>{item.date}</span>
                  </div>
                </div>

                <div className="p-6 relative">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#2D5F3F] to-[#C9A961] rounded-full" />

                  <h3 className="text-xl font-bold text-[#2D5F3F] mb-4 leading-relaxed hover:text-[#C9A961] transition-colors duration-300 min-h-[4rem]">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed text-sm min-h-[6rem]">
                    {item.description}
                  </p>

                  <button className="group/btn flex items-center justify-center w-full gap-2 text-[#2D5F3F] font-semibold bg-[#2D5F3F]/5 hover:bg-[#2D5F3F] hover:text-white py-3 rounded-xl transition-all duration-300 border-2 border-[#2D5F3F]/20 hover:border-[#2D5F3F]">
                    <span>اقرأ المزيد</span>
                    <ArrowLeft className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-12">
          <Link
            to="/news"
            className="group inline-flex items-center gap-2 text-[#2D5F3F] hover:text-[#C9A961] font-semibold text-lg transition-colors duration-300"
          >
            <span>عرض جميع الأخبار</span>
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>

      <style>{`
        .swiper-pagination-bullet {
          background: #C9A961;
          opacity: 0.5;
          width: 12px;
          height: 12px;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #2D5F3F;
          width: 32px;
          border-radius: 6px;
        }
      `}</style>
    </section>
  );
}

export default News;
