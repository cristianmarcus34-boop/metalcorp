import { industrias } from '@/lib/data'
import { Car, Building2, Zap, Plane, Pickaxe, Factory } from 'lucide-react'

const mapaIconos = { Car, Building2, Zap, Plane, Pickaxe, Factory }

export function Industrias() {
    return (
        <section className="py-24 px-6 bg-oscuro">
            <div className="max-w-7xl mx-auto">
                <span className="text-fundido font-semibold tracking-[0.2em] text-sm">
                    INDUSTRIAS
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mt-3 mb-14">
                    Sectores que servimos
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {industrias.map((i) => {
                        const Icono = mapaIconos[i.icono]
                        return (
                            <div
                                key={i.slug}
                                className="group p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-fundido hover:border-fundido transition-all cursor-pointer text-center"
                            >
                                <Icono className="w-8 h-8 mx-auto text-fundido group-hover:text-white transition mb-3" />
                                <div className="text-white font-semibold text-sm">
                                    {i.nombre}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}