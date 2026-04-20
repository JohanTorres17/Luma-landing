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
        <section id="faq" style={{
            padding: '100px 0',
            background: 'linear-gradient(180deg, #fff 0%, #F8FAFC 100%)',
        }}>
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-12 col-md-8 text-center">
                        <div className="section-label">FAQ</div>
                        <h2 className="section-title" style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            marginBottom: 16,
                        }}>
                            Preguntas <em>frecuentes</em>
                        </h2>
                        <p className="section-subtitle">
                            Resolvemos las dudas más comunes antes de que tengas que preguntar.
                        </p>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-12 col-lg-8">
                        {faqs.map((faq, i) => {
                            const isOpen = open === i
                            return (
                                <div
                                    key={i}
                                    style={{
                                        marginBottom: 8,
                                        borderRadius: '12px',
                                        background: isOpen ? 'rgba(37,99,235,0.02)' : 'transparent',
                                        border: `1px solid ${isOpen ? 'rgba(37,99,235,0.1)' : '#F1F5F9'}`,
                                        overflow: 'hidden',
                                        transition: 'all 0.3s ease',
                                    }}
                                >
                                    <button
                                        onClick={() => {
                                            const nowOpen = isOpen ? null : i
                                            setOpen(nowOpen)
                                            if (nowOpen !== null) {
                                                window.dataLayer = window.dataLayer || []
                                                window.dataLayer.push({
                                                    event: 'faq_interaction',
                                                    faq_question: faq.q,
                                                    faq_index: i + 1,
                                                })
                                            }
                                        }}
                                        style={{
                                            width: '100%', background: 'none', border: 'none',
                                            padding: '22px 24px', cursor: 'pointer',
                                            display: 'flex', justifyContent: 'space-between',
                                            alignItems: 'center', gap: 16, textAlign: 'left',
                                        }}
                                    >
                                        <span style={{
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: '0.95rem', fontWeight: 500,
                                            color: isOpen ? '#2563EB' : '#0B1120',
                                            transition: 'color 0.2s',
                                        }}>{faq.q}</span>
                                        <div style={{
                                            width: 30, height: 30, borderRadius: '50%',
                                            flexShrink: 0,
                                            background: isOpen
                                                ? 'linear-gradient(135deg, #2563EB, #6366F1)'
                                                : '#F1F5F9',
                                            display: 'flex', alignItems: 'center',
                                            justifyContent: 'center',
                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                                        }}>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                <line x1="6" y1="1" x2="6" y2="11" stroke={isOpen ? '#fff' : '#64748B'} strokeWidth="1.5" strokeLinecap="round" />
                                                <line x1="1" y1="6" x2="11" y2="6" stroke={isOpen ? '#fff' : '#64748B'} strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                        </div>
                                    </button>
                                    <div style={{
                                        maxHeight: isOpen ? 250 : 0,
                                        overflow: 'hidden',
                                        transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    }}>
                                        <p style={{
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: '0.88rem', color: '#64748B',
                                            lineHeight: 1.7, fontWeight: 300,
                                            padding: '0 24px 22px',
                                            margin: 0,
                                        }}>{faq.a}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}