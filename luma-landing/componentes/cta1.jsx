import { useState } from 'react'

export default function CTA1() {
    const [form, setForm] = useState({ nombre: '', correo: '', tel: '' })
    const [sent, setSent] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (form.correo) setSent(true)
    }

    return (
        <section
            id="contacto"
            style={{
                padding: '96px 0',
                background: '#0D1B2A',
                position: 'relative', overflow: 'hidden',
            }}
        >
            <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(37,99,235,0.15) 0%, transparent 60%)',
                pointerEvents: 'none',
            }} />

            <div className="container position-relative">
                <div className="row align-items-center g-5">

                    {/* Left */}
                    <div className="col-12 col-lg-6">
                        <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.2em', color: '#3B82F6', display: 'block', marginBottom: 16 }}>
                            HABLEMOS
                        </span>
                        <h2 style={{
                            fontFamily: 'Cormorant Garamond, serif',
                            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                            fontWeight: 600, color: '#fff',
                            lineHeight: 1.1, marginBottom: 20,
                        }}>
                            ¿Listo para tener un sitio web que realmente trabaje por ti?
                        </h2>
                        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', color: 'rgba(255,255,255,0.5)', fontWeight: 300, lineHeight: 1.7, marginBottom: 32 }}>
                            Cuéntanos tu proyecto. En menos de 24 horas te respondemos con una propuesta concreta y sin compromiso.
                        </p>
                        <div className="d-flex flex-column gap-3">
                            {['Sin costo de consulta inicial', 'Respuesta en menos de 24h', 'Propuesta personalizada para tu negocio'].map((item, i) => (
                                <div key={i} className="d-flex align-items-center gap-2">
                                    <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(59,130,246,0.2)', border: '1px solid rgba(59,130,246,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#3B82F6' }} />
                                    </div>
                                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', fontWeight: 300 }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right — form */}
                    <div className="col-12 col-lg-6">
                        <div style={{ background: '#fff', borderRadius: 16, padding: '40px' }}>
                            {!sent ? (
                                <>
                                    <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontWeight: 600, color: '#0D1B2A', marginBottom: 24 }}>
                                        Cuéntanos tu proyecto
                                    </div>
                                    <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                                        <input
                                            type="text"
                                            placeholder="Tu nombre"
                                            value={form.nombre}
                                            onChange={e => setForm({ ...form, nombre: e.target.value })}
                                            style={{ fontFamily: 'DM Sans, sans-serif', padding: '12px 16px', borderRadius: '4px', border: '1.5px solid #DDE3EC', fontSize: '0.9rem', outline: 'none' }}
                                            onFocus={e => e.target.style.borderColor = '#2563EB'}
                                            onBlur={e => e.target.style.borderColor = '#DDE3EC'}
                                        />
                                        <input
                                            type="email"
                                            placeholder="Tu correo electrónico *"
                                            value={form.correo}
                                            onChange={e => setForm({ ...form, correo: e.target.value })}
                                            required
                                            style={{ fontFamily: 'DM Sans, sans-serif', padding: '12px 16px', borderRadius: '4px', border: '1.5px solid #DDE3EC', fontSize: '0.9rem', outline: 'none' }}
                                            onFocus={e => e.target.style.borderColor = '#2563EB'}
                                            onBlur={e => e.target.style.borderColor = '#DDE3EC'}
                                        />
                                        <input
                                            type="tel"
                                            placeholder="Tu teléfono (opcional)"
                                            value={form.tel}
                                            onChange={e => setForm({ ...form, tel: e.target.value })}
                                            style={{ fontFamily: 'DM Sans, sans-serif', padding: '12px 16px', borderRadius: '4px', border: '1.5px solid #DDE3EC', fontSize: '0.9rem', outline: 'none' }}
                                            onFocus={e => e.target.style.borderColor = '#2563EB'}
                                            onBlur={e => e.target.style.borderColor = '#DDE3EC'}
                                        />
                                        <button
                                            type="submit"
                                            style={{
                                                fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.95rem',
                                                padding: '14px', borderRadius: '4px',
                                                background: '#2563EB', color: '#fff',
                                                border: 'none', cursor: 'pointer', marginTop: 4,
                                                transition: 'background 0.2s',
                                            }}
                                            onMouseEnter={e => e.target.style.background = '#1d4ed8'}
                                            onMouseLeave={e => e.target.style.background = '#2563EB'}
                                        >
                                            Solicitar propuesta gratuita →
                                        </button>
                                        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.72rem', color: '#8A97A8', textAlign: 'center', margin: 0 }}>
                                            Tu información está segura. No compartimos tus datos.
                                        </p>
                                    </form>
                                </>
                            ) : (
                                <div className="text-center py-4">
                                    <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>✓</div>
                                    <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 600, color: '#0D1B2A', marginBottom: 8 }}>¡Recibido!</div>
                                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', color: '#6B7A8D', fontWeight: 300 }}>Te respondemos en menos de 24 horas con una propuesta para tu proyecto.</p>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}