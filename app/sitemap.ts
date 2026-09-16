import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site'
import { productos, comunicados } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
    const base = siteConfig.url
    const ahora = new Date()

    const rutasEstaticas = [
        '',
        '/nosotros',
        '/productos',
        '/industrias',
        '/contacto',
        '/proveedores',
        '/prensa',
    ].map((ruta) => ({
        url: `${base}${ruta}`,
        lastModified: ahora,
        changeFrequency: 'monthly' as const,
        priority: ruta === '' ? 1 : 0.8,
    }))

    const rutasProductos = productos.map((p) => ({
        url: `${base}/productos/${p.slug}`,
        lastModified: ahora,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    const rutasComunicados = comunicados.map((c) => ({
        url: `${base}/prensa/${c.slug}`,
        lastModified: ahora,
        changeFrequency: 'yearly' as const,
        priority: 0.6,
    }))

    return [...rutasEstaticas, ...rutasProductos, ...rutasComunicados]
}