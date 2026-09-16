export type Producto = {
    slug: string
    nombre: string
    simbolo: string
    categoria: 'acero' | 'aluminio' | 'cobre' | 'aleaciones'
    descripcion: string
    descripcionLarga: string
    especificaciones: { etiqueta: string; valor: string }[]
    aplicaciones: string[]
}

export const productos: Producto[] = [
    {
        slug: 'acero-estructural',
        nombre: 'Acero Estructural',
        simbolo: 'Fe',
        categoria: 'acero',
        descripcion:
            'Perfiles, planchas y bobinas de alta resistencia para construcción e infraestructura.',
        descripcionLarga:
            'Aceros estructurales laminados en caliente, diseñados para soportar cargas críticas en puentes, edificios industriales y obras de infraestructura. Producción bajo normas ASTM y EN con trazabilidad completa.',
        especificaciones: [
            { etiqueta: 'Resistencia', valor: 'hasta 690 MPa' },
            { etiqueta: 'Norma', valor: 'ASTM A572 / EN 10025' },
            { etiqueta: 'Formatos', valor: 'Perfiles, planchas, bobinas' },
        ],
        aplicaciones: [
            'Puentes',
            'Edificios industriales',
            'Torres',
            'Estructuras offshore',
        ],
    },
    {
        slug: 'aluminio-aeroespacial',
        nombre: 'Aluminio Aeroespacial',
        simbolo: 'Al',
        categoria: 'aluminio',
        descripcion:
            'Aleaciones 7075 y 2024 para componentes de alta exigencia y bajo peso.',
        descripcionLarga:
            'Aleaciones de aluminio de alta resistencia específica, utilizadas en fuselajes, alas y componentes estructurales de aeronaves. Tratamientos térmicos T6 y T651 disponibles.',
        especificaciones: [
            { etiqueta: 'Serie', valor: '7075-T6 / 2024-T351' },
            { etiqueta: 'Densidad', valor: '2.81 g/cm³' },
            { etiqueta: 'Norma', valor: 'AMS 4027 / AMS 4037' },
        ],
        aplicaciones: ['Fuselajes', 'Alas', 'Componentes de motor', 'Drones'],
    },
    {
        slug: 'cobre-electrolitico',
        nombre: 'Cobre Electrolítico',
        simbolo: 'Cu',
        categoria: 'cobre',
        descripcion:
            'Cátodos 99.99% y alambres para conductores eléctricos y electrónica.',
        descripcionLarga:
            'Cobre electrolítico de alta pureza (LME Grado A) producido mediante refinación electrolítica. Conductividad superior al 101% IACS, ideal para aplicaciones eléctricas de precisión.',
        especificaciones: [
            { etiqueta: 'Pureza', valor: '99.99%' },
            { etiqueta: 'Conductividad', valor: '101% IACS' },
            { etiqueta: 'Norma', valor: 'ASTM B115' },
        ],
        aplicaciones: ['Cables eléctricos', 'Motores', 'Electrónica', 'Turbinas'],
    },
    {
        slug: 'superaleaciones-niquel',
        nombre: 'Superaleaciones de Níquel',
        simbolo: 'Ni',
        categoria: 'aleaciones',
        descripcion:
            'Inconel y Hastelloy para turbinas, petróleo y procesos químicos extremos.',
        descripcionLarga:
            'Superaleaciones base níquel con excelente resistencia a alta temperatura, corrosión y creep. Utilizadas en las condiciones más extremas de la industria aeroespacial y petroquímica.',
        especificaciones: [
            { etiqueta: 'Temperatura de servicio', valor: 'hasta 1100°C' },
            { etiqueta: 'Norma', valor: 'AMS 5662 / ASTM B637' },
            { etiqueta: 'Formatos', valor: 'Barras, forja, polvo' },
        ],
        aplicaciones: [
            'Turbinas de gas',
            'Reactores químicos',
            'Válvulas',
            'Intercambiadores',
        ],
    },
]

export type Industria = {
    slug: string
    nombre: string
    icono: 'Car' | 'Building2' | 'Zap' | 'Plane' | 'Pickaxe' | 'Factory'
    descripcion: string
}

export const industrias: Industria[] = [
    {
        slug: 'automotriz',
        nombre: 'Automotriz',
        icono: 'Car',
        descripcion: 'Chasis, motores y componentes de precisión.',
    },
    {
        slug: 'construccion',
        nombre: 'Construcción',
        icono: 'Building2',
        descripcion: 'Estructuras, puentes y edificación.',
    },
    {
        slug: 'energia',
        nombre: 'Energía',
        icono: 'Zap',
        descripcion: 'Turbinas, ductos y transmisión.',
    },
    {
        slug: 'aeroespacial',
        nombre: 'Aeroespacial',
        icono: 'Plane',
        descripcion: 'Fuselajes, alas y motores.',
    },
    {
        slug: 'mineria',
        nombre: 'Minería',
        icono: 'Pickaxe',
        descripcion: 'Equipos de extracción y molienda.',
    },
    {
        slug: 'manufactura',
        nombre: 'Manufactura',
        icono: 'Factory',
        descripcion: 'Bienes de capital e industrial.',
    },
]

export const estadisticas = [
    { valor: '50+', etiqueta: 'Años de experiencia' },
    { valor: '28', etiqueta: 'Países' },
    { valor: '12M', etiqueta: 'Toneladas anuales' },
    { valor: '45K', etiqueta: 'Empleados' },
]

export type Comunicado = {
    slug: string
    categoria: string
    fecha: string
    titulo: string
    resumen: string
    contenido: string[]
}

export const comunicados: Comunicado[] = [
    {
        slug: 'inversion-acero-verde-2026',
        categoria: 'Inversiones',
        fecha: '15 de septiembre, 2026',
        titulo: 'MetalCorp anuncia inversión de USD 500 millones en acero verde',
        resumen:
            'La compañía construirá una nueva planta con tecnología de reducción directa por hidrógeno en el sur de Brasil.',
        contenido: [
            'MetalCorp anunció hoy una inversión de USD 500 millones para la construcción de una nueva planta siderúrgica en el estado de Rio Grande do Sul, Brasil. La instalación utilizará tecnología de reducción directa por hidrógeno (DRI), lo que permitirá reducir las emisiones de CO₂ en un 85% respecto a los métodos tradicionales de producción de acero.',
            '"Esta inversión marca un hito en nuestra estrategia de descarbonización", declaró el CEO de MetalCorp. "El acero verde no es una promesa a futuro, es una realidad que ya estamos construyendo."',
            'La planta tendrá una capacidad de producción de 2,5 millones de toneladas anuales y se espera que entre en operación en el primer trimestre de 2029. Generará más de 3.000 empleos directos durante la fase de construcción y 800 permanentes una vez operativa.',
            'El proyecto cuenta con el respaldo del Banco Nacional de Desarrollo de Brasil (BNDES) y de un consorcio de bancos internacionales comprometidos con la financiación de proyectos sustentables.',
        ],
    },
    {
        slug: 'resultados-segundo-trimestre-2026',
        categoria: 'Financiero',
        fecha: '2 de agosto, 2026',
        titulo: 'Resultados del segundo trimestre 2026',
        resumen:
            'Ingresos consolidados alcanzaron USD 3.400 millones, un 8% más que el mismo período del año anterior.',
        contenido: [
            'MetalCorp presentó hoy sus resultados correspondientes al segundo trimestre de 2026. Los ingresos consolidados alcanzaron los USD 3.400 millones, lo que representa un crecimiento del 8% respecto al mismo período de 2025.',
            'El EBITDA ajustado fue de USD 580 millones, con un margen del 17%, en línea con las proyecciones de la compañía. El segmento de acero plano lideró el crecimiento con un aumento del 12% en volumen despachado.',
            'Durante el trimestre, la compañía completó la adquisición de una planta de extrusión de aluminio en México, ampliando su presencia en el mercado norteamericano.',
            '"Los resultados reflejan la solidez de nuestro modelo integrado y la resiliencia de la demanda en los sectores que servimos", comentó el Director Financiero. "Mantenemos nuestra guía de crecimiento para el año completo."',
        ],
    },
    {
        slug: 'certificacion-responsiblesteel-2026',
        categoria: 'Sustentabilidad',
        fecha: '20 de julio, 2026',
        titulo: 'Nueva certificación ResponsibleSteel™ para tres plantas',
        resumen:
            'Las plantas de Buenos Aires, San Pablo y Monterrey obtuvieron la certificación internacional de acero responsable.',
        contenido: [
            'Las plantas de MetalCorp ubicadas en Buenos Aires (Argentina), San Pablo (Brasil) y Monterrey (México) obtuvieron la certificación ResponsibleSteel™, el estándar internacional más exigente en materia de producción responsable de acero.',
            'La certificación evalúa 12 principios que abarcan gobernanza empresarial, derechos laborales, relaciones comunitarias, gestión ambiental y cambio climático. Cada planta fue auditada de forma independiente durante un período de seis meses.',
            '"Esta certificación es el resultado de años de trabajo en materia de sustentabilidad", afirmó la Directora de Sustentabilidad. "No es un punto de llegada, sino un compromiso continuo con la mejora."',
            'Con estas tres nuevas certificaciones, MetalCorp alcanza un total de siete plantas certificadas a nivel global, cubriendo el 60% de su capacidad productiva.',
        ],
    },
]