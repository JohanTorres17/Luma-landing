import { useState } from 'react'

const pasos = [
    {
        num: '01', title: 'Nos cuentas tu visión',
        desc: 'Agendamos una llamada de 30 minutos para entender tu negocio, tus clientes y qué quieres lograr con tu presencia digital.',
        icon: '💬',
    },
    {
        num: '02', title: 'Diseñamos la propuesta',
        desc: 'En 48 horas tienes una propuesta detallada: estructura del sitio, tiempos de entrega y precio fijo sin sorpresas.',
        icon: '📐',
    },
    {
        num: '03', title: 'Construimos y refinamos',
        desc: 'Desarrollamos tu proyecto con revisiones continuas. Tú apruebas cada etapa antes de avanzar.',
        icon: '⚙️',
    },
    {
        num: '04', title: 'Lanzamos y te acompañamos',
        desc: 'Publicamos tu sitio, te entregamos accesos y te damos 30 días de soporte para ajustes post-lanzamiento.',
        icon: '🚀',
    },
]

const servicios = [
    {
        name: 'Sitios Web', desc: 'Desde portafolio hasta e-commerce', desde: '$800 USD',
        gradient: 'linear-gradient(135deg, #2563EB, #6366F1)',
    },
    {
        name: 'Landing Pages', desc: 'Optimizadas para conversión', desde: '$400 USD',
        gradient: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
    },
    {
        name: 'Aplicaciones Web', desc: 'Dashboards y herramientas internas', desde: '$1,500 USD',
        gradient: 'linear-gradient(135deg, #3B82F6, #2563EB)',
    },
]

export default function Explicacion() {
    const [hoveredService, setHoveredService] = useState(null)

    return (
        <section id="como-funciona" style={{
            padding: '100px 0',
            background: 'linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)',
            position: 'relative',
        }}>
            <div className="container">
                {/* Header */}
                <div className="row justify-content-center mb-5">
                    <div className="col-12 col-md-8 text-center">
                        <div className="section-label">CÓMO FUNCIONA</div>
                        <h2 className="section-title" style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            marginBottom: 16,
                        }}>
                            De tu idea a tu sitio<br /><em>en 4 pasos simples</em>
                        </h2>
                        <p className="section-subtitle">
                            Un proceso claro y transparente donde tú siempre sabes en qué etapa está tu proyecto.
                        </p>
                    </div>
                </div>

                {/* Steps */}
                <div className="row g-4 mb-5">
                    {pasos.map((p, i) => (
                        <div key={i} className="col-12 col-sm-6 col-lg-3">
                            <div style={{ position: 'relative', height: '100%' }}>
                                {/* Connector */}
                                {i < pasos.length - 1 && (
                                    <div className="d-none d-lg-block" style={{
                                        position: 'absolute', top: 36, left: '100%',
                                        width: '100%', height: 1,
                                        zIndex: 0,
                                        overflow: 'hidden',
                                    }}>
                                        <div style={{
                                            width: '100%', height: '100%',
                                            background: `repeating-linear-gradient(90deg, #CBD5E1 0px, #CBD5E1 4px, transparent 4px, transparent 10px)`,
                                        }} />
                                    </div>
                                )}
                                <div style={{
                                    background: '#fff',
                                    borderRadius: '16px',
                                    padding: '32px 26px',
                                    border: '1px solid #EEF2F7',
                                    height: '100%',
                                    position: 'relative', zIndex: 1,
                                    transition: 'all 0.3s ease',
                                }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = 'translateY(-4px)'
                                        e.currentTarget.style.boxShadow = '0 12px 36px rgba(0,0,0,0.06)'
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = 'translateY(0)'
                                        e.currentTarget.style.boxShadow = 'none'
                                    }}
                                >
                                    <div style={{
                                        fontFamily: 'DM Mono, monospace',
                                        fontSize: '0.65rem', fontWeight: 500,
                                        background: 'linear-gradient(135deg, #2563EB, #6366F1)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        marginBottom: 16,
                                        letterSpacing: '0.05em',
                                    }}>{p.num}</div>
                                    <div style={{
                                        width: 48, height: 48, borderRadius: '12px',
                                        background: 'linear-gradient(135deg, rgba(37,99,235,0.06) 0%, rgba(99,102,241,0.06) 100%)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '1.5rem', marginBottom: 18,
                                    }}>{p.icon}</div>
                                    <div style={{
                                        fontFamily: 'Cormorant Garamond, serif',
                                        fontSize: '1.15rem', fontWeight: 600,
                                        color: '#0B1120', marginBottom: 10,
                                    }}>{p.title}</div>
                                    <div style={{
                                        fontFamily: 'DM Sans, sans-serif',
                                        fontSize: '0.83rem', color: '#64748B',
                                        lineHeight: 1.65, fontWeight: 300,
                                    }}>{p.desc}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Services */}
                <div className="row g-4 mt-3">
                    <div className="col-12 mb-2">
                        <div className="text-center">
                            <div className="section-label" style={{ justifyContent: 'center' }}>SERVICIOS</div>
                            <div style={{
                                fontFamily: 'Cormorant Garamond, serif',
                                fontSize: '1.6rem', fontWeight: 600,
                                color: '#0B1120',
                            }}>Nuestros servicios</div>
                        </div>
                    </div>
                    {servicios.map((s, i) => (
                        <div key={i} className="col-12 col-md-4">
                            <div
                                style={{
                                    background: '#fff', borderRadius: '16px',
                                    padding: '32px 28px',
                                    border: `1px solid ${hoveredService === i ? 'rgba(37,99,235,0.15)' : '#EEF2F7'}`,
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    transform: hoveredService === i ? 'translateY(-4px)' : 'translateY(0)',
                                    boxShadow: hoveredService === i ? '0 12px 36px rgba(37,99,235,0.08)' : 'none',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    height: '100%',
                                }}
                                onMouseEnter={() => setHoveredService(i)}
                                onMouseLeave={() => setHoveredService(null)}
                            >
                                {/* Top accent */}
                                <div style={{
                                    position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                                    background: s.gradient,
                                    opacity: hoveredService === i ? 1 : 0,
                                    transition: 'opacity 0.3s',
                                }} />

                                <div style={{
                                    fontFamily: 'Cormorant Garamond, serif',
                                    fontSize: '1.3rem', fontWeight: 600,
                                    color: '#0B1120', marginBottom: 6,
                                }}>{s.name}</div>
                                <div style={{
                                    fontFamily: 'DM Sans, sans-serif',
                                    fontSize: '0.83rem', color: '#64748B',
                                    fontWeight: 300, marginBottom: 20,
                                }}>{s.desc}</div>
                                <div style={{
                                    display: 'flex', alignItems: 'baseline', gap: 6,
                                }}>
                                    <span style={{
                                        fontFamily: 'DM Mono, monospace',
                                        fontSize: '0.6rem', color: '#94A3B8',
                                        letterSpacing: '0.1em',
                                    }}>DESDE</span>
                                    <span style={{
                                        fontFamily: 'Cormorant Garamond, serif',
                                        fontSize: '1.4rem', fontWeight: 700,
                                        background: s.gradient,
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}>{s.desde}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}