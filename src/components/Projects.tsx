import {
  Heart,
  TrendingUp,
  Users,
  BookOpen,
  Lightbulb,
  Home,
  Sparkles,
  ArrowLeft,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import associationImage5 from "../images/associationImage5.png";

interface Project {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
  stats?: string;
}

function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "كفالة الأيتام",
      description: "رعاية ودعم الأيتام وتوفير احتياجاتهم الأساسية والتعليمية",
      icon: "heart",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop",
      stats: "+120 يتيم",
    },
    {
      id: 2,
      title: "المشاريع التنموية",
      description: "تنفيذ مشاريع تنموية تساهم في تحسين أوضاع الأسر المحتاجة",
      icon: "trending",
      image:
        "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&h=600&fit=crop",
      stats: "+50 مشروع",
    },
    {
      id: 3,
      title: "الدروس التربوية",
      description: "برامج تربوية وتعليمية لجميع الفئات العمرية",
      icon: "users",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
      stats: "+300 طالب",
    },
    {
      id: 4,
      title: "المكتبة الإسلامية",
      description: "مكتبة غنية بالكتب والمراجع الإسلامية الأصيلة",
      icon: "book",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop",
      stats: "+5000 كتاب",
    },
    {
      id: 5,
      title: "الدورات العلمية",
      description: "دورات علمية متخصصة في العلوم الشرعية",
      icon: "lightbulb",
      image: associationImage5,
      stats: "+40 دورة",
    },
    {
      id: 6,
      title: "الإغاثة الاجتماعية",
      description: "مساعدة الأسر المتعففة وتقديم الدعم المادي والمعنوي",
      icon: "home",
      image:
        "https://ghaith.org.sa/web/image/16798-8115424b/IMG_1152.jpg?w=800&h=600&fit=crop",
      stats: "+200 أسرة",
    },
  ];

  const getIcon = (iconName: string) => {
    const iconClass = "w-8 h-8";
    switch (iconName) {
      case "heart":
        return <Heart className={iconClass} />;
      case "trending":
        return <TrendingUp className={iconClass} />;
      case "users":
        return <Users className={iconClass} />;
      case "book":
        return <BookOpen className={iconClass} />;
      case "lightbulb":
        return <Lightbulb className={iconClass} />;
      case "home":
        return <Home className={iconClass} />;
      default:
        return <Heart className={iconClass} />;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#FAF8F3] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1920&h=1080&fit=crop')] opacity-5 bg-cover bg-center" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#2D5F3F]/10 px-6 py-2 rounded-full mb-4">
            <Sparkles className="h-5 w-5 text-[#C9A961]" />
            <span className="text-[#2D5F3F] font-semibold">
              نشاطاتنا الخيرية
            </span>
          </div>

          <h2 className="text-5xl font-bold text-[#2D5F3F] mb-4">
            مشاريعنا وأعمالنا الاجتماعية
          </h2>

          <p className="text-[#8B4513] text-xl max-w-3xl mx-auto">
            نسعى من خلال مشاريعنا المتنوعة إلى خدمة المجتمع ونشر العلم النافع
            والعمل الخيري
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="!pb-16 max-w-7xl"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                  <div className="absolute top-4 right-4 w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{getIcon(project.icon)}</div>
                  </div>

                  {project.stats && (
                    <div className="absolute bottom-4 left-4 bg-gradient-to-r from-[#C9A961] to-[#2D5F3F] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                      <Sparkles className="h-4 w-4" />
                      {project.stats}
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#2D5F3F] mb-3 leading-tight group-hover:text-[#C9A961] transition-colors duration-300 min-h-[3.5rem]">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6 min-h-[5rem] text-sm">
                    {project.description}
                  </p>

                  <button className="group/btn flex items-center justify-center w-full gap-2 text-[#2D5F3F] font-semibold bg-[#2D5F3F]/5 hover:bg-[#2D5F3F] hover:text-white py-3 rounded-xl transition-all duration-300 border-2 border-[#2D5F3F]/20 hover:border-[#2D5F3F]">
                    <span>المزيد من التفاصيل</span>
                    <span className="group-hover/btn:-translate-x-1 transition-transform inline-block">
                      ←
                    </span>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* زر عرض جميع المشاريع */}
        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-[#2D5F3F] hover:text-[#C9A961] font-semibold text-lg transition-colors duration-300"
          >
            <span>عرض جميع المشاريع</span>
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

export default Projects;
