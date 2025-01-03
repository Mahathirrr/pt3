import { motion } from "framer-motion";
import { menuItems } from "../../constants/menuItems";

interface DesktopMenuProps {
  scrolled: boolean;
}

export default function DesktopMenu({ scrolled }: DesktopMenuProps) {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {menuItems.map((item, index) => (
        <motion.a
          key={item.href}
          href={item.href}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`relative text-sm font-medium transition-colors ${
            scrolled
              ? "text-gray-600 hover:text-blue-600"
              : "text-white/90 hover:text-white"
          } group`}
        >
          {item.label}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
        </motion.a>
      ))}
      <motion.a
        href="#contact"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`px-4 py-2 rounded-full transition-all ${
          scrolled
            ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg hover:scale-105"
            : "bg-white/10 text-white hover:bg-white/20"
        }`}
      >
        Contact Me
      </motion.a>
    </div>
  );
}

