import React, { useEffect, useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const items = ['About', 'Projects', 'Contact'];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  useEffect(() => {
    const updateNavbar = () => setHasScrolled(window.scrollY > 8);
    updateNavbar();
    window.addEventListener('scroll', updateNavbar, { passive: true });
    return () => window.removeEventListener('scroll', updateNavbar);
  }, []);
  const goTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setOpen(false); };
  return <header className={`fixed inset-x-0 top-0 z-[100] isolate border-b border-slate/10 transition-colors duration-300 ${hasScrolled ? 'bg-ink/80 backdrop-blur-xl' : 'bg-ink'}`}>
    <nav className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between px-6 sm:px-10" aria-label="Main navigation">
      <button className="h-[31px] w-[31px] p-0 invert" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><img className="h-full w-full object-contain" src="images/kj.png" alt="" /></button>
      <div className="hidden gap-7 sm:flex">{items.map(item => <button className="border-0 bg-transparent p-0 text-xs font-medium tracking-[.05em] text-slate transition hover:text-mint" onClick={() => goTo(item.toLowerCase())} key={item}>{item}</button>)}</div>
      <button className="flex border-0 bg-transparent p-1 text-bone sm:hidden" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <CloseRoundedIcon /> : <MenuRoundedIcon />}</button>
    </nav>
    <div className={`grid overflow-hidden border-t border-slate/10 bg-ink transition-[grid-template-rows] duration-300 sm:hidden ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}><div className="min-h-0">{items.map(item => <button className="block w-full border-0 bg-transparent px-6 py-3 text-left text-[13px] text-slate" onClick={() => goTo(item.toLowerCase())} key={item}>{item}</button>)}</div></div>
  </header>;
}
