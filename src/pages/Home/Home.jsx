
import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner";
import BookCard from "../../Components/BookCard";

const Home = () => {
  const books = useLoaderData();
  
  return (
    <div>
      <Banner></Banner>
      <h2 className="text-3xl font-bold flex justify-center my-8">Books</h2>

      <div className="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">

      {
        books.map(book => <BookCard key={book.id} book={book}></BookCard>)
        
      }
      </div>
    </div>
    
  );
};

export default Home;












