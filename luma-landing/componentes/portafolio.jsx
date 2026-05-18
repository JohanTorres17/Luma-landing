const proyectos = [
    {
        nombre: 'Evolet 96',
        tipo: 'E-commerce',
        url: 'https://evolet96.com',
        imagen: '/src/assets/evolet96.jpg',
        descripcion: 'Tienda en línea desarrollada para // TODO: descripción breve del negocio/producto de Evolet 96.',
        resultado: null, // TODO: completar con dato real después de correr PageSpeed Insights.
    },
    null,
    null,
].filter(Boolean)

export default function Portafolio() {
    return (
        <section id="portafolio" style={{
            padding: '100px 0',
            background: '#fff',
            position: 'relative',
        }}>
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-12 col-md-8 text-center">
                        <div className="section-label">PORTAFOLIO</div>
                        <h2 className="section-title" style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            marginBottom: 16,
                        }}>
                            Proyectos que hablan<br /><em>por sí solos</em>
                        </h2>
                        <p className="section-subtitle">
                            Cada sitio que construimos está en producción y es verificable.
                        </p>
                    </div>
                </div>

                <div className="row g-4">
                    {proyectos.map((proyecto) => (
                        <div key={proyecto.nombre} className="col-12 col-md-6 col-lg-4">
                            <div style={{
                                background: '#FAFBFD',
                                borderRadius: '18px',
                                overflow: 'hidden',
                                border: '1px solid #F1F5F9',
                                height: '100%',
                                boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
                                transition: 'all 0.3s ease',
                            }}>
                                <div style={{
                                    position: 'relative',
                                    aspectRatio: '16 / 10',
                                    overflow: 'hidden',
                                    background: 'linear-gradient(135deg, rgba(37,99,235,0.08), rgba(99,102,241,0.05))',
                                }}>
                                    <img
                                        src={proyecto.imagen}
                                        alt={`Screenshot del proyecto ${proyecto.nombre}`}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            display: 'block',
                                        }}
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        top: 14,
                                        left: 14,
                                        padding: '6px 10px',
                                        borderRadius: 999,
                                        fontFamily: 'DM Mono, monospace',
                                        fontSize: '0.58rem',
                                        letterSpacing: '0.12em',
                                        color: '#0B1120',
                                        background: 'rgba(255,255,255,0.88)',
                                        backdropFilter: 'blur(8px)',
                                    }}>{proyecto.tipo}</div>
                                </div>

                                <div style={{ padding: '26px' }}>
                                    <div style={{
                                        fontFamily: 'Cormorant Garamond, serif',
                                        fontSize: '1.35rem',
                                        fontWeight: 600,
                                        color: '#0B1120',
                                        marginBottom: 8,
                                    }}>{proyecto.nombre}</div>
                                    <p style={{
                                        fontFamily: 'DM Sans, sans-serif',
                                        fontSize: '0.88rem',
                                        color: '#64748B',
                                        lineHeight: 1.7,
                                        fontWeight: 300,
                                        marginBottom: 18,
                                    }}>{proyecto.descripcion}</p>

                                    {proyecto.resultado && (
                                        <div style={{
                                            fontFamily: 'DM Mono, monospace',
                                            fontSize: '0.65rem',
                                            letterSpacing: '0.08em',
                                            color: '#2563EB',
                                            marginBottom: 18,
                                        }}>{proyecto.resultado}</div>
                                    )}

                                    <a
                                        href={proyecto.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: '0.85rem',
                                            fontWeight: 500,
                                            color: '#2563EB',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        Ver sitio en vivo →
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-center mt-4 mb-0" style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.9rem',
                    color: '#64748B',
                    fontWeight: 300,
                }}>
                    ¿Quieres ver más trabajo? Escríbenos — mostramos proyectos adicionales en llamada.
                </p>
            </div>
        </section>
    )
}
