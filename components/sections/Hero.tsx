import Link from 'next/link'

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center px-6 pt-24 overflow-hidden">
            {/* Fondo con video */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                {/* Overlay para garantizar contraste del texto */}
                <div className="absolute inset-0 bg-linear-to-br from-oscuro/95 via-industrial/85 to-oscuro/95 z-10" />

                {/* Video de fondo */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    poster="/images/hero-poster.jpg"
                    aria-hidden="true"
                    className="w-full h-full object-cover"
                >
                    <source src="/videos/fondohome.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="max-w-4xl mx-auto w-full">
                <span className="inline-block text-fundido font-semibold tracking-[0.3em] text-sm mb-5">
                    DESDE 1974
                </span>
                <h1 className="font-display font-extrabold text-white text-5xl md:text-7xl leading-[1.05] mb-6">
                    Forjando el futuro{' '}
                    <span className="text-fundido">industrial</span> del mundo
                </h1>
                <p className="text-white/80 text-lg md:text-xl max-w-2xl mb-10">
                    Más de 50 años produciendo acero, aluminio y aleaciones de alta
                    performance para las industrias más exigentes del planeta.
                </p>
                <div className="flex flex-wrap gap-4">
                    <Link
                        href="/productos"
                        className="bg-fundido hover:bg-[#cf6a12] text-white px-8 py-4 rounded font-semibold transition"
                    >
                        Ver Productos
                    </Link>
                    <Link
                        href="/nosotros"
                        className="border-2 border-white/80 hover:bg-white hover:text-oscuro text-white px-8 py-4 rounded font-semibold transition"
                    >
                        Conocer la Empresa
                    </Link>
                </div>
            </div>
        </section>
    )
}