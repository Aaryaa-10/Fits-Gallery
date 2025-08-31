# Fits World  

A **React-based fashion web app** that lets users explore outfits by categories (Summer, Winter, Beach Party, Ethnic, etc.), view curated looks, and save their favorites. Liked outfits are stored in **local storage** and accessible anytime in the **Liked Looks** page.  

---

## 🚀 Features  
- Category-based outfit browsing  
- Like and save looks (persisted via local storage)  
- Persistent favorites across sessions  
- Responsive and user-friendly UI  
- Built with React hooks and reusable components  

---

## Tech Stack  
- **Frontend**: React.js, JSX, CSS 
- **State Management**: React Hooks (`useState`, `useEffect`)  
- **Storage**: Browser Local Storage  
- **Build Tool**: Vite 

---

## Project Structure  
Fits-Gallery/
src/
 |___ components/    
 |___pages/          
 │   |__ Home.jsx    
 │   |__ LikedLooks.jsx  
 │   |__ Summer.jsx  
 │   |__ Winter.jsx  
 │   |__ Beach.jsx 
 |   |__ Party.jsx
 │   └── Ethnic.jsx  
 ├── context/        
 │   └── LikedLooksContext.jsx 
 |__ main.jsx 
 ├── App.jsx         
 └── style.css        


