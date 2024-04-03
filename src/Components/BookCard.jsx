import ratingImg from '/Frame.png';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const BookCard = ({book}) => {
  const {
    author,
    id,
    bookImage,
    bookName,
    category,
    rating,
   tags
  } = book;
  
  return (
    <Link to={`/bookdetails/${id}`} className="mb-4 transition hover:scale-105 focus">
      <div className="card w-96 bg-base-100 shadow-xl border-2 hover:border-gray-400">
  
  <div className=" p-6">
    <div className=" flex justify-center items-center bg-gray-200 rounded-2xl">
    <img src={bookImage} alt="Shoes" className="rounded-xl py-5" />
    </div>
  </div>

  <div className="card-body ">
    <div className='flex text-[#23BE0A]'>
      <p>{tags[0]}</p>
      <p>{tags[1]}</p>
    </div>
    <h2 className="card-title">{bookName}</h2>
    <p className='font-bold'>by : {author}</p>
    <hr className='border-dashed my-2' />
    <div className='flex justify-between'>
      <p>{category}</p>
      <p className='flex gap-4'>
        {rating} 
        <img src={ratingImg} alt="" />
      </p>
    </div>
    
  </div>
  </div>

    </Link>
  );
};
BookCard.propTypes ={
  book : PropTypes.object
}
export default BookCard;
