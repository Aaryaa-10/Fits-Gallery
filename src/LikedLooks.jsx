import { useLikedLooks } from "./LikedLooksContext";
import { FaTrash } from "react-icons/fa";

function LikedLooks() {
  const { likedLooks, toggleLike } = useLikedLooks();

  return (
    <div>
      <h1 className='head'>Your Liked Looks</h1>
      {likedLooks.length === 0 ? (
        <p>No liked looks yet.</p>
      ) : (
        <div className="liked-items">
       
          {likedLooks.map((look) => (
            <div> key={look.id} 
              <img className="liked-img"
                src={`/images/${look.image}`} 
                alt={look.name} 
                style={{ width: "100px", borderRadius: "8px" }} 
              />
              <span className="liked-name">{look.name}</span>

              
              <button 
                className="remove-btn" 
                onClick={() => toggleLike(look)} 
                style={{ marginLeft: "15px", cursor: "pointer", color: "red" }}
              >
                <FaTrash />
              </button>
              </div>

           
          ))}
          </div>
          
       
      )}
    </div>
  );
}

export default LikedLooks;
