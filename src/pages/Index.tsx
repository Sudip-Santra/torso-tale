import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Specialties from "../components/Specialties";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <Categories />
      <Specialties />
      <Footer />
    </div>
  );
};

export default Index;
