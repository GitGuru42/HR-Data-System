'use client';

import { motion } from 'framer-motion';
import { Database, Zap, BarChart3, ArrowRight } from 'lucide-react';

const Solution = () => {
  const solutions = [
    {
      icon: Database,
      title: 'Все источники данных объединены',
      description: 'Создаём единое хранилище данных из всех систем: HR, финансы, SAP, 1C, Excel и других источников'
    },
    {
      icon: Zap,
      title: 'Мотивация рассчитывается автоматически',
      description: 'Настраиваем бизнес-правила и алгоритмы для автоматического расчёта KPI, бонусов и премий'
    },
    {
      icon: BarChart3,
      title: 'KPI и метрики визуализируются в дашбордах',
      description: 'Интерактивные отчёты и веб-портал для руководства с доступом к аналитике в реальном времени'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Наше решение
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Как мы трансформируем HR-процессы в вашей компании
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl transform scale-95 group-hover:scale-100 transition-transform duration-300"></div>
                
                <div className="relative bg-white rounded-2xl shadow-lg border border-green-100 p-8 h-full text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-green-400/20 to-blue-400/20 rounded-full -ml-32 -mb-32"></div>
            
            <div className="relative z-10">
              <ArrowRight className="w-12 h-12 text-green-400 mx-auto mb-6" />
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                От Excel и догадок — к прозрачной, управляемой HR-системе
              </h3>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                Автоматизируйте рутинные процессы, получайте точные данные и принимайте решения на основе реальной аналитики
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;
