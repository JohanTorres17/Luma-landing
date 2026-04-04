export default function CTA1() {
    return (
        <section
            style={{
                padding: '100px 0',
                background: 'linear-gradient(165deg, #0B1120 0%, #1A2540 50%, #0B1120 100%)',
                position: 'relative', overflow: 'hidden',
            }}
        >
            {/* Animated gradient orbs */}
            <div style={{
                position: 'absolute', top: -100, right: -100,
                width: 500, height: 500, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 60%)',
                filter: 'blur(60px)', pointerEvents: 'none',
                animation: 'floatSlow 12s ease-in-out infinite',
            }} />
            <div style={{
                position: 'absolute', bottom: -150, left: -100,
                width: 400, height: 400, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 60%)',
                filter: 'blur(40px)', pointerEvents: 'none',
                animation: 'floatSlow 10s ease-in-out infinite reverse',
            }} />

            {/* Grid lines */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.04,
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: '60px 60px',
            }} />

            <div className="container position-relative">
                <div className="row align-items-center g-5">
                    <div className="col-12 col-lg-7">
                        <div style={{
                            fontFamily: 'DM Mono, monospace', fontSize: '0.65rem',
                            letterSpacing: '0.2em', color: '#3B82F6',
                            display: 'inline-flex', alignItems: 'center', gap: 10,
                            marginBottom: 20,
                        }}>
                            <div style={{
                                width: 24, height: 1.5,
                                background: 'linear-gradient(90deg, #2563EB, #6366F1)',
                            }} />
                            HABLEMOS
                        </div>

                        <h2 style={{
                            fontFamily: 'Cormorant Garamond, serif',
                            fontSize: 'clamp(2rem, 4.5vw, 3.4rem)',
                            fontWeight: 600, color: '#fff',
                            lineHeight: 1.08, marginBottom: 24,
                        }}>
                            ¿Listo para tener un sitio web que{' '}
                            <span style={{
                                fontStyle: 'italic',
                                background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}>realmente trabaje por ti?</span>
                        </h2>

                        <p style={{
                            fontFamily: 'DM Sans, sans-serif', fontSize: '1.05rem',
                            color: 'rgba(255,255,255,0.45)', fontWeight: 300,
                            lineHeight: 1.75, marginBottom: 36, maxWidth: 520,
                        }}>
                            Cuéntanos tu proyecto. En menos de 24 horas te respondemos con una propuesta concreta y sin compromiso.
                        </p>

                        <div className="d-flex flex-column gap-3 mb-4">
                            {[
                                'Sin costo de consulta inicial',
                                'Respuesta en menos de 24h',
                                'Propuesta personalizada para tu negocio',
                            ].map((item, i) => (
                                <div key={i} className="d-flex align-items-center gap-3">
                                    <div style={{
                                        width: 24, height: 24, borderRadius: '50%',
                                        background: 'linear-gradient(135deg, rgba(37,99,235,0.2), rgba(99,102,241,0.2))',
                                        border: '1px solid rgba(59,130,246,0.3)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        flexShrink: 0,
                                    }}>
                                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                                            <path d="M2 6l3 3 5-5" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <span style={{
                                        fontFamily: 'DM Sans, sans-serif',
                                        fontSize: '0.92rem',
                                        color: 'rgba(255,255,255,0.65)', fontWeight: 300,
                                    }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-12 col-lg-5 text-center text-lg-end">
                        <a
                            href="#registro"
                            className="btn-primary"
                            style={{
                                fontSize: '1rem', padding: '18px 40px',
                                borderRadius: '10px', display: 'inline-flex',
                            }}
                        >
                            Solicitar propuesta gratuita
                            <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                                <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                        <p style={{
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)',
                            marginTop: 16,
                        }}>
                            Tu información está segura. No compartimos tus datos.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}