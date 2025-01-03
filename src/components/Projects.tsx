import { motion } from "framer-motion";
import { Github, ExternalLink, FolderGit2, Award } from "lucide-react";

const projects = [
  {
    title: "Search Engine - Cosine & Jaccard",
    description:
      "Implementasi metode pencarian dokumen menggunakan algoritma Cosine dan Jaccard Similarity untuk meningkatkan akurasi hasil pencarian.",
    tech: ["Golang", "Information Retrieval", "Algorithm"],
    github: "https://github.com/Mahathirrr/Info-Retrieval",
    image: "/assets/search-engine.jpg",
  },
  {
    title: "Speed Typing INFEST 2024",
    description:
      "Website interaktif untuk kompetisi speed typing dalam event INFEST 2024.",
    tech: ["React"],
    github: "https://github.com/Mahathirrr/SpeedTyping",
    image: "/assets/speed-typing.jpg",
  },
  {
    title: "API Ecommerce",
    description:
      "Backend ecommerce dengan implementasi RESTful API dan gRPC, dilengkapi dengan database migration dan dokumentasi lengkap.",
    tech: ["Golang", "gRPC", "SQLite"],
    github: "https://github.com/Mahathirrr/ecom_v2",
    image: "/assets/ecommerce.jpg",
  },
  {
    title: "QuizMaster Platform",
    description:
      "Platform quiz interaktif dengan fitur pembuatan kuis, manajemen peserta, dan analisis hasil secara real-time.",
    tech: ["Laravel", "MySQL"],
    github: "https://github.com/Mahathirrr/QuizMaster",
    image: "/assets/quizmaster.jpg",
  },
  {
    title: "Skillopa - Online Learning",
    description:
      "Platform pembelajaran online yang menghubungkan tutor dengan peserta, dilengkapi sistem pembayaran dan video streaming.",
    tech: ["MERN Stack", "Payment Gateway"],
    links: {
      backend: "https://github.com/Mahathirrr/Skillopa-be",
      frontend: "https://github.com/Mahathirrr/Skillopa-fe",
    },
    image: "/assets/skillopa.jpg",
  },
  {
    title: "Augmented Reality for Chemistry Learning",
    description:
      "Sebuah aplikasi mobile berbasis Augmented Reality (AR) yang dirancang untuk memudahkan pembelajaran kimia di sekolah menengah dasar. Aplikasi ini memanfaatkan teknologi Vuforia dan Unity untuk menciptakan pengalaman interaktif yang memungkinkan siswa memvisualisasikan molekul dan reaksi kimia secara 3D. Dengan antarmuka yang ramah pengguna, aplikasi ini bertujuan untuk meningkatkan pemahaman siswa terhadap konsep kimia yang kompleks melalui pendekatan visual dan interaktif.",
    tech: ["Unity", "Vuforia", "C#", "Mobile Development"],
    image: "/assets/ar-chemistry.jpg",
    isFeatured: true, // Tambahkan flag untuk menandai proyek ini sebagai proyek unggulan
  },
];

export default function Projects() {
  return (
    <section
      className="py-20 bg-gradient-to-b from-primary-900 to-secondary-900"
      id="projects"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-4"
            >
              Proyek Terbaru
            </motion.h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Kumpulan proyek yang menunjukkan kemampuan saya dalam pengembangan
              backend, arsitektur sistem, dan pemecahan masalah.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-primary-500/50 transition-all duration-300 ${
                  project.isFeatured ? "lg:col-span-3" : ""
                }`}
              >
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Project Links */}
                  <div className="absolute bottom-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:text-primary-400 hover:bg-white/20 transition-all"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.website && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:text-primary-400 hover:bg-white/20 transition-all"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.links && (
                      <div className="flex gap-2">
                        <a
                          href={project.links.frontend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:text-primary-400 hover:bg-white/20 transition-all"
                        >
                          <FolderGit2 size={20} />
                        </a>
                        <a
                          href={project.links.backend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:text-primary-400 hover:bg-white/20 transition-all"
                        >
                          <Github size={20} />
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    {project.isFeatured && (
                      <div className="flex items-center gap-2 bg-primary-500/10 px-3 py-1 rounded-full">
                        <Award size={18} className="text-primary-400" />
                        <span className="text-sm text-primary-400">
                          Top 20 Inovasi Terbaik LIDM 2024
                        </span>
                      </div>
                    )}
                  </div>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
