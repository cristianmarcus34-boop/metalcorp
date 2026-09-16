import type { Metadata } from 'next'
import Link from 'next/link'
import { productos } from '@/lib/data'

export const metadata: Metadata = {
    title: 'Productos',
    description:
        'Catálogo completo de acero, aluminio, cobre y superaleaciones de MetalCorp para aplicaciones industriales críticas.',
    alternates: { canonical: '/productos' },
}

export default function PaginaProductos() {
    return (
        <>
            <section className="relative bg-oscuro text-white pt-40 pb-24 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-linear-to-br from-oscuro/95 via-industrial/80 to-oscuro/95 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1920&q=80"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto">
                    <span className="text-fundido font-semibold tracking-[0.2em] text-sm">
                        CATÁLOGO
                    </span>
                    <h1 className="font-display text-5xl md:text-6xl font-extrabold mt-4">
                        Nuestros productos
                    </h1>
                </div>
            </section>

            <section className="py-24 px-6 bg-humo">
                <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {productos.map((p) => (
                        <Link
                            key={p.slug}
                            href={`/productos/${p.slug}`}
                            className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
                        >
                            <div className="h-56 bg-linear-to-br from-[#1B4F72] to-[#0F1A24] flex items-center justify-center">
                                <span className="text-white font-display font-extrabold text-7xl group-hover:scale-110 transition-transform">
                                    {p.simbolo}
                                </span>
                            </div>
                            <div className="p-6">
                                <span className="text-xs uppercase tracking-widest text-fundido font-semibold">
                                    {p.categoria}
                                </span>
                                <h3 className="font-display font-bold text-oscuro text-xl mt-2 mb-3">
                                    {p.nombre}
                                </h3>
                                <p className="text-acero/70 text-sm mb-4">
                                    {p.descripcion}
                                </p>
                                <span className="text-fundido font-semibold text-sm">
                                    Ver detalle →
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    )
}