'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navegacion = [
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/productos', label: 'Productos' },
    { href: '/industrias', label: 'Industrias' },
    { href: '/contacto', label: 'Contacto' },
]

export function Header() {
    const [conScroll, setConScroll] = useState(false)
    const [menuAbierto, setMenuAbierto] = useState(false)

    useEffect(() => {
        const alScrollear = () => setConScroll(window.scrollY > 40)
        alScrollear()
        window.addEventListener('scroll', alScrollear, { passive: true })
        return () => window.removeEventListener('scroll', alScrollear)
    }, [])

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                conScroll
                    ? 'bg-[#0F1A24]/95 backdrop-blur-md border-b-2 border-[#E67E22] shadow-lg'
                    : 'bg-transparent'
            )}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link
                    href="/"
                    className="font-display font-extrabold tracking-widest text-white text-xl"
                >
                    METAL<span className="text-[#E67E22]">CORP</span>
                </Link>

                <nav className="hidden md:flex gap-8">
                    {navegacion.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-white/90 hover:text-[#E67E22] text-sm font-medium transition"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <Link
                    href="/contacto"
                    className="hidden md:inline-block bg-[#E67E22] hover:bg-[#cf6a12] text-white px-5 py-2 rounded font-semibold text-sm transition"
                >
                    Cotizar
                </Link>

                <button
                    type="button"
                    onClick={() => setMenuAbierto(!menuAbierto)}
                    aria-label="Abrir menú"
                    className="md:hidden text-white"
                >
                    {menuAbierto ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {menuAbierto && (
                <div className="md:hidden bg-[#0F1A24] px-6 pb-6 space-y-3">
                    {navegacion.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setMenuAbierto(false)}
                            className="block text-white py-2 border-b border-white/10"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    )
}