
import Navbar from '../components/Headers/Navbar'
import Header from '../components/Headers/Header'
import Showmenus from '../components/shomenus'
import Footer from '../components/footer/Footer'
import Modal from './MakeMenu'
import MakeMenuItem from './MakeMenuItem'


const Home = () => {
  return (
    <div>
        <div className=''>
            <Navbar/>
            
            
        </div>
        <div>
                <Header/>
        </div>
        <div className='bg-black' >
            <Showmenus/>

        </div>
        <div className='bg-black'>
            <Modal/>
            <MakeMenuItem/>
        </div>
        <div className='bg-black'>
            <Footer/>
        </div>
    </div>
  )
}

export default Home