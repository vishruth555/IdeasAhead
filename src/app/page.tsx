// app/page.tsx
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServiceSection";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        {/* Additional sections (e.g., Projects, About, Contact) can be added here */}
      </main>
      <Footer />
    </div>
  );
}
