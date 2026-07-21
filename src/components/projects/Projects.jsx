import React from "react";

const projects = [
  {
    title: "ReptiBuddy",
    description:
      "A social platform for reptile enthusiasts and those who want to learn more about them.",
    image: "images/reptibuddy.jpg",
    link: "https://reptibuddy.com",
    type: "Community platform",
  },
  {
    title: "Luxus Cosmetics",
    description:
      "A commissioned luxury men’s and women’s cosmetics and care platform, designed to showcase and sell curated products.",
    image: "images/luxus-cosmetics-logo.png",
    link: "https://luxuscosmetics.ca",
    type: "E-commerce website",
    luxury: true,
  },
  {
    title: "Fake News Detection",
    description:
      "Domain-specific fake news detection using deep learning and language models.",
    image: "images/fakenewsdetection.jpg",
    link: "https://github.com/caxky/FakeNewsDetection",
    type: "Research project",
  },
  {
    title: "TradeWars.io",
    description:
      "A real-time browser simulation game where players wage war through economic means and win through attrition.",
    type: "Work in progress",
    pending: true,
  },
];

export default function Projects() {
  return (
    <section
      className="mx-auto max-w-[1200px] px-6 py-12 sm:px-10 sm:py-16"
      id="projects"
    >
      <div className="mb-10 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[.14em] text-mint">
            Selected work
          </p>
          <h2 className="m-0 text-[clamp(2.3rem,4.6vw,3.6rem)] font-semibold leading-[.98] tracking-[-.06em] text-bone">
            A few things I’ve
            <br />
            <span className="text-mint">brought to life.</span>
          </h2>
        </div>
        <p className="mb-0 max-w-sm text-sm leading-6 text-muted">
          Experiments, products, and digital tools made to solve real
          problems—and make the process a little more enjoyable.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-12">
        {projects.map((project, index) => {
          const Tag = project.pending ? "div" : "a";
          return (
            <Tag
              className={`group flex min-h-[340px] flex-col overflow-hidden rounded-[14px] border border-slate/15 bg-ink transition duration-300 ${project.pending ? "cursor-default" : "hover:-translate-y-1.5 hover:border-mint/50 hover:shadow-[0_22px_45px_rgba(2,12,27,.28)]"} ${index === 0 ? "sm:col-span-7" : index === 1 ? "sm:col-span-5" : "sm:col-span-4"}`}
              {...(!project.pending
                ? {
                    href: project.link,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }
                : {})}
              key={project.title}
            >
              <div
                className={`relative h-[220px] overflow-hidden ${index === 0 ? "sm:h-[290px]" : ""} ${project.luxury ? "bg-[#c7a878]" : ""}`}
              >
                {project.luxury ? (
                  <div className="relative flex h-full items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_70%_28%,rgba(255,255,255,.7),transparent_18%),linear-gradient(135deg,#17130f_5%,#a48352_48%,#e8d5af_100%)]">
                    <img
                      className="relative z-10 h-40 w-40 object-contain drop-shadow-xl transition duration-500 group-hover:scale-105"
                      src={project.image}
                      alt="Luxus Cosmetics logo"
                    />
                    <div className="absolute -right-12 bottom-[-80px] h-56 w-56 rounded-full border border-white/30" />
                  </div>
                ) : project.pending ? (
                  <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(100,255,218,.17),transparent_20%),linear-gradient(135deg,#0a192f,#112240)]">
                    <span className="font-mono text-3xl font-semibold tracking-[-.05em] text-bone sm:text-4xl">
                      Trade<span className="text-mint">Wars</span>.io
                    </span>
                  </div>
                ) : (
                  <img
                    className="h-full w-full object-cover grayscale-[.3] contrast-[1.06] transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    src={project.image}
                    alt=""
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-ink/5 to-ink/65" />
                <span className="absolute left-5 top-4 text-[11px] font-medium tracking-[.11em] text-bone">
                  0{index + 1}
                </span>
                {project.pending ? (
                  <span className="absolute right-4 top-4 rounded-full border border-mint/30 bg-ink/70 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[.12em] text-mint">
                    WIP
                  </span>
                ) : (
                  <span className="absolute right-4 top-4 flex h-10 w-10 translate-x-1.5 translate-y-1.5 items-center justify-center rounded-full bg-mint text-lg text-ink opacity-0 transition group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
                    ↗
                  </span>
                )}
              </div>
              <div className="p-5">
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[.12em] text-mint">
                  {project.type}
                </p>
                <h3 className="mb-2 text-[22px] font-semibold leading-tight tracking-[-.035em] text-bone">
                  {project.title}
                </h3>
                <span className="text-[13px] leading-5 text-muted">
                  {project.description}
                </span>
              </div>
            </Tag>
          );
        })}
      </div>
    </section>
  );
}
