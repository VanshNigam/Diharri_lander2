import Navbar from "@/components/Navbar";
import Hero from "./Lander/Hero";

const Lander: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b pl-10 pr-12 from-white to-blue-50 px-6 flex flex-col">
      {/* Navbar Component */}
      <Navbar />
      <section>
        <Hero />
      </section>
    </div>
  );
};

export default Lander;
