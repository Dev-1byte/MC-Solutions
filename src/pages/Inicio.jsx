import { Link } from 'react-router-dom'
import HeroDiagram from '../components/HeroDiagram.jsx'
import PriceTicker from '../components/PriceTicker.jsx'
import heroBg from '../assets/hero-bg.jpg'

const pasos = [
  {
    n: '01',
    title: 'Cuéntame el problema',
    body: 'Escríbeme por WhatsApp o llama. En un par de minutos sabemos si es algo rápido o necesita revisión más a fondo.',
  },
  {
    n: '02',
    title: 'Nos conectamos por control remoto',
    body: 'Te paso un enlace, lo abres y entro a tu equipo con tu pantalla visible en todo momento. Nada oculto.',
  },
  {
    n: '03',
    title: 'Resuelvo mientras me ves trabajar',
    body: 'Arreglo el problema en vivo y te explico qué pasó, para que la próxima vez sepas identificarlo tú mismo.',
  },
]

const teaser = [
  'Virus y equipos lentos',
  'Redes y wifi que no conectan',
  'Configuración de programas',
]

export default function Inicio() {
  return (
    <div>
      <section className="relative overflow-hidden bg-ink text-cream">
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/90 to-ink/50" />
        <div className="relative mx-auto grid max-w-5xl gap-12 px-6 py-20 sm:py-28 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
              Tu equipo, arreglado sin salir de casa.
            </h1>
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-cream/70">
              Soporte técnico remoto para computadoras y redes. Me conecto a
              tu equipo, diagnostico el problema frente a ti y lo resuelvo en
              la misma llamada.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="https://wa.me/51920761289"
                target="_blank"
                rel="noreferrer"
                className="bg-amber px-6 py-3 font-mono text-sm text-ink transition-colors hover:bg-amber-dim"
              >
                Escribir por WhatsApp
              </a>
              <Link
                to="/servicios"
                className="border border-cream/30 px-6 py-3 font-mono text-sm text-cream transition-colors hover:border-cream"
              >
                Ver servicios
              </Link>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-md border border-cream/15 bg-ink/70 backdrop-blur-sm rounded-md">
              <div className="flex items-center gap-2 border-b border-cream/10 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-[#ec6a5e]" />
                <span className="h-3 w-3 rounded-full bg-[#f4bf4f]" />
                <span className="h-3 w-3 rounded-full bg-[#61c454]" />
                <span className="ml-2 font-mono text-xs text-cream/40">
                  sesión-remota
                </span>
              </div>
              <div className="p-6 ">
                <HeroDiagram />
              </div>
            </div>
          </div>
        </div>
      </section>
      <PriceTicker />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-charcoal">
          Cómo funciona una sesión
        </h2>
        <div className="mt-10 grid gap-10 sm:grid-cols-3">
          {pasos.map((p) => (
            <div key={p.n} className="border-t border-charcoal/15 pt-5">
              <span className="font-mono text-sm text-amber-dim">{p.n}</span>
              <h3 className="mt-2 text-lg font-medium text-charcoal">
                {p.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-charcoal/70">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-paper-dim">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-tight text-charcoal">
              Lo que resuelvo con más frecuencia
            </h2>
            <Link
              to="/servicios"
              className="font-mono text-sm text-charcoal underline decoration-charcoal/30 underline-offset-4 hover:decoration-charcoal"
            >
              ver la lista completa
            </Link>
          </div>
          <ul className="mt-10 divide-y divide-charcoal/15 border-y border-charcoal/15">
            {teaser.map((item) => (
              <li
                key={item}
                className="flex items-center gap-4 py-5 text-[17px] text-charcoal"
              >
                <span className="h-1.5 w-1.5 shrink-0 bg-trace" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className=" text-cream border">
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div className=' text-charcoal'>

            <p className="max-w-md text-xl font-medium leading-snug tracking-tight text-charcoal">
              Cuéntame qué le pasa a tu equipo y te digo en minutos cómo
              solucionarlo.
            </p>
            <span className="font-mono text-xs  ">
              atiendo de lunes a sábado, 9:00–20:00
            </span>
          </div>
          <a
            href="https://wa.me/51920761289"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 bg-amber px-6 py-3 font-mono text-sm text-ink transition-colors hover:bg-amber-dim"
          >
            Escribir ahora
          </a>
        </div>
      </section>
    </div>
  )
}
