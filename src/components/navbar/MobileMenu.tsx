import { motion, AnimatePresence } from 'framer-motion';
import { menuItems } from '../../constants/menuItems';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-2xl border-t border-gray-100 overflow-hidden"
        >
          <div className="py-4 px-4 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="block py-3 px-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={onClose}
              className="block py-3 px-4 text-center text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg hover:shadow-md transition-all"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}