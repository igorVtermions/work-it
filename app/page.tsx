import Banner from "@/components/banner";
import Contact from "@/components/Contact";
import About from "@/Partials/Home/About";
import HowToUse from "@/Partials/Home/HowToUse";


export default function Home() {
  return (
   <>
     <Banner />
     <About />
     <HowToUse />
     <Contact />
   </>
  );
}
