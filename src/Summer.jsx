import './style.css';
import { FaHeart } from 'react-icons/fa';

import {Link} from 'react-router-dom';
import { useLikedLooks } from './LikedLooksContext';
function Summer() {
   const { likedLooks, toggleLike } = useLikedLooks();
    const fits = [
        {
            image: "summer.1.jpg",
            id: 1,
            name: "Summer-Breeze",
            items: ["White-CropTop", "Boho Skirts/Pyjamas"]

        },
        {
            image: "summer.2.jpg",
            id: 2,
            name: "Street Chic",
            items: ["CropTop", "Denim Shorts"]

        },
        {
            image: "summer.3.jpg",
            id: 3,
            name: "Daylight Grace",
            items: ["Midis"]

        },
        {
            image: "summer.4.jpg",
            id: 4,
            name: "Urban Ease",
            items: ["Over-sized T-shirts", "Baggy Jeans"]

        },
        {
            image: "summer.5.jpeg",
            id: 5,
            name: "Sleek Statement",
            items: ["JumpSuit"]

        },
        {
            image: "summer.6.jpg",
            id: 6,
            name: "Sweet-Heart Fit",
            items: ["Skirt-Top"]

        },
    ]
     
   return (
       <div>
           <h1 className='title'>The World Of Summer</h1>
           <div className='container looks'>
               {
                   fits.map((fit) => (<div key={fit.name} className='card'>
                       <img className='fit-img' src={`/images/${fit.image}`} alt={fit.name} />
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
                       </button>
                       <br /><br />
                       <Link to="/likedLooks">
                               <button  className="go-liked-btn">Go to Liked Looks</button>
                             </Link>
                   </div>))


               }
           </div>
           






        </div>

    )
}
export default Summer;