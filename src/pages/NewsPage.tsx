import React from "react";
import { Link } from "react-router-dom";
import {
  CalendarDays,
  User,
  MapPin,
  Tag,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { NEWS_DATA } from "../data/news";

/**
 * صفحة الأخبار - عرض جميع أخبار الجمعية مع pagination
 */
function NewsPage() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(NEWS_DATA.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNews = NEWS_DATA.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const allNews = [
    {
      id: 1,
      title: "الدورة العلمية السنوية في شرح صحيح البخاري",
      description:
        "يسر جمعية الرحمة أن تعلن عن انطلاق الدورة العلمية السنوية في شرح صحيح البخاري بإشراف فضيلة الشيخ موسى الدخيلة",
      fullContent:
        "بحمد الله وتوفيقه، تعلن جمعية الرحمة للتربية والتنمية عن انطلاق الدورة العلمية السنوية المتخصصة في شرح صحيح الإمام البخاري، أصح كتاب بعد كتاب الله تعالى. يشرف على هذه الدورة فضيلة الشيخ موسى بن محمد الدخيلة، الذي يتمتع بخبرة واسعة في تدريس علوم الحديث النبوي الشريف. تستهدف الدورة طلاب العلم الشرعي من مختلف المستويات، وتمتد على مدار ستة أشهر بواقع درسين أسبوعيًا. سيتم التركيز على دراسة الأحاديث النبوية الشريفة مع شرح وافٍ للمتون والأسانيد، واستنباط الفوائد والأحكام الفقهية. التسجيل مفتوح الآن ومجاني بالكامل.",
      date: "15 ربيع الأول 1446",
      image:
        "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=1200&h=800&fit=crop",
      category: "دورات علمية",
      author: "إدارة الجمعية",
      location: "مقر جمعية الرحمة - مكناس",
      readTime: "5 دقائق",
    },
    {
      id: 2,
      title: "مشروع كفالة الأيتام - المرحلة الثانية",
      description:
        "بفضل الله وبتوفيقه، نعلن عن إطلاق المرحلة الثانية من مشروع كفالة الأيتام لدعم 50 يتيمًا إضافيًا",
      fullContent:
        "الحمد لله الذي بنعمته تتم الصالحات، تعلن جمعية الرحمة عن إطلاق المرحلة الثانية من مشروع كفالة الأيتام الذي لاقى نجاحًا كبيرًا في مرحلته الأولى. المشروع يهدف إلى توفير الرعاية الشاملة لـ 50 يتيمًا إضافيًا من الأسر المحتاجة في مدينة مكناس ونواحيها. تشمل الكفالة تقديم مساعدة مالية شهرية، توفير المستلزمات المدرسية، الرعاية الصحية، والمتابعة النفسية والاجتماعية. ندعو جميع المحسنين والمتبرعين للمساهمة في هذا المشروع الخيري العظيم، فكفالة اليتيم من أعظم القربات إلى الله تعالى. للمساهمة أو الاستفسار، يرجى التواصل مع إدارة الجمعية.",
      date: "10 ربيع الأول 1446",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&h=800&fit=crop",
      category: "مشاريع اجتماعية",
      author: "قسم المشاريع الاجتماعية",
      location: "مكناس والنواحي",
      readTime: "4 دقائق",
    },
    {
      id: 3,
      title: "برنامج تحفيظ القرآن الكريم للأطفال",
      description:
        "انطلاق التسجيل في برنامج تحفيظ القرآن الكريم للأطفال من سن 6 إلى 14 سنة بمقر الجمعية",
      fullContent:
        "تفتح جمعية الرحمة باب التسجيل في برنامج تحفيظ القرآن الكريم للأطفال للموسم الجديد. يستهدف البرنامج الأطفال من سن 6 إلى 14 سنة، ويعتمد على منهجية تربوية حديثة تجمع بين الحفظ المتقن والفهم الصحيح. يشرف على البرنامج نخبة من المعلمين والمعلمات المتخصصين في تحفيظ القرآن الكريم وأحكام التجويد. تتضمن الحصص تعليم أحكام التجويد بطريقة مبسطة، تفسير معاني الآيات بما يناسب أعمار الطلاب، وغرس القيم الإسلامية النبيلة. البرنامج مجاني بالكامل، والمقاعد محدودة. التسجيل مفتوح ابتداءً من اليوم في مقر الجمعية.",
      date: "5 ربيع الأول 1446",
      image:
        "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=1200&h=800&fit=crop",
      category: "برامج تربوية",
      author: "قسم التربية والتعليم",
      location: "مقر الجمعية",
      readTime: "3 دقائق",
    },
    {
      id: 4,
      title: "محاضرة عن السيرة النبوية",
      description:
        "محاضرة قيمة عن السيرة النبوية العطرة وأثرها في بناء الشخصية المسلمة",
      fullContent:
        "في إطار أنشطتها العلمية والتربوية، تنظم جمعية الرحمة محاضرة علمية قيمة بعنوان: 'السيرة النبوية وأثرها في بناء الشخصية المسلمة'، يلقيها فضيلة الشيخ موسى الدخيلة. تتناول المحاضرة جوانب مهمة من سيرة النبي صلى الله عليه وسلم، مع التركيز على الدروس والعبر المستفادة، وكيفية تطبيقها في حياتنا اليومية. المحاضرة مفتوحة للجميع، ونرحب بحضور العائلات والشباب. سيتم تخصيص وقت للأسئلة والنقاش بعد المحاضرة. الدخول مجاني ونرجو من الإخوة والأخوات الحضور المبكر لضمان المقاعد.",
      date: "1 ربيع الأول 1446",
      image:
        "https://images.unsplash.com/photo-1585909695284-32d2985ac9c0?w=1200&h=800&fit=crop",
      category: "محاضرات",
      author: "فضيلة الشيخ موسى الدخيلة",
      location: "مسجد الجمعية",
      readTime: "3 دقائق",
    },
    {
      id: 5,
      title: "حملة شتاء دافئ للأسر المحتاجة",
      description:
        "إطلاق حملة شتاء دافئ لتوزيع الملابس والبطانيات على الأسر الفقيرة والمتعففة",
      fullContent:
        "مع دخول فصل الشتاء وانخفاض درجات الحرارة، تطلق جمعية الرحمة حملة 'شتاء دافئ' السنوية لمساعدة الأسر المحتاجة والمتعففة. تشمل الحملة توزيع الملابس الشتوية الجديدة، البطانيات، أجهزة التدفئة، وسلال غذائية على 200 أسرة من الأكثر احتياجًا في المدينة. ندعو أهل الخير والإحسان للمساهمة في هذه الحملة الإنسانية، إما بالتبرع المادي أو بالتبرع بالملابس والبطانيات النظيفة. قال صلى الله عليه وسلم: 'من نفس عن مؤمن كربة من كرب الدنيا نفس الله عنه كربة من كرب يوم القيامة'. لمزيد من المعلومات، يرجى الاتصال بإدارة الجمعية.",
      date: "25 صفر 1446",
      image: "https://i.ytimg.com/vi/A0kRWK3yhvY/maxresdefault.jpg",
      category: "حملات خيرية",
      author: "قسم الإغاثة الاجتماعية",
      location: "مكناس والمناطق المجاورة",
      readTime: "4 دقائق",
    },
    {
      id: 6,
      title: "ورشة تكوينية في الإسعافات الأولية",
      description:
        "تنظيم ورشة تدريبية متخصصة في الإسعافات الأولية لأعضاء الجمعية والمتطوعين",
      fullContent:
        "في إطار تطوير قدرات أعضاء الجمعية والمتطوعين، تنظم جمعية الرحمة ورشة تكوينية شاملة في الإسعافات الأولية بالتعاون مع الهلال الأحمر المغربي. تهدف الورشة إلى تزويد المشاركين بالمهارات الأساسية في التعامل مع حالات الطوارئ الصحية، الإنعاش القلبي الرئوي، معالجة الجروح، والحروق، وكيفية التصرف في حالات الاختناق. يؤطر الورشة مختصون في المجال الصحي، وسيحصل المشاركون على شهادة حضور معتمدة. الورشة مجانية ومفتوحة لجميع أعضاء الجمعية والمتطوعين، والتسجيل محدود بـ 30 مشاركًا.",
      date: "20 صفر 1446",
      image:
        "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=1200&h=800&fit=crop",
      category: "ورش تكوينية",
      author: "قسم التكوين والتطوير",
      location: "قاعة الندوات بالجمعية",
      readTime: "3 دقائق",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF8F3] to-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#2D5F3F] to-[#8B4513] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              الأخبار والفعاليات
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              تابع آخر أخبار وفعاليات جمعية الرحمة للتربية والتنمية
            </p>
          </div>
        </div>
      </div>

      {/* News Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {currentNews.map((item) => (
            <Link
              key={item.id}
              to={`/news/${item.id}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <span className="absolute top-4 right-4 bg-gradient-to-r from-[#2D5F3F] to-[#C9A961] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  {item.category}
                </span>

                <div className="absolute bottom-4 right-4 flex items-center text-white text-sm bg-black/40 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <CalendarDays className="ml-2 h-4 w-4" />
                  <span>{item.date}</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-[#2D5F3F] mb-4 leading-tight group-hover:text-[#C9A961] transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed flex-1">
                  {item.description}
                </p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <User className="w-4 h-4 text-[#C9A961]" />
                    <span>{item.author}</span>
                  </div>
                  {item.location && (
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="w-4 h-4 text-[#C9A961]" />
                      <span>{item.location}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4 text-[#C9A961]" />
                    <span>وقت القراءة: {item.readTime}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 mt-auto">
                  <div className="flex items-center justify-between text-[#2D5F3F] font-semibold group-hover:text-[#C9A961] transition-colors">
                    <span>اقرأ التفاصيل</span>
                    <ChevronLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="الصفحة السابقة"
              className="p-2 rounded-lg border-2 border-gray-300 hover:border-[#2D5F3F] hover:bg-[#2D5F3F] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 rounded-lg font-semibold transition-all duration-300 ${
                  currentPage === page
                    ? "bg-gradient-to-r from-[#2D5F3F] to-[#C9A961] text-white shadow-lg"
                    : "border-2 border-gray-300 hover:border-[#2D5F3F] hover:bg-[#2D5F3F] hover:text-white"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="الصفحة التالية"
              className="p-2 rounded-lg border-2 border-gray-300 hover:border-[#2D5F3F] hover:bg-[#2D5F3F] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Page Info */}
        <p className="text-center mt-4 text-gray-600">
          صفحة {currentPage} من {totalPages} - عرض {currentNews.length} من{" "}
          {NEWS_DATA.length} خبر
        </p>
      </div>
    </div>
  );
}

export default NewsPage;
