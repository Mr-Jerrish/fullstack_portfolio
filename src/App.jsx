import Navbar from "./components/layout/Navbar.jsx";
import Home from "@/pages/Home.jsx";
import About from "@/pages/About.jsx";
import Skills from "@/pages/Skills.jsx";
import Experience from "@/pages/Experience.jsx";
import Projects from "@/pages/Projects.jsx";
import Contact from "@/pages/Contact.jsx";
import Footer from "@/components/layout/Footer.jsx";

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-[#f7f8fc] dark:bg-[#070a12]">
        <Navbar />

        <main>
          <Home />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
