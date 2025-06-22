import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Главная", href: "#home" },
    { name: "Меню", href: "#menu" },
    { name: "Доставка", href: "#delivery" },
    { name: "О нас", href: "#about" },
    { name: "Контакты", href: "#contacts" },
  ];

  return (
    <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="https://cdn.poehali.dev/files/5a042dd6-87dc-47b2-a3ea-d5c9b5a983d1.png"
              alt="SAKURA SUSHI"
              className="h-10 w-auto"
            />
            <h1 className="text-2xl font-montserrat font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              SAKURA
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-200 hover:text-orange-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-slate-900 transition-all duration-200"
            >
              <Icon name="Phone" size={16} className="mr-2" />
              +7 (999) 123-45-67
            </Button>
            <Button className="bg-gradient-to-r from-orange-400 to-red-500 text-white hover:from-orange-500 hover:to-red-600 shadow-lg">
              Заказать
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </Button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
