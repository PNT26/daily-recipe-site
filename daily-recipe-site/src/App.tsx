import React, {useEffect} from 'react';
import NavBar from './components/nav-bar/nav-bar';
import Landing from './components/landing/landing';
import AOS from 'aos';
import './styles.scss';
import 'aos/dist/aos.css';

function App() {

    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, [])

  return (
    <>
        <div className="sticky top-0 z-50">
            <NavBar />
        </div>
        <Landing />
    </>
  );
}

export default App;
