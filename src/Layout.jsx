import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import logo from './assets/logo.png'
import {
  WhatsAppIcon,
  InstagramIcon,
  FacebookIcon,
  TikTokIcon,
} from './components/SocialIcons.jsx'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/contacto', label: 'Contacto' },
]

const whatsappHref = 'https://wa.me/51920761289'

const socials = [
  { label: 'WhatsApp', href: whatsappHref, Icon: WhatsAppIcon },
  { label: 'Instagram', href: 'https://instagram.com/', Icon: InstagramIcon },
  { label: 'Facebook', href: 'https://facebook.com/', Icon: FacebookIcon },
  { label: 'TikTok', href: 'https://tiktok.com/', Icon: TikTokIcon },
]

function NavItem({ to, label, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      end={to === '/'}
      className={({ isActive }) =>
        `text-[15px] tracking-tight transition-colors ${isActive ? 'text-amber' : 'text-cream/70 hover:text-cream'
        }`
      }
    >
      {label}
    </NavLink>
  )
}

export default function Layout() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex min-h-dvh flex-col bg-paper">
      <header className="border-b border-cream/10 bg-ink">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          {/* <NavLink to="/" className="flex items-center gap-3 text-cream">
            <NodeMark className="h-3 w-10 text-amber " />
            <span className="font-mono text-sm tracking-tight">
              soporte&nbsp;/&nbsp;remoto
            </span>
          </NavLink> */}
          <NavLink to="/" className="flex items-center gap-3 text-cream">
                      <img src={logo} alt="Modern Computing Experts" className="h-8 w-auto" />
                       <span className="font-mono text-sm tracking-tight">
              Solutions
            </span>
                    </NavLink>
          

          <nav className="hidden items-center gap-8 sm:flex ">
            {links.map((l) => (
              <NavItem key={l.to} {...l} />
            ))}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="border border-amber px-4 py-2 font-mono text-sm text-amber transition-colors hover:bg-amber hover:text-ink"
            >
              Escribir ahora
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex flex-col gap-1.5 sm:hidden"
            aria-label="Abrir menú"
            aria-expanded={open}
          >
            <span className="block h-px w-6 bg-cream" />
            <span className="block h-px w-6 bg-cream" />
          </button>
        </div>

        {open && (
          <div className="flex flex-col gap-5 border-t border-cream/10 px-6 py-6 sm:hidden">
            {links.map((l) => (
              <NavItem key={l.to} {...l} onClick={() => setOpen(false)} />
            ))}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="border border-amber px-4 py-2 text-center font-mono text-sm text-amber "
            >
              Escribir ahora
            </a>
          </div>
        )}
      </header>

      <main className="flex-1 ">
        <Outlet />
      </main>

      <footer className="border-t border-charcoal/10 bg-ink">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 text-cream/60 sm:flex-row sm:items-center sm:justify-between ">
          {/* <div className="flex items-center gap-3">
            <NodeMark className="h-3 w-10 text-trace border" />
            <span className="font-mono text-xs">
              soporte técnico remoto — Lima, Perú
            </span>
          </div> */}
          <div className="flex items-center gap-3">
                        <img src={logo} alt="Modern Computing Experts" className="h-7 w-auto" />
                        <span className="font-mono text-xs">
                          Solutions — Lima, Perú
                        </span>
                      </div>
          <div className="flex flex-col items-center gap-3  border-cream/10  py-4">
            {/* El texto se queda arriba */}
            <p className="font-mono text-xs">
              síguenos:
            </p>

            {/* Esta envoltura hace que los íconos se mantengan horizontales */}
            <div className="flex flex-row justify-center gap-5">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="text-cream/50 transition-colors hover:text-amber"
                >
                  <Icon className="h-8 w-8" />
                </a>
              ))}
            </div>
          </div>


        </div>



        <p className="mt-6 text-center font-mono text-xs text-cream/40  py-5">
          © {new Date().getFullYear()} MC Solutions . Todos los
          derechos reservados.
        </p>
      </footer>
    </div>
  )
}
