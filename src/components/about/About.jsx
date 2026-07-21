import React from 'react';

export default function About() {
  const scrollToProjects = () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  return <section id="about" className="relative mx-auto min-h-[390px] max-w-[1200px] overflow-hidden px-6 pb-16 pt-24 sm:min-h-[430px] sm:px-10 sm:pb-20 sm:pt-28">
    <div className="absolute -right-20 top-16 h-56 w-56 animate-float rounded-full bg-mint/10 sm:right-0 sm:h-64 sm:w-64" />
    <div className="absolute -right-32 top-6 h-[350px] w-[350px] animate-float rounded-full border border-mint/20 sm:right-[-90px]" />
    <div className="relative z-10 max-w-3xl">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[.14em] text-mint">Hello, I’m Kyle James</p>
      <h1 className="m-0 animate-rise text-[clamp(2.35rem,4.8vw,4.1rem)] font-semibold leading-[.98] tracking-[-.06em] text-bone">Building useful things<br /><span className="text-slate">for the web.</span></h1>
      <p className="mt-5 max-w-xl animate-rise text-[14px] leading-6 text-muted [animation-delay:.15s] sm:text-[15px]">I’m just a software engineer who likes to build projects that others hopefully find value in.</p>
      <div className="mt-6 flex animate-rise items-center gap-6 [animation-delay:.25s]">
        <button className="inline-flex items-center gap-2 rounded-full border border-mint bg-mint px-5 py-3 text-[13px] font-semibold text-ink transition hover:-translate-y-1 hover:shadow-[0_13px_25px_rgba(100,255,218,.16)]" onClick={scrollToProjects}>Explore projects <span>↓</span></button>
        <a className="text-[13px] font-medium text-slate transition hover:text-bone" href="#contact">Let’s connect <span className="ml-1 text-lg text-mint">↗</span></a>
      </div>
    </div>
  </section>;
}
