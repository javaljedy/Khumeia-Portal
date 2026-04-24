import './globals.css'
import { Cinzel } from 'next/font/google' // Importamos una similar

const fontCincoyoStyle = Cinzel({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-cincoyo',
})

export const metadata = {
  title: 'Khumeia Café | Próximamente',
  description: 'La alquimia del café de especialidad.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={fontCincoyoStyle.variable}>
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="font-serif">{children}</body>
    </html>
  )
}
