import { ArrowLeft } from 'lucide-react';
import chaikWideImg from "../images/chaikh_wide_image.jpg"

function Hero() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-l from-[#4A5C3A]/95 to-[#3A4A2E]/98">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url(${chaikWideImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      <div className="islamic-pattern absolute inset-0 opacity-20" />

      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          <div className="inline-block mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-[#C9A961] to-[#D4AF37] rounded-full" />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            جمعية الرحمة
            <span className="block text-[#C9A961] mt-2">منارة علم وتربية</span>
          </h2>

          <p className="text-xl text-gray-100 mb-8 leading-relaxed">
            نسعى لنشر العلم الشرعي الأصيل والتربية الإيمانية الصحيحة والمساهمة في التنمية الاجتماعية
          </p>

          <div className="flex gap-4">
            <button className="bg-white text-[#4A5C3A] px-8 py-3.5 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 group">
              اكتشف برامجنا
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3.5 rounded-lg font-bold hover:bg-white hover:text-[#4A5C3A] transition-all duration-300">
              تابع آخر الدروس
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#FAF8F3] to-transparent" />
    </section>
  );
}

export default Hero;
