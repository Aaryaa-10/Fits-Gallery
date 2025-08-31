import { createContext, useContext, useState, useEffect } from "react";

// Create context
const LikedLooksContext = createContext(null);

// Provider component
function LikedLooksProvider({ children }) {
  const [likedLooks, setLikedLooks] = useState(() => {
    // Load from localStorage when app starts
    const saved = localStorage.getItem("likedLooks");
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever likedLooks changes
  useEffect(() => {
    localStorage.setItem("likedLooks", JSON.stringify(likedLooks));
  }, [likedLooks]);

  const toggleLike = (look) => {
    if (likedLooks.some((item) => item.id === look.id)) {
      setLikedLooks(likedLooks.filter((item) => item.id !== look.id));
    } else {
      setLikedLooks([...likedLooks, look]);
    }
  };

  return (
    <LikedLooksContext.Provider value={{ likedLooks, toggleLike }}>
      {children}
    </LikedLooksContext.Provider>
  );
}

// Default export for provider
export default LikedLooksProvider;

// Named export for hook
export function useLikedLooks() {
  const context = useContext(LikedLooksContext);
  if (!context) {
    throw new Error("useLikedLooks must be used inside a LikedLooksProvider");
  }
  return context;
}
