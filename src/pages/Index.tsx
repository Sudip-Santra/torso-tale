
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import NewArrivals from "../components/NewArrivals";
import Specialties from "../components/Specialties";
import CallToAction from "../components/CallToAction";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <Categories />
      <NewArrivals />
      <Specialties />
      <CallToAction />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
