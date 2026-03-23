import { useState } from 'react'

export default function CTA2() {
    const [form, setForm] = useState({ correo: '', tel: '' })
    const [sent, setSent] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (form.correo || form.tel) setSent(true)
    }

    return (
        <section style={{ padding: '80px 0', background: '#EEF2F7' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-8 text-center">
                        <h2 style={{
                            fontFamily: 'Cormorant Garamond, serif',
                            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                            fontWeight: 600, color: '#0D1B2A',
                            lineHeight: 1.15, marginBottom: 16,
                        }}>
                            ¿Tu competencia ya tiene un sitio que convierte.<br />
                            <em style={{ color: '#2563EB' }}>¿El tuyo también?</em>
                        </h2>
                        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', color: '#6B7A8D', fontWeight: 300, lineHeight: 1.7, marginBottom: 32 }}>
                            Cada día sin un sitio optimizado es un cliente que se va a la competencia. Déjanos tu info y te llamamos hoy.
                        </p>
                        {!sent ? (
                            <form onSubmit={handleSubmit} className="d-flex gap-2 justify-content-center flex-wrap">
                                <input
                                    type="email"
                                    placeholder="Tu correo"
                                    value={form.correo}
                                    onChange={e => setForm({ ...form, correo: e.target.value })}
                                    style={{ fontFamily: 'DM Sans, sans-serif', padding: '13px 18px', borderRadius: '4px', border: '1.5px solid #DDE3EC', fontSize: '0.9rem', outline: 'none', flex: '1 1 200px', maxWidth: 260 }}
                                    onFocus={e => e.target.style.borderColor = '#2563EB'}
                                    onBlur={e => e.target.style.borderColor = '#DDE3EC'}
                                />
                                <input
                                    type="tel"
                                    placeholder="O tu teléfono"
                                    value={form.tel}
                                    onChange={e => setForm({ ...form, tel: e.target.value })}
                                    style={{ fontFamily: 'DM Sans, sans-serif', padding: '13px 18px', borderRadius: '4px', border: '1.5px solid #DDE3EC', fontSize: '0.9rem', outline: 'none', flex: '1 1 160px', maxWidth: 200 }}
                                    onFocus={e => e.target.style.borderColor = '#2563EB'}
                                    onBlur={e => e.target.style.borderColor = '#DDE3EC'}
                                />
                                <button
                                    type="submit"
                                    style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.9rem', padding: '13px 24px', borderRadius: '4px', background: '#2563EB', color: '#fff', border: 'none', cursor: 'pointer' }}
                                >
                                    Me llaman hoy →
                                </button>
                            </form>
                        ) : (
                            <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', color: '#2563EB', fontWeight: 500 }}>✓ ¡Listo! Te contactamos hoy mismo.</div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}