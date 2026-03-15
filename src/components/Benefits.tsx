'use client';

import { motion } from 'framer-motion';
import { Users, TrendingUp, Calculator, Eye, Brain, Globe } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Users,
      title: 'Полная аналитика по численности, текучести и затратам',
      description: 'Комплексная картина HR-метрик по компании, отделам и сотрудникам'
    },
    {
      icon: Calculator,
      title: 'Автоматический расчёт мотиваций и KPI',
      description: 'Мгновенные вычисления бонусов и премий по заданным правилам'
    },
    {
      icon: Eye,
      title: 'Прозрачность ФОТ и бонусов по сотрудникам',
      description: 'Детальная разбивка затрат на персонал с возможностью детализации'
    },
    {
      icon: TrendingUp,
      title: 'Прогноз текучести и бюджета',
      description: 'Предиктивная аналитика для планирования HR-бюджета'
    },
    {
      icon: Brain,
      title: 'Централизованная HR-БД под контролем клиента',
      description: 'Полный контроль над данными с возможностью экспорта и резервного копирования'
    },
    {
      icon: Globe,
      title: 'Веб-портал с визуализацией для руководства',
      description: 'Удобный доступ к аналитике через браузер с любого устройства'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Преимущества для клиента
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Что получит ваша компания после внедрения HR Data System
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            
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
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 h-full hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
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
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">до 40%</div>
                <p className="text-white/90">экономии времени на HR-расчётах</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">до 30%</div>
                <p className="text-white/90">снижение текучести персонала</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">до 25%</div>
                <p className="text-white/90">оптимизация ФОТ</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
