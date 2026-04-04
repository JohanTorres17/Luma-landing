import { useState } from 'react'

const beneficios = [
    {
        icon: '🎯', title: 'Diseño que convierte',
        desc: 'Cada decisión visual está pensada para guiar al usuario hacia la acción. No solo se ve bien — funciona.',
        gradient: 'linear-gradient(135deg, #2563EB, #6366F1)',
    },
    {
        icon: '⚡', title: 'Velocidad óptima',
        desc: 'Sitios con carga menor a 1 segundo. Google te premia, los usuarios se quedan.',
        gradient: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
    },
    {
        icon: '📱', title: 'Responsive perfecto',
        desc: 'Funciona impecable en móvil, tablet y desktop. Más del 70% de tu tráfico viene de celular.',
        gradient: 'linear-gradient(135deg, #3B82F6, #2563EB)',
    },
    {
        icon: '🔍', title: 'SEO desde el inicio',
        desc: 'Estructura semántica y optimización técnica incluida. Aparece donde tus clientes buscan.',
        gradient: 'linear-gradient(135deg, #2563EB, #3B82F6)',
    },
    {
        icon: '🔒', title: 'Seguro y confiable',
        desc: 'HTTPS, buenas prácticas de seguridad y hosting recomendado. Tu negocio protegido.',
        gradient: 'linear-gradient(135deg, #6366F1, #2563EB)',
    },
    {
        icon: '🤝', title: 'Soporte post-lanzamiento',
        desc: '30 días de ajustes incluidos. No te dejamos solos después de entregar.',
        gradient: 'linear-gradient(135deg, #8B5CF6, #6366F1)',
    },
]

export default function Beneficios() {
    const [hovered, setHovered] = useState(null)

    return (
        <section id="beneficios" style={{
            padding: '100px 0',
            background: '#fff',
            position: 'relative',
        }}>
            {/* Subtle bg pattern */}
            <div style={{
                position: 'absolute', inset: 0, opacity: 0.3, pointerEvents: 'none',
                backgroundImage: 'radial-gradient(circle at 1px 1px, #E2E8F0 1px, transparent 0)',
                backgroundSize: '40px 40px',
            }} />

            <div className="container position-relative">
                {/* Header */}
                <div className="row justify-content-center mb-5">
                    <div className="col-12 col-md-8 text-center">
                        <div className="section-label">BENEFICIOS</div>
                        <h2 className="section-title" style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            marginBottom: 16,
                        }}>
                            Todo lo que incluye<br /><em>cada proyecto</em>
                        </h2>
                        <p className="section-subtitle">
                            No cobramos extras por lo que debería ser estándar. Esto viene incluido en todos nuestros proyectos.
                        </p>
                    </div>
                </div>

                {/* Grid */}
                <div className="row g-4">
                    {beneficios.map((b, i) => (
                        <div key={i} className="col-12 col-sm-6 col-lg-4">
                            <div
                                style={{
                                    padding: '36px 30px',
                                    borderRadius: '16px',
                                    border: `1px solid ${hovered === i ? 'rgba(37,99,235,0.2)' : '#F1F5F9'}`,
                                    background: hovered === i
                                        ? 'linear-gradient(165deg, rgba(37,99,235,0.03) 0%, rgba(99,102,241,0.02) 100%)'
                                        : '#FAFBFD',
                                    height: '100%',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    cursor: 'default',
                                    transform: hovered === i ? 'translateY(-6px)' : 'translateY(0)',
                                    boxShadow: hovered === i
                                        ? '0 16px 48px rgba(37,99,235,0.1)'
                                        : '0 1px 3px rgba(0,0,0,0.02)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}
                                onMouseEnter={() => setHovered(i)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                {/* Accent line */}
                                <div style={{
                                    position: 'absolute', top: 0, left: 0, right: 0,
                                    height: 3, background: b.gradient,
                                    opacity: hovered === i ? 1 : 0,
                                    transition: 'opacity 0.3s',
                                }} />

                                <div style={{
                                    width: 52, height: 52, borderRadius: '14px',
                                    background: hovered === i
                                        ? 'linear-gradient(135deg, rgba(37,99,235,0.1) 0%, rgba(99,102,241,0.1) 100%)'
                                        : '#F1F5F9',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '1.5rem', marginBottom: 20,
                                    transition: 'all 0.3s',
                                }}>
                                    {b.icon}
                                </div>
                                <div style={{
                                    fontFamily: 'Cormorant Garamond, serif',
                                    fontSize: '1.2rem', fontWeight: 600,
                                    color: '#0B1120', marginBottom: 10,
                                }}>{b.title}</div>
                                <div style={{
                                    fontFamily: 'DM Sans, sans-serif',
                                    fontSize: '0.85rem', color: '#64748B',
                                    lineHeight: 1.65, fontWeight: 300,
                                }}>{b.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}