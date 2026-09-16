import type { Metadata } from 'next'
import { industrias } from '@/lib/data'
import { Car, Building2, Zap, Plane, Pickaxe, Factory } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Industrias',
    description:
        'Sectores industriales que servimos: automotriz, construcción, energía, aeroespacial, minería y manufactura.',
    alternates: { canonical: '/industrias' },
    openGraph: {
        title: 'Industrias | MetalCorp',
        description:
            'Sectores industriales que servimos: automotriz, construcción, energía, aeroespacial, minería y manufactura.',
        url: '/industrias',
    },
}

const mapaIconos = { Car, Building2, Zap, Plane, Pickaxe, Factory }

export default function PaginaIndustrias() {
    return (
        <>
            {/* HERO con imagen de fondo difuminada */}
            <section className="relative bg-oscuro text-white pt-40 pb-24 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-linear-to-br from-oscuro/95 via-industrial/80 to-oscuro/95 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&q=80"
                        alt=""
                        className="w-full h-full object-cover blur-[2px] scale-105"
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto">
                    <span className="text-fundido font-semibold tracking-[0.2em] text-sm">
                        INDUSTRIAS
                    </span>
                    <h1 className="font-display text-5xl md:text-6xl font-extrabold mt-4">
                        Sectores que servimos
                    </h1>
                    <p className="text-white/70 text-lg mt-6 max-w-2xl">
                        Nuestros materiales están presentes en los sectores más estratégicos
                        de la economía global.
                    </p>
                </div>
            </section>

            {/* GRILLA de industrias */}
            <section className="py-24 px-6 bg-humo">
                <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industrias.map((i) => {
                        const Icono = mapaIconos[i.icono]
                        return (
                            <div
                                key={i.slug}
                                className="group p-8 bg-white rounded-lg border-t-4 border-fundido shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
                            >
                                <Icono className="w-10 h-10 text-fundido mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="font-display font-bold text-oscuro text-xl mb-2">
                                    {i.nombre}
                                </h3>
                                <p className="text-acero/70 text-sm">{i.descripcion}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}