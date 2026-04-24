import './globals.css'
import { Cinzel, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next';

// Configuración de fuentes
const cinzel = Cinzel({ 
  subsets: ['latin'],
  variable: '--font-cincoyo',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata = {
  title: 'Khumeia Café | Café de Origen y Pastelería Artesanal en Pereira',
  description: 'Descubre la alquimia del café de origen y métodos de filtrado en Galicia Mall Plaza Local 220, Pereira.',
  keywords: ['café de especialidad Pereira', 'café de origen', 'métodos de filtrado', 'pastelería artesanal', 'Galicia Mall Plaza'],
  openGraph: {
    title: 'Khumeia Café | La Alquimia del Origen',
    description: 'Café de origen, métodos de filtrado y pastelería artesanal en el corazón de Galicia Mall Plaza.',
    url: 'https://khumeia.cafe',
    siteName: 'Khumeia Café',
    images: [{ url: '/LogoKhumeia.png' }], // Ruta corregida según tu solicitud
    locale: 'es_CO',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Datos estructurados para Google Maps (SEO Local)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "name": "Khumeia Café",
    "image": "https://khumeia.cafe/LogoKhumeia.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Galicia Mall Plaza Local 220", // Basado en tu carta 
      "addressLocality": "Pereira",
      "addressRegion": "Risaralda",
      "addressCountry": "CO"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 4.8113455,
      "longitude": -75.796803
    }
  }

  return (
    <html lang="es" className={`${cinzel.variable} ${montserrat.variable}`}>
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#000000] text-[#FDBE73]">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
