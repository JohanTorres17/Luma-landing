import { useState } from 'react'

export default function FormularioPropuesta({ id }) {
  const [status, setStatus] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    setSubmitting(true)
    setStatus('')
    try {
      const res = await fetch('/', { method: 'POST', body: data })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else setStatus('error')
    } catch (err) {
      setStatus('error')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div id={id} style={{ maxWidth: 520, margin: '28px auto 0', textAlign: 'center' }}>
      <style>{`
        .fp-card { display:grid; gap:12px; background:#fff; padding:22px; border-radius:14px; box-shadow:0 12px 40px rgba(2,6,23,0.28); }
        .fp-label { font-size:14px; font-weight:700; color:#0b1120; }
        .fp-input { padding:14px 14px 14px 44px; border-radius:10px; border:1px solid #eef2ff; font-size:15px; width:100%; box-sizing:border-box; }
        .fp-input:focus { outline:none; box-shadow:0 0 0 4px rgba(124,92,255,0.12); border-color: #7c5cff; }
        .fp-row { display:flex; gap:12px; align-items:center; justify-content:center }
        .fp-btn { padding:12px 20px; border-radius:12px; background:linear-gradient(90deg,#7c5cff,#5b8bff); color:#fff; border:none; cursor:pointer; font-weight:700; box-shadow:0 8px 24px rgba(124,92,255,0.18); transition:transform .14s ease, box-shadow .14s ease }
        .fp-btn:disabled { opacity:0.6; cursor:not-allowed; transform:none }
        .fp-btn:hover:not(:disabled){ transform:translateY(-2px) }
        .fp-note { font-size:13px; color:#475569 }
        .fp-icon { position:relative; left:10px; top:6px; width:20px; height:20px; opacity:0.9 }
        .fp-success { padding:12px; border-radius:10px; background:#e6ffef; color:#02502a }
        .fp-error { padding:12px; border-radius:10px; background:#ffe6e6; color:#7a1f1f }
      `}</style>

      <form
        name="propuesta"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="fp-card"
        aria-label="Formulario de propuesta"
      >
        <input type="hidden" name="form-name" value="propuesta" />
        <div style={{ display: 'none' }}>
          <label>
            Si eres humano, deja esto vacío: <input name="bot-field" />
          </label>
        </div>

        <div style={{ textAlign: 'left' }}>
          <div className="fp-label">Déjanos tu email</div>
          <div style={{ fontSize: 13, color: '#6b7280', marginTop: 6 }}>Recibirás una respuesta personalizada en menos de 48 horas.</div>
        </div>

        <div style={{ position: 'relative' }}>
          <svg className="fp-icon" viewBox="0 0 24 24" fill="none" style={{ position: 'absolute', left: 12, top: 12 }} aria-hidden>
            <path d="M3 6.5v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-11" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 6.5l9 6 9-6" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <input name="correo" type="email" placeholder="tu@ejemplo.com" required className="fp-input" />
        </div>

        <div className="fp-row">
          <button type="submit" className="fp-btn" disabled={submitting} aria-disabled={submitting}>
            {submitting ? 'Enviando...' : 'Obtener propuesta'}
          </button>
        </div>

        {status === 'success' && (
          <div role="status" className="fp-success">¡Gracias! Te contactaremos pronto.</div>
        )}
        {status === 'error' && (
          <div role="alert" className="fp-error">Ocurrió un error al enviar. Intenta de nuevo.</div>
        )}

        <div style={{ textAlign: 'left', marginTop: 6 }} className="fp-note">Protegemos tu información. No compartimos tus datos.</div>
      </form>
    </div>
  )
}
