export default function CTA2() {
    return (
        <section style={{
            padding: '80px 0',
            background: 'linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 50%, #EEF2FF 100%)',
            position: 'relative', overflow: 'hidden',
        }}>
            {/* Decorative blur */}
            <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 500, height: 300, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-8 text-center">
                        <h2 style={{
                            fontFamily: 'Cormorant Garamond, serif',
                            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                            fontWeight: 600, color: '#0B1120',
                            lineHeight: 1.12, marginBottom: 18,
                        }}>
                            Tu competencia ya tiene un sitio que convierte.<br />
                            <span style={{
                                fontStyle: 'italic',
                                background: 'var(--gradient-blue)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}>¿El tuyo también?</span>
                        </h2>
                        <p style={{
                            fontFamily: 'DM Sans, sans-serif', fontSize: '1rem',
                            color: '#64748B', fontWeight: 300,
                            lineHeight: 1.7, marginBottom: 36,
                            maxWidth: 520, margin: '0 auto 36px',
                        }}>
                            Cada día sin un sitio optimizado es un cliente que se va a la competencia.
                        </p>
                        <a
                            href="#registro"
                            className="btn-primary"
                            onClick={() => {
                                window.dataLayer = window.dataLayer || []
                                window.dataLayer.push({ event: 'cta_click', cta_location: 'cta_final' })
                            }}
                            style={{
                                fontSize: '0.95rem', padding: '16px 36px',
                                borderRadius: '10px',
                            }}
                        >
                            Empieza tu proyecto hoy
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}