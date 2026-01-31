import './App.css'
import HeroBanner from './components/HeroBanner'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductCatalog from './components/ProductCatalog'
import Breadcrumbs from './components/Breadcrumbs'

function App() {

  return (
    <>
      <Header />
      <Breadcrumbs />
      <div className='lg:px-20'>
        <HeroBanner />
        <ProductCatalog className="flex flex-col items-center" />
      </div>
      <Footer />
    </>
  )
}

export default App
