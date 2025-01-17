// import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { useLoaderData } from "react-router-dom";
import { getStoredBook } from '../utils/localStorage';
import Rechart from "../Components/Rechart";



const PagesToRead = () => {
  const bookstore = useLoaderData();
   
  const [showBooks, setShowBooks] = useState([]);

  useEffect(() => {
    const storedBookIds = getStoredBook();
    
    if (bookstore ) {
      const bookAdd = bookstore.filter(book =>
        storedBookIds.includes(parseInt(book.id))
        
      );
      setShowBooks(bookAdd);
     
    }
    
    
  }, []);

// chart part

// console.log(showBooks);
  return (
    <div>
      <Rechart showbooks={showBooks}></Rechart>
    </div>
  );
};

export default PagesToRead;