# MetalCorp — Web Institucional

Sitio institucional para una multinacional metalúrgica ficticia. Proyecto de portfolio desarrollado con **Next.js 16**, **TypeScript** y **Tailwind CSS v4**.

🔗 **Demo en vivo:** [metalcorp-gamma.vercel.app](https://metalcorp-gamma.vercel.app)

![Home de MetalCorp](./public/og/home.jpg)

---

## 🎯 Sobre el proyecto

Web corporativa para una empresa metalúrgica con presencia global. Incluye:

- **Home** con hero, estadísticas, catálogo de productos e industrias
- **Catálogo de productos** con páginas de detalle dinámicas (`/productos/[slug]`)
- **Páginas institucionales**: Nosotros, Industrias, Proveedores, Prensa, Contacto
- **Sala de prensa** con comunicados y páginas de detalle (`/prensa/[slug]`)
- **SEO completo**: metadatos por página, JSON-LD, sitemap y robots automáticos
- **Diseño responsive** con paleta industrial custom

---

## 🛠️ Stack técnico

| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 16 (App Router) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS v4 |
| Íconos | lucide-react |
| Fuentes | Inter + Montserrat (`next/font`) |
| Deploy | Vercel |

---

## 🏗️ Estructura del proyecto

```
metalcorp/
├── app/
│   ├── page.tsx                    # Home
│   ├── layout.tsx                  # Layout raíz con metadatos SEO
│   ├── globals.css                 # Paleta industrial + Tailwind v4
│   ├── nosotros/                   # Página institucional
│   ├── productos/
│   │   ├── page.tsx                # Catálogo
│   │   └── [slug]/page.tsx         # Detalle dinámico
│   ├── industrias/                 # Sectores que servimos
│   ├── proveedores/                # Info para proveedores
│   ├── prensa/
│   │   ├── page.tsx                # Sala de prensa
│   │   └── [slug]/page.tsx         # Detalle de comunicado
│   ├── contacto/                   # Formulario + info
│   ├── robots.ts                   # robots.txt automático
│   └── sitemap.ts                  # sitemap.xml automático
├── components/
│   ├── layout/                     # Header, Footer
│   ├── sections/                   # Hero, Estadísticas, Productos...
│   └── seo/                        # JSON-LD Organization
├── lib/
│   ├── data.ts                     # Datos mock
│   ├── site.ts                     # Configuración central
│   └── utils.ts                    # Utilidad cn()
└── public/
    └── og/                         # Open Graph images
```

---

## 🚀 Correr localmente

```bash
# 1. Clonar
git clone https://github.com/cristianmarcus34-boop/metalcorp.git
cd metalcorp

# 2. Instalar dependencias
npm install

# 3. Variables de entorno
cp .env.example .env.local

# 4. Correr en desarrollo
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

---

## 📌 Decisiones técnicas

- **App Router** para aprovechar Server Components y SEO nativo
- **Datos mock centralizados** en `lib/data.ts`, listos para migrar a Supabase
- **SEO por página** con `generateMetadata` para rutas dinámicas
- **Paleta industrial custom** definida en `globals.css` con `@theme` de Tailwind v4
- **JSON-LD Organization** para rich snippets de Google
- **Sitemap y robots** generados automáticamente por convención de Next.js
- **Hero con imagen difuminada** reutilizado en todas las páginas internas

---

## 📸 Screenshots

_(Agregar capturas después del deploy)_

---

## 🗺️ Roadmap

- [ ] Conectar formulario de contacto a una API Route + Resend
- [ ] Migrar `lib/data.ts` a Supabase
- [ ] Panel de administración con Supabase Auth
- [ ] Multi-idioma (ES / EN / PT) con `next-intl`
- [ ] OG images dinámicas con `next/og`
- [ ] Analytics con Vercel Analytics + Speed Insights

---

## 📄 Licencia

MIT — Proyecto de portfolio, empresa ficticia.

---

## 👤 Autor

**Cristian Marcus**

- GitHub: [@cristianmarcus34-boop](https://github.com/cristianmarcus34-boop)
- Portfolio: [agenciadigitalpowa.com.ar](https://agenciadigitalpowa.com.ar)