/**
 * ملف خدمات API
 * يحتوي على الدوال للتواصل مع الخادم
 */

// مثال على الخدمة الأساسية
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";

/**
 * دالة أساسية للطلبات
 */
async function fetchAPI<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }

  return response.json();
}

/**
 * خدمة الأخبار
 */
export const newsService = {
  /**
   * جلب جميع الأخبار
   */
  async getAll() {
    return fetchAPI("/news");
  },

  /**
   * جلب خبر واحد
   */
  async getById(id: string | number) {
    return fetchAPI(`/news/${id}`);
  },

  /**
   * إنشاء خبر جديد
   */
  async create(data: unknown) {
    return fetchAPI("/news", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  /**
   * تحديث خبر
   */
  async update(id: string | number, data: unknown) {
    return fetchAPI(`/news/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    });
  },

  /**
   * حذف خبر
   */
  async delete(id: string | number) {
    return fetchAPI(`/news/${id}`, {
      method: "DELETE",
    });
  },
};

/**
 * خدمة المشاريع
 */
export const projectsService = {
  async getAll() {
    return fetchAPI("/projects");
  },

  async getById(id: string | number) {
    return fetchAPI(`/projects/${id}`);
  },

  async create(data: unknown) {
    return fetchAPI("/projects", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  async update(id: string | number, data: unknown) {
    return fetchAPI(`/projects/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    });
  },

  async delete(id: string | number) {
    return fetchAPI(`/projects/${id}`, {
      method: "DELETE",
    });
  },
};

/**
 * خدمة التواصل
 */
export const contactService = {
  /**
   * إرسال رسالة تواصل
   */
  async sendMessage(data: { name: string; email: string; message: string }) {
    return fetchAPI("/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },
};
