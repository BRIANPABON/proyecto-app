import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (    
      <div className='outer-container'>        
        <div className='inner-container'>  
          <main>
            <h1 className='home-title'>Proyecto - Rick & Morty</h1>
            <div className='home-buttons'>              
              <Link to='/characters'><button>Characters</button></Link>
              <Link to='/contact'><button>Contact</button></Link>
            </div>
          </main>
        </div>
      </div>
  );
}