import toast from "react-hot-toast";
const getStoredWishlistBook  = () =>{
  const storedBook = localStorage.getItem('wishlist-books-data');
  if(storedBook){
    return JSON.parse(storedBook);
  }
  return [];
}

const saveWishlistBooks = id =>{
  const storedBooks = getStoredWishlistBook(id);
  const exists = storedBooks.find(storeId => storeId ===id);
  if(!exists){
    storedBooks.push(id);
    localStorage.setItem('wishlist-books-data', JSON.stringify(storedBooks));
    toast.success('Added Wishlist Book')

  }

  if(exists){
    return toast.error('Already Wishlist Book Added')
  }
}

export {getStoredWishlistBook, saveWishlistBooks} 