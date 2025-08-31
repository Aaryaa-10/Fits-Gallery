import './style.css';
import { FaHeart } from 'react-icons/fa';

import {Link} from 'react-router-dom';

import { useLikedLooks } from './LikedLooksContext';
function Party() {
     const { likedLooks, toggleLike } = useLikedLooks();
    const fits = [
        {
            image: "party.1.jpg",
            id: 1,
            name: "Midnight Sparkle",
            items: ["Mini Dress"]

        },
        {
            image: "party.2.jpg",
            id: 2,
            name: "Dazzle Fit",
            items: ["Satin Cami Top", "Denims"]

        },
        {
            image: "party.3.jpeg",
            id: 3,
            name: "EveryDay Glam",
            items: ["Midi Dress"]

        },
        {
            image: "party.4.jpg",
            id: 4,
            name: "Floral Fantasy",
            items: ["Floral Gown"]

        },
        {
            image: "party.5.jpeg",
            id: 5,
            name: "Silky Street",
            items: ["Mermaid Gown"]

        },
        {
            image: "party.6.jpg",
            id: 6,
            name: "Coastal Charm",
            items: ["Maxi Dress"]

        },
    ]
   
   return (
        <div>
            <h1 className='title'>The World Of Party Wear </h1>
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
                               <button  className="go-liked-btn">Go to Liked Looks</button>
                             </Link>
                    </div>))
                }
            </div>
           
               
        
            
            




        </div>

    )
}
export default Party;