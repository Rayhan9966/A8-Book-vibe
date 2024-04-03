import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div>
      <div className="hero bg-white">
        <div className="hero-content flex-col bg-white md:flex-row-reverse">
          <img
            src="https://i.postimg.cc/MHWvbH5L/pic.jpg"
            className="max-w-sm rounded-lg shadow-2xl md:w-1/3 lg:h-[400px]"
          />
          <div className="md:w-2/3">
          <h1 className="text-6xl font-bold mr-8 tex">Books to freshen up <br />your bookshelf</h1>
            
            <Link to="/ListedBooks" className="btn bg-[#23BE0A] mt-10 text-white">View The List</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;