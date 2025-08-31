import './style.css';
import { FaHeart } from 'react-icons/fa';

import {Link} from 'react-router-dom';
import { useLikedLooks } from './LikedLooksContext';
function Beach() {
     const { likedLooks, toggleLike } = useLikedLooks();
    const fits = [
        {
            image: "beach.1.jpg",
            id: 1,
            name: "Sunset Muse",
            items: ["Beachy Halter Dress"]

        },
        {
            image: "beach.2.jpg",
            id: 2,
            name: "Coral Kiss",
            items: ["Bikini"]

        },
        {
            image: "beach.3.jpg",
            id: 3,
            name: "Sandy Siren",
            items: ["Corset Co-ord"]

        },
        {
            image: "beach.4.jpg",
            id: 4,
            name: "Ocean Hourglass",
            items: ["Boho-Skirt", "Corset Crop Top"]

        },
        {
            image: "beach.5.jpg",
            id: 5,
            name: "Tide Set",
            items: ["Resort Set"]

        },
        {
            image: "beach.6.jpg",
            id: 6,
            name: "Urban Halter",
            items: ["Halter-Neck Top", "Ripped Jeans"]

        },
    ]

   return (
        <div>
            <h1 className='title'>The World Of Beach Wear</h1>
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
                           onClick={() => toggleLike(fit)}>
                           <FaHeart color={likedLooks.some(item => item.id === fit.id) ? 'red' : 'grey'} /> </button>
                           <Link to="/likedLooks"><br /><br />
        <button className="go-liked-btn">Go to Liked Looks</button>
      </Link>
                       
                    </div>))
                }
            </div>
            

            
            




        </div>

    )
}
export default Beach;