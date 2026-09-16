export const siteConfig = {
    nombre: 'MetalCorp',
    descripcion:
        'Multinacional metalúrgica con más de 50 años produciendo acero, aluminio, cobre y superaleaciones para las industrias más exigentes del mundo.',
    url:
        process.env.NEXT_PUBLIC_SITE_URL &&
            process.env.NEXT_PUBLIC_SITE_URL.trim() !== ''
            ? process.env.NEXT_PUBLIC_SITE_URL
            : 'https://metalcorp.vercel.app',
    idioma: 'es_AR',
    contacto: {
        email: 'contacto@metalcorp.com',
        telefono: '+54 11 5555-0000',
        direccion: 'Av. Industrial 4500, Buenos Aires, Argentina',
    },
    redes: {
        linkedin: 'https://linkedin.com/company/metalcorp',
        twitter: 'https://twitter.com/metalcorp',
    },
} as const