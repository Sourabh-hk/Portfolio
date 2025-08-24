import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-bold"
        >
          About
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-slate-600 max-w-3xl"
        >
          {portfolioData.about}
        </motion.p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {portfolioData.skills.slice(0, 6).map((s) => (
            <div key={s} className="rounded-xl border border-slate-200 bg-white/70 backdrop-blur px-3 py-2 text-center text-sm shadow-sm">
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
