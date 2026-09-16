import Link from 'next/link'
import { productos } from '@/lib/data'

export function Productos() {
    return (
        <section className="py-24 px-6 bg-humo">
            <div className="max-w-7xl mx-auto">
                <span className="text-fundido font-semibold tracking-[0.2em] text-sm">
                    PRODUCTOS
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-extrabold text-oscuro mt-3 mb-4">
                    Metales de alta performance
                </h2>
                <p className="text-acero-70 max-w-2xl mb-14">
                    Portfolio completo de acero, aluminio, cobre y superaleaciones para
                    aplicaciones críticas.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {productos.map((p) => (
                        <Link
                            key={p.slug}
                            href={`/productos/${p.slug}`}
                            className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-2"
                        >
                            <div className="h-48 bg-linear-to-br from-[#1B4F72] to-[#0F1A24] flex items-center justify-center">
                                <span className="text-white font-display font-extrabold text-6xl group-hover:scale-110 transition-transform">
                                    {p.simbolo}
                                </span>
                            </div>
                            <div className="p-6">
                                <h3 className="font-display font-bold text-oscuro text-lg mb-2">
                                    {p.nombre}
                                </h3>
                                <p className="text-acero-70 text-sm mb-4 line-clamp-3">
                                    {p.descripcion}
                                </p>
                                <span className="text-fundido font-semibold text-sm">
                                    Ver más →
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}