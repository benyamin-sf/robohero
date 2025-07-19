import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "boxicons/css/boxicons.min.css";

import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <main>
      {/* Gradient Image */}
      <img
        src="gradient.png"
        alt="gradient-img"
        className="absolute top-0 right-0 -z-10 opacity-60"
      />

      {/* blurred shadow */}
      <div className="absolute top-[20%] right-[-5%] -z-10 h-0 w-[40rem] -rotate-[30deg] shadow-[0_0_900px_20px_#e99b63]"></div>

      <Header />

      <Hero />
    </main>
  );
}

export default App;
