/**
 * أنواع TypeScript المشتركة في المشروع
 */

/**
 * نوع الخبر أو الفعالية
 */
export interface NewsItem {
  id: string | number;
  title: string;
  description: string;
  date: string;
  image?: string;
  category?: string;
}

/**
 * نوع المشروع
 */
export interface Project {
  id: string | number;
  title: string;
  description: string;
  image?: string;
  status?: "active" | "completed" | "upcoming";
  progress?: number;
}

/**
 * نوع الفعالية في البرنامج الأسبوعي
 */
export interface ScheduleEvent {
  id: string | number;
  day: string;
  time: string;
  title: string;
  location?: string;
  description?: string;
}

/**
 * نوع الدرس في البرنامج الأسبوعي
 */
export interface Lesson {
  id: string | number;
  day: string;
  subject: string;
  location: string;
  time: string;
  type: "private" | "public"; // دروس خاصة أو مفتوحة
  active: boolean;
  description?: string;
}

/**
 * نوع الكتاب
 */
export interface Book {
  title: string;
  category: string;
  pages: number;
  year: string;
  description: string;
}

/**
 * نوع الشيخ
 */
export interface Sheikh {
  id: string | number;
  name: string;
  title: string; // مثل: رئيس الجمعية، عضو الهيئة التدريسية
  bio: string;
  fullBio?: string;
  image?: string;
  specializations?: string[]; // التخصصات
  socialMedia?: {
    facebook?: string;
    twitter?: string;
    youtube?: string;
    website?: string;
  };
  lessons: Lesson[]; // الدروس الخاصة بالشيخ
  achievements?: string[]; // الإنجازات
  books?: Book[]; // الكتب والمؤلفات
}

/**
 * نوع رابط التنقل
 */
export interface NavLink {
  path: string;
  label: string;
  icon?: React.ReactNode;
}

/**
 * نوع معلومات التواصل
 */
export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  socialMedia?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
  };
}

/**
 * نوع إعدادات الموقع
 */
export interface SiteSettings {
  siteName: string;
  siteDescription: string;
  logo?: string;
  primaryColor: string;
  secondaryColor: string;
}
