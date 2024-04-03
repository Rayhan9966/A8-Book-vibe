import { useState } from "react";
import { Link, Outlet } from "react-router-dom";




const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="w-11/12 m-auto">
      <div className=" flex justify-center border-2 p-4 bg-gray-200  m-auto   rounded-2xl">
        <h2 className="text-3xl font-bold">Books</h2>
      </div>
      <div className="flex justify-center my-4">
        <button className="btn  bg-[#23BE0A]">Sort by</button>
      </div>

      {/* tabs section  */}

      <div>
        <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden  flex-nowrap dark:bg-gray-200 dark:text-gray-800 rounded-2xl px-4 ">
          <Link
            to=""
            onClick={()=>setTabIndex(0)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  dark:border-gray-600 ${tabIndex===0 ? 'border border-b-0' :'border-b'} dark:text-gray-600`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>Read Books</span>
          </Link>
          <Link
            to={`wishlist`}
            onClick={()=>setTabIndex(1)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  dark:border-gray-600 ${tabIndex===1 ? 'border border-b-0' :'border-b'} dark:text-gray-600`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            <span>Wishlish Books</span>
          </Link>
        </div>
      </div>
      
      <Outlet>
        
      </Outlet>
    </div>
  );
};

export default ListedBooks;
