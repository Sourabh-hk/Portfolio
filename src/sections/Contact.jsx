import { Mail, Github, Linkedin } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

const LinkItem = ({ href, children }) => (
  <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 hover:bg-slate-50 transition">
    {children}
  </a>
);

export default function Contact() {
  const { email, github, linkedin } = portfolioData.contact;
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
        <p className="mt-3 text-slate-600">Let’s build something awesome together.</p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <LinkItem href={`mailto:${email}`}><Mail size={18}/> {email}</LinkItem>
          <LinkItem href={github}><Github size={18}/> GitHub</LinkItem>
          <LinkItem href={linkedin}><Linkedin size={18}/> LinkedIn</LinkItem>
        </div>
      </div>
    </section>
  );
}
