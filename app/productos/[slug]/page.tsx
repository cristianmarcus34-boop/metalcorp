import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { productos } from '@/lib/data'

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    return productos.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const producto = productos.find((p) => p.slug === slug)

    if (!producto) {
        return { title: 'Producto no encontrado' }
    }

    return {
        title: producto.nombre,
        description: producto.descripcion,
        alternates: { canonical: `/productos/${producto.slug}` },
        openGraph: {
            title: `${producto.nombre} | MetalCorp`,
            description: producto.descripcion,
            url: `/productos/${producto.slug}`,
            type: 'website',
        },
    }
}

export default async function PaginaProducto({ params }: Props) {
    const { slug } = await params
    const producto = productos.find((p) => p.slug === slug)

    if (!producto) notFound()

    return (
        <>
            <section className="bg-oscuro text-white pt-40 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <Link
                        href="/productos"
                        className="text-fundido text-sm hover:underline"
                    >
                        ← Volver al catálogo
                    </Link>
                    <span className="block mt-6 text-fundido font-semibold tracking-[0.2em] text-sm uppercase">
                        {producto.categoria}
                    </span>
                    <h1 className="font-display text-5xl md:text-6xl font-extrabold mt-3">
                        {producto.nombre}
                    </h1>
                </div>
            </section>

            <section className="py-24 px-6 bg-humo">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <h2 className="font-display text-2xl font-bold text-oscuro mb-4">
                                Descripción
                            </h2>
                            <p className="text-acero/80 leading-relaxed">
                                {producto.descripcionLarga}
                            </p>
                        </div>

                        <div>
                            <h2 className="font-display text-2xl font-bold text-oscuro mb-4">
                                Aplicaciones
                            </h2>
                            <ul className="grid sm:grid-cols-2 gap-3">
                                {producto.aplicaciones.map((a) => (
                                    <li
                                        key={a}
                                        className="flex items-center gap-3 p-4 bg-white rounded-lg border border-acero/10"
                                    >
                                        <span className="text-fundido font-bold">✓</span>
                                        <span className="text-acero">{a}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <aside className="lg:col-span-1">
                        <div className="bg-white rounded-lg p-8 shadow-sm border-t-4 border-fundido">
                            <div className="h-40 bg-linear-to-br from-[#1B4F72] to-[#0F1A24] rounded flex items-center justify-center mb-6">
                                <span className="text-white font-display font-extrabold text-7xl">
                                    {producto.simbolo}
                                </span>
                            </div>

                            <h3 className="font-display font-bold text-oscuro mb-4">
                                Especificaciones
                            </h3>
                            <dl className="space-y-3">
                                {producto.especificaciones.map((e) => (
                                    <div
                                        key={e.etiqueta}
                                        className="flex justify-between border-b border-acero/10 pb-2"
                                    >
                                        <dt className="text-sm text-acero/60">
                                            {e.etiqueta}
                                        </dt>
                                        <dd className="text-sm font-semibold text-oscuro text-right">
                                            {e.valor}
                                        </dd>
                                    </div>
                                ))}
                            </dl>

                            <Link
                                href="/contacto"
                                className="mt-8 block text-center bg-fundido hover:bg-[#cf6a12] text-white py-3 rounded font-semibold transition"
                            >
                                Solicitar cotización
                            </Link>
                        </div>
                    </aside>
                </div>
            </section>
        </>
    )
}