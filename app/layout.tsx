import './globals.css'

export const metadata = {
  title: 'Khumeia Café | Próximamente',
  description: 'La alquimia del café de especialidad.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <script src="https://cdn.tailwindcss.com"></script>
      <body>{children}</body>
    </html>
  )
}
