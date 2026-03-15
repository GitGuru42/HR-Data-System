'use client';

import { motion } from 'framer-motion';
import { Database, Settings, BarChart3, Globe, Bot } from 'lucide-react';

const WhatWeOffer = () => {
  const features = [
    {
      icon: Database,
      title: 'Единое хранилище HR-данных',
      description: 'Централизованная база данных по сотрудникам, отделам и показателям с автоматической синхронизацией',
      color: 'blue'
    },
    {
      icon: Settings,
      title: 'Автоматические расчёты мотиваций и KPI',
      description: 'Настройка бизнес-правил для расчёта бонусов, премий и мотивационных программ без ручной работы',
      color: 'green'
    },
    {
      icon: BarChart3,
      title: 'BI-дашборд по персоналу, филиалам и подразделениям',
      description: 'Интерактивные отчёты и визуализация ключевых HR-метрик в реальном времени',
      color: 'purple'
    },
    {
      icon: Globe,
      title: 'Веб-портал для руководства',
      description: 'Доступ к аналитике и отчётам через удобный веб-интерфейс с ролевым доступом',
      color: 'orange'
    },
    {
      icon: Bot,
      title: 'Интеграция с AI-инсайт-ботом',
      description: 'Автоматические ответы на вопросы по HR-аналитике через чат-бот с использованием ИИ',
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; icon: string; border: string } } = {
      blue: { bg: 'bg-blue-50', icon: 'text-blue-600', border: 'border-blue-200' },
      green: { bg: 'bg-green-50', icon: 'text-green-600', border: 'border-green-200' },
      purple: { bg: 'bg-purple-50', icon: 'text-purple-600', border: 'border-purple-200' },
      orange: { bg: 'bg-orange-50', icon: 'text-orange-600', border: 'border-orange-200' },
      indigo: { bg: 'bg-indigo-50', icon: 'text-indigo-600', border: 'border-indigo-200' }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Что мы предлагаем
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            HR Data System — модульная BI платформа, объединяющая HR, финансы и управление мотивацией в одной системе
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const colors = getColorClasses(feature.color);
            const Icon = feature.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="card-premium group"
              >
                <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${colors.icon}`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Модульная архитектура</h3>
            <p className="text-lg text-white/90 mb-6">
              Подключите только нужные модули или используйте полную платформу для комплексной HR-аналитики
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['HR Data Integration', 'Motiva Engine', 'BI Portal', 'Web HR Service', 'AI Insight Bot'].map((module, i) => (
                <div
                  key={i}
                  className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium"
                >
                  {module}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
