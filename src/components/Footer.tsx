import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer id="contacts" className="bg-muted/30 border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="https://cdn.poehali.dev/files/5a042dd6-87dc-47b2-a3ea-d5c9b5a983d1.png"
                alt="SAIKO SUSHI"
                className="h-8 w-auto"
              />
              <h3 className="text-2xl font-montserrat font-bold text-primary">
                SAKURA
              </h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Аутентичная японская кухня с доставкой по всему городу. Свежие
              продукты, традиционные рецепты.
            </p>
            <div className="flex space-x-3">
              <div className="bg-primary/10 p-2 rounded cursor-pointer hover:bg-primary/20 transition-colors">
                <Icon name="Instagram" size={20} className="text-primary" />
              </div>
              <div className="bg-primary/10 p-2 rounded cursor-pointer hover:bg-primary/20 transition-colors">
                <Icon name="Facebook" size={20} className="text-primary" />
              </div>
              <div className="bg-primary/10 p-2 rounded cursor-pointer hover:bg-primary/20 transition-colors">
                <Icon name="MessageCircle" size={20} className="text-primary" />
              </div>
            </div>
          </div>

          {/* Menu */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Меню</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Суши
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Роллы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Сеты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Супы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Напитки
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Услуги</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Доставка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Самовывоз
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Банкеты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Кейтеринг
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Подарочные карты
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Контакты</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} className="text-primary" />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} className="text-primary" />
                <span>info@sakura-sushi.ru</span>
              </div>
              <div className="flex items-start space-x-2">
                <Icon name="MapPin" size={16} className="text-primary mt-0.5" />
                <span>
                  ул. Японская, 12
                  <br />
                  г. Москва, 119333
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-primary" />
                <span>Ежедневно 11:00 - 23:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2024 SAKURA. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Условия доставки
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Оферта
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
