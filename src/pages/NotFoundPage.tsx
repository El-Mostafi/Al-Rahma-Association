import { Link } from "react-router-dom";
import { Home } from "lucide-react";

/**
 * صفحة 404 - الصفحة غير موجودة
 */
function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-[#2D5F3F] mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">
          الصفحة غير موجودة
        </h2>
        <p className="text-gray-600 mb-8">
          عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#8B4513] text-white px-6 py-3 rounded-lg hover:bg-[#6D3410] transition-colors"
        >
          <Home className="w-5 h-5" />
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
