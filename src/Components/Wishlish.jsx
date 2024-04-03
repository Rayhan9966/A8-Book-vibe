import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishlistBook } from "../utils/localStorageWishlist";
import WishlistCard from "./WishlistCard";



const Wishlish = () => {
  const bookstored = useLoaderData();
  // console.log(bookstored);//ok
  const [showWishlistBooks, setShowWishlistBooks] = useState([]);

  useEffect(()=>{
  const storeWishlishIds = getStoredWishlistBook();
  // console.log(storeWishlishIds);
  if(bookstored){
    const  wishlistBookAdd = bookstored.filter(book =>
      storeWishlishIds.includes(parseInt(book.id))
      
    )
    setShowWishlistBooks(wishlistBookAdd);
    // console.log(wishlistBookAdd) 
   
  }
 
  }, []);
  
  // console.log(showWishlistBooks);
  return (
    <div>
      {
        showWishlistBooks.map(wishCard => <WishlistCard key={wishCard.id} wishCard={wishCard}></WishlistCard>)
      }
    </div>
  );
};

export default Wishlish;