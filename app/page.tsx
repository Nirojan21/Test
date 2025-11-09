import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import CallToAction from "@/components/CallToAction";
import ProjectGallery from "@/components/ProjectGallery";
import AppointmentStats from "@/components/AppointmentStats";
import ExpertTeam from "@/components/ExpertTeam";
import BlogNews from "@/components/BlogNews";
import ClientLogos from "@/components/ClientLogos";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <CallToAction />
      <ProjectGallery />
      <AppointmentStats />
      <ExpertTeam />
      <BlogNews />
      <ClientLogos />
      <Footer />
    </main>
  );
}


