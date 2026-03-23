import { useState } from 'react'

const beneficios = [
    { icon: '🎯', title: 'Diseño que convierte', desc: 'Cada decisión visual está pensada para guiar al usuario hacia la acción. No solo se ve bien — funciona.' },
    { icon: '⚡', title: 'Velocidad de carga óptima', desc: 'Sitios con carga menor a 1 segundo. Google te premia, los usuarios se quedan.' },
    { icon: '📱', title: 'Responsive perfecto', desc: 'Funciona impecable en móvil, tablet y desktop. Más del 70% de tu tráfico viene de celular.' },
    { icon: '🔍', title: 'SEO desde el inicio', desc: 'Estructura semántica y optimización técnica incluida. Aparece donde tus clientes buscan.' },
    { icon: '🔒', title: 'Seguro y confiable', desc: 'HTTPS, buenas prácticas de seguridad y hosting recomendado. Tu negocio protegido.' },
    { icon: '🤝', title: 'Soporte post-lanzamiento', desc: '30 días de ajustes incluidos. No te dejamos solos después de entregar.' },
]

export default function Beneficios() {
    const [email, setEmail] = useState('')
    const [sent, setSent] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email) setSent(true)
    }

    return (
        <section id="beneficios" style={{ padding: '96px 0', background: '#fff' }}>
            <div className="container">

                {/* Header */}
                <div className="row justify-content-center mb-5">
                    <div className="col-12 col-md-8 text-center">
                        <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.2em', color: '#2563EB', display: 'block', marginBottom: 12 }}>
                            BENEFICIOS
                        </span>
                        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: '#0D1B2A', marginBottom: 16, lineHeight: 1.1 }}>
                            Todo lo que incluye<br /><em style={{ fontStyle: 'italic', color: '#2563EB' }}>cada proyecto</em>
                        </h2>
                        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', color: '#6B7A8D', fontWeight: 300, lineHeight: 1.7 }}>
                            No cobramos extras por lo que debería ser estándar. Esto viene incluido en todos nuestros proyectos.
                        </p>
                    </div>
                </div>

                {/* Grid beneficios — 3 columnas Bootstrap */}
                <div className="row g-4 mb-5">
                    {beneficios.map((b, i) => (
                        <div key={i} className="col-12 col-sm-6 col-lg-4">
                            <div
                                style={{
                                    padding: '32px 28px', borderRadius: 12,
                                    border: '1px solid #EEF2F7',
                                    background: '#FAFBFC',
                                    height: '100%',
                                    transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
                                    cursor: 'default',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.borderColor = '#2563EB'
                                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(37,99,235,0.08)'
                                    e.currentTarget.style.transform = 'translateY(-4px)'
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.borderColor = '#EEF2F7'
                                    e.currentTarget.style.boxShadow = 'none'
                                    e.currentTarget.style.transform = 'translateY(0)'
                                }}
                            >
                                <div style={{ fontSize: '1.8rem', marginBottom: 16 }}>{b.icon}</div>
                                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', fontWeight: 600, color: '#0D1B2A', marginBottom: 8 }}>{b.title}</div>
                                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: '#6B7A8D', lineHeight: 1.6, fontWeight: 300 }}>{b.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA dejar correo */}
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8">
                        <div style={{
                            background: '#F5F7FA', borderRadius: 16,
                            padding: '40px 48px', textAlign: 'center',
                            border: '1px solid #EEF2F7',
                        }}>
                            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 600, color: '#0D1B2A', marginBottom: 8 }}>
                                ¿Quieres recibir casos de éxito y recursos gratuitos?
                            </div>
                            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', color: '#6B7A8D', marginBottom: 24, fontWeight: 300 }}>
                                Deja tu correo y te enviamos ejemplos reales de proyectos y cómo logramos los resultados.
                            </p>
                            {!sent ? (
                                <form onSubmit={handleSubmit} className="d-flex gap-2 justify-content-center flex-wrap">
                                    <input
                                        type="email"
                                        placeholder="tu@correo.com"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        required
                                        style={{
                                            fontFamily: 'DM Sans, sans-serif',
                                            padding: '12px 20px', borderRadius: '4px',
                                            border: '1.5px solid #DDE3EC', fontSize: '0.9rem',
                                            outline: 'none', flex: '1 1 240px', maxWidth: 320,
                                        }}
                                        onFocus={e => e.target.style.borderColor = '#2563EB'}
                                        onBlur={e => e.target.style.borderColor = '#DDE3EC'}
                                    />
                                    <button
                                        type="submit"
                                        style={{
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontWeight: 600, fontSize: '0.88rem',
                                            padding: '12px 24px', borderRadius: '4px',
                                            background: '#2563EB', color: '#fff',
                                            border: 'none', cursor: 'pointer',
                                        }}
                                    >
                                        Envíame los casos →
                                    </button>
                                </form>
                            ) : (
                                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', color: '#2563EB', fontWeight: 500 }}>
                                    ✓ ¡Perfecto! Revisa tu correo pronto.
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}