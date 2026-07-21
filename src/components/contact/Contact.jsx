import React from 'react';

const links = [
  { title: 'Email', body: 'mail@kylejames.me', link: 'mailto:mail@kylejames.me', mark: '@' },
  { title: 'GitHub', body: 'github.com/caxky', link: 'https://github.com/caxky', mark: 'GH' },
  { title: 'LinkedIn', body: 'Kyle James', link: 'https://www.linkedin.com/in/kyle-james-uo/', mark: 'in' }
];

export default function Contact() {
  return <section className="mx-auto max-w-[1200px] px-6 py-14 text-center sm:px-10 sm:py-20" id="contact">
    <p className="mb-4 text-xs font-semibold uppercase tracking-[.14em] text-mint">Get in touch</p>
    <h2 className="m-0 text-[clamp(2.5rem,5.5vw,4.4rem)] font-semibold leading-[.98] tracking-[-.065em] text-bone">Want to get in touch?</h2>
    <p className="mx-auto mb-9 mt-6 max-w-md text-[15px] leading-7 text-muted">Contact me through any of the following.</p>
    <div className="mx-auto grid max-w-[870px] gap-3 text-left sm:grid-cols-3">
      {links.map(item => <a className="flex items-center gap-3 rounded-xl border border-slate/15 bg-ink/70 p-4 transition hover:-translate-y-0.5 hover:border-mint/50" href={item.link} target={item.link.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer" key={item.title}>
        <span className="flex h-[34px] w-[34px] items-center justify-center rounded-lg bg-mint/10 text-xs font-semibold text-mint">{item.mark}</span><span><strong className="mb-1 block text-[13px] text-bone">{item.title}</strong><small className="block text-[11px] text-muted">{item.body}</small></span><b className="ml-auto text-lg text-mint">↗</b>
      </a>)}
    </div>
  </section>;
}
