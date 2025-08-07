'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "토스 스타일 금융 앱",
      description: "직관적인 UI/UX와 마이크로 인터랙션이 돋보이는 모바일 우선 금융 서비스입니다. 실시간 거래 내역과 부드러운 애니메이션이 특징입니다.",
      image: "💳",
      technologies: ["React Native", "TypeScript", "Framer Motion", "React Query"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-blue-500 via-blue-600 to-blue-700",
      features: ["실시간 거래 알림", "생체 인증 로그인", "카드 관리 시스템", "지출 분석 차트"],
      category: "Mobile App"
    },
    {
      title: "E-커머스 플랫폼",
      description: "Next.js 기반의 고성능 쇼핑몰로, 사용자 경험과 성능 최적화에 중점을 둔 현대적인 전자상거래 솔루션입니다.",
      image: "🛍️",
      technologies: ["Next.js", "TypeScript", "Prisma", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-purple-500 via-purple-600 to-indigo-600",
      features: ["실시간 재고 관리", "AI 상품 추천", "원클릭 결제", "리뷰 시스템"],
      category: "Web Application"
    },
    {
      title: "실시간 협업 툴",
      description: "팀의 생산성을 높이는 실시간 협업 도구입니다. WebSocket을 활용한 동시 편집과 직관적인 인터페이스가 핵심 기능입니다.",
      image: "👥",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-green-500 via-teal-500 to-cyan-500",
      features: ["실시간 동시 편집", "화상 회의 통합", "태스크 관리", "파일 공유"],
      category: "Collaboration"
    },
    {
      title: "AI 챗봇 서비스",
      description: "자연어 처리 기술을 활용한 지능형 고객 서비스 챗봇입니다. 학습 기능과 감정 분석을 통해 향상된 사용자 경험을 제공합니다.",
      image: "🤖",
      technologies: ["Python", "FastAPI", "OpenAI", "React"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      features: ["자연어 이해", "감정 분석", "학습 기능", "다국어 지원"],
      category: "AI/ML"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-purple-100/20 dark:from-blue-900/10 dark:via-transparent dark:to-purple-900/10" />
      
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
            <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium">
              🚀 Featured Projects
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6"
          >
            실제로 만든{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              프로젝트들
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            사용자 경험과 성능을 고려한 실무 프로젝트들을 소개합니다
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative bg-white dark:bg-slate-900 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200/50 dark:border-slate-700/50"
            >
              {/* Animated gradient background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                animate={hoveredIndex === index ? { scale: 1.05 } : { scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Project image/icon section */}
              <div className="relative h-48 overflow-hidden">
                <motion.div
                  className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.span
                    className="text-6xl"
                    animate={hoveredIndex === index ? { scale: 1.2, rotate: [0, -5, 5, 0] } : { scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {project.image}
                  </motion.span>
                </motion.div>
                
                {/* Category badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute top-4 right-4 px-3 py-1 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  {project.category}
                </motion.div>
              </div>
              
              <div className="relative p-8">
                <motion.h3
                  className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300"
                >
                  {project.title}
                </motion.h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                    ✨ 핵심 기능
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: 0.6 + featureIndex * 0.1 }}
                        className="flex items-center text-sm text-slate-600 dark:text-slate-400"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Technologies */}
                <div className="mb-8">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, delay: 0.8 + techIndex * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                {/* Action buttons */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 text-center py-3 px-4 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200`}
                  >
                    Live Demo
                  </motion.a>
                  
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 text-center py-3 px-4 border-2 border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200"
                  >
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-20"
        >
          <div className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl border border-blue-200/50 dark:border-blue-700/50">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              더 많은 프로젝트가 궁금하신가요?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              GitHub에서 더 많은 오픈소스 프로젝트와 실험적인 작업들을 확인해보세요
            </p>
            
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub에서 더 보기</span>
              <motion.svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;