import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 'all', name: 'Все товары' },
  { id: 'matryoshka', name: 'Матрёшки' },
  { id: 'gzhel', name: 'Гжель' },
  { id: 'khokhloma', name: 'Хохлома' },
  { id: 'palekh', name: 'Палех' },
  { id: 'gifts', name: 'Подарочные наборы' }
];

const products = [
  {
    id: 1,
    name: "Матрёшка классическая",
    category: "matryoshka",
    price: 3500,
    image: "https://images.unsplash.com/photo-1558714508-e14dc5c5e4cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Традиционная русская матрёшка из липы, 7 предметов"
  },
  {
    id: 2,
    name: "Матрёшка 'Времена года'",
    category: "matryoshka",
    price: 4200,
    image: "https://images.unsplash.com/photo-1530968033775-2c92736b131e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Уникальная матрёшка с росписью времён года, 5 предметов"
  },
  {
    id: 3,
    name: "Чайный сервиз Гжель",
    category: "gzhel",
    price: 8500,
    image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Классический чайный сервиз в стиле Гжель, 6 персон"
  },
  {
    id: 4,
    name: "Ваза Гжель",
    category: "gzhel",
    price: 5600,
    image: "https://images.unsplash.com/photo-1578500351865-d6c3706f46bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Декоративная ваза с традиционной росписью Гжель"
  },
  {
    id: 5,
    name: "Хохлома - Конфетница",
    category: "khokhloma",
    price: 2800,
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Деревянная конфетница с росписью Хохлома"
  },
  {
    id: 6,
    name: "Шкатулка Палех",
    category: "palekh",
    price: 12000,
    image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Лаковая миниатюра Палех, ручная роспись"
  },
  {
    id: 7,
    name: "Подарочный набор 'Русские традиции'",
    category: "gifts",
    price: 15000,
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Набор включает матрёшку, чайный сервиз и конфетницу"
  }
];

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-12"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-serif mb-8">Каталог сувениров</h1>
        
        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Поиск сувениров..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="text-gray-600" />
            <select
              className="py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <motion.div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="relative h-64">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">{product.price.toLocaleString()} ₽</span>
                  <Link
                    to={`/product/${product.id}`}
                    className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    Подробнее
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Catalog;