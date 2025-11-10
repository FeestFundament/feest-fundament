import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-party.jpg";
import logo from "@/assets/logo-new.png";

const Hero = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <img 
          src={logo} 
          alt="Feest-Fundament - Het fundament voor een geslaagd feest" 
          className="w-full max-w-3xl mx-auto mb-8 drop-shadow-2xl"
        />
        <Link to="/producten">
          <Button 
            variant="gold" 
            size="xl"
            className="shadow-2xl"
          >
            Bekijk ons assortiment
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
