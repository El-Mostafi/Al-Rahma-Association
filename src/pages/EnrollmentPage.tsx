import {
  FileText,
  CheckCircle,
  Clock,
  Phone,
  Mail,
  MapPin,
  Award,
  GraduationCap,
  Baby,
  UserCheck,
  AlertCircle,
  Download,
  ArrowRight,
} from "lucide-react";

/**
 * صفحة التسجيل والانضمام - معلومات شاملة عن التسجيل في برامج الجمعية
 * تشمل شروط وخطوات التسجيل للأطفال والشباب
 */
function EnrollmentPage() {
  const programs = [
    {
      id: "quran-kids",
      icon: Baby,
      title: "برنامج تحفيظ القرآن الكريم للأطفال",
      color: "from-[#2D5F3F] to-[#1a4d2e]",
      bgColor: "bg-[#2D5F3F]/10",
      iconColor: "text-[#2D5F3F]",
      description:
        "برنامج متكامل لتحفيظ القرآن الكريم وتعليم أحكام التجويد للأطفال من سن 6 إلى 15 سنة",
      ageRange: "من 6 إلى 15 سنة",
      duration: "طوال العام الدراسي",
      schedule: "يومياً من السبت إلى الخميس",
      conditions: [
        "أن يكون الطالب في الفئة العمرية المحددة (6-15 سنة)",
        "الالتزام بالحضور المنتظم في الأوقات المحددة",
        "احترام معلمي القرآن والالتزام بتعليماتهم",
        "الحفاظ على نظافة المصحف الشريف والأدوات المخصصة",
        "موافقة ولي الأمر على شروط البرنامج",
      ],
      documents: [
        "صورة من بطاقة الهوية أو شهادة الميلاد",
        "صورة شخصية حديثة للطالب",
        "نموذج طلب التسجيل معبأ بالكامل (يتم توفيره من الجمعية)",
        "إقرار من ولي الأمر بالموافقة على الشروط والأحكام",
        "شهادة طبية تثبت خلو الطالب من الأمراض المعدية",
      ],
      benefits: [
        "تعليم القرآن الكريم بالتلقي المباشر من معلمين متخصصين",
        "تعلم أحكام التجويد والتلاوة الصحيحة",
        "حلقات تحفيظ بمجموعات صغيرة لضمان الجودة",
        "مسابقات دورية وجوائز تحفيزية",
        "متابعة فردية لكل طالب وتقييم مستمر",
        "شهادات تقدير للطلاب المتميزين",
      ],
    },
    {
      id: "sharia-youth",
      icon: GraduationCap,
      title: "برنامج العلم الشرعي للشباب",
      color: "from-[#8B4513] to-[#6D3410]",
      bgColor: "bg-[#8B4513]/10",
      iconColor: "text-[#8B4513]",
      description:
        "برنامج علمي شامل لتعليم العلوم الشرعية من فقه وحديث وعقيدة وتفسير للشباب من سن 16 سنة فما فوق",
      ageRange: "من 16 سنة فما فوق",
      duration: "دورات فصلية (3-6 أشهر)",
      schedule: "مساءً بعد صلاة المغرب والعشاء",
      conditions: [
        "أن يكون المتقدم في الفئة العمرية المحددة (16 سنة فما فوق)",
        "الالتزام الكامل بحضور جميع الدروس والمحاضرات",
        "القدرة على القراءة والكتابة بشكل جيد",
        "اجتياز الاختبار التحديدي للمستوى (إن وجد)",
        "الالتزام بالأخلاق الإسلامية والسلوك الحسن",
        "إتمام الدورة بنجاح للحصول على الشهادة",
      ],
      documents: [
        "صورة من بطاقة الهوية الوطنية أو جواز السفر",
        "صورتان شخصيتان حديثتان",
        "نموذج طلب التسجيل معبأ بالكامل",
        "المؤهل الدراسي (شهادة آخر مرحلة دراسية)",
        "إقرار بالالتزام بشروط البرنامج وأنظمته",
        "رسالة تعريفية توضح دوافع الانضمام (اختياري)",
      ],
      benefits: [
        "دراسة العلوم الشرعية على أيدي مشايخ متخصصين",
        "منهج علمي متدرج ومنظم في جميع العلوم",
        "دروس في الفقه والحديث والعقيدة والتفسير",
        "مكتبة علمية غنية ومراجع متنوعة",
        "شهادة معتمدة عند إتمام البرنامج بنجاح",
        "فرصة للمشاركة في الأنشطة الدعوية والعلمية",
      ],
    },
  ];

  const enrollmentSteps = [
    {
      number: "1",
      title: "اختر البرنامج المناسب",
      description:
        "حدد البرنامج الذي ترغب في التسجيل فيه (تحفيظ القرآن أو العلم الشرعي)",
    },
    {
      number: "2",
      title: "جهز المستندات المطلوبة",
      description:
        "قم بإعداد جميع الوثائق والمستندات المذكورة في متطلبات البرنامج",
    },
    {
      number: "3",
      title: "املأ نموذج التسجيل",
      description:
        "احصل على نموذج التسجيل من الجمعية أو حمله من موقعنا واملأه بدقة",
    },
    {
      number: "4",
      title: "قدم الطلب",
      description:
        "قم بتسليم نموذج التسجيل مع المستندات في مقر الجمعية أو عبر البريد الإلكتروني",
    },
    {
      number: "5",
      title: "المقابلة الشخصية",
      description: "حضور المقابلة الشخصية أو اختبار تحديد المستوى (إن وجد)",
    },
    {
      number: "6",
      title: "القبول والبدء",
      description: "استلام خطاب القبول والبدء في البرنامج في الموعد المحدد",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8F3] via-white to-[#FAF8F3]">
      {/* Hero Header */}
      <div className="relative bg-white border-b border-gray-100">
        <div className="absolute inset-0 bg-gradient-to-l from-[#2D5F3F]/5 via-transparent to-transparent" />

        <div className="container mx-auto px-4 py-16 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#2D5F3F]/10 rounded-full mb-4">
              <UserCheck className="w-4 h-4 text-[#2D5F3F]" />
              <span className="text-[#2D5F3F] font-semibold text-sm">
                انضم إلينا
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-[#2D5F3F] mb-4 leading-tight">
              التسجيل في برامج الجمعية
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              ابدأ رحلتك في تعلم القرآن الكريم والعلوم الشرعية معنا - التسجيل
              مفتوح الآن
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Programs Overview */}
          <section>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D5F3F] mb-3">
                برامجنا التعليمية
              </h2>
              <p className="text-gray-600 text-lg">
                اختر البرنامج المناسب لك أو لطفلك
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {programs.map((program) => (
                <div
                  key={program.id}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                >
                  {/* Header */}
                  <div
                    className={`bg-gradient-to-r ${program.color} p-8 text-white`}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                        <program.icon className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">
                          {program.title}
                        </h3>
                        <p className="text-white/95 leading-relaxed">
                          {program.description}
                        </p>
                      </div>
                    </div>

                    {/* Quick Info */}
                    <div className="grid grid-cols-2 gap-3 mt-6">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                        <div className="text-white/80 text-xs mb-1">
                          الفئة العمرية
                        </div>
                        <div className="font-bold">{program.ageRange}</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                        <div className="text-white/80 text-xs mb-1">المدة</div>
                        <div className="font-bold">{program.duration}</div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 space-y-6">
                    {/* Schedule */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Clock className={`w-5 h-5 ${program.iconColor}`} />
                        <h4 className="font-bold text-[#2D5F3F]">
                          مواعيد الدراسة
                        </h4>
                      </div>
                      <p className="text-gray-600 bg-gray-50 rounded-lg p-3">
                        {program.schedule}
                      </p>
                    </div>

                    {/* Conditions */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle
                          className={`w-5 h-5 ${program.iconColor}`}
                        />
                        <h4 className="font-bold text-[#2D5F3F]">
                          شروط الالتحاق
                        </h4>
                      </div>
                      <ul className="space-y-2">
                        {program.conditions.map((condition, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-gray-600"
                          >
                            <ArrowRight
                              className={`w-4 h-4 ${program.iconColor} mt-1 flex-shrink-0`}
                            />
                            <span>{condition}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Documents */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <FileText className={`w-5 h-5 ${program.iconColor}`} />
                        <h4 className="font-bold text-[#2D5F3F]">
                          المستندات المطلوبة
                        </h4>
                      </div>
                      <ul className="space-y-2">
                        {program.documents.map((document, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-gray-600"
                          >
                            <ArrowRight
                              className={`w-4 h-4 ${program.iconColor} mt-1 flex-shrink-0`}
                            />
                            <span>{document}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className={`${program.bgColor} rounded-xl p-6`}>
                      <div className="flex items-center gap-2 mb-3">
                        <Award className={`w-5 h-5 ${program.iconColor}`} />
                        <h4 className="font-bold text-[#2D5F3F]">
                          ما ستحصل عليه
                        </h4>
                      </div>
                      <ul className="space-y-2">
                        {program.benefits.map((benefit, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-gray-700"
                          >
                            <CheckCircle
                              className={`w-4 h-4 ${program.iconColor} mt-1 flex-shrink-0`}
                            />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Enrollment Steps */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#2D5F3F]/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-[#2D5F3F]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2D5F3F]">
                خطوات التسجيل
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enrollmentSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border-2 border-gray-100 hover:border-[#2D5F3F]/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#2D5F3F] to-[#1a4d2e] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {step.number}
                  </div>
                  <div className="mt-12">
                    <h3 className="text-lg font-bold text-[#2D5F3F] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Important Notes */}
          <section className="bg-gradient-to-br from-amber-50 to-white rounded-2xl shadow-sm border-2 border-amber-200 p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2D5F3F] mb-3">
                  ملاحظات هامة
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                    <span>
                      التسجيل مجاني ولا توجد أي رسوم للالتحاق بالبرامج
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                    <span>
                      يتم قبول الطلبات حسب الأماكن المتاحة والأولوية للمتقدمين
                      مبكراً
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                    <span>
                      يمكن للطالب الواحد التسجيل في أكثر من برنامج بشرط عدم
                      تعارض المواعيد
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                    <span>
                      للاستفسارات يرجى التواصل مع إدارة الجمعية عبر الهاتف أو
                      البريد الإلكتروني
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact & Download Section */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Download Form */}
            <div className="bg-gradient-to-br from-[#2D5F3F] to-[#1a4d2e] rounded-2xl shadow-xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Download className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold">تحميل نموذج التسجيل</h3>
              </div>
              <p className="text-white/95 mb-6 leading-relaxed">
                حمل نموذج التسجيل واملأه وأحضره معك عند زيارة الجمعية أو أرسله
                عبر البريد الإلكتروني
              </p>
              <button className="w-full bg-white text-[#2D5F3F] py-4 rounded-xl font-bold hover:bg-gray-50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                تحميل النموذج (PDF)
              </button>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-[#2D5F3F] mb-6">
                معلومات التواصل
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#2D5F3F]/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#2D5F3F]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">الهاتف</div>
                    <a
                      href="tel:+123456789"
                      className="font-semibold text-gray-800 hover:text-[#2D5F3F]"
                    >
                      +123 456 789
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#2D5F3F]/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#2D5F3F]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">
                      البريد الإلكتروني
                    </div>
                    <a
                      href="mailto:info@alrahma.org"
                      className="font-semibold text-gray-800 hover:text-[#2D5F3F]"
                    >
                      info@alrahma.org
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#2D5F3F]/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#2D5F3F]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">العنوان</div>
                    <p className="font-semibold text-gray-800">
                      شارع الجامعة، المدينة، الدولة
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#2D5F3F]/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#2D5F3F]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">أوقات العمل</div>
                    <p className="font-semibold text-gray-800">
                      السبت - الخميس: 9:00 ص - 9:00 م
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnrollmentPage;
