import {
  BookOpen,
  Users,
  Heart,
  Target,
  Eye,
  Award,
  TrendingUp,
  CheckCircle,
  Lightbulb,
  Shield,
  HandHeart,
  GraduationCap,
  MapPin,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { SHEIKHS_DATA } from "../data/sheikhs";
import { NEWS_DATA } from "../data/news";
import heroImage from "../images/associationImage1.jpg";
import galleryImage1 from "../images/associationImage1.jpg";
import galleryImage2 from "../images/associationImage2.jpg";
import galleryImage3 from "../images/associationImage3.jpg";
import galleryImage4 from "../images/associationImage4.jpg";
import galleryImage6 from "../images/associationImage6.jpg";
import galleryImage7 from "../images/associationImage7.jpg";
import galleryImage8 from "../images/associationImage8.jpg";

/**
 * صفحة من نحن - معلومات شاملة عن جمعية الرحمة
 * تصميم احترافي يعرض كل جوانب الجمعية مع صور ومحتوى تفاعلي
 */
function AboutPage() {
  const values = [
    {
      icon: BookOpen,
      title: "العلم الشرعي",
      description: "نشر العلم الشرعي الأصيل وفق منهج أهل السنة والجماعة",
    },
    {
      icon: Heart,
      title: "الإخلاص",
      description: "العمل بإخلاص لله تعالى وابتغاء مرضاته في كل أعمالنا",
    },
    {
      icon: Users,
      title: "التعاون",
      description: "التعاون والتكامل بين جميع أفراد المجتمع لخدمة الإسلام",
    },
    {
      icon: Shield,
      title: "الأمانة",
      description: "الأمانة والشفافية في إدارة الموارد وتقديم الخدمات",
    },
    {
      icon: Lightbulb,
      title: "الابتكار",
      description: "التطوير المستمر وتبني الأساليب الحديثة في العمل الخيري",
    },
    {
      icon: HandHeart,
      title: "العطاء",
      description: "خدمة المجتمع والمساهمة في تحسين حياة المحتاجين",
    },
  ];

  const objectives = [
    "نشر العلم الشرعي الأصيل من خلال الدروس والمحاضرات والدورات العلمية",
    "تحفيظ القرآن الكريم وتعليم أحكام التجويد والقراءات",
    "تقديم الخدمات الاجتماعية والإغاثية للمحتاجين والأسر المتعففة",
    "رعاية الأيتام وكفالتهم وتوفير احتياجاتهم التعليمية والمعيشية",
    "إقامة المشاريع الخيرية والتنموية التي تخدم المجتمع",
    "تنظيم الفعاليات والأنشطة الدعوية والثقافية المتنوعة",
    "بناء جيل واعٍ متمسك بدينه ومعتز بهويته الإسلامية",
    "التعاون مع المؤسسات والجمعيات الخيرية الأخرى",
  ];

  const achievements = [
    { number: "500+", label: "طالب علم", icon: GraduationCap },
    { number: "1000+", label: "درس ومحاضرة", icon: BookOpen },
    { number: "200+", label: "مشروع خيري", icon: Heart },
    { number: "50+", label: "شراكة فعالة", icon: Users },
  ];

  // Sample projects data (you can import from data file if available)
  const sampleProjects = [
    {
      id: 1,
      title: "مشروع إفطار الصائم",
      description: "توفير وجبات إفطار للصائمين خلال شهر رمضان المبارك",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop",
    },
    {
      id: 2,
      title: "كفالة الأيتام",
      description: "رعاية وكفالة الأيتام وتوفير احتياجاتهم التعليمية والمعيشية",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop",
    },
    {
      id: 3,
      title: "مشروع تحفيظ القرآن",
      description: "برنامج متكامل لتحفيظ القرآن الكريم للأطفال والكبار",
      image:
        "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=600&h=400&fit=crop",
    },
  ];

  // Gallery images for the association
  const galleryImages = [
    {
      id: 1,
      url: galleryImage1,
      title: "قاعة المحاضرات الرئيسية",
      description: "مساحة واسعة لاستضافة الدروس والمحاضرات العلمية",
    },
    {
      id: 2,
      url: galleryImage2,
      title: "ورشة العمل التفاعلية",
      description: "بيئة تعليمية حديثة للدورات والبرامج التدريبية",
    },
    {
      id: 3,
      url: galleryImage3,
      title: "حلقات التحفيظ",
      description: "قاعات مخصصة لتحفيظ القرآن الكريم وتعليم التجويد",
    },
    {
      id: 4,
      url: galleryImage4,
      title: "المكتبة الإسلامية",
      description: "مكتبة غنية بالكتب والمراجع الإسلامية",
    },
    {
      id: 5,
      url: galleryImage6,
      title: "مشاريعنا الإنسانية",
      description: "صور من مشاريعنا الخيرية وأعمالنا الإغاثية",
    },
    {
      id: 6,
      url: galleryImage7,
      title: "فريق العمل والمتطوعين",
      description: "طاقم متميز من المتطوعين المخلصين",
    },
    {
      id: 7,
      url: galleryImage8,
      title: "برامجنا التعليمية",
      description: "لقطات من البرامج التعليمية والتربوية المتنوعة",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8F3] via-white to-[#FAF8F3]">
      {/* Hero Section with Image */}
      <div className="relative h-[500px] md:h-[600px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </div>

        {/* Content */}
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center text-white">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
            <Heart className="w-5 h-5 text-[#C9A961]" />
            <span className="font-semibold">جمعية الرحمة للتربية والتنمية</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight max-w-4xl">
            منارة علمية ودعوية في خدمة الإسلام والمسلمين
          </h1>

          <p className="text-lg md:text-2xl text-white/95 leading-relaxed max-w-3xl mb-8">
            نسعى لنشر العلم الشرعي الأصيل وتقديم الخدمات الاجتماعية وبناء جيل
            واعٍ متمسك بدينه
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/enrollment"
              className="px-8 py-4 bg-gradient-to-r from-[#C9A961] to-[#D4AF37] text-white rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              انضم إلينا الآن
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-xl font-bold hover:bg-white/20 hover:scale-105 transition-all duration-300"
            >
              تواصل معنا
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/80 rounded-full" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* About Section */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#2D5F3F]/10 flex items-center justify-center">
                <Heart className="w-6 h-6 text-[#2D5F3F]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2D5F3F]">
                عن جمعية الرحمة
              </h2>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                جمعية الرحمة للتربية والتنمية والأعمال الاجتماعية هي منظمة خيرية
                إسلامية غير ربحية، تأسست بهدف خدمة المجتمع ونشر القيم الإسلامية
                الأصيلة وفق منهج أهل السنة والجماعة.
              </p>
              <p>
                تسعى الجمعية من خلال برامجها ومشاريعها المتنوعة إلى توفير
                الخدمات التعليمية والدعوية والاجتماعية، والمساهمة في بناء جيل
                واعٍ متمسك بدينه، قادر على خدمة مجتمعه وأمته.
              </p>
              <p>
                تعمل الجمعية تحت إشراف نخبة من الدعاة والمشايخ المتخصصين، وتحرص
                على تقديم خدماتها بأعلى معايير الجودة والمهنية، مع الحفاظ على
                الأمانة والشفافية في جميع أعمالها.
              </p>
            </div>
          </section>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-gradient-to-br from-[#2D5F3F] to-[#1a4d2e] rounded-2xl shadow-xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Eye className="w-7 h-7" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">رؤيتنا</h2>
              </div>

              <p className="text-white/95 leading-relaxed text-lg">
                أن نكون منارة علمية ودعوية رائدة في خدمة الإسلام والمسلمين،
                ونموذجاً متميزاً للعمل الخيري المؤسسي الاحترافي الذي يساهم في
                بناء مجتمع إسلامي واعٍ ومتماسك.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-br from-[#8B4513] to-[#6D3410] rounded-2xl shadow-xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Target className="w-7 h-7" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">رسالتنا</h2>
              </div>

              <p className="text-white/95 leading-relaxed text-lg">
                نشر العلم الشرعي الأصيل، وتقديم الخدمات الاجتماعية والإغاثية،
                ودعم المحتاجين والأيتام، وبناء جيل واعٍ متمسك بدينه، من خلال
                برامج تربوية ودعوية واجتماعية متميزة.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#2D5F3F]/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-[#2D5F3F]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2D5F3F]">
                قيمنا الأساسية
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border-2 border-gray-100 hover:border-[#2D5F3F]/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative mb-4">
                    <div className="absolute -inset-1 bg-gradient-to-br from-[#2D5F3F] to-[#C9A961] rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity" />
                    <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-[#2D5F3F]/10 to-[#2D5F3F]/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <value.icon className="w-7 h-7 text-[#2D5F3F]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#2D5F3F] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Objectives */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#8B4513]/10 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-[#8B4513]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2D5F3F]">
                أهدافنا
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {objectives.map((objective, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#2D5F3F] to-[#1a4d2e] flex items-center justify-center mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{objective}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Achievements Stats */}
          <section className="bg-gradient-to-br from-[#2D5F3F] to-[#1a4d2e] rounded-2xl shadow-xl p-8 md:p-10">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <TrendingUp className="w-4 h-4 text-white" />
                <span className="text-white font-semibold text-sm">
                  إنجازاتنا
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                أرقام تتحدث عن نفسها
              </h2>
              <p className="text-white/90 text-lg">
                رحلة من العطاء والإنجازات المستمرة
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-white/90 font-medium">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Image Gallery Section */}
          <section className="relative -mx-4 px-4 md:mx-0 md:px-0 overflow-hidden">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#2D5F3F]/10 to-[#8B4513]/10 rounded-full mb-4">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#2D5F3F] to-[#8B4513] animate-pulse" />
                <span className="text-[#2D5F3F] font-semibold text-sm">
                  معرض الصور
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D5F3F] mb-3">
                جولة في رحاب الجمعية
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                اكتشف منشآتنا وفعالياتنا من خلال مجموعة من الصور التي توثق
                مسيرتنا ونشاطاتنا
              </p>
            </div>

            {/* Main Gallery Swiper - Desktop: Coverflow, Mobile: Cards */}
            <div className="mb-8">
              {/* Desktop Coverflow View */}
              <div className="hidden md:block">
                <Swiper
                  modules={[Pagination, Autoplay, EffectCoverflow]}
                  effect="coverflow"
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView="auto"
                  coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                  }}
                  pagination={{
                    clickable: true,
                    dynamicBullets: true,
                  }}
                  autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  loop={true}
                  className="gallery-swiper-desktop pb-16"
                  style={{
                    paddingTop: "20px",
                    paddingBottom: "60px",
                  }}
                >
                  {galleryImages.map((image) => (
                    <SwiperSlide
                      key={image.id}
                      style={{
                        width: "600px",
                        maxWidth: "85vw",
                      }}
                    >
                      <div className="group relative rounded-2xl overflow-hidden shadow-2xl">
                        <div className="relative h-[500px] overflow-hidden">
                          <img
                            src={image.url}
                            alt={image.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

                          {/* Content Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C9A961] rounded-full mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                              <span className="text-white text-xs font-semibold">
                                جمعية الرحمة
                              </span>
                            </div>
                            {/*<h3 className="text-3xl font-bold text-white mb-2">
                              {image.title}
                            </h3>
                            <p className="text-white/90 text-lg leading-relaxed">
                              {image.description}
                            </p>*/}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Mobile Card View */}
              <div className="block md:hidden">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  spaceBetween={16}
                  slidesPerView={1}
                  pagination={{
                    clickable: true,
                    dynamicBullets: true,
                  }}
                  autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  className="gallery-swiper-mobile pb-12"
                >
                  {galleryImages.map((image) => (
                    <SwiperSlide key={`mobile-${image.id}`}>
                      <div className="bg-white rounded-2xl overflow-hidden shadow-lg mx-2">
                        <div className="relative h-[300px] overflow-hidden">
                          <img
                            src={image.url}
                            alt={image.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                          {/* Content Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-5">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C9A961] rounded-full mb-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                              <span className="text-white text-xs font-semibold">
                                جمعية الرحمة
                              </span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">
                              {image.title}
                            </h3>
                            <p className="text-white/90 text-sm leading-relaxed">
                              {image.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </section>

          {/* Our Sheikhs Section */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#2D5F3F]/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#2D5F3F]" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#2D5F3F]">
                    دعاتنا ومشايخنا
                  </h2>
                  <p className="text-gray-600">
                    نخبة من الدعاة والمشايخ المتخصصين
                  </p>
                </div>
              </div>
              <Link
                to="/sheikhs"
                className="hidden md:flex items-center gap-2 text-[#8B4513] hover:text-[#6D3410] font-semibold transition-colors"
              >
                <span>عرض الكل</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 24 },
              }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              className="sheikhs-swiper pb-12"
            >
              {SHEIKHS_DATA.map((sheikh) => (
                <SwiperSlide key={sheikh.id}>
                  <Link to={`/sheikhs/${sheikh.id}`}>
                    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#2D5F3F]/30 transition-all duration-300 h-full">
                      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#2D5F3F] to-[#1a4d2e]">
                        {sheikh.image ? (
                          <img
                            src={sheikh.image}
                            alt={sheikh.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="text-6xl text-white font-bold">
                              {sheikh.name[0]}
                            </span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C9A961]/90 backdrop-blur-sm rounded-full mb-2">
                            <span className="text-white text-xs font-semibold">
                              {sheikh.title}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-[#2D5F3F] mb-2 group-hover:text-[#1a4d2e] transition-colors">
                          الشيخ {sheikh.name}
                        </h3>
                        <p className="text-gray-600 line-clamp-2 leading-relaxed">
                          {sheikh.bio}
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>

          {/* Our Projects Section */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#8B4513]/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-[#8B4513]" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#2D5F3F]">
                    مشاريعنا الخيرية
                  </h2>
                  <p className="text-gray-600">
                    نعمل على خدمة المجتمع من خلال مشاريع متنوعة
                  </p>
                </div>
              </div>
              <Link
                to="/projects"
                className="hidden md:flex items-center gap-2 text-[#8B4513] hover:text-[#6D3410] font-semibold transition-colors"
              >
                <span>عرض الكل</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 24 },
              }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 4500, disableOnInteraction: false }}
              className="projects-swiper pb-12"
            >
              {sampleProjects.map((project) => (
                <SwiperSlide key={project.id}>
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#8B4513]/30 transition-all duration-300 h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#2D5F3F] mb-2 group-hover:text-[#1a4d2e] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>

          {/* Latest News Section */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#2D5F3F]/10 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-[#2D5F3F]" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#2D5F3F]">
                    آخر الأخبار والفعاليات
                  </h2>
                  <p className="text-gray-600">تابع أحدث أنشطتنا وفعالياتنا</p>
                </div>
              </div>
              <Link
                to="/news"
                className="hidden md:flex items-center gap-2 text-[#8B4513] hover:text-[#6D3410] font-semibold transition-colors"
              >
                <span>عرض الكل</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 24 },
              }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              className="news-swiper pb-12"
            >
              {NEWS_DATA.slice(0, 6).map((news) => (
                <SwiperSlide key={news.id}>
                  <Link to={`/news/${news.id}`}>
                    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#2D5F3F]/30 transition-all duration-300 h-full">
                      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#2D5F3F]/10 to-[#8B4513]/10">
                        {news.image && (
                          <>
                            <img
                              src={news.image}
                              alt={news.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          </>
                        )}
                        {news.date && (
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                            <div className="flex items-center gap-2 text-[#2D5F3F]">
                              <Calendar className="w-4 h-4" />
                              <span className="text-sm font-semibold">
                                {news.date}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-[#2D5F3F] mb-2 line-clamp-2 group-hover:text-[#1a4d2e] transition-colors">
                          {news.title}
                        </h3>
                        <p className="text-gray-600 line-clamp-2 leading-relaxed">
                          {news.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>

          {/* Location Map Section */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#2D5F3F]/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#2D5F3F]" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#2D5F3F]">
                    موقعنا
                  </h2>
                  <p className="text-gray-600">تفضل بزيارتنا في مقر الجمعية</p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.9732467385124!2d-5.584220724490591!3d33.89376537321706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda05b475d1d896d%3A0xcfc5fc84d7acbe01!2z2KzZhdi52YrYqSDYp9mE2LHYrdmF2Kkg2YTZhNiq2LHYqNmK2Kkg2YjYp9mE2KrZhtmF2YrYqSDZiNin2YTYo9i52YXYp9mEINin2YTYp9is2KrZhdin2LnZitip!5e1!3m2!1sfr!2sma!4v1763653634512!5m2!1sfr!2sma"
                  className="w-full h-96 border-0"
                  allowFullScreen
                  loading="lazy"
                  title="موقع جمعية الرحمة"
                />
              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#2D5F3F]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#2D5F3F] mb-1">
                      العنوان
                    </div>
                    <p className="text-gray-600 text-sm">
                      شارع الجامعة، المدينة، الدولة
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-[#8B4513]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#2D5F3F] mb-1">
                      أوقات العمل
                    </div>
                    <p className="text-gray-600 text-sm">
                      السبت - الخميس: 9:00 ص - 9:00 م
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-[#8B4513] to-[#6D3410] rounded-2xl shadow-xl p-8 md:p-10 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              كن جزءاً من رحلتنا
            </h2>
            <p className="text-white/95 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              نرحب بكل من يرغب في المساهمة معنا في خدمة الإسلام والمسلمين، سواء
              من خلال التطوع، الدعم المالي، أو المشاركة في برامجنا وفعالياتنا
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-[#8B4513] rounded-xl font-bold hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                تواصل معنا
              </Link>
              <Link
                to="/projects"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl font-bold hover:bg-white/20 hover:scale-105 transition-all duration-300"
              >
                تعرف على مشاريعنا
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
