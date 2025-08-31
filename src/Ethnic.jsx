import './style.css';
import { FaHeart } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import { useLikedLooks } from './LikedLooksContext';
function Ethnic() {
    const { likedLooks, toggleLike } = useLikedLooks();
    const fits = [
        {
            image: "ethnic.1.jpg",
            id: 1,
            name: "Timeless Tides",
            items: ["Saree"]

        },
        {
            image: "ethnic.2.jpg",
            id: 2,
            name: "Royal Radiance",
            items: ["Lehenga Set"]

        },
        {
            image: "ethnic.3.jpg",
            id: 3,
            name: "Charming Chikankari",
            items: ["Suit Set"]

        },
        {
            image: "ethnic.5.jpg",
            id: 4,
            name: "Ethereal Fusion",
            items: ["Fusion Mermaid Skirt Set", "Embroidered Shrug"]

        },
        {
            image: "ethnic.6.jpg",
            id: 5,
            name: "Desert Dream",
            items: ["Gypsy Skirt", "Crop Top", "Oxidised Jewellery"]

        },
        {
            image: "ethnic.7.jpg",
            id: 6,
            name: "Kurta Chronicle",
            items: ["kurti", "Long Skirt", "Dupatta"]

        },
    ]
    
   return (
        <div>
            <h1 className='title'>The World Of Ethnic</h1>
            <div className='container looks'>
                {
                    fits.map((fit) => (<div key={fit.id} className='card'>
                        <img className='fit-img' src={`/images/${fit.image}`} alt={fit.id} />
                        <h3>{fit.name}</h3>
                        <ul>
                            {fit.items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <button
                           className='like-btn'
                           onClick={() => toggleLike(fit)}
                       >
                           <FaHeart color={likedLooks.some(item => item.id === fit.id) ? 'red' : 'grey'} />
                       </button><br /><br />
                       <Link to="/likedLooks">
        <button className="go-liked-btn">Go to Liked Looks</button>
      </Link>

                    </div>))
                }
            </div>
            




        </div>

    )
}
export default Ethnic;