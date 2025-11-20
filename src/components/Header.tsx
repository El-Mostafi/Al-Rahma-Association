import { Facebook, Youtube, Heart, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS } from "../constants";
import { useState } from "react";

function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left side - Actions (Mobile: hidden, Desktop: visible) */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/enrollment"
              className="bg-gradient-to-r from-[#C9A961] to-[#D4AF37] hover:from-[#B89850] hover:to-[#C9A961] text-white px-4 lg:px-6 py-2 lg:py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 text-sm lg:text-base"
            >
              <Heart className="w-4 h-4" />
              التسجيل
            </Link>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="text-[#4A5C3A] hover:text-[#C9A961] transition-colors"
                aria-label="فيسبوك"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-[#4A5C3A] hover:text-[#C9A961] transition-colors"
                aria-label="يوتيوب"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#4A5C3A] p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="القائمة"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors font-medium text-sm lg:text-base ${
                  location.pathname === link.path
                    ? "text-[#4A5C3A] font-bold"
                    : "text-gray-700 hover:text-[#4A5C3A]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Logo and Title */}
          <Link to="/" className="flex items-center gap-2 md:gap-4">
            <div className="text-right">
              <h1 className="text-base md:text-xl font-bold text-[#4A5C3A] leading-tight">
                جمعية الرحمة
              </h1>
              <p className="text-[10px] md:text-xs text-gray-600 hidden sm:block">
                للتربية والتنمية والأعمال الاجتماعية
              </p>
            </div>
            <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center flex-shrink-0">
              <img
                src="src/images/association_logo.png"
                alt="جمعية الرحمة"
                className="w-full h-full object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <nav className="py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-colors ${
                    location.pathname === link.path
                      ? "bg-[#4A5C3A] text-white font-bold"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Actions */}
              <div className="px-4 pt-4 space-y-3 border-t border-gray-100 mt-4">
                <Link
                  to="/enrollment"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full bg-gradient-to-r from-[#C9A961] to-[#D4AF37] text-white px-4 py-3 rounded-lg font-semibold text-center"
                >
                  <Heart className="w-4 h-4 inline-block ml-2" />
                  التسجيل
                </Link>

                <div className="flex items-center justify-center gap-4 pt-2">
                  <a
                    href="#"
                    className="text-[#4A5C3A] hover:text-[#C9A961] transition-colors"
                    aria-label="فيسبوك"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-[#4A5C3A] hover:text-[#C9A961] transition-colors"
                    aria-label="يوتيوب"
                  >
                    <Youtube className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
