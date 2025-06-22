import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/files/06c3f5cd-a2be-46ce-9a89-5299bfab65ac.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900/80"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="mb-12 animate-fade-in">
          <div className="text-7xl mb-6">🍣</div>
          <h1 className="text-6xl md:text-8xl font-montserrat font-bold mb-6 bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            SAKURA
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-2xl mx-auto font-light">
            Аутентичная японская кухня с доставкой по всему городу
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 text-lg px-8 py-6 shadow-lg"
          >
            <Icon name="ShoppingCart" size={20} className="mr-2" />
            Заказать онлайн
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white text-lg px-8 py-6"
          >
            <Icon name="MapPin" size={20} className="mr-2" />
            Самовывоз
          </Button>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8 text-sm text-blue-300">
          <div className="flex items-center">
            <Icon name="Clock" size={16} className="mr-2 text-orange-400" />
            Работаем 11:00 - 23:00
          </div>
          <div className="flex items-center">
            <Icon name="Truck" size={16} className="mr-2 text-orange-400" />
            Доставка 30-60 мин
          </div>
          <div className="flex items-center">
            <Icon name="Star" size={16} className="mr-2 text-orange-400" />
            4.9 из 5 звезд
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
