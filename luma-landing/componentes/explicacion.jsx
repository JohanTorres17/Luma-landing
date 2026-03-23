const pasos = [
    {
        num: '01',
        title: 'Nos cuentas tu visión',
        desc: 'Agendamos una llamada de 30 minutos para entender tu negocio, tus clientes y qué quieres lograr con tu presencia digital.',
        icon: '💬',
    },
    {
        num: '02',
        title: 'Diseñamos la propuesta',
        desc: 'En 48 horas tienes una propuesta detallada: estructura del sitio, tiempos de entrega y precio fijo sin sorpresas.',
        icon: '📐',
    },
    {
        num: '03',
        title: 'Construimos y refinamos',
        desc: 'Desarrollamos tu proyecto con revisiones continuas. Tú apruebas cada etapa antes de avanzar.',
        icon: '⚙️',
    },
    {
        num: '04',
        title: 'Lanzamos y te acompañamos',
        desc: 'Publicamos tu sitio, te entregamos accesos y te damos 30 días de soporte para ajustes post-lanzamiento.',
        icon: '🚀',
    },
]

const servicios = [
    { name: 'Sitios Web', desc: 'Desde portafolio hasta e-commerce', desde: '$800 USD' },
    { name: 'Landing Pages', desc: 'Optimizadas para conversión', desde: '$400 USD' },
    { name: 'Aplicaciones Web', desc: 'Dashboards y herramientas internas', desde: '$1,500 USD' },
]

export default function Explicacion() {
    return (
        <section id="como-funciona" style={{ padding: '96px 0', background: '#F5F7FA' }}>
            <div className="container">

                {/* Header */}
                <div className="row justify-content-center mb-5">
                    <div className="col-12 col-md-8 text-center">
                        <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.2em', color: '#2563EB', display: 'block', marginBottom: 12 }}>
                            CÓMO FUNCIONA
                        </span>
                        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: '#0D1B2A', lineHeight: 1.1, marginBottom: 16 }}>
                            De tu idea a tu sitio<br /><em style={{ color: '#2563EB' }}>en 4 pasos simples</em>
                        </h2>
                        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', color: '#6B7A8D', fontWeight: 300, lineHeight: 1.7 }}>
                            Un proceso claro y transparente donde tú siempre sabes en qué etapa está tu proyecto.
                        </p>
                    </div>
                </div>

                {/* Pasos — 4 columnas Bootstrap */}
                <div className="row g-4 mb-5">
                    {pasos.map((p, i) => (
                        <div key={i} className="col-12 col-sm-6 col-lg-3">
                            <div style={{ position: 'relative', height: '100%' }}>
                                {/* Connector line */}
                                {i < pasos.length - 1 && (
                                    <div className="d-none d-lg-block" style={{
                                        position: 'absolute', top: 28, left: '100%',
                                        width: '100%', height: 1,
                                        background: 'linear-gradient(to right, #DDE3EC, transparent)',
                                        zIndex: 0,
                                    }} />
                                )}
                                <div style={{ background: '#fff', borderRadius: 12, padding: '28px 24px', border: '1px solid #EEF2F7', height: '100%', position: 'relative', zIndex: 1 }}>
                                    <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.7rem', color: '#2563EB', fontWeight: 500, marginBottom: 16 }}>{p.num}</div>
                                    <div style={{ fontSize: '1.8rem', marginBottom: 16 }}>{p.icon}</div>
                                    <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.15rem', fontWeight: 600, color: '#0D1B2A', marginBottom: 8 }}>{p.title}</div>
                                    <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.83rem', color: '#6B7A8D', lineHeight: 1.6, fontWeight: 300 }}>{p.desc}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Servicios — 3 columnas Bootstrap */}
                <div className="row g-3">
                    <div className="col-12 mb-3">
                        <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 600, color: '#0D1B2A', textAlign: 'center' }}>
                            Nuestros servicios
                        </div>
                    </div>
                    {servicios.map((s, i) => (
                        <div key={i} className="col-12 col-md-4">
                            <div style={{
                                background: '#fff', borderRadius: 12, padding: '28px',
                                border: '1px solid #EEF2F7',
                                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                                transition: 'border-color 0.2s',
                            }}
                                onMouseEnter={e => e.currentTarget.style.borderColor = '#2563EB'}
                                onMouseLeave={e => e.currentTarget.style.borderColor = '#EEF2F7'}
                            >
                                <div>
                                    <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', fontWeight: 600, color: '#0D1B2A', marginBottom: 4 }}>{s.name}</div>
                                    <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem', color: '#6B7A8D', fontWeight: 300 }}>{s.desc}</div>
                                </div>
                                <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: 16 }}>
                                    <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', color: '#8A97A8', marginBottom: 2 }}>DESDE</div>
                                    <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', fontWeight: 700, color: '#2563EB' }}>{s.desde}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}