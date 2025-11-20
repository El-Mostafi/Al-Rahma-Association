import { Link } from "react-router-dom";
import { Facebook, BookOpen, Users } from "lucide-react";
import { SHEIKHS_DATA } from "../data/sheikhs";

function SheikhProfile() {
  // عرض الشيخ الرئيسي (أول شيخ في القائمة)
  const mainSheikh = SHEIKHS_DATA[0];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="islamic-pattern absolute inset-0 opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block mb-4">
                <span className="text-[#C9A961] font-bold text-sm tracking-wider uppercase">
                  {mainSheikh.title}
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-[#4A5C3A] mb-6 leading-tight">
                الشيخ {mainSheikh.name}
              </h2>

              <div className="h-1 w-24 bg-gradient-to-r from-[#C9A961] to-[#D4AF37] rounded-full mb-6" />

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {mainSheikh.bio}
              </p>

              {mainSheikh.fullBio && (
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  {mainSheikh.fullBio.substring(0, 200)}...
                </p>
              )}

              <div className="flex flex-wrap gap-4">
                {mainSheikh.socialMedia?.facebook && (
                  <a
                    href={mainSheikh.socialMedia.facebook}
                    className="bg-[#4A5C3A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#3A4A2E] transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
                  >
                    <Facebook className="w-5 h-5" />
                    صفحة الشيخ
                  </a>
                )}
                <Link
                  to={`/sheikhs/${mainSheikh.id}`}
                  className="border-2 border-[#4A5C3A] text-[#4A5C3A] px-6 py-3 rounded-lg font-semibold hover:bg-[#4A5C3A] hover:text-white transition-all duration-300 flex items-center gap-2"
                >
                  <BookOpen className="w-5 h-5" />
                  البروفايل الكامل
                </Link>
                <Link
                  to="/sheikhs"
                  className="bg-[#C9A961] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#B89850] transition-all duration-300 flex items-center gap-2"
                >
                  <Users className="w-5 h-5" />
                  جميع المشايخ
                </Link>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#C9A961] to-[#D4AF37] rounded-2xl transform rotate-3 opacity-20" />
                <div className="relative bg-gradient-to-br from-[#4A5C3A] to-[#5C7247] rounded-2xl overflow-hidden shadow-2xl">
                  <div className="aspect-[3/4] bg-gray-200 flex items-center justify-center">
                    {mainSheikh.image ? (
                      <img
                        src={mainSheikh.image}
                        alt={`الشيخ ${mainSheikh.name}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-6xl text-white">
                        {mainSheikh.name[0]}
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#4A5C3A] to-transparent p-6">
                    <h3 className="text-white text-2xl font-bold">
                      الشيخ {mainSheikh.name}
                    </h3>
                    <p className="text-[#C9A961] font-semibold">
                      {mainSheikh.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SheikhProfile;
