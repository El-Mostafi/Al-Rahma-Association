import Hero from "../components/Hero";
import SheikhProfile from "../components/SheikhProfile";
import WeeklySchedule from "../components/WeeklySchedule";
import News from "../components/News";
import Projects from "../components/Projects";

/**
 * صفحة الرئيسية - تعرض جميع أقسام الصفحة الرئيسية
 */
function HomePage() {
  return (
    <>
      <Hero />
      <SheikhProfile />
      <WeeklySchedule />
      <News />
      <Projects />
    </>
  );
}

export default HomePage;
