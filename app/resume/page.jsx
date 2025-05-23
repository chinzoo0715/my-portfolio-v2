'use client';

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from 'react-icons/fa';
import { TbBrandCSharp, TbBrandReactNative } from 'react-icons/tb';

import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiFigma,
} from 'react-icons/si';
import { AiOutlineDotNet } from 'react-icons/ai';

// about data
const about = {
  title: 'About me',
  description:
    'Code whisperer by day, digital explorer by night. Crafting tech magic with a sprinkle of creativity and a dash of humor. Always ready for the next coding adventure!.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Chinzorig',
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+976) 86899766',
    },
    {
      fieldName: 'Experience',
      fieldValue: '5+ Years',
    },
    {
      fieldName: 'LinkedIn',
      fieldValue: 'in/chinzoo',
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Mongolian',
    },
    {
      fieldName: 'Email',
      fieldValue: 'cpurevjamts@gmail.com',
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available',
    },
    {
      fieldName: 'Languages',
      fieldValue: 'English, Mongolia',
    },
  ],
};

// experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description:
    'Embarked on a thrilling journey through the tech universe, solving complex puzzles and building digital wonders. Each project is a new adventure, and every line of code is a step towards innovation.',
  items: [
    {
      company: 'Everest Solution LLC',
      position: 'Full Stack Developer',
      duration: '2021 - Present',
    },
    {
      company: 'Unitel LLC',
      position: 'Billing Engineer',
      duration: '2020 - 2021',
    },
    {
      company: 'Retoch LLC',
      position: 'Frontend Developer',
      duration: '2018 - 2020',
    },
  ],
};

// skills data
const skills = {
  title: 'My skills',
  description:
    'Armed with a toolkit of cutting-edge technologies, I craft digital masterpieces. From coding spells to designing with pixel-perfect precision, I bring creativity and innovation to every project.',
  skillList: [
    {
      icon: <FaNodeJs />,
      name: 'node.js',
    },
    {
      icon: <SiTypescript />,
      name: 'TypeScript',
    },
    {
      icon: <AiOutlineDotNet />,
      name: '.NET',
    },
    {
      icon: <FaReact />,
      name: 'react.js',
    },
    {
      icon: <TbBrandReactNative />,
      name: 'React Native',
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js',
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css',
    },
    {
      icon: <SiFigma />,
      name: 'figma',
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { motion } from 'framer-motion';

// Custom scrollbar styles
const scrollbarStyles = `
  @media (min-width: 768px) {
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
    }
    
    .custom-scrollbar::-webkit-scrollbar-track {
      background: transparent;
    }
    
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.2);
      border-radius: 20px;
    }
    
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
`;

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="flex min-h-[80vh] items-center justify-center py-12 xl:py-0"
    >
      {/* Add custom scrollbar styles */}
      <style jsx global>{scrollbarStyles}</style>
      <div className="container mx-auto px-4">
        <Tabs
          defaultValue="experience"
          className="flex flex-col gap-[60px] xl:flex-row"
        >
          <TabsList className="mx-auto flex w-full max-w-[380px] flex-col gap-6 xl:mx-0">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="custom-scrollbar flex flex-col gap-[30px] overflow-y-auto text-center md:max-h-[60vh] xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                  {experience.description}
                </p>
                <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                  {experience.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex h-[184px] flex-col items-center justify-center gap-1 rounded-xl bg-[#232329] px-10 py-6 lg:items-start"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="min-h-[60px] max-w-[260px] text-center text-xl lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="h-[6px] w-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="custom-scrollbar flex flex-col gap-[30px] overflow-y-auto md:max-h-[60vh]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="group flex h-[150px] w-full items-center justify-center rounded-xl bg-[#232329]">
                              <div className="text-6xl transition-all duration-300 group-hover:text-accent">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="custom-scrollbar flex flex-col gap-[30px] overflow-y-auto md:max-h-[60vh]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                  {about.description}
                </p>
                <ul className="mx-auto grid max-w-[620px] grid-cols-1 gap-y-6 xl:mx-0 xl:grid-cols-2">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center gap-4 xl:justify-start"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
