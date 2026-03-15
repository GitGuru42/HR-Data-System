'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MessageSquare, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Телефон',
      value: '+7 (727) 123-45-67',
      description: 'Пн-Пт с 9:00 до 18:00'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@hrdatasystem.kz',
      description: 'Быстрый ответ в течение 2 часов'
    },
    {
      icon: MessageSquare,
      title: 'Telegram',
      value: '@hrdatasystem',
      description: 'Онлайн консультация 24/7'
    },
    {
      icon: MapPin,
      title: 'Офис',
      value: 'Алматы, ул. Абая 150',
      description: 'Встречи по предварительной записи'
    }
  ];

  const workingHours = [
    { day: 'Понедельник - Пятница', hours: '9:00 - 18:00' },
    { day: 'Суббота', hours: '10:00 - 15:00' },
    { day: 'Воскресенье', hours: 'Выходной' }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Свяжитесь с нами
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Мы всегда готовы ответить на ваши вопросы и предложить лучшее решение для вашего бизнеса
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Контакты
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                        <p className="text-white/90 font-medium">{info.value}</p>
                        <p className="text-white/70 text-sm">{info.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white"
            >
              <h3 className="text-xl font-bold mb-6">
                Почему стоит связаться прямо сейчас?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                  </div>
                  <span className="text-white/90">Бесплатная аудит текущих HR-процессов</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                  </div>
                  <span className="text-white/90">Демо-доступ к системе в течение 7 дней</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                  </div>
                  <span className="text-white/90">Персональное предложение для вашей компании</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Working Hours and Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Clock className="w-6 h-6" />
                Время работы
              </h3>
              
              <div className="space-y-4">
                {workingHours.map((schedule, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-center py-3 border-b border-white/10 last:border-0"
                  >
                    <span className="text-white/90 font-medium">{schedule.day}</span>
                    <span className={`font-semibold ${schedule.hours === 'Выходной' ? 'text-red-300' : 'text-green-300'}`}>
                      {schedule.hours}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Быстрые ссылки
              </h3>
              
              <div className="space-y-4">
                <a href="#" className="block p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300">
                  <h4 className="font-semibold text-white mb-1">Техническая поддержка</h4>
                  <p className="text-white/70 text-sm">Помощь с настройкой и использованием системы</p>
                </a>
                <a href="#" className="block p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300">
                  <h4 className="font-semibold text-white mb-1">Документация</h4>
                  <p className="text-white/70 text-sm">Инструкции и руководства по использованию</p>
                </a>
                <a href="#" className="block p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300">
                  <h4 className="font-semibold text-white mb-1">Вебинар</h4>
                  <p className="text-white/70 text-sm">Запишитесь на бесплатную демонстрацию</p>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
