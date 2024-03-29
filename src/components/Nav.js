import { useEffect, useState } from 'react';
import './Nav.css';

export default function Nav() {

    const [show, setShow ] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setShow(window.scrollY > 200 )
        })
    }, []);
  return (
    <div className={`nav-container ${show && "nav-container-black"}`}>
        <img className="nav-logo" src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt='Netflix' /> 
        <img className="nav-avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsVAeFlYeYOEUzb3TV1ML91_LPkkFML5lRQcMdr9nQu2CqO-WzT-RLmkM5_cOKvkaBkI&usqp=CAU" alt="user" />
    </div>
  )
}
