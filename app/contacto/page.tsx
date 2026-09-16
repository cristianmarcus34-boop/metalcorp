import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
    title: 'Contacto',
    description:
        'Contactate con MetalCorp para cotizaciones, consultas técnicas, prensa o proveedores.',
    alternates: { canonical: '/contacto' },
    openGraph: {
        title: 'Contacto | MetalCorp',
        description:
            'Contactate con MetalCorp para cotizaciones, consultas técnicas, prensa o proveedores.',
        url: '/contacto',
    },
}

export default function PaginaContacto() {
    return (
        <>
            {/* HERO con imagen de fondo difuminada */}
            <section className="relative bg-oscuro text-white pt-40 pb-24 px-6 overflow-hidden">
                <div className="absolute inset-0 -z-0">
                    <div className="absolute inset-0 bg-linear-to-br from-oscuro/95 via-industrial/80 to-oscuro/95 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
                        alt=""
                        className="w-full h-full object-cover blur-[2px] scale-105"
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto">
                    <span className="text-fundido font-semibold tracking-[0.2em] text-sm">
                        CONTACTO
                    </span>
                    <h1 className="font-display text-5xl md:text-6xl font-extrabold mt-4">
                        Hablemos
                    </h1>
                    <p className="text-white/70 text-lg mt-6 max-w-2xl">
                        Nuestro equipo global está listo para responder consultas técnicas,
                        comerciales o de prensa.
                    </p>
                </div>
            </section>

            {/* CONTENIDO: info + formulario */}
            <section className="py-24 px-6 bg-humo">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
                    {/* Columna izquierda: info */}
                    <div>
                        <h2 className="font-display text-3xl font-bold text-oscuro mb-6">
                            Información de contacto
                        </h2>
                        <div className="space-y-6 text-acero/80">
                            <div>
                                <div className="text-xs uppercase tracking-widest text-fundido font-semibold mb-1">
                                    Dirección
                                </div>
                                <p>{siteConfig.contacto.direccion}</p>
                            </div>
                            <div>
                                <div className="text-xs uppercase tracking-widest text-fundido font-semibold mb-1">
                                    Teléfono
                                </div>
                                <p>{siteConfig.contacto.telefono}</p>
                            </div>
                            <div>
                                <div className="text-xs uppercase tracking-widest text-fundido font-semibold mb-1">
                                    Email
                                </div>
                                <p>{siteConfig.contacto.email}</p>
                            </div>
                        </div>

                        {/* Bloque extra: horarios */}
                        <div className="mt-10 p-6 bg-white rounded-lg border-l-4 border-fundido">
                            <h3 className="font-display font-bold text-oscuro mb-3">
                                Horario de atención
                            </h3>
                            <p className="text-acero/70 text-sm">
                                Lunes a viernes de 9:00 a 18:00 (GMT-3)
                            </p>
                            <p className="text-acero/70 text-sm mt-1">
                                Respondemos consultas en un plazo máximo de 48 horas hábiles.
                            </p>
                        </div>
                    </div>

                    {/* Columna derecha: formulario */}
                    <form className="bg-white p-8 rounded-lg shadow-sm space-y-5">
                        <div>
                            <label className="block text-sm font-semibold text-oscuro mb-2">
                                Nombre
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full border rounded px-4 py-3 focus:outline-none focus:border-fundido transition"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-oscuro mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                required
                                className="w-full border rounded px-4 py-3 focus:outline-none focus:border-fundido transition"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-oscuro mb-2">
                                Empresa
                            </label>
                            <input
                                type="text"
                                className="w-full border rounded px-4 py-3 focus:outline-none focus:border-fundido transition"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-oscuro mb-2">
                                Motivo de contacto
                            </label>
                            <select className="w-full border rounded px-4 py-3 focus:outline-none border-acero/20 transition bg-white">
                                <option>Consulta comercial</option>
                                <option>Cotización</option>
                                <option>Soporte técnico</option>
                                <option>Prensa</option>
                                <option>Proveedores</option>
                                <option>Otro</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-oscuro mb-2">
                                Mensaje
                            </label>
                            <textarea
                                rows={5}
                                required
                                className="w-full border border-acero/20 rounded px-4 py-3 focus:outline-none transition resize-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-fundido hover:bg-[#cf6a12] text-white py-3 rounded font-semibold transition"
                        >
                            Enviar mensaje
                        </button>
                        <p className="text-xs text-acero/50 text-center">
                            Al enviar aceptás nuestra política de privacidad.
                        </p>
                    </form>
                </div>
            </section>
        </>
    )
}