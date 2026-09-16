import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { comunicados } from '@/lib/data'

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    return comunicados.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const comunicado = comunicados.find((c) => c.slug === slug)

    if (!comunicado) {
        return { title: 'Comunicado no encontrado' }
    }

    return {
        title: comunicado.titulo,
        description: comunicado.resumen,
        alternates: { canonical: `/prensa/${comunicado.slug}` },
        openGraph: {
            title: `${comunicado.titulo} | MetalCorp`,
            description: comunicado.resumen,
            url: `/prensa/${comunicado.slug}`,
            type: 'article',
        },
    }
}

export default async function PaginaComunicado({ params }: Props) {
    const { slug } = await params
    const comunicado = comunicados.find((c) => c.slug === slug)

    if (!comunicado) notFound()

    return (
        <>
            <section className="bg-oscuro text-white pt-40 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <Link
                        href="/prensa"
                        className="text-fundido text-sm hover:underline"
                    >
                        ← Volver a prensa
                    </Link>
                    <div className="flex flex-wrap items-center gap-4 mt-6 mb-4">
                        <span className="text-xs uppercase tracking-widest text-fundido font-semibold">
                            {comunicado.categoria}
                        </span>
                        <span className="text-xs text-white/50">{comunicado.fecha}</span>
                    </div>
                    <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-tight">
                        {comunicado.titulo}
                    </h1>
                </div>
            </section>

            <section className="py-24 px-6 bg-humo">
                <article className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed text-acero/85">
                    {comunicado.contenido.map((parrafo, i) => (
                        <p key={i}>{parrafo}</p>
                    ))}
                </article>

                <div className="max-w-3xl mx-auto mt-16 pt-8 border-t border-acero/10">
                    <Link
                        href="/prensa"
                        className="text-fundido font-semibold hover:underline"
                    >
                        ← Ver todos los comunicados
                    </Link>
                </div>
            </section>
        </>
    )
}