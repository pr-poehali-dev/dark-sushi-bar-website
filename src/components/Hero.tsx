import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted"></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="mb-8 animate-fade-in">
          <div className="text-6xl mb-4">🍣</div>
          <h1 className="text-5xl md:text-7xl font-montserrat font-bold mb-6">
            SAKURA
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Аутентичная японская кухня с доставкой по всему городу
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
          >
            <Icon name="ShoppingCart" size={20} className="mr-2" />
            Заказать онлайн
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
          >
            <Icon name="MapPin" size={20} className="mr-2" />
            Самовывоз
          </Button>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Icon name="Clock" size={16} className="mr-2 text-primary" />
            Работаем 11:00 - 23:00
          </div>
          <div className="flex items-center">
            <Icon name="Truck" size={16} className="mr-2 text-primary" />
            Доставка 30-60 мин
          </div>
          <div className="flex items-center">
            <Icon name="Star" size={16} className="mr-2 text-primary" />
            4.9 из 5 звезд
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
