import Link from 'next/link'
import { siteConfig } from '@/lib/site'

const columnas = [
    {
        titulo: 'Empresa',
        enlaces: [
            { href: '/nosotros', label: 'Nosotros' },
            { href: '/productos', label: 'Productos' },
            { href: '/industrias', label: 'Industrias' },
            { href: '/contacto', label: 'Contacto' },
        ],
    },
    {
        titulo: 'Recursos',
        enlaces: [
            { href: '/productos', label: 'Catálogo' },
            { href: '/contacto', label: 'Cotizaciones' },
            { href: '/proveedores', label: 'Proveedores' },
            { href: '/prensa', label: 'Prensa' },
        ],
    },
]

export function Footer() {
    return (
        <footer className="bg-oscuro text-white/60 mt-auto">
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                <div className="lg:col-span-2">
                    <div className="font-display font-extrabold tracking-widest text-white text-xl mb-4">
                        METAL<span className="text-fundido">CORP</span>
                    </div>
                    <p className="text-sm max-w-md leading-relaxed">
                        Líder global en soluciones metalúrgicas integradas. Forjando el
                        futuro desde 1974.
                    </p>
                </div>

                {columnas.map((col) => (
                    <div key={col.titulo}>
                        <h5 className="text-white font-display font-semibold uppercase text-xs tracking-widest mb-4">
                            {col.titulo}
                        </h5>
                        <ul className="space-y-2 text-sm">
                            {col.enlaces.map((enlace) => (
                                <li key={enlace.href + enlace.label}>
                                    <Link
                                        href={enlace.href}
                                        className="hover:text-fundido transition"
                                    >
                                        {enlace.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
                    <p>
                        © {new Date().getFullYear()} {siteConfig.nombre}. Todos los derechos
                        reservados.
                    </p>
                    <p>
                        {siteConfig.contacto.direccion} · {siteConfig.contacto.email}
                    </p>
                </div>
            </div>
        </footer>
    )
}