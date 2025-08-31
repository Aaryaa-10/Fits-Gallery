import './style.css';
import { FaHeart } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import { useLikedLooks } from './LikedLooksContext';
function Winter() {
     const { likedLooks, toggleLike } = useLikedLooks();
    const fits = [
        {
            image: "winter.1.jpeg",
            id: 1,
            name: "Cozy Layers",
            items: ["Over-Coat", "Cardigan", "Jeans"]

        },
        {
            image: "winter.2.jpg",
            id: 2,
            name: "Frosty Glow",
            items: ["Cardigan", "Denims"]

        },
        {
            image: "winter.3.jpg",
            id: 3,
            name: "Himalayan Hug",
            items: ["Jacket","Woolen Cap","Pants"]

        },
        {
            image: "winter.4.jpg",
            id: 4,
            name: "Athleisure Vibe",
            items: ["Leather Jacket", "Pants"]

        },
        {
            image: "winter.5.jpg",
            id: 5,
            name: "Fleece N Flirt",
            items: ["Crop Sweater", "Plaid Mini Skirt", "Fleece", "Boots"]

        },
        {
            image: "winter.6.jpg",
            id: 6,
            name: "Knitted-Grace",
            items: ["Knit-Dress"]

        },
    ]
   
   return (
        <div className='page'>
            <h1 className='title'>The World Of Winter</h1>
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
                       </button>
                       <br /><br />
                       <Link to="/likedLooks">
                               <button className="go-liked-btn">Go to Liked Looks</button>
                             </Link>
                    </div>))
                }
            </div>
            
            
            




        </div>

    )
}
export default Winter;