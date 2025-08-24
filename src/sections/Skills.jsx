import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Skills
        </motion.h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {portfolioData.skills.map((s) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm"
            >
              <span className="text-sm font-medium">{s}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
