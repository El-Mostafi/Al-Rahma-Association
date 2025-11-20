/**
 * الثوابت المستخدمة في التطبيق
 */

import type { NavLink } from "../types";

/**
 * روابط التنقل الرئيسية
 */
export const NAV_LINKS: NavLink[] = [
  { path: "/", label: "الرئيسية" },
  { path: "/about", label: "من نحن" },
  { path: "/sheikhs", label: "المشايخ" },
  { path: "/news", label: "الأخبار" },
  { path: "/projects", label: "المشاريع" },
  { path: "/schedule", label: "البرنامج الأسبوعي" },
  { path: "/contact", label: "اتصل بنا" },
];

/**
 * معلومات التواصل
 */
export const CONTACT_INFO = {
  phone: "+123 456 789",
  email: "info@alrahma.org",
  address: "شارع الجامعة، المدينة، الدولة",
  socialMedia: {
    facebook: "#",
    twitter: "#",
    instagram: "#",
    youtube: "#",
  },
};

/**
 * إعدادات الموقع
 */
export const SITE_SETTINGS = {
  siteName: "جمعية الرحمة",
  siteDescription: "جمعية خيرية إسلامية تهدف إلى خدمة المجتمع",
  primaryColor: "#2D5F3F",
  secondaryColor: "#8B4513",
};

/**
 * أيام الأسبوع بالعربي
 */
export const WEEK_DAYS = [
  "الأحد",
  "الاثنين",
  "الثلاثاء",
  "الأربعاء",
  "الخميس",
  "الجمعة",
  "السبت",
];

/**
 * الأشهر بالعربي
 */
export const ARABIC_MONTHS = [
  "يناير",
  "فبراير",
  "مارس",
  "أبريل",
  "مايو",
  "يونيو",
  "يوليو",
  "أغسطس",
  "سبتمبر",
  "أكتوبر",
  "نوفمبر",
  "ديسمبر",
];
