import { Facebook, Youtube, Mail, Phone, MapPin, Send } from "lucide-react";
import { Link } from "react-router-dom";
import associationLogo from "../images/association_logo.png";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#3A4A2E] to-[#2A3522] text-white relative overflow-hidden">
      <div className="islamic-pattern absolute inset-0 opacity-5" />

      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                <img
                  src={associationLogo}
                  alt="جمعية الرحمة"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold">جمعية الرحمة</h3>
                <p className="text-[10px] md:text-xs text-gray-300">
                  للتربية والتنمية والأعمال الاجتماعية
                </p>
              </div>
            </div>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4 md:mb-6">
              منارة علم وتربية، نسعى لنشر العلم الشرعي الأصيل والمساهمة في
              التنمية الاجتماعية.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C9A961] flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="فيسبوك"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C9A961] flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="يوتيوب"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-base md:text-lg font-bold mb-4 md:mb-6 text-[#C9A961]">
              روابط سريعة
            </h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm md:text-base text-gray-300 hover:text-[#C9A961] transition-colors inline-block hover:translate-x-1 duration-300"
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm md:text-base text-gray-300 hover:text-[#C9A961] transition-colors inline-block hover:translate-x-1 duration-300"
                >
                  عن الجمعية
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-sm md:text-base text-gray-300 hover:text-[#C9A961] transition-colors inline-block hover:translate-x-1 duration-300"
                >
                  برامجنا ومشاريعنا
                </Link>
              </li>
              <li>
                <Link
                  to="/sheikhs"
                  className="text-sm md:text-base text-gray-300 hover:text-[#C9A961] transition-colors inline-block hover:translate-x-1 duration-300"
                >
                  الشيوخ
                </Link>
              </li>
              <li>
                <Link
                  to="/schedule"
                  className="text-sm md:text-base text-gray-300 hover:text-[#C9A961] transition-colors inline-block hover:translate-x-1 duration-300"
                >
                  البرنامج الأسبوعي
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="text-sm md:text-base text-gray-300 hover:text-[#C9A961] transition-colors inline-block hover:translate-x-1 duration-300"
                >
                  الأخبار
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm md:text-base text-gray-300 hover:text-[#C9A961] transition-colors inline-block hover:translate-x-1 duration-300"
                >
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base md:text-lg font-bold mb-4 md:mb-6 text-[#C9A961]">
              معلومات الاتصال
            </h4>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#C9A961] flex-shrink-0 mt-1" />
                <span className="text-sm md:text-base text-gray-300">
                  مكناس، المغرب
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-[#C9A961] flex-shrink-0 mt-1" />
                <span className="text-sm md:text-base text-gray-300" dir="ltr">
                  +212 XXX-XXXXXX
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-[#C9A961] flex-shrink-0 mt-1" />
                <span className="text-sm md:text-base text-gray-300">
                  info@alrahma-meknes.ma
                </span>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-base md:text-lg font-bold mb-4 md:mb-6 text-[#C9A961]">
              النشرة البريدية
            </h4>
            <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed">
              اشترك في نشرتنا البريدية لتصلك آخر الأخبار والمستجدات
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C9A961] transition-colors text-sm md:text-base"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#C9A961] to-[#D4AF37] hover:from-[#B89850] hover:to-[#C9A961] text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm md:text-base"
              >
                اشترك الآن
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            <p className="text-gray-400 text-xs md:text-sm text-center md:text-right">
              جميع الحقوق محفوظة © {new Date().getFullYear()} جمعية الرحمة
              للتربية والتنمية والأعمال الاجتماعية بمكناس
            </p>
            <p className="text-gray-400 text-xs md:text-sm text-center">
              تحت إشراف فضيلة الشيخ موسى بن محمد الدخيلة
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
