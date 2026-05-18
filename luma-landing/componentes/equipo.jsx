import fotoFundador from '../src/assets/foto-fundador.jpeg'

export default function Equipo() {
    return (
        <section id="equipo" style={{
            padding: '100px 0',
            background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)',
            position: 'relative',
        }}>
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-12 col-md-8 text-center">
                        <div className="section-label">QUIÉNES SOMOS</div>
                        <h2 className="section-title" style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            marginBottom: 16,
                        }}>
                            El equipo detrás de LUMA
                        </h2>
                        <p className="section-subtitle">
                            Somos un estudio boutique en Bogotá. Trabajamos con un equipo selecto para garantizar calidad en cada proyecto.
                        </p>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-12 col-lg-8">
                        <div style={{
                            background: '#fff',
                            borderRadius: '20px',
                            border: '1px solid #EEF2F7',
                            padding: '28px',
                            boxShadow: '0 20px 60px rgba(11,17,32,0.06)',
                        }}>
                            <div className="row g-4 align-items-center">
                                <div className="col-12 col-md-5">
                                    <img
                                        src={fotoFundador}
                                        alt="Johan Torres — Fundador LUMA"
                                        style={{
                                            width: '100%',
                                            borderRadius: '16px',
                                            display: 'block',
                                            objectFit: 'cover',
                                            aspectRatio: '1 / 1',
                                            background: '#F8FAFC',
                                        }}
                                    />
                                </div>
                                <div className="col-12 col-md-7">
                                    <h3 style={{
                                        fontFamily: 'Cormorant Garamond, serif',
                                        fontSize: '1.7rem',
                                        fontWeight: 600,
                                        color: '#0B1120',
                                        marginBottom: 6,
                                    }}>Johan Torres </h3>
                                    <p style={{
                                        fontFamily: 'DM Sans, sans-serif',
                                        fontSize: '0.88rem',
                                        color: '#2563EB',
                                        fontWeight: 500,
                                        marginBottom: 18,
                                    }}>Fundador & Lead Developer</p>
                                    <p style={{
                                        fontFamily: 'DM Sans, sans-serif',
                                        fontSize: '0.92rem',
                                        color: '#64748B',
                                        lineHeight: 1.8,
                                        fontWeight: 300,
                                        marginBottom: 20,
                                    }}>
                                        2 años construyendo productos digitales en Colombia. Especializado en desarrollo web de alto rendimiento y diseño orientado a conversión.
                                    </p>
                                    <a
                                        href="https://www.linkedin.com/in/carlos-fernando-riaño-bedoya-156672334?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: '0.9rem',
                                            fontWeight: 500,
                                            color: '#2563EB',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        Ver perfil en LinkedIn →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-center mt-4 mb-0" style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.86rem',
                    color: '#64748B',
                    fontWeight: 300,
                }}>
                    Constituidos en Bogotá, Colombia · hola@luma.studio
                </p>
            </div>
        </section>
    )
}
