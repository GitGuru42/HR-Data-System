'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: 'от 1.2 млн ₸',
      description: 'HR-дашборд + аудит данных',
      features: [
        'Базовый HR-дашборд',
        'Аудит существующих данных',
        'Настройка 5 ключевых метрик',
        'Ежемесячные отчёты',
        'Базовая техподдержка'
      ],
      color: 'blue',
      popular: false
    },
    {
      name: 'Pro',
      price: 'от 3.5 млн ₸',
      description: 'BI + автоматизация расчётов мотиваций',
      features: [
        'Полный BI-портал',
        'Автоматические расчёты мотиваций',
        'Настройка KPI и бонусов',
        'Интеграция с 2 источниками данных',
        'Приоритетная поддержка',
        'Обучение команды (5 человек)'
      ],
      color: 'green',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'от 6.9 млн ₸',
      description: 'BI + расчёты + веб-портал + обучение',
      features: [
        'Полная платформа HR Data System',
        'Корпоративный веб-портал',
        'Интеграция с любыми системами',
        'AI-инсайт бот',
        'Выделенный менеджер',
        'Обучение всей команды',
        'Кастомизация под процессы',
        'SLA гарантия 99.9%'
      ],
      color: 'purple',
      popular: false
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; border: string; button: string; accent: string } } = {
      blue: { bg: 'bg-blue-50', border: 'border-blue-200', button: 'bg-blue-600 hover:bg-blue-700', accent: 'text-blue-600' },
      green: { bg: 'bg-green-50', border: 'border-green-200', button: 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800', accent: 'text-green-600' },
      purple: { bg: 'bg-purple-50', border: 'border-purple-200', button: 'bg-purple-600 hover:bg-purple-700', accent: 'text-purple-600' }
    };
    return colorMap[color] || colorMap.blue;
  };

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
            Тарифные планы
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Выберите оптимальный план для вашего бизнеса
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => {
            const colors = getColorClasses(plan.color);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`relative ${plan.popular ? 'scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      Популярный
                    </div>
                  </div>
                )}
                
                <div className={`bg-white rounded-2xl shadow-xl border-2 ${plan.popular ? colors.border : 'border-gray-200'} p-8 h-full ${plan.popular ? 'ring-4 ring-green-200 ring-opacity-50' : ''} hover:shadow-2xl transition-all duration-300`}>
                  <div className="text-center mb-8">
                    <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? colors.accent : 'text-gray-900'}`}>
                      {plan.name}
                    </h3>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {plan.price}
                    </div>
                    <p className="text-gray-600">
                      {plan.description}
                    </p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className={`w-5 h-5 ${plan.popular ? 'text-green-500' : colors.accent} flex-shrink-0 mt-0.5`} />
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </motion.div>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            Стоимость зависит от объёма данных и количества интеграций
          </h3>
          <p className="text-lg text-white/90 mb-6">
            Свяжитесь с нами для точного расчёта стоимости под ваши задачи
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
