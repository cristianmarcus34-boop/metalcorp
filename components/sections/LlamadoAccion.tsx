import Link from 'next/link'

export function LlamadoAccion() {
    return (
        <section className="bg-linear-to-br from-[#1B4F72] to-[#0F1A24] py-24 px-6 text-center">
            <div className="max-w-3xl mx-auto">
                <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-6">
                    ¿Listo para trabajar con nosotros?
                </h2>
                <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
                    Nuestro equipo global está preparado para responder a tus necesidades
                    de suministro metálico.
                </p>
                <Link
                    href="/contacto"
                    className="inline-block bg-fundido hover:bg-[#cf6a12] text-white px-8 py-4 rounded font-semibold transition"
                >
                    Solicitar Cotización
                </Link>
            </div>
        </section>
    )
}