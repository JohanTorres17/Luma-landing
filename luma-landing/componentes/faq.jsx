import { useState } from 'react'

const faqs = [
    { q: '¿Cuánto tiempo tarda en estar listo mi sitio?', a: 'Una landing page la entregamos en 7 días hábiles. Un sitio web completo entre 2 y 4 semanas dependiendo del alcance. Siempre acordamos los tiempos antes de empezar y los cumplimos.' },
    { q: '¿Necesito saber de tecnología para trabajar con ustedes?', a: 'Para nada. Nos encargamos de todo el proceso técnico. Tú solo nos cuentas tu negocio y lo que quieres lograr. Nosotros traducimos eso en código y diseño.' },
    { q: '¿Qué pasa si no me gusta el diseño?', a: 'Incluimos hasta 3 rondas de revisiones sin costo adicional. Nuestro proceso de aprobación por etapas garantiza que nunca habrá sorpresas al final. Tú apruebas antes de que avancemos.' },
    { q: '¿El precio incluye el dominio y el hosting?', a: 'El desarrollo está separado del hosting y dominio para que tengas control total de tu sitio. Te asesoramos en qué contratar y cómo configurarlo — generalmente cuesta entre $50 y $150 USD al año.' },
    { q: '¿Puedo actualizar el contenido yo mismo después?', a: 'Sí. Dependiendo del proyecto usamos sistemas que te permiten editar textos e imágenes sin tocar código. Si prefieres que nos encarguemos, también ofrecemos planes de mantenimiento mensuales.' },
    { q: '¿Trabajan con clientes fuera de Colombia?', a: 'Sí, trabajamos con clientes en toda Latinoamérica y también en España y Estados Unidos. Todo nuestro proceso es 100% remoto y funciona perfectamente a distancia.' },
]

export default function FAQ() {
    const [open, setOpen] = useState(null)

    return (
        <section id="faq" style={{ padding: '96px 0', background: '#fff' }}>
            <div className="container">

                <div className="row justify-content-center mb-5">
                    <div className="col-12 col-md-8 text-center">
                        <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.2em', color: '#2563EB', display: 'block', marginBottom: 12 }}>
                            FAQ
                        </span>
                        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: '#0D1B2A', lineHeight: 1.1, marginBottom: 16 }}>
                            Preguntas <em style={{ color: '#2563EB' }}>frecuentes</em>
                        </h2>
                        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', color: '#6B7A8D', fontWeight: 300 }}>
                            Resolvemos las dudas más comunes antes de que tengas que preguntar.
                        </p>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-12 col-lg-8">
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                style={{
                                    borderBottom: '1px solid #EEF2F7',
                                    overflow: 'hidden',
                                }}
                            >
                                <button
                                    onClick={() => setOpen(open === i ? null : i)}
                                    style={{
                                        width: '100%', background: 'none', border: 'none',
                                        padding: '22px 0', cursor: 'pointer',
                                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                        gap: 16, textAlign: 'left',
                                    }}
                                >
                                    <span style={{
                                        fontFamily: 'DM Sans, sans-serif',
                                        fontSize: '0.95rem', fontWeight: 500,
                                        color: open === i ? '#2563EB' : '#0D1B2A',
                                        transition: 'color 0.2s',
                                    }}>{faq.q}</span>
                                    <div style={{
                                        width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                                        border: `1.5px solid ${open === i ? '#2563EB' : '#DDE3EC'}`,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        transition: 'all 0.2s',
                                        transform: open === i ? 'rotate(45deg)' : 'rotate(0)',
                                    }}>
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <line x1="6" y1="1" x2="6" y2="11" stroke={open === i ? '#2563EB' : '#6B7A8D'} strokeWidth="1.5" strokeLinecap="round" />
                                            <line x1="1" y1="6" x2="11" y2="6" stroke={open === i ? '#2563EB' : '#6B7A8D'} strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                </button>
                                <div style={{
                                    maxHeight: open === i ? 200 : 0,
                                    overflow: 'hidden',
                                    transition: 'max-height 0.35s ease',
                                }}>
                                    <p style={{
                                        fontFamily: 'DM Sans, sans-serif',
                                        fontSize: '0.88rem', color: '#6B7A8D',
                                        lineHeight: 1.7, fontWeight: 300,
                                        paddingBottom: 22, margin: 0,
                                    }}>{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}