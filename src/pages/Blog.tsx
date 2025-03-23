import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-12"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-serif mb-8">Блог</h1>
        <p className="text-gray-600">Страница блога в разработке</p>
      </div>
    </motion.div>
  );
};

export default Blog;