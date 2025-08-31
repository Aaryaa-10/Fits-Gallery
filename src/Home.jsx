import { Link } from 'react-router-dom';
import './style.css';
function Home() {
    return (
        <div ><h1 id='caption'>Pick an Outfit Category</h1>
            <div  className='container home'>
                <div className='cdivs'><h1 className='head'>Summer</h1>
                    <img className='image' src="/images/summer.jpg" alt="summer" />
                    <Link to="/summer"><button className='button'>Get Looks</button></Link>
                   

                </div>
                <div className='cdivs'><h1  className='head'>Winter</h1>
                    <img className='image' src="/images/winter.jpg" alt="summer" />
                    <Link to="/winter"><button className='button'>Get Looks</button></Link></div>

                <div className='cdivs'><h1  className='head'>Party</h1>
                    <img className='image' src="/images/party.jpg" alt="winter" />
                    <Link to="/party"><button className='button'>Get Looks</button></Link></div>

                <div className='cdivs'><h1  className='head'>Beach</h1>
                    <img className='image'src="/images/beach.jpg" alt="Beach" />
                    <Link to="/beach"><button className='button'>Get Looks</button></Link></div>

                <div className='cdivs'><h1  className='head'>Ethnic </h1>
                    <img className='image' src="/images/ehtnic.jpg" alt="Ethnic" />
                    <Link to="/ethnic">
                    <button className='button'>Get Looks</button></Link></div>

            </div>



        </div>

    )
}
export default Home;