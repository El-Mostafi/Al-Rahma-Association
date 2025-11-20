import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

/**
 * التخطيط الرئيسي للموقع
 * يحتوي على الهيدر والفوتر المشتركة بين جميع الصفحات
 * Outlet: مكان عرض محتوى الصفحة الحالية
 */
function MainLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#FAF8F3]" dir="rtl">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
