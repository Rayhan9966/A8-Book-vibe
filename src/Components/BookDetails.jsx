import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveBooks } from "../utils/localStorage";
import { saveWishlistBooks } from "../utils/localStorageWishlist";


const BookDetails = () => {
  const books = useLoaderData();
  const {id} = useParams();
  const idInt = parseInt(id);
  const Book = books.find(book => book.id == idInt);
  const { author,
    bookImage,
    
    bookName,
    category,
    publisher,
    rating,
    review,
    tags,
    totalPages,
    yearOfPublishing,} = Book;

    const handleBookRead = Book =>{
      saveBooks(idInt);
      
    }
// console.log(idInt);
    const handleWishlistBook = Book =>{
      saveWishlistBooks(idInt);
    }
  
  return (
    <div>
      <div className="hero ">
  <div className="hero-content flex-col md:flex-row gap-5 ">
    <div className="flex-1 bg-base-200 rounded-3xl">
    <img src={bookImage} className="h-[500px] w-[450px]  rounded-lg shadow-2xl p-8" />
    </div>
    <div className="flex-1 bg-base-200 rounded-3xl space-y-2 h-[500px] p-5">
      <h1 className="text-5xl font-bold">{bookName}</h1>
      <h5> By : {author}</h5>
      <hr className="border-dashed border-gray-400" />
      <h5>{category}</h5>
      <hr className="border-dashed border-gray-400"/>
      <p className="py-6">Review : {review}</p>
      <div className='flex font-bold gap-10'>
        Tag : 
        <p className="text-[#23BE0A] ">{tags[0]}</p>
        <p  className="text-[#23BE0A] ">{tags[1]}</p>
      </div>
      <hr className="border-dashed border-gray-400"/>
      <p>Number of pages : <span className="font-bold">{totalPages}</span></p>
      <p>Publisher : <span className="font-bold">{publisher}</span></p>
      <p>Year of Publishing : <span className="font-bold">{yearOfPublishing}</span></p>
      <p>Rating : <span className="font-bold">{rating}</span></p>

      <div className="flex gap-5 ">
      <button onClick={() => handleBookRead(Book)} className="btn font-bold border-gray-400">Read</button>
      <button onClick={() => handleWishlistBook(Book)} className="btn font-bold border-gray-400">Wishlist</button>
      </div>
    </div>
  </div>
</div>
<ToastContainer></ToastContainer>
    </div>
  );
};

export default BookDetails;