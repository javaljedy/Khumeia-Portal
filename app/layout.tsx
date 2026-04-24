import './globals.css'
import { Cinzel, Montserrat } from 'next/font/google'

// Configuración de fuentes: Cinzel para títulos (similar a Cincoyo) y Montserrat para cuerpo
const cinzel = Cinzel({ 
  subsets: ['latin'],
  variable: '--font-cincoyo',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata = {
  title: {
    default: 'Khumeia Café | Café de Origen y Pastelería Artesanal en Pereira',
    template: '%s | Khumeia Café'
  },
  description: 'Descubre la alquimia del café de origen y métodos de filtrado en Galicia Mall Plaza, Pereira. Pastelería artesanal y experiencias sensoriales únicas.',
  keywords: [
    'café de especialidad Pereira', 
    'café de origen Risaralda', 
    'métodos de filtrado', 
    'pastelería artesanal Pereira', 
    'Galicia Mall Plaza', 
    'Cerritos Pereira café'
  ],
  authors: [{ name: 'Khumeia Café' }],
  openGraph: {
    title: 'Khumeia Café | La Alquimia del Origen',
    description: 'Café de origen, métodos de filtrado y pastelería artesanal en el corazón de Galicia Mall Plaza.',
    url: 'https://khumeia.cafe',
    siteName: 'Khumeia Café',
    images: [
      {
        url: '/logo-khumeia.jpg', // Asegúrate de subir el logo con este nombre a la carpeta /public
        width: 800,
        height: 800,
        alt: 'Logo Khumeia Café',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Datos estructurados para SEO Local (Google Maps/Local Business)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "name": "Khumeia Café",
    "image": "https://khumeia.cafe/logo-khumeia.jpg",
    "url": "https://khumeia.cafe",
    "telephone": "+57XXXXXXXXXX", 
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Galicia Mall Plaza",
      "addressLocality": "Pereira",
      "addressRegion": "Risaralda",
      "postalCode": "660001",
      "addressCountry": "CO"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 4.8113455,
      "longitude": -75.796803
    },
    "servesCuisine": ["Café de especialidad", "Pastelería artesanal"],
    "areaServed": ["Galicia", "Cerritos", "Pereira"],
    "hasMenu": "https://khumeia.cafe/menu", // Futuro link de tu menú
    "priceRange": "$$"
  }

  return (
    <html lang="es" className={`${cinzel.variable} ${montserrat.variable}`}>
      <head>
        {/* Carga de Tailwind vía CDN para prototipado rápido */}
        <script src="https://cdn.tailwindcss.com"></script>
        {/* Inyección de Datos Estructurados */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#000000] text-[#FDBE73]">
        {children}
      </body>
    </html>
  )
}
