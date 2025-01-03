import { motion } from "framer-motion";
import {
  SiGo,
  SiJavascript,
  SiPhp,
  SiCss3,
  SiHtml5,
  SiTailwindcss,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiVim,
  SiVercel,
  SiRailway,
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiTensorflow,
  SiPytorch,
} from "react-icons/si";
import { FaServer, FaJava } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

export default function Skills() {
  const skills = {
    languages: [
      { name: "Golang", icon: <SiGo /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "PHP", icon: <SiPhp /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <SiPython /> },
    ],
    databases: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "SQLite", icon: <SiSqlite /> },
    ],
    tools: [
      { name: "Vim", icon: <SiVim /> },
      { name: "VSCode", icon: <VscCode /> },
    ],
    deployment: [
      { name: "VPS", icon: <FaServer /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Railway", icon: <SiRailway /> },
    ],
  };

  const renderSkillSection = (
    title: string,
    skillList: Array<{ name: string; icon: JSX.Element }>,
  ) => (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-8 rounded-2xl bg-white shadow-lg border border-gray-100"
    >
      <h3 className="text-xl font-bold mb-6">{title}</h3>
      <div className="grid grid-cols-2 gap-4">
        {skillList.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50"
          >
            <span className="text-blue-600">{skill.icon}</span>
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section className="py-20 bg-gray-50" id="skills">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Tech Stack</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {renderSkillSection("Languages & Frameworks", skills.languages)}
            {renderSkillSection("Databases", skills.databases)}
            {renderSkillSection("Tools", skills.tools)}
            {renderSkillSection("Deployment", skills.deployment)}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
