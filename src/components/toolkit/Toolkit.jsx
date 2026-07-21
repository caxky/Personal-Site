import React from 'react';

const technologies = ['JavaScript', 'React', 'Svelte', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Docker', 'Kubernetes', 'Tailwind CSS'];

export default function Toolkit() {
  return <section id="toolkit" className="mx-auto max-w-[1200px] px-6 py-14 sm:px-10 sm:py-20">
    <div className="grid gap-9 rounded-2xl border border-slate/15 bg-ink/70 p-7 sm:grid-cols-[.75fr_1.25fr] sm:gap-12 sm:p-10">
      <div><p className="mb-4 text-xs font-semibold uppercase tracking-[.14em] text-mint">Toolbox</p><h2 className="m-0 text-3xl font-semibold leading-tight tracking-[-.045em] text-bone sm:text-4xl">Frameworks &amp;<br />technologies</h2></div>
      <div className="flex content-center flex-wrap gap-2.5">{technologies.map((technology, index) => <span className="animate-rise rounded-full border border-mint/20 bg-mint/[.06] px-3.5 py-2.5 text-[13px] font-medium text-slate transition hover:-translate-y-0.5 hover:bg-mint/[.14] hover:text-mint" style={{ animationDelay: `${index * 35 + 100}ms` }} key={technology}>{technology}</span>)}</div>
    </div>
  </section>;
}
