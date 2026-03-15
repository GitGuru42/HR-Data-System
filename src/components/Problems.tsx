'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, FileText, Calculator, EyeOff } from 'lucide-react';

const Problems = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: 'Разрозненные данные по HR и финансам',
      description: 'Информация хранится в разных системах, Excel-файлах и базах данных без единой структуры',
      impact: 'Потеря до 40% времени на поиск и объединение данных'
    },
    {
      icon: Calculator,
      title: 'Сложные и долгие ручные расчёты мотиваций',
      description: 'Расчёт KPI, бонусов и премий занимает недели и подвержен человеческим ошибкам',
      impact: 'Ошибки в расчётах до 15% и недовольство сотрудников'
    },
    {
      icon: FileText,
      title: 'Нет прозрачной картины по затратам на персонал',
      description: 'Руководство не видит полную картину ФОТ, бонусов и общей стоимости персонала',
      impact: 'Неоптимальное распределение бюджета на персонал'
    },
    {
      icon: EyeOff,
      title: 'Руководство не видит реальную эффективность подразделений',
      description: 'Отсутствие инструментов для объективной оценки производительности отделов и сотрудников',
      impact: 'Неэффективные управленческие решения'
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
            Ключевые проблемы бизнеса
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            С какими вызовами сталкиваются HR-директора и руководители при управлении персоналом
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl transform scale-95 group-hover:scale-100 transition-transform duration-300"></div>
                
                <div className="relative bg-white rounded-2xl shadow-lg border border-red-100 p-8 h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                        {problem.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {problem.description}
                      </p>
                      <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                        <p className="text-sm font-medium text-red-700">
                          <span className="font-semibold">Влияние:</span> {problem.impact}
                        </p>
                      </div>
                    </div>
                  </div>
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
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Статистика говорит сама за себя
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">68%</div>
                <p className="text-white/80">компаний используют Excel для HR-расчётов</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">42%</div>
                <p className="text-white/80">руководителей недовольны качеством HR-данных</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">3.5 часа</div>
                <p className="text-white/80">в день уходит на ручные расчёты в среднем</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Problems;
