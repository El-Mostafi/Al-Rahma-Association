import React from "react";
import {
  Heart,
  TrendingUp,
  Users,
  BookOpen,
  Lightbulb,
  Home,
  ArrowLeft,
  CheckCircle,
  Target,
  Users2,
  Award,
  ChevronDown,
} from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  icon: string;
  image: string;
  stats: string;
  achievements: string[];
  goals: string[];
  beneficiaries: string;
}

/**
 * صفحة المشاريع - عرض جميع مشاريع الجمعية بالتفصيل
 */
function ProjectsPage() {
  const [visibleProjects, setVisibleProjects] = React.useState(3);

  const projects: Project[] = [
    {
      id: 1,
      title: "كفالة الأيتام",
      description: "رعاية ودعم الأيتام وتوفير احتياجاتهم الأساسية والتعليمية",
      fullDescription:
        "برنامج شامل لرعاية الأيتام يتضمن الدعم المادي والمعنوي والتعليمي، نوفر لكل يتيم كفالة شهرية، مستلزمات مدرسية، رعاية صحية، ومتابعة نفسية واجتماعية. البرنامج يهدف إلى ضمان مستقبل أفضل للأيتام وإدماجهم في المجتمع بشكل إيجابي.",
      icon: "heart",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&h=800&fit=crop",
      stats: "+120 يتيم",
      achievements: [
        "كفالة 120 يتيمًا بشكل منتظم",
        "توفير المستلزمات المدرسية لجميع الأيتام",
        "برنامج دعم نفسي واجتماعي متخصص",
        "متابعة صحية دورية ومجانية",
      ],
      goals: [
        "الوصول إلى كفالة 200 يتيم خلال السنتين القادمتين",
        "إنشاء صندوق خاص للتعليم الجامعي",
        "توفير برامج تدريب مهني للأيتام الكبار",
      ],
      beneficiaries: "120 يتيمًا من عائلات محتاجة",
    },
    {
      id: 2,
      title: "المشاريع التنموية",
      description: "تنفيذ مشاريع تنموية تساهم في تحسين أوضاع الأسر المحتاجة",
      fullDescription:
        "مجموعة من المشاريع المدرة للدخل التي تستهدف الأسر الفقيرة والمتعففة، نساعد في إنشاء مشاريع صغيرة ومتوسطة، توفير التدريب اللازم، والمتابعة المستمرة لضمان نجاح المشروع واستدامته.",
      icon: "trending",
      image:
        "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1200&h=800&fit=crop",
      stats: "+50 مشروع",
      achievements: [
        "إطلاق 50 مشروعًا صغيرًا ومتوسطًا",
        "تدريب أكثر من 100 مستفيد على إدارة المشاريع",
        "نسبة نجاح 85% للمشاريع المدعومة",
        "خلق فرص عمل لأكثر من 200 شخص",
      ],
      goals: [
        "إطلاق 30 مشروعًا جديدًا سنويًا",
        "توسيع قاعدة المستفيدين لتشمل المناطق النائية",
        "إنشاء صندوق دعم للمشاريع الناشئة",
      ],
      beneficiaries: "أكثر من 300 أسرة مستفيدة",
    },
    {
      id: 3,
      title: "الدروس التربوية",
      description: "برامج تربوية وتعليمية لجميع الفئات العمرية",
      fullDescription:
        "برامج تربوية شاملة تستهدف جميع الأعمار من الأطفال حتى الكبار، تشمل دروس تحفيظ القرآن الكريم، التربية الإسلامية، الأخلاق والسلوك، والمهارات الحياتية. نوفر بيئة تعليمية محفزة مع معلمين مؤهلين.",
      icon: "users",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=800&fit=crop",
      stats: "+300 طالب",
      achievements: [
        "300 طالب وطالبة مسجلين في البرامج",
        "15 معلمًا ومعلمة متخصصين",
        "تخريج 50 حافظًا للقرآن الكريم",
        "برامج صيفية مكثفة بمشاركة واسعة",
      ],
      goals: [
        "افتتاح 3 فصول جديدة للتحفيظ",
        "تطوير منهج تربوي متكامل",
        "تنظيم مسابقات قرآنية سنوية",
      ],
      beneficiaries: "300+ طالب من مختلف الأعمار",
    },
    {
      id: 4,
      title: "المكتبة الإسلامية",
      description: "مكتبة غنية بالكتب والمراجع الإسلامية الأصيلة",
      fullDescription:
        "مكتبة شاملة تحتوي على آلاف الكتب في مختلف العلوم الشرعية والإسلامية، متاحة للقراءة والاستعارة مجانًا. المكتبة مجهزة بقاعة مطالعة مريحة ونظام إلكتروني حديث لإدارة الكتب.",
      icon: "book",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=800&fit=crop",
      stats: "+5000 كتاب",
      achievements: [
        "مجموعة تضم 5000+ كتاب ومرجع",
        "نظام استعارة إلكتروني حديث",
        "قاعة مطالعة تتسع لـ 50 شخصًا",
        "خدمة البحث والاستشارة المكتبية",
      ],
      goals: [
        "رقمنة المكتبة وإتاحتها أونلاين",
        "إضافة 1000 كتاب جديد سنويًا",
        "توسيع قاعة المطالعة",
      ],
      beneficiaries: "أكثر من 500 قارئ شهريًا",
    },
    {
      id: 5,
      title: "الدورات العلمية",
      description: "دورات علمية متخصصة في العلوم الشرعية",
      fullDescription:
        "دورات علمية مكثفة في مختلف العلوم الشرعية يقدمها نخبة من الدعاة والمشايخ المتخصصين. تشمل دورات في التفسير، الحديث، الفقه، العقيدة، والسيرة النبوية بمستويات مختلفة من المبتدئ إلى المتقدم.",
      icon: "lightbulb",
      image: "/src/images/associationImage5.png",
      stats: "+40 دورة",
      achievements: [
        "تنظيم 40+ دورة علمية متخصصة",
        "مشاركة أكثر من 2000 طالب علم",
        "شهادات معتمدة للخريجين",
        "مواد مسجلة متاحة للمراجعة",
      ],
      goals: [
        "تنظيم دورة شهرية على مدار السنة",
        "استقطاب دعاة ومشايخ من دول مختلفة",
        "إطلاق منصة إلكترونية للدورات",
      ],
      beneficiaries: "2000+ طالب علم استفادوا من الدورات",
    },
    {
      id: 6,
      title: "الإغاثة الاجتماعية",
      description: "مساعدة الأسر المتعففة وتقديم الدعم المادي والمعنوي",
      fullDescription:
        "برنامج إغاثة شامل يستهدف الأسر الأكثر احتياجًا، نوفر المساعدات الغذائية الشهرية، الملابس، الأدوية، ومساعدات نقدية في الحالات الطارئة. كما نقدم المشورة والدعم النفسي والاجتماعي.",
      icon: "home",
      image:
        "https://ghaith.org.sa/web/image/16798-8115424b/IMG_1152.jpg?w=1200&h=800&fit=crop",
      stats: "+200 أسرة",
      achievements: [
        "دعم شهري منتظم لـ 200 أسرة",
        "توزيع أكثر من 1000 سلة غذائية سنويًا",
        "مساعدات طبية وأدوية مجانية",
        "كفالة أسر الأرامل والمطلقات",
      ],
      goals: [
        "مضاعفة عدد الأسر المستفيدة",
        "إنشاء صيدلية خيرية",
        "برنامج خاص لإعادة تأهيل الأسر",
      ],
      beneficiaries: "200+ أسرة محتاجة ومتعففة",
    },
  ];

  const getIcon = (iconName: string) => {
    const iconClass = "w-10 h-10";
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
    <div className="min-h-screen bg-gradient-to-b from-[#FAF8F3] to-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#2D5F3F] to-[#8B4513] text-white py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              مشاريعنا وأعمالنا الاجتماعية
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed">
              نسعى من خلال مشاريعنا المتنوعة إلى خدمة المجتمع ونشر العلم النافع
              والعمل الخيري
            </p>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="space-y-12 md:space-y-16 lg:space-y-24">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <div key={project.id} className="relative">
              {/* Project Content Card */}
              <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl overflow-hidden border border-gray-100 md:border-2 hover:border-[#C9A961] transition-all duration-500">
                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-0`}
                >
                  {/* Image */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative group overflow-hidden lg:rounded-none lg:rounded-r-3xl h-full min-h-[250px] sm:min-h-[350px] md:min-h-[450px] lg:min-h-[500px]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />
                      <div className="absolute bottom-5 md:bottom-6 lg:bottom-8 right-4 md:right-6 lg:right-8 left-4 md:left-6 lg:left-8">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4">
                          <div className="w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-xl md:rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-xl border-2 border-white/30 flex-shrink-0">
                            <div className="text-white">
                              {getIcon(project.icon)}
                            </div>
                          </div>
                          <div className="min-w-0 w-full">
                            <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-3 leading-tight">
                              {project.title}
                            </h3>
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C9A961] to-[#2D5F3F] text-white px-4 md:px-4 lg:px-5 py-2 md:py-2 rounded-full text-sm sm:text-sm md:text-base font-bold shadow-lg">
                              <Award className="w-4 h-4 md:w-5 md:h-5" />
                              {project.stats}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2 p-6 sm:p-6 md:p-8 lg:p-12 bg-gradient-to-br from-white to-[#FAF8F3]">
                    <div className="space-y-5 md:space-y-6">
                      <div>
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                          {project.description}
                        </p>
                        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                          {project.fullDescription}
                        </p>
                      </div>

                      {/* Achievements */}
                      <div className="bg-gradient-to-br from-[#2D5F3F]/5 to-[#C9A961]/5 rounded-xl p-5 md:p-6 border-r-4 border-[#2D5F3F]">
                        <div className="flex items-center gap-2 mb-4">
                          <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#2D5F3F]" />
                          <h4 className="text-base md:text-xl font-bold text-[#2D5F3F]">
                            إنجازاتنا
                          </h4>
                        </div>
                        <ul className="space-y-2.5">
                          {project.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-sm md:text-base text-gray-700 leading-relaxed"
                            >
                              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 text-[#C9A961] flex-shrink-0 mt-1" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Goals */}
                      <div className="bg-gradient-to-br from-[#C9A961]/5 to-[#2D5F3F]/5 rounded-xl p-5 md:p-6 border-r-4 border-[#C9A961]">
                        <div className="flex items-center gap-2 mb-4">
                          <Target className="w-5 h-5 md:w-6 md:h-6 text-[#C9A961]" />
                          <h4 className="text-base md:text-xl font-bold text-[#2D5F3F]">
                            أهدافنا المستقبلية
                          </h4>
                        </div>
                        <ul className="space-y-2.5">
                          {project.goals.map((goal, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-sm md:text-base text-gray-700 leading-relaxed"
                            >
                              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 text-[#2D5F3F] flex-shrink-0 mt-1" />
                              <span>{goal}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Beneficiaries */}
                      <div className="flex items-center gap-3 bg-white rounded-xl p-5 md:p-5 shadow-lg border-2 border-[#2D5F3F]/10">
                        <div className="w-12 h-12 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#2D5F3F] to-[#C9A961] flex items-center justify-center flex-shrink-0">
                          <Users2 className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs md:text-xs text-gray-500 mb-1">
                            المستفيدون
                          </p>
                          <p className="text-base md:text-lg font-bold text-[#2D5F3F] leading-tight">
                            {project.beneficiaries}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Separator Line */}
              {index < projects.length - 1 && (
                <div className="mt-8 md:mt-12 lg:mt-16 flex items-center justify-center">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#C9A961] to-transparent"></div>
                  <div className="mx-3 md:mx-6 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#2D5F3F] animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-[#C9A961] animate-pulse delay-75"></div>
                    <div className="w-2 h-2 rounded-full bg-[#2D5F3F] animate-pulse delay-150"></div>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#C9A961] to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < projects.length && (
          <div className="text-center mt-8 md:mt-12 lg:mt-16">
            <button
              onClick={() =>
                setVisibleProjects((prev) =>
                  Math.min(prev + 3, projects.length)
                )
              }
              className="group inline-flex items-center gap-2 text-[#2D5F3F] hover:text-[#C9A961] font-semibold text-base md:text-lg transition-colors duration-300"
            >
              <span>عرض المزيد من المشاريع</span>
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
            <p className="text-gray-500 mt-2 md:mt-3 text-xs md:text-sm">
              عرض {visibleProjects} من {projects.length} مشروع
            </p>
          </div>
        )}

        {/* Show Less Button */}
        {visibleProjects > 3 && visibleProjects >= projects.length && (
          <div className="text-center mt-8">
            <button
              onClick={() => {
                setVisibleProjects(3);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 text-[#2D5F3F] hover:text-[#C9A961] font-semibold transition-colors duration-300"
            >
              <span>إظهار أقل</span>
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectsPage;
