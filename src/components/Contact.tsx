'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success state after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: "이메일",
      value: "your.email@example.com",
      link: "mailto:your.email@example.com",
      color: "from-blue-500 to-blue-600",
      description: "언제든 메일로 연락주세요"
    },
    {
      icon: '💼',
      title: "LinkedIn",
      value: "linkedin.com/in/username",
      link: "https://linkedin.com/in/username",
      color: "from-blue-600 to-blue-700",
      description: "전문적인 네트워킹"
    },
    {
      icon: '🐙',
      title: "GitHub",
      value: "github.com/username",
      link: "https://github.com/username",
      color: "from-gray-700 to-gray-900",
      description: "코드와 프로젝트 확인"
    },
    {
      icon: '💬',
      title: "KakaoTalk",
      value: "오픈채팅으로 연락",
      link: "#",
      color: "from-yellow-400 to-yellow-500",
      description: "빠른 소통"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent dark:from-blue-900/10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 text-pink-600 dark:text-pink-400 rounded-full text-sm font-medium">
              📞 Get In Touch
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6"
          >
            함께 만들어갈{' '}
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              프로젝트
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            새로운 아이디어와 협업 기회를 기다리고 있습니다. 언제든 편하게 연락주세요!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                연락 방법
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                가장 편한 방법으로 연락주세요. 24시간 이내에 답변드립니다.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative p-6 bg-white dark:bg-slate-900 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50 overflow-hidden"
                >
                  {/* Background gradient on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />
                  
                  <div className="relative z-10 flex items-center space-x-4">
                    <motion.div
                      className={`p-3 rounded-2xl bg-gradient-to-br ${info.color} text-white shadow-lg`}
                      whileHover={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="text-2xl">{info.icon}</span>
                    </motion.div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                        {info.title}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                        {info.description}
                      </p>
                      <p className="text-xs font-mono text-slate-500 dark:text-slate-500 truncate">
                        {info.value}
                      </p>
                    </div>
                    
                    <motion.svg
                      className="w-5 h-5 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="bg-white dark:bg-slate-900 p-8 lg:p-10 rounded-3xl shadow-lg border border-slate-200/50 dark:border-slate-700/50">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  프로젝트 문의하기
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  자세한 내용을 알려주시면 더 정확한 답변을 드릴 수 있어요.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                      이름
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white transition-all duration-200"
                      placeholder="홍길동"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                      이메일
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white transition-all duration-200"
                      placeholder="example@email.com"
                    />
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                    프로젝트 설명
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white transition-all duration-200 resize-none"
                    placeholder="어떤 프로젝트를 함께 만들어보고 싶으신가요? 예산, 기간, 요구사항 등을 자세히 알려주세요."
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    whileHover={!isSubmitting && !isSubmitted ? { scale: 1.02, y: -1 } : {}}
                    whileTap={!isSubmitting && !isSubmitted ? { scale: 0.98 } : {}}
                    className={`w-full py-4 px-6 rounded-2xl font-semibold shadow-lg transition-all duration-300 ${
                      isSubmitted
                        ? 'bg-green-500 text-white'
                        : isSubmitting
                        ? 'bg-slate-400 text-white cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 text-white hover:shadow-xl'
                    }`}
                  >
                    {isSubmitted ? (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center justify-center space-x-2"
                      >
                        <span>✅ 전송 완료!</span>
                      </motion.span>
                    ) : isSubmitting ? (
                      <motion.span
                        className="flex items-center justify-center space-x-2"
                      >
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        <span>전송 중...</span>
                      </motion.span>
                    ) : (
                      <span className="flex items-center justify-center space-x-2">
                        <span>메시지 보내기</span>
                        <motion.span
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2 }}
                        >
                          🚀
                        </motion.span>
                      </span>
                    )}
                  </motion.button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-20"
        >
          <div className="inline-block p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl border border-blue-200/50 dark:border-blue-700/50">
            <motion.div
              className="text-4xl mb-4"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              🎉
            </motion.div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              빠른 답변 약속드려요!
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              보통 24시간 이내에 답변드리며, 급한 경우 더 빠르게 연락드릴게요.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;