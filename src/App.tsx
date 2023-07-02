import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import './App.css';
import Obsession from './Obsession';
import image1 from './photos/image1.png'; 
import image2 from './photos/image2.jpg';
import image3 from './photos/image3.jpg';
import image4 from './photos/image4.jpg';
import image5 from './photos/image5.jpg';
import image6 from './photos/image6.jpg';
import image7 from './photos/image7.png';

function Home() {
  return (
    <div>
      <h1>hello 👋</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  )
}

function Projects() {
  return (
    <div>
      <h1>things I made</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  )
}

function App() {
  const images = [image1, image2, image3, image4, image5, image6, image7];
  const location = useLocation();
  const [currentImage, setCurrentImage] = useState(getRandomImage(images));

  function getRandomImage(images: string[]) {
    return images[Math.floor(Math.random() * images.length)];
  }

  useEffect(() => {
    setCurrentImage(getRandomImage(images));
  }, [location]);

  return (
    <div>
      <div className="App">
        <div className='nav'>
          <div className='stuck'>
            <div className='title'>
              <img src={currentImage} alt='logo' />
              <h3><Link to={"/"}><b>mano rajesh</b></Link></h3>
            </div>
            <h3><Link to={"/obsession"}>daily obsession</Link></h3>
            <h3><Link to={"/works"}>my work</Link></h3>
          </div>
        </div>
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/works' element={<Projects />} />
            <Route path='/obsession' element={<Obsession />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
