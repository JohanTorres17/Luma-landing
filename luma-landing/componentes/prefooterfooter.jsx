import { useState } from 'react'

export function PreFooter() {
    const [form, setForm] = useState({ nombre: '', correo: '', tel: '' })
    const [sent, setSent] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (form.correo) setSent(true)
    }

    return (
        <section style={{ padding: '96px 0', background: '#0D1B2A', position: 'relative', overflow: 'hidden' }}>
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                background: 'radial-gradient(ellipse 50% 80% at 50% 100%, rgba(37,99,235,0.12) 0%, transparent 60%)',
            }} />

            <div className="container position-relative">
                <div className="row justify-content-center text-center mb-5">
                    <div className="col-12 col-lg-7">
                        <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.2em', color: '#3B82F6', marginBottom: 16 }}>
                            ÚLTIMO PASO
                        </div>
                        <h2 style={{
                            fontFamily: 'Cormorant Garamond, serif',
                            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                            fontWeight: 600, color: '#fff',
                            lineHeight: 1.1, marginBottom: 16,
                        }}>
                            El mejor momento para tener un sitio web profesional era ayer.
                            <em style={{ color: '#3B82F6', display: 'block' }}>El segundo mejor momento es ahora.</em>
                        </h2>
                        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', color: 'rgba(255,255,255,0.45)', fontWeight: 300, lineHeight: 1.7 }}>
                            Deja tu información y hoy mismo arrancamos la conversación sobre tu proyecto.
                        </p>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6">
                        {!sent ? (
                            <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                                <input
                                    type="text"
                                    placeholder="Tu nombre"
                                    value={form.nombre}
                                    onChange={e => setForm({ ...form, nombre: e.target.value })}
                                    style={{
                                        fontFamily: 'DM Sans, sans-serif', padding: '14px 20px',
                                        borderRadius: '4px', border: '1px solid rgba(255,255,255,0.12)',
                                        background: 'rgba(255,255,255,0.06)', color: '#fff', fontSize: '0.9rem', outline: 'none',
                                    }}
                                    onFocus={e => { e.target.style.borderColor = '#3B82F6'; e.target.style.background = 'rgba(59,130,246,0.08)' }}
                                    onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.12)'; e.target.style.background = 'rgba(255,255,255,0.06)' }}
                                />
                                <input
                                    type="email"
                                    placeholder="Tu correo electrónico *"
                                    value={form.correo}
                                    onChange={e => setForm({ ...form, correo: e.target.value })}
                                    required
                                    style={{
                                        fontFamily: 'DM Sans, sans-serif', padding: '14px 20px',
                                        borderRadius: '4px', border: '1px solid rgba(255,255,255,0.12)',
                                        background: 'rgba(255,255,255,0.06)', color: '#fff', fontSize: '0.9rem', outline: 'none',
                                    }}
                                    onFocus={e => { e.target.style.borderColor = '#3B82F6'; e.target.style.background = 'rgba(59,130,246,0.08)' }}
                                    onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.12)'; e.target.style.background = 'rgba(255,255,255,0.06)' }}
                                />
                                <input
                                    type="tel"
                                    placeholder="Tu teléfono (WhatsApp)"
                                    value={form.tel}
                                    onChange={e => setForm({ ...form, tel: e.target.value })}
                                    style={{
                                        fontFamily: 'DM Sans, sans-serif', padding: '14px 20px',
                                        borderRadius: '4px', border: '1px solid rgba(255,255,255,0.12)',
                                        background: 'rgba(255,255,255,0.06)', color: '#fff', fontSize: '0.9rem', outline: 'none',
                                    }}
                                    onFocus={e => { e.target.style.borderColor = '#3B82F6'; e.target.style.background = 'rgba(59,130,246,0.08)' }}
                                    onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.12)'; e.target.style.background = 'rgba(255,255,255,0.06)' }}
                                />
                                <button
                                    type="submit"
                                    style={{
                                        fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '1rem',
                                        padding: '16px', borderRadius: '4px',
                                        background: '#2563EB', color: '#fff', border: 'none', cursor: 'pointer',
                                        transition: 'background 0.2s',
                                    }}
                                    onMouseEnter={e => e.target.style.background = '#1d4ed8'}
                                    onMouseLeave={e => e.target.style.background = '#2563EB'}
                                >
                                    Quiero mi sitio web →
                                </button>
                                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.72rem', color: 'rgba(255,255,255,0.25)', textAlign: 'center', margin: 0 }}>
                                    Sin compromiso. Respondemos en menos de 24 horas.
                                </p>
                            </form>
                        ) : (
                            <div className="text-center" style={{ padding: '48px 0' }}>
                                <div style={{ fontSize: '3rem', marginBottom: 16 }}>🎉</div>
                                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 600, color: '#fff', marginBottom: 8 }}>¡Excelente decisión!</div>
                                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', fontWeight: 300 }}>
                                    Te contactamos antes de 24 horas. Prepara tus ideas, pronto arrancamos.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

const LogoMark = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
        <rect width="64" height="64" rx="14" fill="#162236" />
        <rect x="16" y="12" width="10" height="36" rx="2" fill="white" />
        <rect x="16" y="38" width="32" height="10" rx="2" fill="white" />
        <rect x="30" y="12" width="3" height="16" rx="1.5" fill="#3B82F6" opacity="0.9" />
        <circle cx="48" cy="16" r="4" fill="#2563EB" />
    </svg>
)

export function Footer() {
    return (
        <footer style={{ background: '#060D14', padding: '56px 0 32px' }}>
            <div className="container">

                {/* Top row — 3 columnas Bootstrap */}
                <div className="row g-4 mb-5">

                    {/* Brand */}
                    <div className="col-12 col-md-4">
                        <div className="d-flex align-items-center gap-2 mb-3">
                            <LogoMark size={28} />
                            <span style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600, fontSize: '1.1rem', letterSpacing: '0.15em', color: '#fff' }}>LUMA</span>
                        </div>
                        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.83rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, fontWeight: 300, maxWidth: 260 }}>
                            Estudio de desarrollo web y digital para emprendedores y negocios que quieren destacar.
                        </p>
                    </div>

                    {/* Servicios */}
                    <div className="col-6 col-md-4">
                        <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', marginBottom: 16 }}>Servicios</div>
                        {['Sitios Web', 'Landing Pages', 'Aplicaciones Web', 'Consultoría Digital'].map(s => (
                            <div key={s} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.83rem', color: 'rgba(255,255,255,0.45)', marginBottom: 10, fontWeight: 300 }}>{s}</div>
                        ))}
                    </div>

                    {/* Contacto */}
                    <div className="col-6 col-md-4">
                        <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', marginBottom: 16 }}>Contacto</div>
                        {[
                            { label: 'Email', val: 'hola@luma.studio' },
                            { label: 'WhatsApp', val: '+57 300 000 0000' },
                            { label: 'Ubicación', val: 'Bogotá, Colombia' },
                            { label: 'Horario', val: 'Lun–Vie · 8am–6pm' },
                        ].map(c => (
                            <div key={c.label} className="d-flex gap-2 mb-2" style={{ alignItems: 'baseline' }}>
                                <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.6rem', color: 'rgba(255,255,255,0.2)', flexShrink: 0 }}>{c.label}</span>
                                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.83rem', color: 'rgba(255,255,255,0.5)', fontWeight: 300 }}>{c.val}</span>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Bottom */}
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.72rem', color: 'rgba(255,255,255,0.2)' }}>
                        © 2025 LUMA Digital Studio. Todos los derechos reservados.
                    </div>
                    <div className="d-flex gap-4">
                        {['Política de Privacidad', 'Términos de Uso'].map(l => (
                            <a key={l} href="#" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.72rem', color: 'rgba(255,255,255,0.2)', textDecoration: 'none' }}
                                onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
                                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.2)'}
                            >{l}</a>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    )
}