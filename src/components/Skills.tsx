'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "💻",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "Next.js", level: 90, icon: "▲" },
        { name: "TypeScript", level: 88, icon: "📘" },
        { name: "JavaScript", level: 95, icon: "⚡" },
        { name: "HTML5", level: 98, icon: "🏗️" },
        { name: "CSS3", level: 92, icon: "🎨" },
      ]
    },
    {
      title: "Styling & Design",
      icon: "🎨",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Tailwind CSS", level: 95, icon: "🌊" },
        { name: "Sass/SCSS", level: 85, icon: "💅" },
        { name: "Styled Components", level: 80, icon: "💄" },
        { name: "Figma", level: 85, icon: "🎯" },
        { name: "Framer Motion", level: 88, icon: "🎭" },
        { name: "Responsive Design", level: 95, icon: "📱" },
      ]
    },
    {
      title: "Backend & Tools",
      icon: "🛠️",
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "Node.js", level: 82, icon: "🟢" },
        { name: "Git", level: 90, icon: "🌳" },
        { name: "REST API", level: 85, icon: "🔌" },
        { name: "GraphQL", level: 75, icon: "📊" },
        { name: "MongoDB", level: 80, icon: "🍃" },
        { name: "Firebase", level: 85, icon: "🔥" },
      ]
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut" as const,
        delay: 0.5
      }
    })
  } as const;

  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl" />
      </div>

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
            <span className="px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-medium">
              🚀 Technical Skills
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6"
          >
            전문성과{' '}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              기술 스택
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            지속적인 학습과 실무 경험을 통해 쌓아온 기술적 역량입니다
          </motion.p>
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="group relative"
            >
              <motion.div
                className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200/50 dark:border-slate-700/50 overflow-hidden"
                whileHover={{ y: -5 }}
              >
                {/* Background gradient on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  whileHover={{ scale: 1.02 }}
                />
                
                <div className="relative z-10">
                  {/* Category header */}
                  <div className="text-center mb-8">
                    <motion.div
                      className="text-4xl mb-4 inline-block"
                      whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills list */}
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: 0.6 + skillIndex * 0.1 }}
                        className="space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <span className="text-lg">{skill.icon}</span>
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                              {skill.name}
                            </span>
                          </div>
                          <motion.span
                            className="text-sm font-bold text-slate-900 dark:text-white"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.5, delay: 1 + skillIndex * 0.1 }}
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                        
                        <div className="relative h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <motion.div
                            className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.color} rounded-full`}
                            custom={skill.level}
                            variants={progressVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                          />
                          
                          {/* Shine effect */}
                          <motion.div
                            className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={isInView ? { x: ['-100%', '100%'] } : { x: '-100%' }}
                            transition={{
                              duration: 2,
                              delay: 1.5 + skillIndex * 0.1,
                              ease: "easeInOut"
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
            🌟 핵심 기술 스택
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "React", color: "from-blue-500 to-cyan-400" },
              { name: "Next.js", color: "from-gray-700 to-gray-900" },
              { name: "TypeScript", color: "from-blue-600 to-blue-700" },
              { name: "Tailwind CSS", color: "from-teal-400 to-blue-500" },
              { name: "Framer Motion", color: "from-purple-500 to-pink-500" },
              { name: "Node.js", color: "from-green-500 to-green-600" },
              { name: "Git", color: "from-orange-500 to-red-500" },
              { name: "Figma", color: "from-purple-400 to-purple-600" },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: [0, -3, 3, 0],
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 bg-gradient-to-r ${tech.color} text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
              >
                {tech.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;