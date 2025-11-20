import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react";

/**
 * صفحة اتصل بنا - معلومات التواصل مع الجمعية
 * تصميم احترافي وعصري مع تخطيط نظيف وسلس
 */
function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8F3] via-white to-[#FAF8F3]">
      {/* Hero Header */}
      <div className="relative bg-white border-b border-gray-100">
        <div className="absolute inset-0 bg-gradient-to-l from-[#2D5F3F]/5 via-transparent to-transparent" />

        <div className="container mx-auto px-4 py-16 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#2D5F3F]/10 rounded-full mb-4">
              <span className="text-[#2D5F3F] font-semibold text-sm">
                نحن هنا لخدمتكم
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-[#2D5F3F] mb-4 leading-tight">
              اتصل بنا
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              نسعد بتواصلكم معنا في أي وقت، فريقنا جاهز للإجابة على استفساراتكم
              ومساعدتكم
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Contact Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Phone Card */}
            <div className="group bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-xl hover:border-[#2D5F3F]/20 transition-all duration-300">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-[#2D5F3F] to-[#C9A961] rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity" />
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2D5F3F]/10 to-[#2D5F3F]/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8 text-[#2D5F3F]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#2D5F3F] mb-2">الهاتف</h3>
              <p className="text-gray-600 text-sm mb-3">اتصل بنا مباشرة</p>
              <a
                href="tel:+123456789"
                className="text-[#8B4513] font-semibold hover:text-[#6D3410] transition-colors"
              >
                +123 456 789
              </a>
            </div>

            {/* Email Card */}
            <div className="group bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-xl hover:border-[#8B4513]/20 transition-all duration-300">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-[#8B4513] to-[#C9A961] rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity" />
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8B4513]/10 to-[#8B4513]/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-[#8B4513]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#2D5F3F] mb-2">
                البريد الإلكتروني
              </h3>
              <p className="text-gray-600 text-sm mb-3">راسلنا في أي وقت</p>
              <a
                href="mailto:info@alrahma.org"
                className="text-[#8B4513] font-semibold hover:text-[#6D3410] transition-colors"
              >
                info@alrahma.org
              </a>
            </div>

            {/* Location Card */}
            <div className="group bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-xl hover:border-[#2D5F3F]/20 transition-all duration-300">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-[#2D5F3F] to-[#C9A961] rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity" />
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2D5F3F]/10 to-[#2D5F3F]/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-8 h-8 text-[#2D5F3F]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#2D5F3F] mb-2">العنوان</h3>
              <p className="text-gray-600 text-sm mb-3">زورنا في مقرنا</p>
              <p className="text-[#8B4513] font-semibold">
                شارع الجامعة، المدينة، الدولة
              </p>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#2D5F3F]/10 flex items-center justify-center">
                  <Send className="w-6 h-6 text-[#2D5F3F]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#2D5F3F]">
                  أرسل لنا رسالة
                </h2>
              </div>

              <form className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2D5F3F]/20 focus:border-[#2D5F3F] transition-colors outline-none"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2D5F3F]/20 focus:border-[#2D5F3F] transition-colors outline-none"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    رقم الهاتف (اختياري)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2D5F3F]/20 focus:border-[#2D5F3F] transition-colors outline-none"
                    placeholder="+123 456 789"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    الموضوع
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2D5F3F]/20 focus:border-[#2D5F3F] transition-colors outline-none"
                    placeholder="موضوع الرسالة"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    الرسالة
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2D5F3F]/20 focus:border-[#2D5F3F] transition-colors outline-none resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#2D5F3F] to-[#1a4d2e] text-white py-4 rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  إرسال الرسالة
                </button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="space-y-6">
              {/* Working Hours */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#8B4513]/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#8B4513]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2D5F3F]">
                    أوقات العمل
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-semibold text-gray-700">
                      السبت - الخميس
                    </span>
                    <span className="text-[#8B4513] font-bold">
                      9:00 ص - 9:00 م
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-semibold text-gray-700">الجمعة</span>
                    <span className="text-[#8B4513] font-bold">
                      2:00 م - 9:00 م
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-semibold text-gray-700">
                      عطلة نهاية الأسبوع
                    </span>
                    <span className="text-gray-500">مغلق</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-[#2D5F3F] to-[#1a4d2e] rounded-2xl shadow-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-3">
                  تابعنا على مواقع التواصل
                </h3>
                <p className="text-white/90 mb-6">
                  كن على اطلاع دائم بأنشطتنا وفعالياتنا من خلال متابعتنا على
                  وسائل التواصل الاجتماعي
                </p>

                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="فيسبوك"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="تويتر"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="يوتيوب"
                  >
                    <Youtube className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="rounded-xl overflow-hidden border border-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.9732467385124!2d-5.584220724490591!3d33.89376537321706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda05b475d1d896d%3A0xcfc5fc84d7acbe01!2z2KzZhdi52YrYqSDYp9mE2LHYrdmF2Kkg2YTZhNiq2LHYqNmK2Kkg2YjYp9mE2KrZhtmF2YrYqSDZiNin2YTYo9i52YXYp9mEINin2YTYp9is2KrZhdin2LnZitip!5e1!3m2!1sfr!2sma!4v1763653634512!5m2!1sfr!2sma"
                    className="w-full h-96 border-0"
                    allowFullScreen
                    loading="lazy"
                    title="موقع جمعية الرحمة"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
