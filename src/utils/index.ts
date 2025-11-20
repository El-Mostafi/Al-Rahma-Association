/**
 * دوال مساعدة (Utility Functions)
 */

/**
 * تنسيق التاريخ بالعربي
 * @param date - كائن التاريخ
 * @returns نص التاريخ المنسق
 */
export function formatArabicDate(date: Date): string {
  const arabicMonths = [
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

  const day = date.getDate();
  const month = arabicMonths[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

/**
 * اختصار النص مع إضافة نقاط
 * @param text - النص الأصلي
 * @param maxLength - الحد الأقصى للطول
 * @returns النص المختصر
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

/**
 * التحقق من صحة البريد الإلكتروني
 * @param email - عنوان البريد الإلكتروني
 * @returns true إذا كان البريد صحيح
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * التحقق من صحة رقم الهاتف
 * @param phone - رقم الهاتف
 * @returns true إذا كان الرقم صحيح
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
  return phoneRegex.test(phone);
}

/**
 * تحويل الرقم إلى صيغة مئوية
 * @param value - القيمة
 * @param total - المجموع الكلي
 * @returns النسبة المئوية
 */
export function toPercentage(value: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((value / total) * 100);
}

/**
 * تأخير التنفيذ (للاستخدام مع async/await)
 * @param ms - الوقت بالميلي ثانية
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * تنسيق الأرقام بالفواصل
 * @param num - الرقم
 * @returns الرقم المنسق
 */
export function formatNumber(num: number): string {
  return num.toLocaleString("ar-SA");
}
