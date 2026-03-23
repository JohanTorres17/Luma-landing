const testimonios = [
    {
        nombre: 'María Fernanda Torres',
        cargo: 'Fundadora · EcoVerde',
        texto: 'LUMA transformó nuestra presencia online. En el primer mes después del lanzamiento triplicamos las consultas de clientes. El diseño es exactamente lo que necesitábamos: elegante pero que convierte.',
        rating: 5,
        inicial: 'M',
        color: '#2563EB',
    },
    {
        nombre: 'Andrés Camilo Reyes',
        cargo: 'CEO · TechStart Medellín',
        texto: 'Lo que más valoro es que LUMA entiende el negocio antes de escribir una línea de código. La landing page que hicieron para nuestra app logró un 40% de conversión en la lista de espera.',
        rating: 5,
        inicial: 'A',
        color: '#0D1B2A',
    },
    {
        nombre: 'Valentina Moreno',
        cargo: 'Directora · Clínica Estética VM',
        texto: 'Entregaron en exactamente 7 días como prometieron. El sitio es rápido, se ve increíble en celular y el formulario de citas ha reducido las llamadas administrativas un 60%.',
        rating: 5,
        inicial: 'V',
        color: '#1E3050',
    },
    {
        nombre: 'Carlos Betancur',
        cargo: 'Gerente · Inmobiliaria Betancur',
        texto: 'Varios estudios me habían prometido lo mismo. LUMA fue el único que cumplió. El sitio web de propiedades carga en menos de 1 segundo y Google nos tiene en primera página.',
        rating: 5,
        inicial: 'C',
        color: '#162236',
    },
]

const Stars = ({ count = 5 }) => (
    <div className="d-flex gap-1 mb-3">
        {Array.from({ length: count }).map((_, i) => (
            <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F2C94E">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
        ))}
    </div>
)

export default function Testimonios() {
    return (
        <section id="testimonios" style={{ padding: '96px 0', background: '#fff' }}>
            <div className="container">

                {/* Header */}
                <div className="row justify-content-center mb-5">
                    <div className="col-12 col-md-8 text-center">
                        <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.2em', color: '#2563EB', display: 'block', marginBottom: 12 }}>
                            TESTIMONIOS
                        </span>
                        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: '#0D1B2A', lineHeight: 1.1, marginBottom: 16 }}>
                            Lo que dicen<br /><em style={{ color: '#2563EB' }}>nuestros clientes</em>
                        </h2>
                        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', color: '#6B7A8D', fontWeight: 300 }}>
                            Resultados reales de negocios colombianos que confiaron en LUMA.
                        </p>
                    </div>
                </div>

                {/* Testimonios — 2 columnas Bootstrap */}
                <div className="row g-4">
                    {testimonios.map((t, i) => (
                        <div key={i} className="col-12 col-md-6">
                            <div style={{
                                padding: '32px', borderRadius: 12,
                                border: '1px solid #EEF2F7', background: '#FAFBFC',
                                height: '100%',
                                transition: 'border-color 0.2s, box-shadow 0.2s',
                            }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.borderColor = '#DDE3EC'
                                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(13,27,42,0.06)'
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.borderColor = '#EEF2F7'
                                    e.currentTarget.style.boxShadow = 'none'
                                }}
                            >
                                <Stars count={t.rating} />
                                <p style={{
                                    fontFamily: 'Cormorant Garamond, serif',
                                    fontSize: '1.1rem', fontStyle: 'italic',
                                    color: '#1A2738', lineHeight: 1.6,
                                    marginBottom: 24, fontWeight: 400,
                                }}>
                                    "{t.texto}"
                                </p>
                                <div className="d-flex align-items-center gap-3">
                                    <div style={{
                                        width: 44, height: 44, borderRadius: '50%',
                                        background: t.color,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontFamily: 'Cormorant Garamond, serif',
                                        fontSize: '1.2rem', fontWeight: 700, color: '#fff',
                                        flexShrink: 0,
                                    }}>{t.inicial}</div>
                                    <div>
                                        <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.88rem', fontWeight: 600, color: '#0D1B2A' }}>{t.nombre}</div>
                                        <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', color: '#6B7A8D', fontWeight: 300 }}>{t.cargo}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Social proof numbers */}
                <div className="row g-4 mt-4 pt-4" style={{ borderTop: '1px solid #EEF2F7' }}>
                    {[
                        { val: '40+', label: 'Proyectos entregados' },
                        { val: '100%', label: 'Clientes satisfechos' },
                        { val: '7 días', label: 'Tiempo promedio de entrega' },
                        { val: '4.9★', label: 'Calificación promedio' },
                    ].map((s, i) => (
                        <div key={i} className="col-6 col-md-3 text-center">
                            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.2rem', fontWeight: 700, color: '#0D1B2A' }}>{s.val}</div>
                            <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem', color: '#6B7A8D', fontWeight: 300 }}>{s.label}</div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}