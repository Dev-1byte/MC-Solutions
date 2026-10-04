import heroBg from '../assets/hero-bg.jpg'
const categorias = [
  {
    title: 'Equipos',
    accent: 'amber',
    items: [
      {
        name: 'Limpieza de virus y malware',
        desc: 'Elimino el problema y reviso que no queden programas maliciosos abriéndose solos al encender.',
      },
      {
        name: 'Equipo lento o que se cuelga',
        desc: 'Reviso qué está consumiendo recursos y limpio arranque y programas de fondo innecesarios.',
      },
      {
        name: 'Instalación de Windows',
        desc: 'Formateo, instalación limpia y traslado de tus archivos importantes antes de empezar.',
      },
    ],
  },
  {
    title: 'Redes',
    accent: 'trace',
    items: [
      {
        name: 'Wifi que no conecta o se cae',
        desc: 'Reviso router, canal y configuración del equipo hasta dejar la conexión estable.',
      },
      {
        name: 'Configuración de red compartida',
        desc: 'Impresoras y carpetas compartidas entre varios equipos de la casa u oficina.',
      },
    ],
  },
  {
    title: 'Programas',
    accent: 'charcoal',
    items: [
      {
        name: 'Instalación y configuración',
        desc: 'Office, correo, videollamadas o cualquier programa que necesites dejar funcionando.',
      },
      {
        name: 'Respaldo de archivos',
        desc: 'Copia tus documentos y fotos a un disco externo o a la nube antes de que algo falle.',
      },
    ],
  },
]

const accentClasses = {
  amber: 'border-t-amber',
  trace: 'border-t-trace',
  charcoal: 'border-t-charcoal',
}

export default function Servicios() {
  return (
    <div>
        <section className="relative overflow-hidden bg-ink text-cream">
              <img
                src={heroBg}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-ink/65" />
              <div className="relative mx-auto max-w-5xl px-6 py-16">
                <h1 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
                  Servicios
                </h1>
              </div>
            </section>
      <section className="mx-auto max-w-5xl px-6 py-16">

        <div className="grid gap-x-8 gap-y-12 pb-8 ">
             <p className="text-lg text-[15px] leading-relaxed text-charcoal/60  ">
             Ofrecemos asistencia técnica remota integral para resolver problemas de software, optimizar el rendimiento de tus equipos, eliminar virus y configurar herramientas de trabajo. Garantizamos un servicio rápido, seguro y sin interrupciones en tus actividades diarias.
           </p>

           </div>
        <div className="grid gap-6 md:grid-cols-3">
          {categorias.map((cat) => (
            <div
              key={cat.title}
              className="border border-charcoal/15 bg-paper"
            >
              <div
                className={`border-t-[3px] bg-ink px-5 py-4 font-medium text-cream ${accentClasses[cat.accent]}`}
              >
                {cat.title}
              </div>
              <div className="px-5">
                {cat.items.map((item, i) => (
                  <div
                    key={item.name}
                    className={`py-4 ${i !== 0 ? 'border-t border-charcoal/10' : ''}`}
                  >
                    <h3 className="text-[15px] font-medium text-charcoal">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-charcoal/65">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-lg text-[15px] leading-relaxed text-charcoal/60">
          ¿No encuentras lo que necesitas? Escríbeme igual, seguro puedo
          ayudarte o decirte quién sí puede.
        </p>
      </section>
    </div>
  )
}
