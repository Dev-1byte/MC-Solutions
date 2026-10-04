
import contactobg from '../assets/contactobg.jpg'
const metodos = [
  {
    label: 'WhatsApp',
    value: '+51 920 761 289',
    href: 'https://wa.me/51920761289',
    nota: 'la vía más rápida, respondo en el día',
  },
  {
    label: 'Llamada',
    value: '+51 920 761 289',
    href: 'tel:+51920761289',
    nota: 'de lunes a sábado, 9:00–20:00',
  },
  {
    label: 'Correo',
    value: 'real.777.em@gmail.com',
    href: 'mailto:real.777.em@gmail.com',
    nota: 'para casos que no son urgentes',
  },
]

const ficha = [
  { label: 'Años de experiencia', value: '6' },
  { label: 'Equipos atendidos', value: '100+' },
  { label: 'Garantía por trabajo', value: '15 días' },
  { label: 'Tiempo de respuesta', value: '< 2 horas' },
]

export default function Contacto() {
  return (
    <div>
      <section className="relative overflow-hidden bg-ink text-cream">
        <img
          src={contactobg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/65" />
        <div className="relative mx-auto max-w-5xl px-6 py-16">
          <h1 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
            Contacto
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 ">


        <div className="grid gap-x-8 gap-y-12 pb-8 ">
          <p className="text-lg text-[15px] leading-relaxed text-charcoal/60  ">
            Soporte técnico eficiente a un clic de distancia.
            Comunícate con nuestros especialistas para reportar una incidencia o solicitar asesoría personalizada. Déjanos los detalles de tu problema y nos conectaremos contigo a la brevedad.
          </p>

        </div>
        <div className="grid gap-x-8 gap-y-12 md:grid-cols-3">


          {metodos.map((m) => (
            <a
              key={m.label}
              href={m.href}
              target={m.href.startsWith('http') ? '_blank' : undefined}
              rel={m.href.startsWith('http') ? 'noreferrer' : undefined}
              className="block border-t border-charcoal/15 p-5 transition-colors hover:border-amber-dim border text-center"
            >
              <span className="font-mono text-xs text-charcoal/50">
                {m.label}
              </span>
              <p className="mt-2 text-xl font-medium text-charcoal">
                {m.value}
              </p>
              <p className="mt-1 text-sm text-charcoal/60">{m.nota}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-paper-dim">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-lg font-medium tracking-tight text-charcoal">
            En cifras
          </h2>
          <dl className="mt-6 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4">
            {ficha.map((f) => (
              <div key={f.label} className="border-l-2 border-trace pl-4">
                <dt className="text-sm text-charcoal/60">{f.label}</dt>
                <dd className="mt-1 font-mono text-2xl text-charcoal">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </div>
  )
}
