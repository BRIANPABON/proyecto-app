import './NavBar.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return(
        <div className='navbar-main'>
            <h2 className='navbar-title'> <Link to='/'>Rick & Morty project</Link></h2>
            <div className='navbar-buttons'>
                <Link to='/characters'><button>Characters</button></Link>
                <Link to='/contact'><button>Contact</button></Link>
            </div>
        </div>
        
    )
}