import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/lib/site'
import { comunicados } from '@/lib/data'

export const metadata: Metadata = {
    title: 'Prensa',
    description:
        'Sala de prensa de MetalCorp: comunicados, contacto para periodistas y material institucional.',
    alternates: { canonical: '/prensa' },
    openGraph: {
        title: 'Prensa | MetalCorp',
        description: 'Comunicados y contacto para periodistas.',
        url: '/prensa',
    },
}

export default function PaginaPrensa() {
    return (
        <>
            {/* HERO con imagen de fondo difuminada */}
            <section className="relative bg-oscuro text-white pt-40 pb-24 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-linear-to-br from-oscuro/95 via-industrial/80 to-oscuro/95 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&q=80"
                        alt=""
                        className="w-full h-full object-cover blur-[2px] scale-105"
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto">
                    <span className="text-fundido font-semibold tracking-[0.2em] text-sm">
                        PRENSA
                    </span>
                    <h1 className="font-display text-5xl md:text-6xl font-extrabold mt-4">
                        Sala de prensa
                    </h1>
                    <p className="text-white/70 text-lg mt-6 max-w-2xl">
                        Comunicados oficiales, contacto para periodistas y material
                        institucional de MetalCorp.
                    </p>
                </div>
            </section>

            {/* LISTADO de comunicados */}
            <section className="py-24 px-6 bg-humo">
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-display text-3xl font-bold text-oscuro mb-12">
                        Últimos comunicados
                    </h2>

                    <div className="space-y-6">
                        {comunicados.map((c) => (
                            <Link
                                key={c.slug}
                                href={`/prensa/${c.slug}`}
                                className="block bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition border-l-4 border-fundido group"
                            >
                                <div className="flex flex-wrap items-center gap-4 mb-4">
                                    <span className="text-xs uppercase tracking-widest text-fundido font-semibold">
                                        {c.categoria}
                                    </span>
                                    <span className="text-xs text-acero/50">{c.fecha}</span>
                                </div>
                                <h3 className="font-display font-bold text-oscuro text-xl md:text-2xl mb-3 group-hover:text-fundido transition">
                                    {c.titulo}
                                </h3>
                                <p className="text-acero/70 mb-4">{c.resumen}</p>
                                <span className="text-fundido font-semibold text-sm">
                                    Leer más →
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA para periodistas */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-display text-3xl font-bold text-oscuro mb-6">
                        ¿Sos periodista?
                    </h2>
                    <p className="text-acero/70 text-lg mb-10">
                        Para consultas, entrevistas o material institucional (logos, fotos
                        de planta, biografías de directivos), contactá a nuestro equipo de
                        comunicación.
                    </p>
                    <Link
                        href="/contacto"
                        className="inline-block bg-fundido hover:bg-[#cf6a12] text-white px-8 py-4 rounded font-semibold transition"
                    >
                        Contactar a comunicación
                    </Link>
                    <p className="text-sm text-acero/50 mt-6">
                        O escribinos a {siteConfig.contacto.email}
                    </p>
                </div>
            </section>
        </>
    )
}