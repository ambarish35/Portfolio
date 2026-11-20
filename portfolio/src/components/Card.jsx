import { ArrowUpRightIcon } from './Icons.jsx'

// One entry in a list: label/date on the left, details on the right.
// Hovering a card highlights it and dims its siblings (via group/list on the <ol>).
export default function Card({ label, title, subtitle, href, description, meta, tech = [] }) {
  return (
    <li className="mb-12 last:mb-0">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:opacity-100!">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

        {label && (
          <header className="z-10 mt-1 mb-2 text-xs font-semibold tracking-wide text-slate-500 uppercase sm:col-span-2">
            {label}
          </header>
        )}

        <div className={`z-10 ${label ? 'sm:col-span-6' : 'sm:col-span-8'}`}>
          <h3 className="leading-snug font-medium text-slate-200">
            {href ? (
              <a
                className="group/link inline-flex items-baseline text-base leading-tight font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 lg:group-hover:text-teal-300"
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${title} (opens in a new tab)`}
              >
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                <span>
                  {title}
                  <ArrowUpRightIcon className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none lg:group-hover:-translate-y-1 lg:group-hover:translate-x-1" />
                </span>
              </a>
            ) : (
              <span className="text-base leading-tight transition-colors lg:group-hover:text-teal-300">
                {title}
              </span>
            )}
            {subtitle && <div className="text-slate-500">{subtitle}</div>}
          </h3>

          {description && <p className="mt-2 text-sm leading-normal">{description}</p>}
          {meta && <p className="mt-1 text-sm leading-normal text-slate-400">{meta}</p>}

          {tech.length > 0 && (
            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
              {tech.map((t) => (
                <li key={t} className="mt-2 mr-1.5">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">
                    {t}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </li>
  )
}
