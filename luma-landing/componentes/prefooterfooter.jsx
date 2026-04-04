const LogoMark = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
        <defs>
            <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="64" y2="64">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
        </defs>
        <rect width="64" height="64" rx="16" fill="url(#footerLogoGrad)" />
        <rect x="16" y="12" width="10" height="36" rx="3" fill="white" opacity="0.95" />
        <rect x="16" y="38" width="32" height="10" rx="3" fill="white" opacity="0.95" />
        <rect x="30" y="12" width="3" height="16" rx="1.5" fill="white" opacity="0.5" />
        <circle cx="48" cy="16" r="4" fill="white" opacity="0.8" />
    </svg>
)

export function PreFooter() {
    return (
        <section style={{
            padding: '100px 0',
            background: 'linear-gradient(165deg, #0B1120 0%, #131C31 50%, #0B1120 100%)',
            position: 'relative', overflow: 'hidden',
        }}>
            {/* Gradient orbs */}
            <div style={{
                position: 'absolute', top: '20%', left: '10%',
                width: 400, height: 400, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 60%)',
                filter: 'blur(60px)', pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute', bottom: '10%', right: '10%',
                width: 300, height: 300, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 60%)',
                filter: 'blur(40px)', pointerEvents: 'none',
            }} />

            <div className="container position-relative">
                <div className="row justify-content-center text-center">
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
                            ÚLTIMO PASO
                            <div style={{
                                width: 24, height: 1.5,
                                background: 'linear-gradient(90deg, #6366F1, #2563EB)',
                            }} />
                        </div>

                        <h2 style={{
                            fontFamily: 'Cormorant Garamond, serif',
                            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                            fontWeight: 600, color: '#fff',
                            lineHeight: 1.1, marginBottom: 20,
                        }}>
                            El mejor momento para tener un sitio web profesional era ayer.
                            <span style={{
                                display: 'block',
                                background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontStyle: 'italic',
                            }}>El segundo mejor momento es ahora.</span>
                        </h2>

                        <p style={{
                            fontFamily: 'DM Sans, sans-serif', fontSize: '1rem',
                            color: 'rgba(255,255,255,0.4)', fontWeight: 300,
                            lineHeight: 1.7, marginBottom: 40,
                        }}>
                            Deja tu información y hoy mismo arrancamos la conversación sobre tu proyecto.
                        </p>

                        <a
                            href="#registro"
                            className="btn-primary"
                            style={{
                                fontSize: '1rem', padding: '18px 44px',
                                borderRadius: '10px',
                            }}
                        >
                            Quiero mi sitio web
                            <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                                <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                        <p style={{
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '0.72rem', color: 'rgba(255,255,255,0.2)',
                            marginTop: 20,
                        }}>
                            Sin compromiso. Respondemos en menos de 24 horas.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function Footer() {
    return (
        <footer style={{
            background: '#060A13', padding: '60px 0 32px',
            borderTop: '1px solid rgba(255,255,255,0.04)',
        }}>
            <div className="container">
                {/* Top */}
                <div className="row g-4 mb-5">
                    {/* Brand */}
                    <div className="col-12 col-md-4">
                        <div className="d-flex align-items-center gap-2 mb-3">
                            <LogoMark size={30} />
                            <span style={{
                                fontFamily: 'Cormorant Garamond, serif',
                                fontWeight: 700, fontSize: '1.2rem',
                                letterSpacing: '0.18em', color: '#fff',
                            }}>LUMA</span>
                        </div>
                        <p style={{
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '0.83rem', color: 'rgba(255,255,255,0.3)',
                            lineHeight: 1.7, fontWeight: 300, maxWidth: 280,
                        }}>
                            Estudio de desarrollo web y digital para emprendedores y negocios que quieren destacar.
                        </p>
                    </div>

                    {/* Servicios */}
                    <div className="col-6 col-md-4">
                        <div style={{
                            fontFamily: 'DM Mono, monospace', fontSize: '0.62rem',
                            letterSpacing: '0.15em', color: 'rgba(255,255,255,0.2)',
                            textTransform: 'uppercase', marginBottom: 18,
                        }}>Servicios</div>
                        {['Sitios Web', 'Landing Pages', 'Aplicaciones Web', 'Consultoría Digital'].map(s => (
                            <div key={s} style={{
                                fontFamily: 'DM Sans, sans-serif',
                                fontSize: '0.83rem', color: 'rgba(255,255,255,0.4)',
                                marginBottom: 12, fontWeight: 300,
                                transition: 'color 0.2s', cursor: 'default',
                            }}
                                onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.7)'}
                                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.4)'}
                            >{s}</div>
                        ))}
                    </div>

                    {/* Contacto */}
                    <div className="col-6 col-md-4">
                        <div style={{
                            fontFamily: 'DM Mono, monospace', fontSize: '0.62rem',
                            letterSpacing: '0.15em', color: 'rgba(255,255,255,0.2)',
                            textTransform: 'uppercase', marginBottom: 18,
                        }}>Contacto</div>
                        {[
                            { label: 'Email', val: 'hola@luma.studio' },
                            { label: 'WhatsApp', val: '+57 300 000 0000' },
                            { label: 'Ubicación', val: 'Bogotá, Colombia' },
                            { label: 'Horario', val: 'Lun–Vie · 8am–6pm' },
                        ].map(c => (
                            <div key={c.label} className="d-flex gap-2 mb-3" style={{ alignItems: 'baseline' }}>
                                <span style={{
                                    fontFamily: 'DM Mono, monospace',
                                    fontSize: '0.58rem', color: 'rgba(255,255,255,0.15)',
                                    flexShrink: 0, letterSpacing: '0.05em',
                                    minWidth: 60,
                                }}>{c.label}</span>
                                <span style={{
                                    fontFamily: 'DM Sans, sans-serif',
                                    fontSize: '0.83rem', color: 'rgba(255,255,255,0.45)',
                                    fontWeight: 300,
                                }}>{c.val}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom */}
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 pt-4"
                    style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                    <div style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '0.72rem', color: 'rgba(255,255,255,0.15)',
                    }}>
                        © 2025 LUMA Digital Studio. Todos los derechos reservados.
                    </div>
                    <div className="d-flex gap-4">
                        {['Política de Privacidad', 'Términos de Uso'].map(l => (
                            <a key={l} href="#" style={{
                                fontFamily: 'DM Sans, sans-serif',
                                fontSize: '0.72rem', color: 'rgba(255,255,255,0.15)',
                                textDecoration: 'none', transition: 'color 0.2s',
                            }}
                                onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
                                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.15)'}
                            >{l}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}