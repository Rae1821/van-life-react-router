import image54 from '..//images/image-54.png'
import { Link } from 'react-router-dom'


export default function About() {
    return (

        <div className="about-page-container">

            <img className="about-hero-img" src={image54} alt="about img" />

            <div className="about-page-content">
                <h1>Don't squeeze in a sedan when you could relax in a van</h1>
                
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                (Hitch costs extra 😉)
                </p>

                <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>

                <div className="about-page-cta">
                    <h2>Your destination is waiting.<br />Your van is ready.</h2>
                    <Link className="link-btn" to="/vans">Expore our vans</Link>
                </div>
            </div>

            <footer>
                <p>©2022 #VANLIFE</p>
            </footer>
        </div>
    )
}