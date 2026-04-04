const testimonios = [
    {
        nombre: 'María Fernanda Torres',
        cargo: 'Fundadora · EcoVerde',
        texto: 'LUMA transformó nuestra presencia online. En el primer mes después del lanzamiento triplicamos las consultas de clientes. El diseño es exactamente lo que necesitábamos: elegante pero que convierte.',
        rating: 5,
        inicial: 'M',
        gradient: 'linear-gradient(135deg, #2563EB, #6366F1)',
    },
    {
        nombre: 'Andrés Camilo Reyes',
        cargo: 'CEO · TechStart Medellín',
        texto: 'Lo que más valoro es que LUMA entiende el negocio antes de escribir una línea de código. La landing page que hicieron para nuestra app logró un 40% de conversión en la lista de espera.',
        rating: 5,
        inicial: 'A',
        gradient: 'linear-gradient(135deg, #0B1120, #1A2540)',
    },
    {
        nombre: 'Valentina Moreno',
        cargo: 'Directora · Clínica Estética VM',
        texto: 'Entregaron en exactamente 7 días como prometieron. El sitio es rápido, se ve increíble en celular y el formulario de citas ha reducido las llamadas administrativas un 60%.',
        rating: 5,
        inicial: 'V',
        gradient: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
    },
    {
        nombre: 'Carlos Betancur',
        cargo: 'Gerente · Inmobiliaria Betancur',
        texto: 'Varios estudios me habían prometido lo mismo. LUMA fue el único que cumplió. El sitio web de propiedades carga en menos de 1 segundo y Google nos tiene en primera página.',
        rating: 5,
        inicial: 'C',
        gradient: 'linear-gradient(135deg, #3B82F6, #2563EB)',
    },
]

const Stars = ({ count = 5 }) => (
    <div className="d-flex gap-1 mb-3">
        {Array.from({ length: count }).map((_, i) => (
            <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
        ))}
    </div>
)

export default function Testimonios() {
    return (
        <section id="testimonios" style={{
            padding: '100px 0',
            background: '#fff',
            position: 'relative',
        }}>
            <div className="container">
                {/* Header */}
                <div className="row justify-content-center mb-5">
                    <div className="col-12 col-md-8 text-center">
                        <div className="section-label">TESTIMONIOS</div>
                        <h2 className="section-title" style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            marginBottom: 16,
                        }}>
                            Lo que dicen<br /><em>nuestros clientes</em>
                        </h2>
                        <p className="section-subtitle">
                            Resultados reales de negocios colombianos que confiaron en LUMA.
                        </p>
                    </div>
                </div>

                {/* Testimonials grid */}
                <div className="row g-4">
                    {testimonios.map((t, i) => (
                        <div key={i} className="col-12 col-md-6">
                            <div
                                style={{
                                    padding: '36px', borderRadius: '18px',
                                    border: '1px solid #F1F5F9',
                                    background: '#FAFBFD',
                                    height: '100%',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.borderColor = 'rgba(37,99,235,0.12)'
                                    e.currentTarget.style.boxShadow = '0 16px 48px rgba(11,17,32,0.06)'
                                    e.currentTarget.style.transform = 'translateY(-4px)'
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.borderColor = '#F1F5F9'
                                    e.currentTarget.style.boxShadow = 'none'
                                    e.currentTarget.style.transform = 'translateY(0)'
                                }}
                            >
                                {/* Decorative quote */}
                                <div style={{
                                    position: 'absolute', top: 16, right: 24,
                                    fontFamily: 'Cormorant Garamond, serif',
                                    fontSize: '5rem', fontWeight: 700, lineHeight: 1,
                                    background: 'linear-gradient(135deg, rgba(37,99,235,0.06), rgba(99,102,241,0.04))',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    pointerEvents: 'none', userSelect: 'none',
                                }}>"</div>

                                <Stars count={t.rating} />
                                <p style={{
                                    fontFamily: 'Cormorant Garamond, serif',
                                    fontSize: '1.08rem', fontStyle: 'italic',
                                    color: '#1E293B', lineHeight: 1.65,
                                    marginBottom: 28, fontWeight: 400,
                                    position: 'relative', zIndex: 1,
                                }}>
                                    "{t.texto}"
                                </p>
                                <div className="d-flex align-items-center gap-3">
                                    <div style={{
                                        width: 46, height: 46, borderRadius: '50%',
                                        background: t.gradient,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontFamily: 'Cormorant Garamond, serif',
                                        fontSize: '1.2rem', fontWeight: 700, color: '#fff',
                                        flexShrink: 0,
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                                    }}>{t.inicial}</div>
                                    <div>
                                        <div style={{
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: '0.88rem', fontWeight: 600, color: '#0B1120',
                                        }}>{t.nombre}</div>
                                        <div style={{
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: '0.75rem', color: '#64748B', fontWeight: 300,
                                        }}>{t.cargo}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats */}
                <div className="row g-4 mt-5 pt-4" style={{ borderTop: '1px solid #F1F5F9' }}>
                    {[
                        { val: '40+', label: 'Proyectos entregados' },
                        { val: '100%', label: 'Clientes satisfechos' },
                        { val: '7 días', label: 'Entrega promedio' },
                        { val: '4.9★', label: 'Calificación promedio' },
                    ].map((s, i) => (
                        <div key={i} className="col-6 col-md-3 text-center">
                            <div style={{
                                fontFamily: 'Cormorant Garamond, serif',
                                fontSize: '2.4rem', fontWeight: 700,
                                background: 'var(--gradient-blue)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                lineHeight: 1.2,
                            }}>{s.val}</div>
                            <div style={{
                                fontFamily: 'DM Sans, sans-serif',
                                fontSize: '0.8rem', color: '#64748B', fontWeight: 300,
                            }}>{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}