import { useState } from 'react'

const servicios = [
    { value: '', label: 'Selecciona un servicio' },
    { value: 'sitio-web', label: 'Sitio Web' },
    { value: 'landing-page', label: 'Landing Page' },
    { value: 'aplicacion', label: 'Aplicación Web' },
    { value: 'otro', label: 'Otro / No estoy seguro' },
]

export default function Hero() {
    const [form, setForm] = useState({ nombre: '', correo: '', tel: '', servicio: '' })
    const [sent, setSent] = useState(false)
    const [sending, setSending] = useState(false)
    const [error, setError] = useState(null)
    const [focused, setFocused] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!form.correo || !form.nombre) return

        setSending(true)
        setError(null)

        try {
            const body = new URLSearchParams({
                'form-name': 'propuesta',
                nombre: form.nombre,
                correo: form.correo,
                tel: form.tel,
                servicio: form.servicio,
            }).toString()

            const res = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body,
            })

            if (res.ok) {
                setSent(true)
                // GTM: evento de conversión principal
                window.dataLayer = window.dataLayer || []
                window.dataLayer.push({
                    event: 'luma_form_submit',
                    form_name: 'propuesta',
                    servicio: form.servicio || 'no_seleccionado',
                })
            } else {
                setError('Hubo un error al enviar. Intenta de nuevo.')
            }
        } catch {
            setError('Error de conexión. Verifica tu internet e intenta de nuevo.')
        } finally {
            setSending(false)
        }
    }

    const inputStyle = (field) => ({
        fontFamily: 'DM Sans, sans-serif',
        padding: '14px 18px', borderRadius: '8px',
        border: `1.5px solid ${focused === field ? '#2563EB' : '#E2E8F0'}`,
        fontSize: '0.9rem', outline: 'none',
        background: '#fff',
        transition: 'all 0.3s ease',
        boxShadow: focused === field ? '0 0 0 4px rgba(37,99,235,0.08)' : 'none',
        width: '100%',
    })

    return (
        <section
            id="inicio"
            style={{
                paddingTop: '140px', paddingBottom: '100px',
                background: 'linear-gradient(165deg, #F8FAFC 0%, #ffffff 40%, #EEF2FF 100%)',
                position: 'relative', overflow: 'hidden',
                minHeight: '100vh',
                display: 'flex', alignItems: 'center',
            }}
        >
            {/* Decorative elements */}
            <div style={{
                position: 'absolute', top: -200, right: -200,
                width: 600, height: 600, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, rgba(99,102,241,0.04) 40%, transparent 70%)',
                pointerEvents: 'none',
                animation: 'floatSlow 8s ease-in-out infinite',
            }} />
            <div style={{
                position: 'absolute', bottom: -100, left: -100,
                width: 400, height: 400, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)',
                pointerEvents: 'none',
                animation: 'floatSlow 10s ease-in-out infinite reverse',
            }} />
            <div style={{
                position: 'absolute', top: '20%', left: '5%',
                width: 2, height: '40%',
                background: 'linear-gradient(to bottom, transparent, rgba(37,99,235,0.1), transparent)',
            }} />
            <div style={{
                position: 'absolute', top: '30%', right: '8%',
                width: 2, height: '30%',
                background: 'linear-gradient(to bottom, transparent, rgba(99,102,241,0.08), transparent)',
            }} />

            {/* Floating dots */}
            {[
                { top: '15%', left: '12%', size: 6, delay: 0 },
                { top: '25%', right: '15%', size: 4, delay: 2 },
                { bottom: '20%', left: '8%', size: 5, delay: 1 },
                { top: '60%', right: '5%', size: 3, delay: 3 },
            ].map((dot, i) => (
                <div key={i} style={{
                    position: 'absolute', ...dot,
                    width: dot.size, height: dot.size, borderRadius: '50%',
                    background: 'var(--gradient-blue)',
                    opacity: 0.3,
                    animation: `float ${4 + i}s ease-in-out ${dot.delay}s infinite`,
                    pointerEvents: 'none',
                }} />
            ))}

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="row align-items-center g-5">

                    {/* Left — texto */}
                    <div className="col-12 col-lg-6">
                        <div style={{ animation: 'fadeInUp 0.8s ease' }}>
                            <div
                                className="d-inline-flex align-items-center gap-2 mb-4"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(37,99,235,0.08) 0%, rgba(99,102,241,0.05) 100%)',
                                    borderRadius: 100,
                                    padding: '7px 18px',
                                    border: '1px solid rgba(37,99,235,0.1)',
                                }}
                            >
                                <div style={{
                                    width: 7, height: 7, borderRadius: '50%',
                                    background: 'var(--gradient-blue)',
                                    animation: 'pulse 2s ease infinite',
                                }} />
                                <span style={{
                                    fontFamily: 'DM Mono, monospace', fontSize: '0.65rem',
                                    letterSpacing: '0.15em', color: '#2563EB', fontWeight: 500,
                                }}>
                                    ESTUDIO DIGITAL · COLOMBIA
                                </span>
                            </div>
                        </div>

                        <h1 style={{
                            fontFamily: 'Cormorant Garamond, serif',
                            fontSize: 'clamp(2.6rem, 5vw, 4.2rem)',
                            fontWeight: 700, color: '#0B1120',
                            lineHeight: 1.05, letterSpacing: '-0.02em',
                            marginBottom: '22px',
                            animation: 'fadeInUp 0.8s ease 0.1s both',
                        }}>
                            Tu presencia digital,<br />
                            <span style={{
                                fontStyle: 'italic',
                                background: 'var(--gradient-blue)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}>diseñada para rendir.</span>
                        </h1>

                        <p style={{
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '1.08rem', fontWeight: 300,
                            color: '#64748B', lineHeight: 1.75,
                            maxWidth: 480, marginBottom: '36px',
                            animation: 'fadeInUp 0.8s ease 0.2s both',
                        }}>
                            Construimos sitios web, landing pages y aplicaciones que combinan precisión técnica con diseño que convierte. Para emprendedores y negocios que quieren destacar.
                        </p>

                        {/* Stats */}
                        <div
                            className="d-flex gap-4 flex-wrap"
                            style={{ animation: 'fadeInUp 0.8s ease 0.3s both' }}
                        >
                            {[
                                { val: '+40', label: 'Proyectos' },
                                { val: '7 días', label: 'Entrega' },
                                { val: '100%', label: 'Satisfacción' },
                            ].map(s => (
                                <div key={s.label} style={{ textAlign: 'center' }}>
                                    <div style={{
                                        fontFamily: 'Cormorant Garamond, serif',
                                        fontSize: '1.8rem', fontWeight: 700,
                                        background: 'var(--gradient-blue)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        lineHeight: 1.2,
                                    }}>{s.val}</div>
                                    <div style={{
                                        fontFamily: 'DM Sans, sans-serif',
                                        fontSize: '0.72rem', color: '#94A3B8',
                                        fontWeight: 400, letterSpacing: '0.02em',
                                    }}>{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right — formulario único */}
                    <div className="col-12 col-lg-6" style={{ position: 'relative' }}>
                        {/* Scroll anchor with offset for fixed header */}
                        <div id="registro" style={{
                            position: 'absolute',
                            top: '-120px',
                            left: 0,
                            pointerEvents: 'none',
                        }} />
                        <div
                            style={{
                                background: '#fff',
                                borderRadius: '20px',
                                padding: 'clamp(28px, 4vw, 44px)',
                                boxShadow: '0 20px 60px rgba(11,17,32,0.08), 0 1px 3px rgba(0,0,0,0.04)',
                                border: '1px solid #EEF2F7',
                                position: 'relative',
                                overflow: 'hidden',
                                animation: 'fadeInUp 0.8s ease 0.3s both',
                            }}
                        >
                            {/* Gradient accent */}
                            <div style={{
                                position: 'absolute', top: 0, left: 0, right: 0, height: 4,
                                background: 'var(--gradient-blue)',
                                borderRadius: '20px 20px 0 0',
                            }} />

                            {!sent ? (
                                <>
                                    <div style={{
                                        fontFamily: 'DM Mono, monospace',
                                        fontSize: '0.62rem', letterSpacing: '0.2em',
                                        color: '#2563EB', marginBottom: 10,
                                    }}>CUÉNTANOS TU PROYECTO</div>
                                    <div style={{
                                        fontFamily: 'Cormorant Garamond, serif',
                                        fontSize: '1.6rem', fontWeight: 600,
                                        color: '#0B1120', marginBottom: 6,
                                    }}>
                                        Déjanos tus datos
                                    </div>
                                    <p style={{
                                        fontFamily: 'DM Sans, sans-serif',
                                        fontSize: '0.88rem', color: '#64748B',
                                        fontWeight: 300, marginBottom: 28, lineHeight: 1.6,
                                    }}>
                                        Te contactamos en menos de 24 horas con una propuesta personalizada.
                                    </p>

                                    <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                                        <input type="hidden" name="form-name" value="propuesta" />
                                        <input type="hidden" name="bot-field" />
                                        <div>
                                            <label style={{
                                                fontFamily: 'DM Sans, sans-serif',
                                                fontSize: '0.78rem', fontWeight: 500,
                                                color: '#334155', display: 'block',
                                                marginBottom: 6,
                                            }}>Nombre *</label>
                                            <input
                                                type="text"
                                                placeholder="Tu nombre completo"
                                                value={form.nombre}
                                                onChange={e => setForm({ ...form, nombre: e.target.value })}
                                                required
                                                style={inputStyle('nombre')}
                                                onFocus={() => setFocused('nombre')}
                                                onBlur={() => setFocused(null)}
                                            />
                                        </div>
                                        <div>
                                            <label style={{
                                                fontFamily: 'DM Sans, sans-serif',
                                                fontSize: '0.78rem', fontWeight: 500,
                                                color: '#334155', display: 'block',
                                                marginBottom: 6,
                                            }}>Correo electrónico *</label>
                                            <input
                                                type="email"
                                                placeholder="tu@correo.com"
                                                value={form.correo}
                                                onChange={e => setForm({ ...form, correo: e.target.value })}
                                                required
                                                style={inputStyle('correo')}
                                                onFocus={() => setFocused('correo')}
                                                onBlur={() => setFocused(null)}
                                            />
                                        </div>
                                        <div className="row g-3">
                                            <div className="col-12 col-sm-6">
                                                <label style={{
                                                    fontFamily: 'DM Sans, sans-serif',
                                                    fontSize: '0.78rem', fontWeight: 500,
                                                    color: '#334155', display: 'block',
                                                    marginBottom: 6,
                                                }}>WhatsApp</label>
                                                <input
                                                    type="tel"
                                                    placeholder="+57 300 000 0000"
                                                    value={form.tel}
                                                    onChange={e => setForm({ ...form, tel: e.target.value })}
                                                    style={inputStyle('tel')}
                                                    onFocus={() => setFocused('tel')}
                                                    onBlur={() => setFocused(null)}
                                                />
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <label style={{
                                                    fontFamily: 'DM Sans, sans-serif',
                                                    fontSize: '0.78rem', fontWeight: 500,
                                                    color: '#334155', display: 'block',
                                                    marginBottom: 6,
                                                }}>Servicio</label>
                                                <select
                                                    value={form.servicio}
                                                    onChange={e => setForm({ ...form, servicio: e.target.value })}
                                                    style={{
                                                        ...inputStyle('servicio'),
                                                        appearance: 'none',
                                                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%2394A3B8' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'right 16px center',
                                                        paddingRight: 40,
                                                        color: form.servicio ? '#0F172A' : '#94A3B8',
                                                    }}
                                                    onFocus={() => setFocused('servicio')}
                                                    onBlur={() => setFocused(null)}
                                                >
                                                    {servicios.map(s => (
                                                        <option key={s.value} value={s.value}>{s.label}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={sending}
                                            style={{
                                                fontFamily: 'DM Sans, sans-serif',
                                                fontWeight: 600, fontSize: '0.95rem',
                                                padding: '15px', borderRadius: '8px',
                                                background: sending
                                                    ? 'linear-gradient(135deg, #93B4F5 0%, #A5A7F5 100%)'
                                                    : 'linear-gradient(135deg, #2563EB 0%, #6366F1 100%)',
                                                color: '#fff', border: 'none',
                                                cursor: sending ? 'not-allowed' : 'pointer',
                                                marginTop: 4,
                                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                                boxShadow: '0 8px 24px rgba(37,99,235,0.25)',
                                                display: 'flex', alignItems: 'center',
                                                justifyContent: 'center', gap: 8,
                                                opacity: sending ? 0.8 : 1,
                                            }}
                                            onMouseEnter={e => {
                                                if (!sending) {
                                                    e.target.style.transform = 'translateY(-2px)'
                                                    e.target.style.boxShadow = '0 12px 32px rgba(37,99,235,0.35)'
                                                }
                                            }}
                                            onMouseLeave={e => {
                                                e.target.style.transform = 'translateY(0)'
                                                e.target.style.boxShadow = '0 8px 24px rgba(37,99,235,0.25)'
                                            }}
                                        >
                                            {sending ? 'Enviando...' : 'Solicitar propuesta gratuita'}
                                            {!sending && (
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            )}
                                        </button>

                                        <p style={{
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: '0.72rem', color: '#94A3B8',
                                            textAlign: 'center', margin: 0,
                                            display: 'flex', alignItems: 'center',
                                            justifyContent: 'center', gap: 6,
                                        }}>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                <path d="M6 1C3.24 1 1 3.24 1 6s2.24 5 5 5 5-2.24 5-5S8.76 1 6 1zm0 8.5c-.28 0-.5-.22-.5-.5V6c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .28-.22.5-.5.5zm.5-5h-1v-1h1v1z" fill="#94A3B8"/>
                                            </svg>
                                            Sin compromiso · Respondemos en menos de 24h
                                        </p>

                                        {error && (
                                            <p style={{
                                                fontFamily: 'DM Sans, sans-serif',
                                                fontSize: '0.82rem', color: '#DC2626',
                                                textAlign: 'center', margin: '8px 0 0',
                                                padding: '10px 14px',
                                                background: 'rgba(220,38,38,0.06)',
                                                borderRadius: '8px',
                                                border: '1px solid rgba(220,38,38,0.12)',
                                            }}>
                                                {error}
                                            </p>
                                        )}
                                    </form>
                                </>
                            ) : (
                                <div className="text-center" style={{ padding: '36px 0' }}>
                                    <div style={{
                                        width: 64, height: 64, borderRadius: '50%',
                                        background: 'linear-gradient(135deg, rgba(37,99,235,0.1) 0%, rgba(99,102,241,0.1) 100%)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        margin: '0 auto 20px',
                                        animation: 'scaleIn 0.5s ease',
                                    }}>
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                                            <path d="M5 13l4 4L19 7" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <div style={{
                                        fontFamily: 'Cormorant Garamond, serif',
                                        fontSize: '1.6rem', fontWeight: 600,
                                        color: '#0B1120', marginBottom: 8,
                                    }}>¡Recibido, {form.nombre}!</div>
                                    <p style={{
                                        fontFamily: 'DM Sans, sans-serif',
                                        fontSize: '0.92rem', color: '#64748B',
                                        fontWeight: 300, lineHeight: 1.7,
                                    }}>
                                        Te contactamos en menos de 24 horas con una propuesta personalizada para tu proyecto.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                </div>


            </div>
        </section>
    )
}