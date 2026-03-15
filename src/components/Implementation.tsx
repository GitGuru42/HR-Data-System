'use client';

import { motion } from 'framer-motion';
import { Search, Database, Settings, BarChart3, Users, CheckCircle } from 'lucide-react';

const Implementation = () => {
  const steps = [
    {
      icon: Search,
      title: 'Аудит и анализ данных',
      duration: '3–5 дней',
      description: 'Анализ существующих источников данных, определение требований и бизнес-процессов',
      color: 'blue'
    },
    {
      icon: Database,
      title: 'Модель данных и ETL',
      duration: '5–7 дней',
      description: 'Создание единой модели данных, настройка процессов извлечения и загрузки',
      color: 'green'
    },
    {
      icon: Settings,
      title: 'Настройка расчётов мотиваций',
      duration: '5–10 дней',
      description: 'Настройка бизнес-правил, алгоритмов KPI и формул расчёта бонусов',
      color: 'purple'
    },
    {
      icon: BarChart3,
      title: 'Визуализация и портал',
      duration: '7–10 дней',
      description: 'Создание дашбордов, отчётов и веб-портала для руководства',
      color: 'orange'
    },
    {
      icon: Users,
      title: 'Внедрение и обучение',
      duration: '3–5 дней',
      description: 'Запуск системы, обучение персонала и передача в эксплуатацию',
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
            Процесс внедрения
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Пошаговый план внедрения HR Data System в вашей компании
          </p>
        </motion.div>

        <div className="relative">
          <div className="space-y-12">
            {steps.map((step, index) => {
              const colors = getColorClasses(step.color);
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Timeline Circle */}
                  <div className="relative">
                    <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10`}>
                      <Icon className={`w-8 h-8 ${colors.icon}`} />
                    </div>
                    <div className="absolute inset-0 bg-blue-200 rounded-full animate-ping opacity-20"></div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`flex-1 ${isEven ? 'lg:mr-8' : 'lg:ml-8'}`}
                  >
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                        <div className={`px-4 py-2 ${colors.bg} rounded-lg border ${colors.border}`}>
                          <span className={`font-semibold ${colors.icon}`}>{step.duration}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center">
            <CheckCircle className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
            <h3 className="text-3xl font-bold mb-4">
              Итого: 3–4 недели &quot;под ключ&quot;
            </h3>
            <p className="text-xl text-white/90 mb-6">
              Полная автоматизация HR-процессов за месяц с гарантией результата
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-semibold mb-2">Быстрый старт</h4>
                <p className="text-sm text-white/80">Первые результаты через 2 недели</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-semibold mb-2">Поддержка</h4>
                <p className="text-sm text-white/80">3 месяца бесплатной поддержки</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-semibold mb-2">Гарантия</h4>
                <p className="text-sm text-white/80">100% выполнение договорных обязательств</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Implementation;
