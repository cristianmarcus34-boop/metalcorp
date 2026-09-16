import { siteConfig } from '@/lib/site'

export function OrganizationJsonLd() {
    const datos = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteConfig.nombre,
        url: siteConfig.url,
        logo: `${siteConfig.url}/icon-512.png`,
        foundingDate: '1974',
        description: siteConfig.descripcion,
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Av. Industrial 4500',
            addressLocality: 'Buenos Aires',
            addressCountry: 'AR',
        },
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: siteConfig.contacto.telefono,
            contactType: 'sales',
            availableLanguage: ['Spanish', 'English', 'Portuguese'],
        },
        sameAs: [siteConfig.redes.linkedin, siteConfig.redes.twitter],
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(datos) }}
        />
    )
}