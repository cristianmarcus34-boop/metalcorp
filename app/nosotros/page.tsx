import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Nosotros',
    description:
        'Conocé la historia, misión y valores de MetalCorp, líder global en soluciones metalúrgicas integradas desde 1974.',
    alternates: { canonical: '/nosotros' },
    openGraph: {
        title: 'Nosotros | MetalCorp',
        description:
            'Historia, misión y valores de una multinacional metalúrgica.',
        url: '/nosotros',
    },
}

const valores = [
    {
        titulo: 'Seguridad',
        descripcion: 'Cero accidentes como prioridad absoluta.',
    },
    {
        titulo: 'Integridad',
        descripcion: 'Transparencia con clientes, empleados y accionistas.',
    },
    {
        titulo: 'Innovación',
        descripcion: 'Investigación y desarrollo continuo en aleaciones y procesos.',
    },
    {
        titulo: 'Sustentabilidad',
        descripcion: 'Acero verde y economía circular.',
    },
]

const hitos = [
    {
        anio: '1974',
        titulo: 'Fundación',
        descripcion: 'Nace como una pequeña fundición en Buenos Aires.',
    },
    {
        anio: '1992',
        titulo: 'Expansión regional',
        descripcion: 'Apertura de plantas en Brasil y Chile.',
    },
    {
        anio: '2008',
        titulo: 'Presencia global',
        descripcion: 'Consolidación en Europa y Asia-Pacífico.',
    },
    {
        anio: '2024',
        titulo: 'Acero verde',
        descripcion: 'Primer lote producido con hidrógeno verde.',
    },
]

export default function PaginaNosotros() {
    return (
        <>
            {/* HERO con imagen de fondo difuminada */}
            <section className="relative bg-oscuro text-white pt-40 pb-24 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-linear-to-br from-oscuro/95 via-industrial/80 to-oscuro/95 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920&q=80"
                        alt=""
                        className="w-full h-full object-cover blur-[2px] scale-105"
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto">
                    <span className="text-fundido font-semibold tracking-[0.2em] text-sm">
                        NOSOTROS
                    </span>
                    <h1 className="font-display text-5xl md:text-6xl font-extrabold mt-4 max-w-3xl">
                        Medio siglo forjando industria
                    </h1>
                    <p className="text-white/70 text-lg mt-6 max-w-2xl">
                        Desde 1974 construimos la cadena metalúrgica más integrada de
                        América Latina, con presencia en 28 países.
                    </p>
                </div>
            </section>

            {/* HISTORIA */}
            <section className="py-24 px-6 bg-humo">
                <div className="max-w-4xl mx-auto text-lg leading-relaxed text-acero/80 space-y-6">
                    <p>
                        Fundada en 1974, MetalCorp nació como una pequeña fundición en el
                        cordón industrial de Buenos Aires. Hoy operamos en 28 países, con
                        plantas productivas en tres continentes y más de 45.000 empleados.
                    </p>
                    <p>
                        Nuestra integración vertical —desde la extracción de mineral hasta
                        la fabricación de componentes de precisión— nos permite garantizar
                        calidad, trazabilidad y cumplimiento en cada eslabón de la cadena.
                    </p>
                </div>
            </section>

            {/* HITOS HISTÓRICOS */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <span className="text-fundido font-semibold tracking-[0.2em] text-sm">
                        TRAYECTORIA
                    </span>
                    <h2 className="font-display text-4xl font-extrabold text-oscuro mt-3 mb-12">
                        Hitos que nos definen
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {hitos.map((h) => (
                            <div
                                key={h.anio}
                                className="p-8 bg-humo rounded-lg border-l-4 border-fundido"
                            >
                                <div className="font-display font-extrabold text-4xl text-fundido mb-3">
                                    {h.anio}
                                </div>
                                <h3 className="font-display font-bold text-oscuro text-lg mb-2">
                                    {h.titulo}
                                </h3>
                                <p className="text-acero/70 text-sm">{h.descripcion}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* VALORES */}
            <section className="py-24 px-6 bg-humo">
                <div className="max-w-7xl mx-auto">
                    <span className="text-fundido font-semibold tracking-[0.2em] text-sm">
                        VALORES
                    </span>
                    <h2 className="font-display text-4xl font-extrabold text-oscuro mt-3 mb-12">
                        Nuestros valores
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {valores.map((v) => (
                            <div
                                key={v.titulo}
                                className="p-8 border-t-4 border-fundido bg-white rounded-b-lg shadow-sm hover:shadow-md transition"
                            >
                                <h3 className="font-display font-bold text-oscuro text-xl mb-3">
                                    {v.titulo}
                                </h3>
                                <p className="text-acero/70 text-sm">{v.descripcion}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}