function IconBase({ children, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

export function WhatsAppIcon(props) {
  return (
  <IconBase {...props} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
  {/* Burbuja de diálogo de fondo */}
  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
  
  {/* GRUPO PARA CONTROLAR EL TELÉFONO */}
  {/* Modifica el scale (ej: 0.9 para achicar, 1.1 para agrandar) y el translate para centrarlo si se mueve */}
  <g transform="translate(1) scale(0.9)">
    <path d="M10.5 8.5c-.3-.3-.7-.5-1.1-.5-.5 0-1 .2-1.4.5-.4.4-.7 1-.7 1.6 0 1.9 1.3 4 3 5.7s3.8 3 5.7 3c.6 0 1.2-.3 1.6-.7.3-.4.5-.9.5-1.4 0-.4-.2-.8-.5-1.1l-1.9-1.3c-.3-.2-.7-.3-1-.1l-1 1c-.4-.3-.9-.7-1.3-1.1L11.5 13l1-1c.2-.3.2-.7-.1-1L10.5 8.5Z" />
  </g>
</IconBase>
  )
}

export function InstagramIcon(props) {
  return (
    <IconBase {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.8" fill="currentColor" stroke="none" />
    </IconBase>
  )
}

export function FacebookIcon(props) {
  return (
    <IconBase {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
      <path d="M13.5 20v-6h2l.4-2.6h-2.4V9.6c0-.8.3-1.3 1.5-1.3h1V6c-.6-.1-1.3-.1-2-.1-2 0-3.3 1.2-3.3 3.4v2.1H8.5V14h2.2v6" />
    </IconBase>
  )
}

export function TikTokIcon(props) {
  return (
  <IconBase {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
  {/* Nota musical reubicada y centrada en un lienzo de 24x24 */}
  <path d="M16 4v11.5a3.5 3.5 0 1 1-3-3.4" />
  <path d="M16 4c.5 2.5 2.5 4.5 5 4.7" />
</IconBase>
  )
}
