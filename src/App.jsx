import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Pricing from "./components/Faqs";
import Workflow from "./components/Partners";
import HeroSection from "./components/HeroSection";
import Testimonials from "./components/Testimonials";
import FeatureSection from "./components/FeatureSection";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-5 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Testimonials />
        {/* <Pricing /> */}
        <Form />
        <Footer />
      </div>
    </>
  );
};

export default App;
