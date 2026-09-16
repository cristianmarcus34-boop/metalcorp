import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { OrganizationJsonLd } from '@/components/seo/OrganizationJsonLd'
import { siteConfig } from '@/lib/site'
import './globals.css'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
    weight: ['600', '800'],
    display: 'swap',
})

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: `${siteConfig.nombre} | Líder Global en Metales y Metalurgia`,
        template: `%s | ${siteConfig.nombre}`,
    },
    description: siteConfig.descripcion,
    applicationName: siteConfig.nombre,
    authors: [{ name: siteConfig.nombre, url: siteConfig.url }],
    creator: siteConfig.nombre,
    publisher: siteConfig.nombre,
    keywords: [
        'metalurgia',
        'acero',
        'aluminio',
        'cobre',
        'aleaciones',
        'industria metalúrgica',
        'acero estructural',
        'superaleaciones',
    ],
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        locale: siteConfig.idioma,
        url: '/',
        siteName: siteConfig.nombre,
        title: `${siteConfig.nombre} | Líder Global en Metales y Metalurgia`,
        description: siteConfig.descripcion,
        images: [
            {
                url: '/og/home.jpg',
                width: 1200,
                height: 630,
                alt: 'Planta metalúrgica MetalCorp',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: `${siteConfig.nombre} | Líder Global en Metales y Metalurgia`,
        description: siteConfig.descripcion,
        images: ['/og/home.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
        },
    },
    formatDetection: { email: false, address: false, telephone: false },
    category: 'industrial',
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#F4F6F7' },
        { media: '(prefers-color-scheme: dark)', color: '#0F1A24' },
    ],
    colorScheme: 'light',
}

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="es" className={`${inter.variable} ${montserrat.variable}`}>
            <body className="font-sans antialiased bg-[#F4F6F7] text-[#2C3E50] min-h-screen flex flex-col">
                <OrganizationJsonLd />
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
            </body>
        </html>
    )
}