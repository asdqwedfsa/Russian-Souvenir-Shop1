import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <motion.h1 
                className="text-2xl font-serif text-gray-900"
                whileHover={{ scale: 1.05 }}
              >
                РусСувенир
              </motion.h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <NavLink to="/catalog">Каталог</NavLink>
            <NavLink to="/about">О нас</NavLink>
            <NavLink to="/blog">Блог</NavLink>
            <Link to="/cart">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <ShoppingCart className="w-6 h-6 text-gray-700" />
              </motion.div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink to="/catalog">Каталог</MobileNavLink>
            <MobileNavLink to="/about">О нас</MobileNavLink>
            <MobileNavLink to="/blog">Блог</MobileNavLink>
            <MobileNavLink to="/cart">Корзина</MobileNavLink>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link to={to}>
    <motion.span
      className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
      whileHover={{ scale: 1.05 }}
    >
      {children}
    </motion.span>
  </Link>
);

const MobileNavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
  >
    {children}
  </Link>
);

export default Navbar;