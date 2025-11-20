import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import {
  HomePage,
  AboutPage,
  NewsPage,
  ProjectsPage,
  SchedulePage,
  ContactPage,
  NotFoundPage,
  SheikhsPage,
  SheikhProfilePage,
  EnrollmentPage,
} from "../pages";
import NewsDetailPage from "../pages/NewsDetailPage";

/**
 * إعداد المسارات (Routes) للتطبيق
 * يستخدم React Router v6 مع createBrowserRouter
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "news",
        element: <NewsPage />,
      },
      {
        path: "news/:id",
        element: <NewsDetailPage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "schedule",
        element: <SchedulePage />,
      },
      {
        path: "sheikhs",
        element: <SheikhsPage />,
      },
      {
        path: "sheikhs/:id",
        element: <SheikhProfilePage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "enrollment",
        element: <EnrollmentPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

/**
 * مكون AppRouter - يوفر نظام التوجيه للتطبيق
 */
function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
