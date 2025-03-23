import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-12"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <motion.h1 
            className="text-4xl font-serif mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            О компании РусСувенир
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            Мы специализируемся на продаже аутентичных русских сувениров с 2010 года. 
            Наша миссия — сохранение и популяризация богатого культурного наследия России 
            через уникальные предметы ручной работы.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-serif mb-6">Наши ценности</h2>
            <ul className="space-y-4 text-gray-600">
              <li>✓ Аутентичность и качество каждого изделия</li>
              <li>✓ Поддержка российских мастеров и художников</li>
              <li>✓ Сохранение традиций народного творчества</li>
              <li>✓ Индивидуальный подход к каждому клиенту</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-serif mb-6">Наши преимущества</h2>
            <ul className="space-y-4 text-gray-600">
              <li>✓ Прямые поставки от производителей</li>
              <li>✓ Гарантия подлинности изделий</li>
              <li>✓ Безопасная доставка по всей России</li>
              <li>✓ Профессиональная упаковка подарков</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="bg-gray-50 rounded-xl p-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-serif mb-6">Контактная информация</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <Phone className="text-blue-600" />
              <div>
                <h3 className="font-medium">Телефон</h3>
                <p className="text-gray-600">+7 (495) 123-45-67</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-blue-600" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-600">info@russouvenir.ru</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="text-blue-600" />
              <div>
                <h3 className="font-medium">Адрес</h3>
                <p className="text-gray-600">Москва, ул. Тверская, 1</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="text-blue-600" />
              <div>
                <h3 className="font-medium">Режим работы</h3>
                <p className="text-gray-600">Пн-Вс: 10:00 - 20:00</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-serif mb-6">Напишите нам</h2>
          <form className="max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Сообщение
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              Отправить
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;