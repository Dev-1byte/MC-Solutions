import { useEffect, useRef } from 'react'

const items = [
  { text: 'Limpieza de virus y malware' },
  { text: 'Wifi inestable o que se cae' },
  { text: 'Instalación de Windows' },
  { text: 'Diagnóstico por WhatsApp', promo: 'gratis' },
  { text: 'Respaldo de archivos' },
  { text: '2do equipo en la misma visita', promo: '20% dcto' },
]

function TickerItem({ text, price, promo }) {
  return (
    <span className="mx-6 inline-flex items-center gap-2 whitespace-nowrap font-mono text-sm">
      <span className="text-cream/80">{text}</span>
      {promo ? (
        <span className="text-amber">{promo}</span>
      ) : (
        <span className="text-cream/50">{price}</span>
      )}
      <span className="mx-4 text-trace">◆</span>
    </span>
  )
}


// animacion


export default function PriceTicker() {
  const trackRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const speed = 40 // pixels per second
    let x = 0
    let last = performance.now()
    let raf = requestAnimationFrame(step)

    function step(now) {
      const dt = (now - last) / 1000
      last = now
      x -= speed * dt

      const halfWidth = track.scrollWidth / 2
      if (halfWidth > 0 && Math.abs(x) >= halfWidth) {
        x += halfWidth
      }

      track.style.transform = `translateX(${x}px)`
      raf = requestAnimationFrame(step)
    }

    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div className="overflow-hidden border-y border-cream/10 bg-ink py-3">
      <div ref={trackRef} className="flex w-max">
        {[0, 1].map((rep) => (
          <div key={rep} className="flex" aria-hidden={rep === 1}>
            {items.map((item, i) => (
              <TickerItem key={`${rep}-${i}`} {...item} />
            ))}
          </div>
        ))}
      </div>
      <p className="sr-only">
        Precios aproximados: {items
          .map((i) => `${i.text} ${i.promo ?? i.price}`)
          .join(', ')}
        . El monto final se confirma antes de empezar.
      </p>
    </div>
  )
}
