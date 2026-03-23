import { useState } from 'react'

export default function Hero() {
    const [email, setEmail] = useState('')
    const [sent, setSent] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email) { setSent(true) }
    }

    return (
        <section
            id="inicio"
            style={{
                paddingTop: '120px', paddingBottom: '96px',
                background: 'linear-gradient(160deg, #F5F7FA 0%, #ffffff 60%)',
                position: 'relative', overflow: 'hidden',
            }}
        >
            {/* Decorative elements */}
            <div style={{
                position: 'absolute', top: -80, right: -80,
                width: 400, height: 400, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute', bottom: 0, left: '10%',
                width: 1, height: '60%',
                background: 'linear-gradient(to bottom, transparent, rgba(37,99,235,0.12), transparent)',
            }} />

            <div className="container">
                <div className="row align-items-center g-5">

                    {/* Left — texto */}
                    <div className="col-12 col-lg-6">
                        <div
                            className="d-inline-flex align-items-center gap-2 mb-4"
                            style={{
                                background: '#EEF2F7', borderRadius: 100,
                                padding: '6px 16px',
                            }}
                        >
                            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#2563EB' }} />
                            <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.15em', color: '#2563EB', fontWeight: 500 }}>
                                ESTUDIO DIGITAL · COLOMBIA
                            </span>
                        </div>

                        <h1 style={{
                            fontFamily: 'Cormorant Garamond, serif',
                            fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
                            fontWeight: 700, color: '#0D1B2A',
                            lineHeight: 1.05, letterSpacing: '-0.02em',
                            marginBottom: '20px',
                        }}>
                            Tu presencia digital,<br />
                            <span style={{ color: '#2563EB', fontStyle: 'italic' }}>diseñada para rendir.</span>
                        </h1>

                        <p style={{
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '1.1rem', fontWeight: 300,
                            color: '#6B7A8D', lineHeight: 1.7,
                            maxWidth: 480, marginBottom: '36px',
                        }}>
                            Construimos sitios web, landing pages y aplicaciones que combinan precisión técnica con diseño que convierte. Para emprendedores y negocios que quieren destacar.
                        </p>

                        {/* Form */}
                        {!sent ? (
                            <form onSubmit={handleSubmit} className="d-flex gap-2 flex-wrap" id="registro">
                                <input
                                    type="email"
                                    placeholder="Tu correo electrónico"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                    style={{
                                        fontFamily: 'DM Sans, sans-serif',
                                        padding: '13px 20px', borderRadius: '4px',
                                        border: '1.5px solid #DDE3EC',
                                        fontSize: '0.9rem', outline: 'none',
                                        flex: '1 1 260px', color: '#0D1B2A',
                                        background: '#fff',
                                        transition: 'border-color 0.2s',
                                    }}
                                    onFocus={e => e.target.style.borderColor = '#2563EB'}
                                    onBlur={e => e.target.style.borderColor = '#DDE3EC'}
                                />
                                <button
                                    type="submit"
                                    style={{
                                        fontFamily: 'DM Sans, sans-serif',
                                        fontWeight: 600, fontSize: '0.9rem',
                                        padding: '13px 28px', borderRadius: '4px',
                                        background: '#0D1B2A', color: '#fff',
                                        border: 'none', cursor: 'pointer',
                                        transition: 'background 0.2s',
                                        whiteSpace: 'nowrap',
                                    }}
                                    onMouseEnter={e => e.target.style.background = '#2563EB'}
                                    onMouseLeave={e => e.target.style.background = '#0D1B2A'}
                                >
                                    Quiero saber más →
                                </button>
                            </form>
                        ) : (
                            <div style={{
                                padding: '16px 24px', borderRadius: '4px',
                                background: '#EEF2F7', border: '1px solid #DDE3EC',
                                fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem',
                                color: '#0D1B2A', fontWeight: 500,
                            }}>
                                ✓ ¡Listo! Te contactamos pronto.
                            </div>
                        )}

                        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', color: '#8A97A8', marginTop: 12 }}>
                            Sin spam. Solo novedades relevantes.
                        </p>
                    </div>

                    {/* Right — visual */}
                    <div className="col-12 col-lg-6 d-none d-lg-block">
                        <div style={{ position: 'relative' }}>
                            {/* Card flotante principal */}
                            <div style={{
                                background: '#0D1B2A', borderRadius: 20,
                                padding: '48px', position: 'relative', overflow: 'hidden',
                            }}>
                                <div style={{
                                    position: 'absolute', inset: 0,
                                    background: 'radial-gradient(ellipse 70% 60% at 70% 30%, rgba(37,99,235,0.2) 0%, transparent 60%)',
                                }} />
                                <div style={{ position: 'relative', zIndex: 1 }}>
                                    <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', color: '#3B82F6', letterSpacing: '0.2em', marginBottom: 24 }}>PROYECTO RECIENTE</div>
                                    <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.2rem', fontWeight: 600, color: '#fff', marginBottom: 8 }}>Landing Page</div>
                                    <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginBottom: 32 }}>Startup Fintech · Bogotá</div>

                                    {/* Fake metrics */}
                                    <div className="row g-3">
                                        {[
                                            { val: '+340%', label: 'Conversión' },
                                            { val: '0.8s', label: 'Carga' },
                                            { val: '98', label: 'PageSpeed' },
                                        ].map(m => (
                                            <div key={m.label} className="col-4">
                                                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 12 }}>
                                                    <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 700, color: '#3B82F6' }}>{m.val}</div>
                                                    <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)' }}>{m.label}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Badge flotante */}
                            <div style={{
                                position: 'absolute', bottom: -20, left: -20,
                                background: '#fff', borderRadius: 12, padding: '14px 20px',
                                boxShadow: '0 8px 32px rgba(13,27,42,0.12)',
                                display: 'flex', alignItems: 'center', gap: 12,
                            }}>
                                <div style={{ width: 40, height: 40, borderRadius: 10, background: '#EEF2F7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>⚡</div>
                                <div>
                                    <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem', fontWeight: 600, color: '#0D1B2A' }}>Entrega en 7 días</div>
                                    <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem', color: '#6B7A8D' }}>Garantizado</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Scroll hint */}
                <div className="d-flex justify-content-center mt-5 pt-3">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, animation: 'bounce 2s infinite' }}>
                        <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.15em', color: '#8A97A8' }}>SCROLL</div>
                        <div style={{ width: 1, height: 32, background: 'linear-gradient(to bottom, #8A97A8, transparent)' }} />
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>
        </section>
    )
}