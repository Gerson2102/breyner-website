import TopNav from "@/components/nav/TopNav";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import SelectedWork from "@/components/sections/SelectedWork";
import Services from "@/components/sections/Services";
import SuburbanDrivers from "@/components/sections/SuburbanDrivers";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <TopNav />
      <main>
        <Hero />
        <About />
        <SuburbanDrivers />
        <SelectedWork />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
