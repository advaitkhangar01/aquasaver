import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import Products from "@/components/Products";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import FeaturedProject from "@/components/FeaturedProject";
import ClientsBar from "@/components/ClientsBar";
import Testimonials from "@/components/Testimonials";
import ServiceAreas from "@/components/ServiceAreas";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Founder from "@/components/Founder";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <About />
      <Products />
      <WhyChooseUs />
      <HowItWorks />
      <FeaturedProject />
      <ClientsBar />
      <Testimonials />
      <ServiceAreas />
      <FAQ />
      <Contact />
      <Founder />
    </>
  );
}
