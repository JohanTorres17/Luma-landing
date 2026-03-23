import Header from '../componentes/header.jsx'
import Hero from '../componentes/hero.jsx'
import Beneficios from '../componentes/beneficios.jsx'
import CTA1 from '../componentes/cta1.jsx'
import Explicacion from '../componentes/explicacion.jsx'
import Testimonios from '../componentes/testimonios.jsx'
import FAQ from '../componentes/faq.jsx'
import CTA2 from '../componentes/cta2.jsx'

import { PreFooter, Footer } from '../componentes/prefooterfooter.jsx'

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Beneficios />
      <CTA1 />
      <Explicacion />
      <Testimonios />
      <FAQ />
      <CTA2 />
      <PreFooter />
      <Footer />
    </div>
  )
}

export default App
