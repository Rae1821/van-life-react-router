import { Link } from 'react-router-dom'

export default function Home() {
    return (

        <div className="homepage">
            <div className="main-content">
                <h1>You got the travel plans, we got the travel vans.</h1>
                <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                <Link to="vans" className="link-btn">Find your van</Link>
            </div>
            
            <footer>
                <p>©2022 #VANLIFE</p>
            </footer>
        </div>
              
           
    )
}