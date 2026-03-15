'use client';

import { motion } from 'framer-motion';
import { Award, Settings, Database, TrendingUp, Zap, Shield } from 'lucide-react';

const Advantages = () => {
  const advantages = [
    {
      icon: Award,
      title: 'Экспертиза в автоматизации мотиваций и HR-BI',
      description: 'Более 15 лет опыта в построении HR-аналитических систем для крупных компаний'
    },
    {
      icon: Settings,
      title: 'Возможность развёртывания в Power BI или отдельном веб-сервисе',
      description: 'Гибкость в выборе платформы - используем существующие инструменты или создаём новые'
    },
    {
      icon: Database,
      title: 'Гибкая интеграция с существующими базами',
      description: 'Подключаемся к любым источникам данных: SAP, 1C, Oracle, PostgreSQL, Excel'
    },
    {
      icon: TrendingUp,
      title: 'Прогнозирование текучести и затрат',
      description: 'Используем машинное обучение для предсказания HR-трендов и бюджетирования'
    },
    {
      icon: Zap,
      title: 'Быстрое внедрение и результат',
      description: 'Полная автоматизация за 3-4 недели с первыми результатами через 2 недели'
    },
    {
      icon: Shield,
      title: '100% кастомизация под процессы компании',
      description: 'Адаптируем систему под уникальные бизнес-процессы и требования'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Конкурентные преимущества
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Почему выбирают HR Data System
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border border-gray-200 p-8 h-full hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {advantage.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Наши гарантии</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">SLA 99.9%</h4>
                <p className="text-white/80 text-sm">Гарантия доступности системы</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Быстрая поддержка</h4>
                <p className="text-white/80 text-sm">Ответ в течение 2 часов</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Результат</h4>
                <p className="text-white/80 text-sm">Окупаемость в течение 6 месяцев</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Advantages;
