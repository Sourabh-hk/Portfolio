import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function Hero() {
  return (
    <section id="home" className="relative isolate pt-28 md:pt-32">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 right-1/2 h-64 w-[140%] rounded-full blur-3xl opacity-30 bg-gradient-to-r from-blue-300 via-indigo-300 to-cyan-200" />
      </div>
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Hi, I'm {portfolioData.name}
          </h1>
          <p className="mt-3 text-lg md:text-xl text-slate-600">{portfolioData.role} • {portfolioData.location}</p>
          <p className="mt-5 text-slate-600 max-w-xl">{portfolioData.about}</p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
            <a href="#projects" className="rounded-xl px-5 py-2.5 text-white bg-blue-600 hover:bg-blue-700 transition shadow">
              View Projects
            </a>
            <a href="#contact" className="rounded-xl px-5 py-2.5 border border-slate-300 hover:bg-slate-100 transition">
              Contact Me
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center md:justify-end"
        >
          <img src={portfolioData.profilePic} alt="Profile" className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-2xl ring-4 ring-white object-cover" />
        </motion.div>
      </div>
    </section>
  );
}
