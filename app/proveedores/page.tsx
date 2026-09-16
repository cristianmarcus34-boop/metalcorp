import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
    title: 'Proveedores',
    description:
        'Información para proveedores de MetalCorp: requisitos, procesos de homologación y contacto directo con el área de compras.',
    alternates: { canonical: '/proveedores' },
    openGraph: {
        title: 'Proveedores | MetalCorp',
        description: 'Requisitos y contacto para proveedores de MetalCorp.',
        url: '/proveedores',
    },
}

const requisitos = [
    {
        titulo: 'Certificaciones',
        descripcion: 'ISO 9001, ISO 14001 y OHSAS 18001 vigentes.',
    },
    {
        titulo: 'Capacidad productiva',
        descripcion: 'Volumen mínimo según categoría de insumo.',
    },
    {
        titulo: 'Trazabilidad',
        descripcion: 'Sistema documental auditable en toda la cadena.',
    },
    {
        titulo: 'Sustentabilidad',
        descripcion: 'Políticas ambientales y de seguridad alineadas a las nuestras.',
    },
]

const categorias = [
    'Mineral de hierro',
    'Chatarra ferrosa',
    'Ferroaleaciones',
    'Electrodos de grafito',
    'Refractarios',
    'Energía eléctrica',
    'Gas natural',
    'Transporte y logística',
]

export default function PaginaProveedores() {
    return (
        <>
            {/* HERO con imagen de fondo difuminada */}
            <section className="relative bg-oscuro text-white pt-40 pb-24 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-linear-to-br from-oscuro/95 via-industrial/80 to-oscuro/95 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80"
                        alt=""
                        className="w-full h-full object-cover blur-[2px] scale-105"
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto">
                    <span className="text-fundido font-semibold tracking-[0.2em] text-sm">
                        PROVEEDORES
                    </span>
                    <h1 className="font-display text-5xl md:text-6xl font-extrabold mt-4 max-w-3xl">
                        Trabajemos juntos
                    </h1>
                    <p className="text-white/70 text-lg mt-6 max-w-2xl">
                        Buscamos socios estratégicos que compartan nuestros estándares de
                        calidad, seguridad y sustentabilidad.
                    </p>
                </div>
            </section>

            {/* REQUISITOS */}
            <section className="py-24 px-6 bg-humo">
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-display text-3xl font-bold text-oscuro mb-12">
                        Requisitos de homologación
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {requisitos.map((r) => (
                            <div
                                key={r.titulo}
                                className="p-8 border-t-4 border-fundido bg-white rounded-b-lg shadow-sm"
                            >
                                <h3 className="font-display font-bold text-oscuro text-lg mb-3">
                                    {r.titulo}
                                </h3>
                                <p className="text-acero/70 text-sm">{r.descripcion}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CATEGORÍAS */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <span className="text-fundido font-semibold tracking-[0.2em] text-sm">
                        CATEGORÍAS
                    </span>
                    <h2 className="font-display text-3xl font-bold text-oscuro mt-3 mb-4">
                        Qué buscamos
                    </h2>
                    <p className="text-acero/70 mb-12 max-w-2xl">
                        Estos son los principales insumos y servicios que demandamos
                        regularmente.
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {categorias.map((cat) => (
                            <div
                                key={cat}
                                className="p-5 bg-humo rounded-lg border-l-4 border-fundido text-oscuro font-medium text-sm"
                            >
                                {cat}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 bg-humo">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-display text-3xl font-bold text-oscuro mb-6">
                        ¿Querés ser proveedor de MetalCorp?
                    </h2>
                    <p className="text-acero/70 text-lg mb-10 max-w-2xl mx-auto">
                        Enviá tu propuesta comercial y tu documentación al área de compras.
                        Nuestro equipo evalúa cada propuesta en un plazo máximo de 15 días
                        hábiles.
                    </p>
                    <a
                        href={`mailto:${siteConfig.contacto.email}?subject=Propuesta%20de%20proveedor`}
                        className="inline-block bg-fundido hover:bg-[#cf6a12] text-white px-8 py-4 rounded font-semibold transition"
                    >
                        Enviar propuesta
                    </a>
                </div>
            </section>
        </>
    )
}