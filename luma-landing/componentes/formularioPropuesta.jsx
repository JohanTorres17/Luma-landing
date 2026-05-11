export default function FormularioPropuesta({ id }) {
  return (
    <div id={id} style={{ maxWidth: 540, margin: '28px auto 0', textAlign: 'center' }}>
      <style>{`
        .fp-shell { display:grid; gap:14px; background:#fff; padding:24px; border-radius:16px; border:1px solid #C0CCD9; box-shadow:0 16px 48px rgba(2,6,23,0.22); }
        .fp-label { font-size:16px; font-weight:700; color:#3c4858; text-align:left; font-family:Helvetica, sans-serif; }
        .fp-spec { font-size:12px; color:#8390A4; text-align:left; font-family:Helvetica, sans-serif; }
        .fp-inputWrap { position:relative; }
        .fp-input { width:100%; box-sizing:border-box; padding:14px 14px 14px 44px; border:1px solid #C0CCD9; border-radius:10px; font-size:16px; font-family:Helvetica, sans-serif; color:#0f172a; }
        .fp-input::placeholder { color:#c0ccda; }
        .fp-input:focus { outline:none; border-color:#042c6b; box-shadow:0 0 0 4px rgba(4,44,107,0.12); }
        .fp-icon { position:absolute; left:12px; top:50%; transform:translateY(-50%); width:20px; height:20px; pointer-events:none; }
        .fp-btn { width:100%; padding:14px 20px; border-radius:10px; background:#042c6b; color:#fff; border:none; cursor:pointer; font-size:16px; font-weight:700; font-family:Futura, sans-serif; box-shadow:0 10px 22px rgba(4,44,107,0.2); transition:transform .14s ease, box-shadow .14s ease, opacity .14s ease; }
        .fp-btn:hover:not(:disabled) { transform:translateY(-1px); box-shadow:0 14px 28px rgba(4,44,107,0.26); }
        .fp-btn:disabled { opacity:0.65; cursor:not-allowed; transform:none; }
        .fp-note { font-size:13px; color:#6b7280; text-align:left; font-family:Helvetica, sans-serif; }
      `}</style>

      <form
        id="sib-form"
        className="fp-shell"
        method="POST"
        action="https://a8ece538.sibforms.com/serve/MUIFAOaOYBPo2kho53nICMKbCjU0LrdKnjC6qgJdZJ0J-bxNHAcYXG4E1fq9e0lv_5wSu0YpYAtptHqP3CsyowCuPNxZWPObo1NOLJO2Vrfk8jt4lmQY__w0JrAPmKxiPV-yd38UGTOpBStnnuhrDzYgoO1KPJW1m-_Q7gRSvoiYxwhHJhUUn5N0TAqDmh92yyjsiNlYEugSIIcgrw=="
        data-type="subscription"
        aria-label="Formulario de suscripción"
      >
        <div style={{ textAlign: 'left' }}>
          <div className="fp-label">Introduce tu dirección de e-mail para suscribirte</div>
          <div className="fp-spec" style={{ marginTop: 8 }}>Introduce tu dirección de e-mail para suscribirte. Ej.: abc@xyz.com</div>
        </div>

        <div className="fp-inputWrap">
          <svg className="fp-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M3 6.5v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-11" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 6.5l9 6 9-6" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <input id="EMAIL" name="EMAIL" type="email" autoComplete="email" placeholder="EMAIL" required className="fp-input" />
        </div>

        <button type="submit" className="fp-btn">SUSCRIBIRSE</button>

        <input type="text" name="email_address_check" value="" className="input--hidden" aria-hidden="true" tabIndex={-1} readOnly />
        <input type="hidden" name="locale" value="es" />

        <div className="fp-note">Protegemos tu información. No compartimos tus datos.</div>
      </form>
    </div>
  )
}
