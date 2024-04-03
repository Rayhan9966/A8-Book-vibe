import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const ReadBookCard = ({readBook}) => {
  const {bookName, author, bookImage,
    yearOfPublishing, totalPages, tags, publisher, rating, category
     } = readBook;
  
  return (
    <div>
     <div className="hero bg-base-200 place-items-start mt-5 rounded-3xl">
        <div className="hero-content flex flex-col gap-10  md:flex-row">
          <img
            src={bookImage}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className=" flex-1">
            <h1 className="text-3xl font-bold">{bookName}</h1>
            <p className="py-3">
             By : {author}
            </p>
            <div className="flex gap-8">
              <p className="flex gap-6">Tag :<span className="text-[#23BE0A]">{tags[0]}</span> <span className="text-[#23BE0A]">{tags[1]}</span></p>
              <div className="flex gap-3">
                <img src="https://i.ibb.co/FVCbzRc/Frame-1.png" alt="" />
                <p>Year of Publishing : {yearOfPublishing}</p>
              </div>
              
            </div>
            <div className="flex gap-8 py-3">
                <div className="flex gap-3">
                  <img src="https://i.ibb.co/M2McNYD/Frame-2.png" alt="" />
                  <p>Publisher : {publisher}</p>
                </div>
                <div className="flex gap-3">
                  <img src="https://i.ibb.co/w7t382V/Frame-3.png" alt="" />
                  <p>Pages : {totalPages}</p>
                </div>
              </div>
            <div className="flex gap-4">
              <button className="btn bg-[#bad5f7]">Category : {category}</button>
              <button className="btn bg-[#f3d2a1]">Rating : {rating}</button>
              <Link to='/bookdetails '>
              <button className="btn bg-[#23BE0A] text-white font-bold">View Details</button></Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ReadBookCard.propTypes = {
  readBook : PropTypes.object 
}
export default ReadBookCard;