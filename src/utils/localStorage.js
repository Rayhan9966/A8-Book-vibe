import toast from "react-hot-toast";
const getStoredBook = () =>{
  const storedBook = localStorage.getItem('books-data');
  if(storedBook){
    return JSON.parse(storedBook);
  }
  return [];
}

const saveBooks = id =>{
  const storedBooks = getStoredBook(id);
  const exists = storedBooks.find(storeId => storeId ===id);
  if(!exists){
    storedBooks.push(id);
    localStorage.setItem('books-data', JSON.stringify(storedBooks));
   toast.success('Added Book Read Mark')


  }
  if(exists){
    return toast.error('Already Book Read Marked')
  }
}

export {getStoredBook, saveBooks} 