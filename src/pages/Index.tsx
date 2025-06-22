import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedMenu from "@/components/FeaturedMenu";
import DeliverySection from "@/components/DeliverySection";
import OnlineOrder from "@/components/OnlineOrder";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <FeaturedMenu />
        <DeliverySection />
        <OnlineOrder />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
