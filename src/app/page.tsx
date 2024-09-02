import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { GetInTouch } from "@/sections/GetInTouch";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Pricing } from "@/sections/Pricing";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Testimonials } from "@/sections/Testimonials";
import { Tools } from "@/sections/Tools";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <Tools />
      <ProductShowcase />
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      <GetInTouch />
      <CallToAction starImageSrc={""} springImageSrc={""} />
      <Footer />
    </>
  );
}
