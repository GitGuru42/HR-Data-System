'use client';

import { motion } from 'framer-motion';
import { BarChart3, Users, TrendingUp, Database, Shield, ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
              >
                <Shield className="w-4 h-4 mr-2" />
                Enterprise-level HR Analytics
              </motion.div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-gradient">HR Data System</span>
                <br />
                <span className="text-3xl lg:text-4xl text-gray-700 font-normal">
                  Автоматизация HR-аналитики и расчётов мотиваций для крупных компаний
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Превращаем HR-данные в управленческие решения. Снижаем ручную работу, экономим деньги и помогаем уменьшить текучесть персонала через интеллектуальную BI-платформу.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center"
              >
                Оставить заявку
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center justify-center"
              >
                <BarChart3 className="w-5 h-5 mr-2" />
                Запросить демонстрацию
              </motion.button>
            </div>

            <div className="flex items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>3–4 недели внедрение</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>100% кастомизация</span>
              </div>
            </div>
          </motion.div>

          {/* Right Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-3xl opacity-20 animate-pulse-slow"></div>
            
            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Dashboard Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">HR Analytics Dashboard</h3>
                      <p className="text-xs text-blue-100">Q4 2024 Overview</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs">Live</span>
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 space-y-6">
                {/* KPI Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Users className="w-5 h-5 text-blue-600" />
                      <span className="text-xs text-green-600 font-medium">+12%</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">1,247</p>
                    <p className="text-xs text-gray-600">Total Employees</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-200"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      <span className="text-xs text-green-600 font-medium">-8%</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">12.3%</p>
                    <p className="text-xs text-gray-600">Turnover Rate</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Database className="w-5 h-5 text-purple-600" />
                      <span className="text-xs text-green-600 font-medium">+15%</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">₸124M</p>
                    <p className="text-xs text-gray-600">Payroll Fund</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Shield className="w-5 h-5 text-orange-600" />
                      <span className="text-xs text-green-600 font-medium">94%</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">94%</p>
                    <p className="text-xs text-gray-600">Satisfaction</p>
                  </motion.div>
                </div>

                {/* Chart Mockup */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900">Performance Trends</h4>
                    <span className="text-xs text-gray-500">Last 6 months</span>
                  </div>
                  <div className="flex items-end justify-between h-24 gap-2">
                    {[40, 65, 45, 80, 70, 95].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t"
                      ></motion.div>
                    ))}
                  </div>
                </div>

                {/* Department Performance */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Department KPI</h4>
                  {[
                    { name: 'IT', progress: 92, color: 'blue' },
                    { name: 'Sales', progress: 87, color: 'green' },
                    { name: 'HR', progress: 78, color: 'purple' }
                  ].map((dept, i) => (
                    <motion.div
                      key={dept.name}
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <span className="text-sm font-medium text-gray-700 w-16">{dept.name}</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${dept.progress}%` }}
                          transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                          className={`h-full bg-gradient-to-r from-${dept.color}-400 to-${dept.color}-600 rounded-full`}
                        ></motion.div>
                      </div>
                      <span className="text-sm font-medium text-gray-700 w-10 text-right">{dept.progress}%</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
