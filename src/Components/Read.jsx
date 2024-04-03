import PropTypes from 'prop-types';
import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";
import { getStoredBook } from '../utils/localStorage';
import ReadBookCard from './ReadBookCard';


const Read = () => {
  // console.log(read);
  const bookstore = useLoaderData();
  // console.log(bookstore); // ok 
  const [showBooks, setShowBooks] = useState([]);

  useEffect(() => {
    const storedBookIds = getStoredBook();
    // console.log(storedBookIds);
    // const storedBookIds = saveBooks();
    if (bookstore ) {
      const bookAdd = bookstore.filter(book =>
        storedBookIds.includes(parseInt(book.id))
        
      );
      setShowBooks(bookAdd);
      // console.log(bookAdd);
    }

    
  }, []);

  // console.log(showBooks);
  return (
    <div>
      {
        showBooks.map(readBook => <ReadBookCard key={readBook.id} readBook={readBook}></ReadBookCard>)
      }
     
    </div>
  );
};
Read.propTypes = {
  read: PropTypes.object.isrequired,
}
export default Read;












