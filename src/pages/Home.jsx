// import { Link, useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
// import bookCard from "../components/bookCard";
// import List from '../components/List/List';

import HomeCard from "../components/HomeCard";
import { useEffect, useState } from "react";



const Home = () => {
	const [cards,setCard]= useState([]);
    useEffect(()=>{
fetch('book.json')
.then(res=> res.json())
.then(data=> setCard(data))

    },[])

    // const home=useLoaderData()
    // console.log(home);
    return (
        <div className="" >
            <div className="hero min-h-screen bg-white-200 rounded ">
                <div className="hero-content flex-col lg:flex-row-reverse gap-11 ">
                    <div className=" bg-gray-200 bor"> <img src="https://i.postimg.cc/MHWvbH5L/pic.jpg" className=" max-w-sm rounded-lg" /></div>
                    <div>
                        <h1 className="text-6xl font-bold mr-8 tex">Books to freshen up <br />your bookshelf</h1><br />

                       
                        <Link to='/listedbooks'>
						<button  className="btn4 bg-green-500 font-bold "> View The List</button></Link>
                    </div>
                </div>
            </div>
            <div className='hero-content text-center font-bold ml-11 text-6xl'>
                <h1>Books</h1>
            </div>
			<div>

    
    
        <div><br />
		
           
            
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
             
{
    cards.map(card=><HomeCard key={card.bookId} card={card}></HomeCard>)
}
            </div>
        </div>
			</div>
           

            </div>
        


    );
};

export default Home;