import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CoachSection from "@/components/CoachSection";
import AchievementsSection from "@/components/AchievementsSection";
import ClassesSection from "@/components/ClassesSection";
import ScheduleSection from "@/components/ScheduleSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CoachSection />
      <AchievementsSection />
      <ClassesSection />
      <ScheduleSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
