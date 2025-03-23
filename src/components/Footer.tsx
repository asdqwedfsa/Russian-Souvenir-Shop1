import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">РусСувенир</h3>
            <p className="text-gray-400">
              Ваш надежный магазин аутентичных русских сувениров с 2010 года
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Контакты</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>info@russouvenir.ru</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Москва, ул. Тверская, 1</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Информация</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-gray-300">О компании</Link>
              </li>
              <li>
                <Link to="/delivery" className="hover:text-gray-300">Доставка</Link>
              </li>
              <li>
                <Link to="/payment" className="hover:text-gray-300">Оплата</Link>
              </li>
              <li>
                <Link to="/contacts" className="hover:text-gray-300">Контакты</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Подписка на новости</h4>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Ваш email"
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-white"
              />
              <button
                type="submit"
                className="w-full bg-white text-gray-900 px-4 py-2 rounded font-medium hover:bg-gray-100"
              >
                Подписаться
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2024 РусСувенир. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;