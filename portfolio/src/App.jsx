import { useCallback, useEffect, useRef, useState } from 'react'
import Card from './components/Card.jsx'
import {
  ArrowRightIcon,
  EmailIcon,
  GitHubIcon,
  LinkedInIcon,
  PhoneIcon,
} from './components/Icons.jsx'
import {
  about,
  credit,
  education,
  profile,
  projects,
  research,
  sections,
  socials,
  teaching,
} from './data.js'

const socialIcons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: EmailIcon,
  phone: PhoneIcon,
}

// Soft radial glow that follows the cursor (desktop only; hidden on touch).
function Spotlight() {
  const [pos, setPos] = useState(null)

  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 hidden transition duration-300 lg:block"
      style={{
        background: pos
          ? `radial-gradient(600px at ${pos.x}px ${pos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
          : 'none',
      }}
    />
  )
}

// Tracks which section is currently in view.
// The detection line sits 35% down the viewport, then slides to the bottom
// over the last screen of scrolling so short final sections still get a turn.
function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  const lockUntil = useRef(0)

  const select = useCallback((id) => {
    lockUntil.current = Date.now() + 1000
    setActive(id)
  }, [])

  useEffect(() => {
    const update = () => {
      if (Date.now() < lockUntil.current) return
      const vh = window.innerHeight
      const remaining = document.documentElement.scrollHeight - (window.scrollY + vh)
      const progress = Math.min(1, Math.max(0, 1 - remaining / vh))
      const line = vh * (0.35 + 0.6 * progress)
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      setActive(current)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [ids])

  return [active, select]
}

const sectionIds = sections.map((s) => s.id)

// Renders "**bold**" fragments as highlighted text.
function RichText({ text }) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') ? (
      <span key={i} className="font-medium text-slate-200">
        {part.slice(2, -2)}
      </span>
    ) : (
      part
    ),
  )
}

function Section({ id, label, children }) {
  return (
    <section id={id} aria-label={label} className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-slate-900/75 px-6 py-5 backdrop-blur-sm md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold tracking-widest text-slate-200 uppercase lg:sr-only">{label}</h2>
      </div>
      {children}
    </section>
  )
}

function CardList({ items }) {
  return (
    <ol className="group/list">
      {items.map((item) => (
        <Card key={item.title} {...item} />
      ))}
    </ol>
  )
}

export default function App() {
  const [active, selectSection] = useActiveSection(sectionIds)

  return (
    <div className="relative">
      <Spotlight />
      <a
        href="#content"
        className="absolute top-0 left-0 z-50 block -translate-x-full rounded bg-linear-to-b from-teal-400 to-blue-500 px-4 py-3 text-sm font-bold tracking-widest text-white uppercase focus-visible:translate-x-0"
      >
        Skip to content
      </a>

      <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <a href="/">{profile.name}</a>
              </h1>
              <h2 className="mt-3 max-w-sm text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                {profile.title}
              </h2>
              <p className="mt-4 max-w-xs leading-normal">{profile.tagline}</p>

              <nav className="hidden lg:block" aria-label="In-page jump links">
                <ul className="mt-16 w-max">
                  {sections.map(({ id, label }) => {
                    const isActive = active === id
                    return (
                      <li key={id}>
                        <a
                          href={`#${id}`}
                          className="group flex items-center py-3"
                          onClick={() => selectSection(id)}
                          aria-current={isActive ? 'true' : undefined}
                        >
                          <span
                            className={`mr-4 h-px transition-all motion-reduce:transition-none group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 ${
                              isActive ? 'w-16 bg-slate-200' : 'w-8 bg-slate-600'
                            }`}
                          />
                          <span
                            className={`text-xs font-bold tracking-widest uppercase group-hover:text-slate-200 group-focus-visible:text-slate-200 ${
                              isActive ? 'text-slate-200' : 'text-slate-500'
                            }`}
                          >
                            {label}
                          </span>
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </nav>
            </div>

            <ul className="mt-8 ml-1 flex items-center" aria-label="Social media">
              {socials.map(({ name, icon, href }) => {
                const Icon = socialIcons[icon]
                const external = href.startsWith('http')
                return (
                  <li key={name} className="mr-5 shrink-0 text-xs">
                    <a
                      className="block hover:text-slate-200"
                      href={href}
                      {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
                      aria-label={external ? `${name} (opens in a new tab)` : name}
                      title={name}
                    >
                      <span className="sr-only">{name}</span>
                      <Icon className="h-6 w-6" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </header>

          <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
            <Section id="about" label="About">
              {about.map((p, i) => (
                <p key={i} className="mb-4">
                  <RichText text={p} />
                </p>
              ))}
            </Section>

            <Section id="research" label="Research">
              <CardList items={research} />
            </Section>

            <Section id="projects" label="Projects">
              <CardList items={projects} />
            </Section>

            <Section id="teaching" label="Teaching">
              <CardList items={teaching} />
            </Section>

            <Section id="education" label="Education">
              <CardList items={education} />
              <div className="mt-12">
                <a
                  className="group inline-flex items-baseline leading-tight font-semibold text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                  href={profile.resume}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="View Full Résumé (opens in a new tab)"
                >
                  <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                    View Full Résumé
                  </span>
                  <ArrowRightIcon className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
                </a>
              </div>
            </Section>

            <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
              <p>
                {credit.text}{' '}
                <a
                  href={credit.href}
                  className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {credit.name}
                </a>
                . Built with React and Tailwind CSS, deployed on Vercel.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  )
}
