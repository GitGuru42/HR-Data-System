'use client';

import { motion } from 'framer-motion';
import { Database, Settings, BarChart3, Globe, Bot, Code } from 'lucide-react';

const Architecture = () => {
  const modules = [
    {
      name: 'HR Data Integration',
      description: 'Подключение и очистка баз данных (Oracle, PostgreSQL, Excel, SAP, 1C)',
      technologies: ['Python', 'SQL', 'Power Query'],
      icon: Database,
      color: 'blue'
    },
    {
      name: 'Motiva Engine',
      description: 'Расчёт мотивации, KPI и бонусов по бизнес-правилам',
      technologies: ['Python', 'DAX', 'SQL'],
      icon: Settings,
      color: 'green'
    },
    {
      name: 'BI Portal',
      description: 'Дашборды по текучести, ФОТ, CIR, ROI, KPI',
      technologies: ['Power BI', 'Streamlit', 'Next.js'],
      icon: BarChart3,
      color: 'purple'
    },
    {
      name: 'Web HR Service',
      description: 'Корпоративный веб-сервис для доступа к HR-аналитике',
      technologies: ['Flask', 'FastAPI'],
      icon: Globe,
      color: 'orange'
    },
    {
      name: 'AI Insight Bot',
      description: 'Автоматические ответы на управленческие вопросы по HR',
      technologies: ['OpenAI API', 'Telegram Bot'],
      icon: Bot,
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; icon: string; border: string; tech: string } } = {
      blue: { bg: 'bg-blue-50', icon: 'text-blue-600', border: 'border-blue-200', tech: 'bg-blue-100 text-blue-700' },
      green: { bg: 'bg-green-50', icon: 'text-green-600', border: 'border-green-200', tech: 'bg-green-100 text-green-700' },
      purple: { bg: 'bg-purple-50', icon: 'text-purple-600', border: 'border-purple-200', tech: 'bg-purple-100 text-purple-700' },
      orange: { bg: 'bg-orange-50', icon: 'text-orange-600', border: 'border-orange-200', tech: 'bg-orange-100 text-orange-700' },
      indigo: { bg: 'bg-indigo-50', icon: 'text-indigo-600', border: 'border-indigo-200', tech: 'bg-indigo-100 text-indigo-700' }
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
            Архитектура и модули
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Технологическая платформа, построенная на современных стеках и лучших практиках
          </p>
        </motion.div>

        <div className="space-y-8">
          {modules.map((module, index) => {
            const colors = getColorClasses(module.color);
            const Icon = module.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`bg-gradient-to-r ${colors.bg} to-white rounded-2xl border ${colors.border} p-8 hover:shadow-lg transition-all duration-300`}>
                  <div className="flex flex-col lg:flex-row gap-6 items-start">
                    <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 ${colors.icon}`} />
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {module.name}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {module.description}
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-3">
                        {module.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 }}
                            viewport={{ once: true }}
                            className={`px-4 py-2 ${colors.tech} rounded-lg font-medium text-sm flex items-center gap-2`}
                          >
                            <Code className="w-4 h-4" />
                            {tech}
                          </motion.div>
                        ))}
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
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Интеграция с существующими системами</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                'Oracle Database',
                'PostgreSQL',
                'Microsoft Excel',
                'SAP HR',
                '1C: ЗУП',
                'Power BI',
                'Telegram',
                'Email APIs'
              ].map((integration, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + i * 0.05 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-colors duration-300">
                    <p className="text-sm font-medium">{integration}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Architecture;
