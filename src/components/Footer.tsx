import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-secondary-900 to-primary-900 text-white">
      <div className="container mx-auto px-4">
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-primary-400">M</span>
                <span className="text-secondary-400">M</span>
              </h3>
              <p className="text-gray-300 mb-4">
                Backend Developer & Tech Enthusiast, bersemangat dalam menciptakan solusi yang efisien dan terukur.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://github.com/Mahathirrr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://www.linkedin.com/in/MuhammadMahathir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://www.instagram.com/emhaa._"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <Instagram size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="mailto:mhmmdmhthr@gmail.com"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <Mail size={20} />
                </motion.a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Menu Cepat</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-300 hover:text-primary-400 transition-colors">Tentang</a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-300 hover:text-primary-400 transition-colors">Keahlian</a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-300 hover:text-primary-400 transition-colors">Proyek</a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-primary-400 transition-colors">Kontak</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Hubungi Saya</h4>
              <p className="text-gray-300 mb-4">
                Jangan ragu untuk menghubungi saya untuk kolaborasi atau sekadar ngobrol.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#contact"
                className="inline-block px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full text-white hover:shadow-lg transition-all"
              >
                Mari Diskusi
              </motion.a>
            </div>
          </div>
        </div>
        
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Muhammad Mahathir. Hak Cipta Dilindungi.
            </p>
            <p className="text-gray-400 text-sm flex items-center mt-2 md:mt-0">
              Dibuat dengan <Heart size={16} className="mx-1 text-red-500" /> di Aceh, Indonesia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}