import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { GetInTouch } from "@/sections/GetInTouch";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Tools } from "@/sections/Tools";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <LogoTicker />
      <Tools />
      <ProductShowcase />
      <GetInTouch />
      <CallToAction starImageSrc={""} springImageSrc={""} />
      <Footer />
    </main>
  );
}
