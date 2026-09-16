import { estadisticas } from '@/lib/data'

export function Estadisticas() {
    return (
        <section className="bg-oscuro py-20 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                {estadisticas.map((e) => (
                    <div key={e.etiqueta} className="border-l-4 border-fundido pl-5">
                        <div className="text-fundido font-display font-extrabold text-4xl md:text-5xl">
                            {e.valor}
                        </div>
                        <div className="text-white/70 text-sm uppercase tracking-wider mt-2">
                            {e.etiqueta}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}